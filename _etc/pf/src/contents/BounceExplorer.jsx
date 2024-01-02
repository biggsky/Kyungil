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
import { be_stack, be_erd, be_ucd, be_video, be_mainpc, be_maintablet, be_mainmobile, be_nftpc, be_nfttablet, be_nftmobile, } from '../img';

export default function BounceExplorer() {
  return (
    <>
      <div>
        <div className='lg:w-[800px] h-[100px] m-auto'>
          <h2 className='font-bold'>일시</h2>
          <p>2023년 10월 24일 ~ 2023년 12월 05일</p>
          <br /><br />

          <h2 className='font-bold'>목적</h2>
          <p>
            1) 블록체인 네트워크의 트랜잭션과 블록을 사용자가 쉽게 볼 수 있게 해주는 서비스입니다.
            <br />

            2) 타겟 사이트인 Etherscan과 최대한 유사한 기능 구현
          </p>
          <br /><br />

          <h2 className='font-bold'>시나리오</h2>
          <h2>1) 기술스택</h2>
          <div>
            <img src={be_stack} className='h-full' alt="" />
          </div>
          <br /><br />

          <h2>2) ERD</h2>
          <div>
            <img src={be_erd} className='h-full' alt="" />
          </div>
          <br /><br />

          <h2>3) Use Case Diagram</h2>
          <div>
            <img src={be_ucd} className='h-full' alt="" />
          </div>
          <br /><br />

          <h2 className='font-bold'>개발과정</h2>
          <div>
            <p>팀회의를 통해 프론트엔드를 맡기로 결정했고, 작업에 앞서 nextjs를 사용하기로 했기때문에 nextjs를 학습</p>
            <p>figma 통해 대략적인 디자인 시각화 및 UI/UX 설계</p>
            <p>tailwind를 사용해서 메인페이지 컴포넌트 작업 시작</p>
            <p>코드의 재사용성과 전체적인 이해에 집중한 코드 작업</p>
            <p>디렉토리 구조 (네이밍, 카멜, 파스칼등) 통일</p>
            <p>백엔드팀에게 받을 데이터 요청</p>
            <p>메인페이지 반응형 구현</p>
            <p>NFT 정보 페이지 작업</p>
            <p>fontawesome 을 이용한 아이콘 추가하기</p>
            <p>NFT 정보 페이지 반응형 작업</p>
            <p>팀원들이 만든 table들 동일 정렬 작업</p>
            <p>기타 페이지들 정렬, 수정 작업</p>
            <p>중복되는 코드들, 필요없는 코드들 제거</p>
            <p>copy Address 및 Copied 기능 구현</p>
            <p>백엔드팀이 뽑아낸 데이터 가져오기</p>
            <p>다크모드 미적용 부분 수정</p>
            <p>Error, 예외처리 작업</p>
            <p>발표 PPT 제작 및 인쇄</p>
          </div>
          <br /><br />
          
          <h2 className='font-bold'>학습한점</h2>
          <div>
            <p>nextjs 학습 진행</p>
            <p>tailwind 활용</p>
            <p>컴포넌트와 컨텐츠의 개념의 차이</p>
            <p>라우팅 개념</p>
            <p>서버 컴포넌트, 클라이언트 컴포넌트 </p>
            <p>line-height</p>
            <p>인터페이스 타입정의</p>
            <p></p>
          </div>
          <br /><br />

          <h2 className='font-bold'>개선점</h2>
          <div>
            타입가드에 대한 공부를 통한 앞으로 유연한 코드 작성 가능.
          </div>
          <br /><br />

          <h2 className='font-bold'>결과</h2>
          1) 사이트 녹화
          <video controls muted>
            <source src={be_video} type='video/mp4' />
          </video>
          <br /><br />

          <h2>2)반응형 GIF</h2>
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

              {/* <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide> */}
            </Swiper>

          </div>
          <br /><br />

          <h2 className='font-bold'>후기</h2>
          <p>이번 기업 협약 프로젝트를 함에 있어, 본 학원에서 배운 것 말고도 nextjs, tailwind 등 사용해 보지 못한 프레임 워크들을 사용해야 했습니다. 익숙하진 않았지만 독학을 하며, 이 프레임 워크들에 대한 세부적인 지식을 공식 문서를 통해 습득함으로써, 프로그램을 더 유연하고 확장 가능하게 만들었습니다.</p>
          <br />
        </div>
      </div>
      
    </>
  );
}
