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

// 삭제예정
import { be_stack, be_erd, be_ucd, be_video, be_mainpc, be_maintablet, be_mainmobile, be_nftpc, be_nfttablet, be_nftmobile, } from '../img';

import {linkee_stack, linkee_erd, linkee_gif, linkee_video } from '../img';

export default function Linkee() {
  return (
    <>
      <div>
        <div className='lg:w-[800px] h-[100px] m-auto'>
          <h2 className='font-bold'>일시</h2>
          <p>2023년 06월 02일 ~ 2023년 06월 26일</p>
          <br /><br />

          <h2 className='font-bold'>목적</h2>
          <p>
            1) 소셜 미디어 모방
            <br />

            2) 텍스트 혹은 사진, 동영상 공유
            <br />

            3) 팔로우 & 팔로잉
            <br />
          </p>
          <br /><br />

          <h2 className='font-bold'>시나리오</h2>
          <h2>1) 기술스택</h2>
          <div>
            <img src={linkee_stack} className='h-full' alt="" />
          </div>
          <br /><br />

          <h2>2) ERD</h2>
          <div>
            <img src={linkee_erd} className='h-full' alt="" />
          </div>
          <br /><br />

          {/* <h2>3) Use Case Diagram</h2>
          <div>
            <img src={be_ucd} className='h-full' alt="" />
          </div>
          <br /><br /> */}

          <h2 className='font-bold'>개발과정</h2>
          <div>
            <p>메인페이지 html,css로 작업</p>
            <p>회원가입, 로그인 페이지 만들기 + 중복 안되게 하기</p>
            <p>관리자 페이지 만들기(회원 등급 승인, 변경)</p>
            <p>관리자 페이지 방문자수 & 차트 연결</p>
            <p>상세페이지 작업 시작(이미지, 닉네임, 내용, 세션연결등)</p>
            <p>좋아요 기능 만들기</p>
            <p>댓글, 대댓글 만들기</p>
            <p>댓글 좋아요, 대댓글 좋아요 만들기</p>
            <p>상세페이지에서 이벤트 발생시마다 sql에 noti 추가해주기</p>
            <p>소켓을 이용해 알림 발생시 알림이 뜨게 하기</p>
            <p>회원가입 정규식 작업하기</p>
            <p>메인페이지 내가 누른 게시글 좋아요 알림 가게하기</p>
            <p>관리자 페이지 차트 총게시글수 업데이트</p>
          </div>
          <br /><br />
          
          <h2 className='font-bold'>학습한점</h2>
          <div>
            <p>Nodejs에서 파일 시스템에 접근하기 위한 기능을 제공하는 내장 모듈인 fs 모듈</p>
            <p>HTML 문서의 구조를 나타내는 객체모델인 DOM(Document Object Model)</p>
          </div>
          <br /><br />

          {/* <h2 className='font-bold'>개선점</h2>
          <div>
            타입가드에 대한 공부를 통한 앞으로 유연한 코드 작성 가능.
          </div>
          <br /><br /> */}

          <h2 className='font-bold'>결과</h2>
          1) 사이트 녹화
          <video controls muted>
            <source src={linkee_video} type='video/mp4' />
          </video>
          <br /><br />

          {/* <h2>2)반응형 GIF</h2>
          <div className='w-full h-[536px]'>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
              <SwiperSlide>
                <div className='h-full'>
                  <img src={be_mainpc} className=''  alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-full'>
                  <img src={be_maintablet} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-full'>
                  <img src={be_mainmobile} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-full'>
                  <img src={be_nftpc} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-full'>
                  <img src={be_nfttablet} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='h-full'>
                  <img src={be_nftmobile} alt="" />
                </div>
              </SwiperSlide>

            </Swiper>

          </div>
          <br /><br /> */}

          <h2 className='font-bold'>후기</h2>
          <p>이전에는 localstorage를 사용해서 그동안 데이터를 화면에 보여주었는데, mysql DB를 사용해서 프로젝트를 진행했습니다. 백엔드와 프론트엔드 두 부분 모두 일정 부분을 맡아 진행했고, 팀원들에게도 틈틈이 도움을 받기도 하고 도움을 주기도 했던 프로젝트였습니다. 특히 대댓글, 좋아요 부분을 만드는데 어려움이 있었지만, 계속하다 보니 구현이 되어서 할 수 있다는 자신감 또한 가질 수 있었던 프로젝트였습니다. 제가 맡은 부분을 정말 잘 수행했던 프로젝트였습니다.</p>
          <br />
        </div>
      </div>
      
    </>
  );
}
