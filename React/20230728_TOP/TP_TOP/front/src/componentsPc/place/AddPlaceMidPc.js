import React, { useEffect, useState } from "react";
import {
  AddPlaceMidBox,
  Title,
  PlaceBox,
  ImgBox,
  PlaceName,
  SelectBtnBox,
  SelectBtn,
  nearPlace,
  NearPlaceBox,
  NearAttractionConatiner,
} from "./PlacePc.styled";
import { saveNearAttraction } from "../../redux/features/dataForGpt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddPlaceMid = ({ page, day, choiceIndex, setChoice, nearPlace }) => {
  const nav = useNavigate();
  const attractionsWithImg = useSelector((state) => {
    return state.attractionsWithImg;
  });
  // attraction에 관련된 모든 정보가 있는 attractionsWithImg dispatch
  const attractionsWithImgDispatch = useDispatch();

  // 눌러진 관광지, 이 관광지는 gpt가 뽑아온 메인 관광지 이며 ** 주변관광지가 어느 메인 관광지에 속하는 지 알기 위해 만듦**
  const [parentAttraction, setParentAttraction] = useState("");

  const noImg = "/imgs/icons/no-image.png";
  useEffect(() => {}, [attractionsWithImg]);

  const isChoice = (value) => {
    let temp = [];
    if (choiceIndex) {
      temp = choiceIndex.map((a) => {
        return a.name;
      });
    }

    if (temp.indexOf(value.name) !== -1) {
      let arr = choiceIndex.filter((va) => va.name !== value.name);
      setChoice(arr);
    } else {
      if (choiceIndex == "") {
        setChoice([value]);
      } else {
        setChoice([...choiceIndex, value]);
      }
    }
  };

  useEffect(() => {
    if (nearPlace !== undefined && nearPlace !== "") {
      if (nearPlace.length !== 0) {
        const tempNear = nearPlace.map((place) => {
          return {
            parentName: parentAttraction,
            name: place.name,
            detail: "디테일",
            attractionLocation: {
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
            },
          };
        });
        attractionsWithImgDispatch(saveNearAttraction(tempNear));
      } else {
        alert("로드 중 오류가 발생하였습니다.");
        nav("/");
      }
    }
  }, [nearPlace]);

  // let nearAttractions = [
  //   {
  //     name: "111",
  //     detail: "111",
  //     attractionLocation: {
  //       latitude: "35.6329",
  //       longitude: "139.8804",
  //     },
  //   },
  //   { name: "222" },
  //   { name: "333" },
  // ];

  return (
    <>
      <AddPlaceMidBox>
        <Title>day{day} 추천 장소</Title>
        {choiceIndex !== "" &&
          attractionsWithImg.map((value, index) => {
            if (
              choiceIndex.some((ele) => {
                return ele.name === value.name;
              })
            ) {
              return (
                <>
                  <h3>AI추천장소</h3>
                  <PlaceBox key={index}>
                    <ImgBox>
                      <img
                        src={
                          attractionsWithImg[index].img.hits.length !== 0
                            ? attractionsWithImg[index].img.hits?.[0]
                                .largeImageURL
                            : noImg
                        }
                        alt="관광지"
                      ></img>
                    </ImgBox>
                    <PlaceName>{value.name}</PlaceName>
                    <SelectBtnBox>
                      <SelectBtn
                        onClick={() => {
                          isChoice(value);
                        }}
                        back={"#277bc0"}
                        font={"white"}
                      >
                        선택
                      </SelectBtn>
                    </SelectBtnBox>
                  </PlaceBox>
                  <Title size={"14px"}>주변 관광지</Title>
                  <NearAttractionConatiner>
                    {attractionsWithImg[index]?.nearAttraction?.map(
                      (value2, index2) => {
                        let temp = [];
                        if (choiceIndex) {
                          temp = choiceIndex.map((a) => {
                            return a.name;
                          });
                        }
                        if (temp.indexOf(value2.name) == -1) {
                          return (
                            <>
                              <NearPlaceBox key={index2}>
                                <ImgBox>
                                  <img src={noImg} alt="주변관광지" />
                                </ImgBox>
                                <PlaceName>{value2.name}</PlaceName>
                                <SelectBtnBox>
                                  <SelectBtn
                                    onClick={() => {
                                      isChoice(value2);
                                    }}
                                    back={"#edebeb"}
                                    font={"#9b9a9a"}
                                  >
                                    선택
                                  </SelectBtn>
                                </SelectBtnBox>
                              </NearPlaceBox>
                            </>
                          );
                        } else {
                          return (
                            <NearPlaceBox key={index2}>
                              <ImgBox>
                                <img src={noImg} alt="주변관광지" />
                              </ImgBox>
                              <PlaceName>{value2.name}</PlaceName>
                              <SelectBtnBox>
                                <SelectBtn
                                  onClick={() => {
                                    isChoice(value2);
                                  }}
                                  back={"#277bc0"}
                                  font={"white"}
                                >
                                  선택
                                </SelectBtn>
                              </SelectBtnBox>
                            </NearPlaceBox>
                          );
                        }
                      }
                    )}
                  </NearAttractionConatiner>
                </>
              );
            } else {
              return (
                <>
                  <h3 style={{ marginTop: "20px", fontWeight: "bold" }}>
                    AI추천장소
                  </h3>
                  <PlaceBox key={index}>
                    <ImgBox>
                      <img
                        src={
                          attractionsWithImg[index].img.hits.length !== 0
                            ? attractionsWithImg[index].img.hits?.[0]
                                .largeImageURL
                            : noImg
                        }
                        alt="관광지"
                      ></img>
                    </ImgBox>
                    <PlaceName>{value.name}</PlaceName>
                    <SelectBtnBox>
                      <SelectBtn
                        onClick={() => {
                          isChoice(value);
                          setParentAttraction(value.name);
                        }}
                        back={"#edebeb"}
                        font={"#9b9a9a"}
                      >
                        선택
                      </SelectBtn>
                    </SelectBtnBox>
                  </PlaceBox>
                </>
              );
            }
          })}
      </AddPlaceMidBox>
    </>
  );
};

export default AddPlaceMid;
