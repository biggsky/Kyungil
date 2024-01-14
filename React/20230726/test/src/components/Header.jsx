import React, { useState, useEffect } from 'react'
import {Headerdiv} from "../Header.styled"

const Header = () => {
  const [basicMode, setBasicMode] = useState(true);
  const [alllight, allDark] = useState(true);

  // useEffect( ()=>{
  //   allDark(basicMode.toString());
  // }, [basicMode]);

  const modeClick = (event) =>{
    event.preventDefault();
    setBasicMode(!basicMode);
    allDark(!alllight);
    // document.querySelector("#basicsvg").style.display = "none";
    // document.querySelector("#darksvg").style.display = "block";
  }
  return (
    <Headerdiv className={alllight ? '' : 'dark-mode'}>

    {/* <Headerdiv alllight = {alllight.toString()}> */}
    {/* <Headerdiv alllight = {alllight}> */}

      <div id='left'>
        <div className='logo'>
          <svg id='svg1' viewBox="0 0 100 100"><path d="M61.41,92.77l-4.27,4.27c-3.94,3.94-10.32,3.94-14.26,0,0,0,0,0,0,0L2.95,57.13c-3.94-3.94-3.94-10.32,0-14.26L42.88,2.95c3.94-3.94,10.32-3.94,14.26,0h0l29.58,29.58-25.31,25.31,6.06,6.06,25.31-25.3,4.27,4.27c3.94,3.94,3.94,10.32,0,14.26h0l-29.59,29.59-28.87-28.87,25.31-25.31-13.9-13.9-31.37,31.36,42.77,42.77Z"></path></svg>
        </div>
        <b>NFTReally</b>
        BETA
      </div>
      <div id='center'>
        <div id='search_div'>
          <input type='text' placeholder='컬렉션 이름, 마켓의 URL 주소' />
          <svg id='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-4 w-4 fill-jacarta-500 dark:fill-white"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
        </div>
      </div>
      <div id='right'>
        <span>마이페이지</span>
        
        <div className='circle'>
          <button onClick={modeClick}>
            {basicMode ? (
              <svg id='basicsvg' viewBox="0 0 24 24" width="24" height="24" className="header_dark"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path></svg>
            ):( 
            <svg id='darksvg' viewBox="0 0 24 24" width="24" height="24" className="header_light"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></svg>
            )}

            
          </button>

        </div>
        <div className='circle'>
          <svg viewBox="0 0 24 24" width="24"   height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path></svg>
        </div>
      </div>
      
    </Headerdiv>
  )
}

export default Header