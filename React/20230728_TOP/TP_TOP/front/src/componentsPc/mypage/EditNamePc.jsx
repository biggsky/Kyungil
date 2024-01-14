import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledProfileName } from "./MyPagePc.styled";



const EditNamePc = ({ setProfileBtnChange }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const NameClick = () => {
    setEditing(true);
  };

  const NameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    if (newName === name) {
      setProfileBtnChange(false);
    } else {
      setProfileBtnChange(true);
    }
  };

  const NameBlur = () => {
    setEditing(false);
  };

  return (
    <StyledProfileName onClick={NameClick}>
      {editing ? (
        <input
          type="text"
          value={name}
          onChange={NameChange}
          onBlur={NameBlur}
          autoFocus
        />
      ) : (
        name || 'Profile Edit Name'
      )}
    </StyledProfileName>
  );
};

export default EditNamePc;