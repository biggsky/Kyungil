import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

const Global = createContext();


const Main = () =>{
  const {showPopup, setShowPopup, showChangePopup, setshowChangePopup, showChangePopup2, setshowChangePopup2, inputValue, setInputValue, listItems, setListItems, title, setTitle, name, setname} = useContext(Global);
 
  const popup = () =>{
    setShowPopup(true);
  }
  const popupBtnClick = () => {
    const newItem = inputValue.trim();
    if(newItem != ""){
        setListItems([...listItems, newItem]);
        setInputValue("");
        setShowPopup(false);
        
    }
  }
    const inputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const nameChangeClick = () =>{
        setshowChangePopup2(true);
    }
    const titleChangeClick2 = () =>{
        let newTitle = inputValue;
        setTitle(newTitle);
        setInputValue("");
        setshowChangePopup(false);
    }
    const nameChangeClick2 = () =>{
        let newTitle = inputValue;
        setname(newTitle);
        setInputValue("");
        setshowChangePopup2(false);
    }

    const listItemsUpdate = useMemo(()=>{
      console.log("리렌더링됨");
      return <>
      {listItems.map((item, index)=>(
        <div key ={index}>{item}</div>
      ))}
      </>
    },[listItems]);

    // const listItemsUpdate = () =>{
    //   console.log("리렌더링됨");
    //   return <>
    //   {listItems.map((item, index)=>(
    //     <div key ={index}>{item}</div>
    //   ))}
    //   </>
    // }

//     const [title2,setTitle2]=useState('운동')
//     const arr= new Array(1001).fill(0)
//  const a=useMemo(()=>{
//   console.log('나 실행')
//     return arr.map((a)=>{
//       return (<div>
//         {a}
//         </div>)
//     })
//   },[arr]) 

const titleChangeClick = () =>{
  setshowChangePopup(true);
}
  return <>
    <div>
          <div id='border'>
          <p> <span id='title'> {title} </span> <button onClick={titleChangeClick}>변경</button></p>
          <p> <span id='name'> {name} </span> <button onClick={nameChangeClick}>변경</button></p>
          
              <div id='list'>{listItemsUpdate}</div>
              <button onClick={popup}>작성</button>
          </div>
          {showPopup && (
              <div id='popup'>
                  <input type="text" name='popupinput' onChange={inputChange} placeholder='할일 작성' />
                  <br />
                  <button onClick={popupBtnClick}>작성</button>
              </div>
          )}

          {showChangePopup && (
              <div id='popup'>
                  <input type="text" onChange={inputChange} placeholder='제목변경' />
                  <br />
                  <button onClick={titleChangeClick2}>변경</button>
              </div>
          )}
          {showChangePopup2 && (
              <div id='popup'>
                  <input type="text" onChange={inputChange} placeholder='이름변경' />
                  <br />
                  <button onClick={nameChangeClick2}>변경</button>
              </div>
          )}

            {/* {a()}
            <div>{title2}</div>
            <button onClick={()=>{
              setTitle2(document.querySelector('#asd').value)
            }}>바꾸기</button>
            <input type="text" name="" id="asd" /> */}
      </div>
  </>
}



const Context = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showChangePopup, setshowChangePopup] = useState(false);
    const [showChangePopup2, setshowChangePopup2] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [listItems, setListItems] = useState([]);
    const [title, setTitle] = useState("게시판제목이얌");
    const [name, setname] = useState("작성자");


    const obj = {
      showPopup,setShowPopup,
      showChangePopup, setshowChangePopup,
      showChangePopup2, setshowChangePopup2,
      inputValue, setInputValue,
      listItems, setListItems,
      title, setTitle,
      name, setname
    }
  return (
    <Global.Provider value={obj}>
        <Main></Main>
    </Global.Provider>
  )
}

export default Context