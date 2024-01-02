import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiReact } from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">

                {/* Javascript */}
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">

                        {/* Javascript */}
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>기본적인 개념(변수, 함수, 객체, 배열) 및 비동기 프로그래밍</li>
                                <li>브라우저 렌더링 개념 </li>
                                <li>DOM조작 및 이벤트 핸들링</li>
                                <li>비동기 처리 및 Promise, async/await 사용</li>
                                {/* <li>
                                    실행컨텍스트 개념
                                </li> */}
                                {/* <li>렉시컬 스코프, 다이나믹 스코프 개념 차이</li> */}
                                <li>ES6+ 문법(화살표 함수, 클래스, 모듈)</li>
                                {/* <li>
                                    this와 바인딩의 개념
                                </li> */}
                                {/* <li>배열 메서드를 능숙하게 다룸!</li> */}
                            </ul>
                        </li>

                        {/* Typescript */}
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>인터페이스 사용 및 타입 정의</li>
                                <li>
                                tsconfig.json 파일을 통해 모듈 별칭을 설정
                                </li>
                                {/* <li>타입가드 사용</li> */}
                                {/* <li></li> */}
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* 프론트 앤드 */}
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트 앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>useEffect 생명주기 개념 이해</li>
                                <li>상태(state) 관리</li>
                                <li>Props를 이용한 데이터 전달</li>
                                <li>라우팅과 SPA</li>
                                {/* <li>Hooks를 이용한 함수형 컴포넌트 설계</li> */}
                                {/* <li>
                                    Reflow, Repaint
                                </li>
                                <li>
                                    webpack, babel
                                </li> */}
                                
                                {/* <li>CRA로 프로젝트 다수 생성 경험 보유</li> */}
                                {/* <li>상태</li> */}
                                {/* <li>브라우저 랜더링 과정을 설명 할 수 있음!</li> */}
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNextdotjs />
                                <span className="md:w-[120px]">NextJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                {/* <li>서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)</li> */}
                                <li>Client Component, Server Component 개념</li>
                                <li>동적라우팅 사용</li>
                                {/* <li></li> */}
                                {/* <li>interface </li> */}
                                {/* <li>any 적절한 사용</li> */}
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* 백앤드 */}
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiExpress />
                                <span className="md:w-[120px]">Express</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    Sequelize를 통한 ORM 기반 데이터베이스 연동(MySQL, PostgreSQL)
                                </li>
                                {/* <li>세션 및 쿠키 관리</li> */}
                                {/* <li>RestFul API 스럽게 할라고 노력함!</li> */}
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
