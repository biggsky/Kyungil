import React from "react";

const Swiper_in = ({el, index}) => {
  return (
    <>
      <div className='swiper_in'>
        <div id='span_div'>
          <span>{index}</span>
        </div>
        <div className='swiper_in_top'>
          <img src={el.img} alt='' />
        </div>
        <div className='swiper_in_bottom'>
          <h6>{el.title}</h6>
          <div className='bottom_left'>
            <span className='span1'>거래량</span>
            <br />
            <span className='span2'>{el.volume}</span>
          </div>
          <div className='bottom_right'>
            <span className='span1'>판매수량</span>
            <br />
            <span className='span2'>{el.nos}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiper_in;
