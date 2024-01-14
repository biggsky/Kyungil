import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiCss3, DiHtml5 } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiStyledcomponents, SiAmazonaws, SiGooglemaps } from 'react-icons/si'
// import { DiTrello } from 'react-icons/di'
import { DiReact, DiPostgresql, DiMysql } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import { bounceExplorer, top, linkee_gif } from '../img'
import BounceExplorer from "./BounceExplorer.jsx";
import TravelOpener from './TravelOpener.jsx';
import Linkee from './Linkee.jsx'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()

    // console.log(isShowingModal);
    // console.log(toggleModal);

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* BounceExplorer 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={bounceExplorer}
                            className="w-full rounded-xl"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 10. 24 ~ 23. 12. 05</li>
                            {/* <li>FRONT-END</li> */}
                            <li>
                                깃허브 저장소<a target='_blank' href="https://github.com/biggsky/BounceExplorer_FrontEnd"><FaLink className='inline ml-2' /></a> 
                            </li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            BounceExplorer (협약프로젝트){' '}
                            {/* <a target='_blank' href="https://www.bouncexplorer.site/">
                                <FaExternalLinkAlt />
                            </a> */}
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            바운스코드라는 회사와 협약 프로젝트를 진행<br />
                            바운스 네트워크 내에서 유통되는 토큰, 블록 등에 저장되어 있는 데이터를 확인, 조회할 수 있는 사이트를 제작 <br />
                            
                            {/* 실제 Etherscan 사이트를 모방함으로써 프론트를 담당했습니다. 크게 메인 페이지 개발을 담당하면서 컴포넌트 구조에 대한 설계 및 데이터 구분에 집중을 했고, 공통 규격을 설정했습니다. 규격을 모든 프론트 팀원들에게 전파함으로써 작업 효율성을 높였습니다. */}
                        </p>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiNextdotjs />
                            <SiTailwindcss />
                            <DiReact />
                            <SiTypescript />
                            <DiJavascript />
                            <DiPostgresql />
                            {/* <DiNodejs /> */}
                            {/* <DiGithubBadge /> */}
                            {/* <DiTrello /> */}
                        </div>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <p>프론트엔드 담당(메인 페이지, nft detail 페이지)</p>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>바운스 네트워크에서 채굴된 블록들의 정보, transactions들의 정보를 보여주는 메인 페이지를 담당</li>
                            <li>특정 nft의 정보들(Nft Image, Details, Item Activity)을 보여주는 페이지를 담당</li>
                            <li>tailwindcss를 이용한 반응형 페이지 적용</li>
                            <li>fontawesome 아이콘 적용</li>
                            <li>기능 구현(copy 버튼 만들기, 페이지 네이션) </li>
                            <li>미비된 점 수정(정렬 및 에러)</li>

                            {/* <li>
                                내가 어떤걸 주요하게 했냐 이말이야~ 하나 쯤은 길게 쓸수 있을 거 같지
                                않니이이이이이이이이이이이이잉이이이이 ?
                            </li> */}
                        </ul>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">후기</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>이번 기업 협약 프로젝트를 함에 있어, 본 학원에서 배운 것 말고도 nextjs, tailwind 등 사용해 보지 못한 프레임 워크들을 사용해야 했습니다. 익숙하진 않았지만 독학을 하며, 이 프레임 워크들에 대한 세부적인 지식을 공식 문서를 통해 습득함으로써, 프로그램을 더 유연하고 확장 가능하게 만들었습니다.</li>
                        </ul>

                    </div>
                </li>

                {/* Top 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={top}
                            className="w-full rounded-xl"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 07. 28 ~ 23. 08. 28</li>
                            {/* <li>FRONT-END</li> */}
                            <li>깃허브 저장소<a target='_blank' href="https://github.com/biggsky/TOP"><FaLink className='inline ml-2' /></a> </li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Travel Opener (리액트 프로젝트){' '}
                            <a target='_blank' href="https://www.hyunss.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                        GPT API와 구글맵 API을 이용한 관광명소의 정보, 지도를 알려주는 사이트를 제작
                        </p>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiGooglemaps />
                            <DiReact />
                            <DiNodejs />
                            <DiJavascript />
                            <SiStyledcomponents />
                            <SiAmazonaws />
                            {/* <DiGithubBadge /> */}
                        </div>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <p>백엔드 담당 (Google Maps API)</p>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                GPT API가 주는 관광지 위도, 경도 값을 구글맵에 연결시켜 마커를 찍어서 구글맵 지도로 보여 주는 부분을 담당
                            </li>
                            <li>Google Maps API를 이용해 여행의 시작, 경유, 도착지점의 경로와 거리, 시간 보여주기</li>
                            <li>GPT API로부터 받아온 위도, 경도 값을 통해 인근 관광지 지역도 마커 찍어주기</li>
                            <li>aws EC2와 Route53을 이용해서 프로젝트 배포</li>
                        </ul>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">후기</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                그동안 팀 프로젝트를 함에 있어 처음으로 API를 맡아 직접 관련 정보를 가져와서 제작하는 첫 프로젝트였습니다. 이 경험을 통해 앞으로도 다양한 API를 사용, 개발에 응용할 수 있을 것 같아 좋은 경험이었습니다.
                            </li>
                        </ul>
                    </div>
                </li>

                {/* Linkee 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={linkee_gif}
                            className="w-full rounded-xl"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 06. 02 ~ 23. 06. 26</li>
                            <li>깃허브 저장소<a target='_blank' href="https://github.com/biggsky/LINKee-SNS"><FaLink className='inline ml-2' /></a></li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Linkee (노드 프로젝트) {' '}
                            <a target='_blank' href="https://linkee.kr">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            인스타그램을 모방해서 Linkee라는 사이트를 개발한 프로젝트
                        </p>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiMysql />
                            <DiCss3 />
                            <DiHtml5 />
                            {/* <DiGithubBadge /> */}
                        </div>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <p>프론트(상세 페이지)</p>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>댓글, 대댓글, 좋아요(게시글, 댓글, 대댓글) 기능 구현</li>
                            <li>DOM 조작 및 axios을 사용한 좋아요 기능 구현</li>
                            <li>고차 함수 forEach을 사용해서 백엔드 데이터들 화면에 보여주기</li>
                            <li>Promise 구문을 사용해 특정 함수가 비동기적으로 작업을 마칠 때까지 다음 코드로 넘어가지 않고 기다리게 구현.</li>
                            <li>소켓을 이용한 이벤트 발생 시 알림 기능 구현</li>
                            <br />
                        </ul>

                        <p>백엔드(어드민 페이지)</p>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>회원 신청 유저 승인, 거절하는 코드 구현</li>
                            <li>ApexCharts.js Open Source를 이용한 그래프 구현 (일별 유저 접속 수, 게시글 수)</li>
                        </ul>
                        <br />

                        <h3 className="py-[16px] text-[16px] font-bold">후기</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>이전에는 localstorage를 사용해서 그동안 데이터를 화면에 보여주었는데, 이번에는 관계형 데이터베이스 mysql을 사용했고, orm 모델로는 시퀄 라이즈를 사용했습니다. 시퀄 라이즈를 통해 쿼리문을 동작시켜서 데이터베이스에 CRUD를 구현했고, 관계형데이터베이스를 구축했습니다. 쿼리문을 효율적으로 사용하기 위해, 테이블 간에 관계를 맺어 최적화된 ERD를 구축했습니다. 백엔드와 프론트엔드 두 부분 모두 일정 부분을 맡아 진행했고, 팀원들에게도 틈틈이 도움을 받기도 하고 도움을 주기도 했던 프로젝트였습니다. 특히 대댓글, 좋아요 부분을 만드는데 어려움이 있었지만, 계속하다 보니 구현이 되어서 할 수 있다는 자신감 또한 가질 수 있었던 프로젝트였습니다. 제가 맡은 부분을 정말 잘 수행했던 프로젝트였습니다.</li>
                        </ul>

                    </div>
                </li>
            </ul>

            <Modal title="Bounce Explorer" show={isShowingModal} onCloseButtonClick={toggleModal}>
                <BounceExplorer />
            </Modal>

            <Modal title="Travel Opener" show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <TravelOpener />
            </Modal>

            <Modal title="Linkee" show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <Linkee />
            </Modal>
        </Wrapper>
    )
}

export default Projects
