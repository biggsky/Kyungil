import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledProfileName } from './mypage.styled';
import { saveProfile } from '../../redux/features/editProfile';


const EditName = ({ profileName }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const NameClick = () => {
    setEditing(true);
  };

  const NameBlur = () => {
    setEditing(false);
    if(name == '') {
      return;
    }else {
      console.log(name)
      dispatch(saveProfile(name))
    }
  };


  return (
    <StyledProfileName onClick={NameClick}>
      {editing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          onBlur={NameBlur}
          autoFocus
          maxLength={10}
        />
      ) : (
        name || profileName
      )}
    </StyledProfileName>
  );
};

export default React.memo(EditName);