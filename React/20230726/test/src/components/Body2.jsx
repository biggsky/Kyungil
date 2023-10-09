import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Swiperdiv} from "../Swiper.styled";
import { Pagination, Navigation } from "swiper/modules";
import {car} from "../img";
import Swiper_in from "./Swiper_in";

const Body2 = (name) => {
  // const data=[{img:'',},2,3,4,5,6,7]
  // console.log(car);
  const data= [
    [{
      img : car,
      title : "BoredApeYachtClub",
      volume : "2K ETH",
      nos : "77"
    },
    {
      img : car,
      title : "Azuki",
      volume : "814.4 ETH",
      nos : "123"
    },
    {
      img : car,
      title : "MutantApeYachtClub",
      volume : "793.1 ETH",
      nos : "153"
    },
    {
      img : car,
      title : "DeGods",
      volume : "630.1 ETH",
      nos : "108"
    }],

    [{
      img : car,
      title : "Banana",
      volume : "500.2 ETH",
      nos : "106"
    },
    {
      img : car,
      title : "Milk",
      volume : "814.4 ETH",
      nos : "123"
    },
    {
      img : car,
      title : "Shake",
      volume : "793.1 ETH",
      nos : "153"
    },
    {
      img : car,
      title : "Coffee",
      volume : "630.1 ETH",
      nos : "108"
    }],
  ];

  let count = 0;

  return (
    <>
    <Swiperdiv>
      <p id="title">{name.name}</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'>


        {/* <SwiperSlide> */}
          {/* <div className="swiperelative">
            {data.map((el, index)=>{
              return <Swiper_in key={index} el={el} index={index} />
            })}
          </div> */}

        {data.map((subArray, index)=>{
            return (
              <SwiperSlide key={index}>
                <div className="swiperelative">
                  {subArray.map((el,index2)=>{
                    count++;
                    return (
                      <Swiper_in key={index2} el= {el} index={count} />
                    );
                  })}
                </div>
              </SwiperSlide>
            );
        })}

        {/* <SwiperSlide>
          <div className="swiperelative">
            <Swiper_in />
            <Swiper_in />
            <Swiper_in />
            <Swiper_in />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide> */}


      </Swiper>
    </Swiperdiv>
    </>
  );
};

export default Body2;
