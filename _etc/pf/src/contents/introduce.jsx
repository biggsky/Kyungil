import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
                <RiDoubleQuotesL />
                <div className="text-center text-[16px] md:text-[28px]">
                    <b>
                    <p>도전하고 경험하는 것을 좋아하는 조성현이라고 합니다.</p>
                    <p>배우고자 하는 욕구가 강해서 모르는 게 있으면<br /> 어떻게든 해결을 하려고 부딪히는 성격입니다.</p>
                    <p>배려심 또한 많습니다.</p>
                    </b>
                </div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}

export default Introduce
