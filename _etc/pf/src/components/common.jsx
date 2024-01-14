export const Wrapper = ({ children }) => <div className="p-[16px] md:pt-[24px] md:py-[16px]">{children}</div>
export const Hero = ({ children }) => (
    <h1 className="text-slate-900 font-extrabold text-[32px] md:text-[40px] md:pt-[5px]">{children}</h1>
)
export const Heading = ({ children }) => <h2 className="text-[24px] py-[24px] font-bold md:text-[40px]">{children}</h2>
export const Typography = ({ children }) => <p className="text-[16px]">{children}</p>
