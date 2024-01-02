import ReactDOM from 'react-dom'
const Modal = ({ title, show, onCloseButtonClick, children }) => {
    if (!show) {
        return null
    }

    return ReactDOM.createPortal(
        <>
            <div
                onClick={onCloseButtonClick}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50"
            >
            </div>
            <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-8 bg-white rounded-md w-[90%] h-[90%] overflow-hidden">
                <h2 className="mb-4 text-lg font-bold border-b-2 border-black h-[30px]">
                    <p className='float-left'>{title}</p>
                    <button className="float-right" onClick={onCloseButtonClick}>
                        X
                    </button>
                </h2>
                <div className='body h-[90%] overflow-scroll'>
                    {/* <div className='h-[1000px]'></div> */}
                    {children}
                </div>
                {/* <div className="footer">
                    <button onClick={onCloseButtonClick}>Close Modal</button>
                </div> */}
            </div>
        </>,
        document.body,
    )
}

export default Modal
