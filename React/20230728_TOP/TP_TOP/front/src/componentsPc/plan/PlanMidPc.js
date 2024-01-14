import React, { useCallback, useEffect, useRef, useState } from "react";
import { PlanMidBox } from "./PlanPc.styled";
import { useSelector, useDispatch } from "react-redux";

const PlanMidPc = (props) => {
  const {
    choiceIndex,
    isScrolled,
    gptAnswerSaved,
    nearPlace,
    setnearPlace,
    page,
    selectedPlanIndex,
    userChoiceSaved
  } = props;
  let lat, lng;
  if (choiceIndex) {
    lat = choiceIndex.at(-1)?.attractionLocation.latitude;
    lng = choiceIndex.at(-1)?.attractionLocation.longitude;
  }
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });
  let map;
  const initMap = useCallback(
    (props) => {
      // 플랜 페이지, 일정편집 페이지 두 곳에서 구글맵을 보여줘야 하므로 나누었다. add는 일정편집, plan은 플랜 페이지이며 그곳에서 실행될 init함수를 정의
      if (page === "add") {
        let myLatLng;
        // 선택이 되지 않았을때 실행
        if (props?.choiceIndex?.length == 0) {
          async function geocode1() {
            return new Promise((resolve, reject) => {
              let geocoder = new window.google.maps.Geocoder();
              geocoder.geocode(
                { address: gptAnswerSaved.location },
                function (results, status) {
                  if (status === "OK") {
                    let location = results[0].geometry.location;
                    let geocode_latitude = location.lat();
                    let geocode_longitude = location.lng();
                    resolve({ lat: geocode_latitude, lng: geocode_longitude });
                  } else {
                    console.error("지오코딩에 실패했습니다. 상태:", status);
                  }
                }
              );
            });
          }
          async function geocode2() {
            try {
              let { lat, lng } = await geocode1();
              myLatLng = {
                lat: lat,
                lng: lng,
              };
              map = new window.google.maps.Map(
                document.getElementById("gmp-map"),
                {
                  zoom: 6,
                  center: myLatLng,
                  fullscreenControl: false,
                  zoomControl: true,
                  streetViewControl: false,
                }
              );
              // new window.google.maps.Marker({
              //   position: myLatLng,
              //   map,
              //   title: "My location",
              // });
            } catch (error) {
              console.error(error);
            }
          }
          geocode2();
        } else {
          myLatLng = {
            lat: Number(lat),
            lng: Number(lng),
          };
          map = new window.google.maps.Map(document.getElementById("gmp-map"), {
            zoom: 13,
            center: myLatLng,
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false,
          });

          const request = {
            location: myLatLng,
            radius: "500",
            types: ["tourist_attraction"],
          };

          const service = new window.google.maps.places.PlacesService(map);

          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              // 평점 이상
              const filterResults = results.filter(
                (place) => place.rating >= 4.0
              );
              let send_latlng = [];
              let send_lat, send_lng;
              for (const place of filterResults.slice(0, 3)) {
                // send_lat = place.geometry.location.lat();
                // send_lng = place.geometry.location.lng();
                send_latlng.push(place);
                const marker = new window.google.maps.Marker({
                  position: place.geometry.location,
                  map: map,
                  title: place.name,
                });
              }
              setnearPlace(send_latlng);
            }
          });
        }
      } else {
        if (selectedUserPlan.length !== 0) {
          // 해당 날짜에 해당하는 인덱스
          const index = selectedUserPlan.findIndex(
            (ele) => Number(ele.day) === Number(selectedPlanIndex)
          );
          const { plan } = selectedUserPlan[index];
          let lat = [];
          let lng = [];
          for (let i = 0; i < plan.length; i++) {
            lat.push(Number(plan[i].attractionLocation.latitude));
            lng.push(Number(plan[i].attractionLocation.longitude));
          }

          // --------------------------------------------------------------
          // let lat_lng = [[40.7614, -73.9776], [40.7851, -73.9683]];
          map = new window.google.maps.Map(document.getElementById("gmp-map"), {
            zoom: 4,
            // center 안에 있는 위도와 경도는 지도가 초기화될 때 보여지는 초기 중앙 위치를 설정
            // center: { lat: 36.5, lng: 127.75 }, 한국
            // center: { lat: 37.0902, lng: -95.7129 }, //미국
          });
          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer({
            draggable: true,
            map,
            panel: document.getElementById("panel"),
          });

          directionsRenderer.addListener("directions_changed", () => {
            const directions = directionsRenderer.getDirections();

            if (directions) {
              computeTotalDistance(directions);
            }
          });

          displayRoute(
            { lat: lat[0], lng: lng[0] }, // 시작
            { lat: lat.at(-1), lng: lng.at(-1) }, // 종료
            directionsService,
            directionsRenderer
          );

          function displayRoute(origin, destination, service, display) {
            const getWayPoints = () => {
              const temp = lat.map((value, index) => {
                if (index !== 0 && index !== lat.length - 1) {
                  return { location: { lat: lat[index], lng: lng[index] } };
                }
              });

              if (temp.length === 1 || temp.length === 2) {
                return [];
              } else {
                temp.shift();
                temp.pop();
                return temp;
              }
            };
            service
              .route({
                origin: origin,
                destination: destination,
                waypoints: getWayPoints(),
                travelMode: window.google.maps.TravelMode.WALKING,
                /*
                DRIVING: 자동차로 이동.
                WALKING: 보행자로 이동.
                BICYCLING: 자전거로 이동.
                TRANSIT: 대중교통을 이용하여 이동.
                */
                avoidTolls: true,
              })
              .then((result) => {
                display.setDirections(result);
              })
              .catch((e) => {
                alert("Could not display directions due to: " + e);
              });
          }

          function computeTotalDistance(result) {
            let total = 0;
            const myroute = result.routes[0];

            if (!myroute) {
              return;
            }

            for (let i = 0; i < myroute.legs.length; i++) {
              total += myroute.legs[i].distance.value;
            }

            total = total / 1000;
            document.getElementById("total").innerHTML = total + " km";
          }

          // const marker = new window.google.maps.Marker({
          //   position: { lat: 40.7614, lng: -73.9776 },
          //   map: yourMap,
          //   icon: {
          //     path: window.google.maps.SymbolPath.CIRCLE, // 마커 모양
          //     fillColor: 'yellow', // 마커 색상
          //     fillOpacity: 1, // 색상 불투명도
          //     strokeWeight: 0, // 외곽선 굵기
          //     scale: 100 // 크기
          //   }
          // });

          // --------------------------------------------------------------

          // map = new window.google.maps.Map(document.getElementById("gmp-map"), {
          //   center: {
          //     lat: Number(plan[0].attractionLocation.latitude),
          //     lng: Number(plan[0].attractionLocation.longitude),
          //   },
          //   zoom: 15,
          // });

          // // 각 마커 생성 및 지도에 추가
          // plan.forEach((value) => {
          //   new window.google.maps.Marker({
          //     position: {
          //       lat: Number(value.attractionLocation.latitude),
          //       lng: Number(value.attractionLocation.longitude),
          //     },
          //     map: map,
          //     title: "Marker",
          //   });
          // });
        }
        
        // 마이 페이지에서 눌러서 넘어갔을 떄의 플랜을 보여줌
        else if (userChoiceSaved !== "" && userChoiceSaved !== undefined) {
          console.log(selectedPlanIndex, "유저 초이스 세이브 플랜 미드");
          // 해당 날짜에 해당하는 인덱스
          const index = userChoiceSaved.findIndex(
            (ele) => Number(ele[0].day) === Number(selectedPlanIndex)
          );
          const plan = userChoiceSaved[index];
          console.log(plan);
          let lat = [];
          let lng = [];
          for (let i = 0; i < plan.length; i++) {
            lat.push(Number(plan[i].lat));
            lng.push(Number(plan[i].lng));
          }

          // --------------------------------------------------------------
          // let lat_lng = [[40.7614, -73.9776], [40.7851, -73.9683]];
          map = new window.google.maps.Map(document.getElementById("gmp-map"), {
            zoom: 4,
            // center 안에 있는 위도와 경도는 지도가 초기화될 때 보여지는 초기 중앙 위치를 설정
            // center: { lat: 36.5, lng: 127.75 }, 한국
            // center: { lat: 37.0902, lng: -95.7129 }, //미국
          });
          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer({
            draggable: true,
            map,
            panel: document.getElementById("panel"),
          });

          directionsRenderer.addListener("directions_changed", () => {
            const directions = directionsRenderer.getDirections();

            if (directions) {
              computeTotalDistance(directions);
            }
          });

          displayRoute(
            { lat: lat[0], lng: lng[0] }, // 시작
            { lat: lat.at(-1), lng: lng.at(-1) }, // 종료
            directionsService,
            directionsRenderer
          );

          function displayRoute(origin, destination, service, display) {
            const getWayPoints = () => {
              const temp = lat.map((value, index) => {
                if (index !== 0 && index !== lat.length - 1) {
                  return { location: { lat: lat[index], lng: lng[index] } };
                }
              });

              if (temp.length === 1 || temp.length === 2) {
                return [];
              } else {
                temp.shift();
                temp.pop();
                return temp;
              }
            };
            service
              .route({
                origin: origin,
                destination: destination,
                waypoints: getWayPoints(),
                travelMode: window.google.maps.TravelMode.WALKING,
                /*
      DRIVING: 자동차로 이동.
      WALKING: 보행자로 이동.
      BICYCLING: 자전거로 이동.
      TRANSIT: 대중교통을 이용하여 이동.
      */
                avoidTolls: true,
              })
              .then((result) => {
                display.setDirections(result);
              })
              .catch((e) => {
                alert("Could not display directions due to: " + e);
              });
          }

          function computeTotalDistance(result) {
            let total = 0;
            const myroute = result.routes[0];

            if (!myroute) {
              return;
            }

            for (let i = 0; i < myroute.legs.length; i++) {
              total += myroute.legs[i].distance.value;
            }

            total = total / 1000;
            document.getElementById("total").innerHTML = total + " km";
          }
        }
      }
    },
    [gptAnswerSaved.location, choiceIndex, selectedPlanIndex]
  );

  useEffect(() => {
    console.log("** 구글 맵 실행됨! **");

    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEMAP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.onload = () => {
      initMap(props);
    };
    document.head.appendChild(googleMapScript);
  }, [gptAnswerSaved.location, choiceIndex, selectedPlanIndex]);

  return (
    <>
      <PlanMidBox>
        {/* 1번째 */}
        {/* <div id="gmp-map"></div> */}

        {/* 2번째 */}
        {/* <div id='test1' ref={mapRef}></div> */}

        {/* 3번째 */}
        <div id="container">
          <div id="gmp-map"></div>
          <div id="sidebar">
            <p>
              Total Distance: <span id="total"></span>
            </p>
            <div id="panel"></div>
          </div>
        </div>
      </PlanMidBox>
      <br />
    </>
  );
};

export default PlanMidPc;
