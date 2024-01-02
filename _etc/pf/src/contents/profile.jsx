import { Hero } from '../components/common'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail, TfiMicrophoneAlt } from 'react-icons/tfi'
import { FaBlogger, FaGlobe, FaPhone } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'
import {profileImg} from "../img/index"
import Viewer from './Viewer'

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={animatedElementRef}
            className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="w-[280px] md:w-[28%] ">
                {/* <myImage /> */}
                <img
                    src={profileImg}
                    aria-hidden
                    alt="profile image"
                    className="w-[100vw] m-auto rounded-xl border-2 border-['#F7EFE5']"
                />
            </div>
            <div className="w-[100%] box-border md:w-[70%] md:p-[10px] ">
                <Hero>
                    조성현 <span className="text-[16px] text-slate-400 font-normal"></span>
                </Hero>
                <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
                    프론트엔드 개발자
                </p>
                <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                    <span className="flex items-center gap-[5px] text-slate-600">
                        <FaPhone />
                        010 5608 9101
                    </span>

                    <span className="flex items-center gap-[5px] text-slate-600">
                        <TfiEmail />
                        sunghyun0624@naver.com
                    </span>
                    <a
                        href="https://github.com/biggsky?tab=repositories"
                        className="flex items-center gap-[5px] text-slate-600 w-[60px]" target='_blank'
                    >
                        <IoLogoGithub />
                        Github
                    </a>
                    <a href="https://biggs.tistory.com/" className="flex items-center gap-[5px] text-slate-600 w-[50px]" target='_blank'>
                        <FaBlogger />
                        Blog
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Profile
