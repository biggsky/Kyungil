import React, {useState} from 'react'

const Main = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showChangePopup, setshowChangePopup] = useState(false);
    const [showChangePopup2, setshowChangePopup2] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [listItems, setListItems] = useState([]);
    const [title, setTitle] = useState();
    const popup = () =>{
        setShowPopup(true);
    }

    const popupBtnClick = () => {
        // alert(inputValue);
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

    const titleChangeClick = () =>{
        setshowChangePopup(true);
    }

    const nameChangeClick = () =>{
        setshowChangePopup2(true);
    }
    const titleChangeClick2 = () =>{
        let newTitle = inputValue;
        document.querySelector("#title").innerHTML = newTitle;
        setInputValue("");
        setshowChangePopup(false);
    }
    const nameChangeClick2 = () =>{
        let newTitle = inputValue;
        document.querySelector("#name").innerHTML = newTitle;
        setInputValue("");
        setshowChangePopup2(false);
    }
  return (
    <div>
        <div id='border'>
        <p> <span id='title'>게시판제목</span> <button onClick={titleChangeClick}>변경</button></p>
        <p> <span id='name'>크리스 프랫</span> <button onClick={nameChangeClick}>변경</button></p>
        
            <div id='list'>
                {listItems.map((item, index)=>(

                    <div key ={index}>{item}</div>
                ))}
            </div>
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


    </div>
  )
}

export default Main