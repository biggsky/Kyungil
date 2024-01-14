import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import {top_stack, top_erd, top_video} from '../img';

export default function TravelOpener() {
  return (
    <>
      <div>
        <div className='lg:w-[800px] h-[100px] m-auto'>
          <h2 className='font-bold'>일시</h2>
          <p>2023년 07월 28일 ~ 2023년 08월 28일</p>
          <br /><br />

          <h2 className='font-bold'>목적</h2>
          <p>
            1) 트리플 여행앱 아이디어에 AI를 접목하여 개개인의 취향에 맞는 여행 플랜을 제공하는 프로젝트를 구상
          </p>
          <p>2) AI 추천만으로는 여행지 수에 한계가 있기 때문에 Google Map API를 통해 주변 관광지 추천까지 더해 사용자 선택의 폭을 넓히기</p>
          <br /><br />

          <h2 className='font-bold'>시나리오</h2>
          <h2>1) 기술스택</h2>
          <div>
            <img src={top_stack} className='h-full' alt="" />
          </div>
          <br /><br />

          <h2>2) ERD</h2>
          <div>
            <img src={top_erd} className='h-full' alt="" />
          </div>
          <br /><br />

          {/* <h2>3) Use Case Diagram</h2>
          <div>
            <img src={be_ucd} className='h-full' alt="" />
          </div> */}
          {/* <br /><br /> */}

          <h2 className='font-bold'>개발과정</h2>
          <div>
            <p>Google Map API키 발급</p>
            <p>플랜 PC 페이지 CSS 작업</p>
            <p>플랜 페이지에 지도 가져오기</p>
            <p>위도와 경도를 받고 해당하는 위치 주변의 관광지에 마커 찍어주기</p>
            <p>시작, 경유, 도착지점의 경로와 시간 보여주기</p>
            <p>GPT API로부터 받아온 위도, 경도값을 통해 해당하는 장소들 구글맵 API를 이용해 마커 찍어주고 인근 지역도 마커 찍어주기</p>
            <p>팀원이 만든 프론트엔드에 데이터 연결</p>
            <p>추천관광지 클릭 시 해당하는 지도 뜨게 하기</p>
            <p>aws 배포 작업</p>
            <p>PC 게시판 메인 화면 CSS 작업</p>
            <p>발표 PPT 제작</p>
            <p>프로젝트 배포 완료</p>
          </div>
          <br /><br />
          
          <h2 className='font-bold'>학습한점</h2>
          <div>
            <p>서버사이드렌더링 개념</p>
            <p>Git fork 사용</p>
            <p>use strict 사용</p>
            <p>this의 개념</p>
          </div>
          <br /><br />

          <h2 className='font-bold'>개선점</h2>
          <div>
            리액트의 미숙함 때문에 코드의 흐름을 파악하는 데 시간이 걸렸습니다. 리액트를 학습함으로써 앞으로 코드의 흐름을 파악하는데 시간이 줄어들고, 개선될 것입니다.
          </div>
          <br /><br />

          <h2 className='font-bold'>결과</h2>
          1) 사이트 녹화
          <video controls muted>
            <source src={top_video} type='video/mp4' />
          </video>
          <br /><br />

          <h2 className='font-bold'>후기</h2>
          <p>그동안 팀 프로젝트를 함에 있어 처음으로 API를 맡아 직접 관련 정보를 가져와서 제작하는 첫 프로젝트였습니다. 이 경험을 통해 앞으로도 다양한 API를 사용, 개발에 응용할 수 있을 것 같아 좋은 경험이었습니다.</p>
          <br />
        </div>
      </div>
      
    </>
  );
}
