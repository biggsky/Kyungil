import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import {
  Input,
  InputBox,
  Label,
  SignupMidBox,
  Text,
  ChkBtn,
  Title,
  TryBtn,
} from "./SignupPc.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { check, reset } from "../../redux/features/login";
import { ipUrl } from "../../util/util";

const SignupMid = ({ page }) => {
  const [user_id, setId] = useState();
  const [user_pw, setPw] = useState();
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();

  const [textId, setTextId] = useState("");
  const [textPw, setTextPw] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textNick, setTextNick] = useState("");
  // 회원가입 성공시 로그인으로 이동
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [textColor, setTextColor] = useState({
    idColor: "red",
    pwColor: "red",
    emailColor: "red",
    nickColor: "red",
  });

  // 이메일 중복,닉네임 중복,이메일,비밀번호 정규식에 대한 회원가입 가능 여부를 담은 배열,
  const [signUpValidationResult, setSignUpValidationResult] = useState({
    isUserId: false,
    isUserPw: false,
    isNickName: false,
    isEmail: false,
  });

  // 아이디 중복 체크
  const dupChk1 = async () => {
    if (user_id == undefined) {
      return;
    } else {
      // useMutation 사용해서 axios post 보내기
      // const data = useMutation();
      const duplicateIdResult = await ipUrl.post("/user/duplicateId", {
        user_id,
      });

      if (duplicateIdResult.data == "already user exist") {
        setTextId("사용이 불가능한 아이디입니다. 다시 입력 부탁드립니다.");
        setTextColor({
          ...textColor,
          idColor: "red",
        });
      } else {
        setTextId("사용 가능한 아이디입니다.");
        setTextColor({
          ...textColor,
          idColor: "#277bc0",
        });
        setSignUpValidationResult({
          ...signUpValidationResult,
          isUserId: true,
        });
      }
    }
  };

  // 아이디 중복 체크 react-query
  const dupChk1Mutation = useMutation(dupChk1);

  // 닉네임 중복 체크
  const dupChk2 = async () => {
    if (nickname === undefined) {
      return;
    } else {
      // useMutation 사용해서 axios post 보내기

      const duplicateNickNameResult = await ipUrl.post(
        "/user/duplicateNickName",
        {
          nickname,
        }
      );
      if (duplicateNickNameResult.data === "already user exist") {
        setTextNick("사용이 불가능한 닉네임입니다. 다시 입력 부탁드립니다.");
        setTextColor({
          ...textColor,
          nickColor: "red",
        });
      } else {
        setTextNick("사용 가능한 닉네임입니다.");
        setTextColor({
          ...textColor,
          nickColor: "#277bc0",
        });
        setSignUpValidationResult({
          ...signUpValidationResult,
          isNickName: true,
        });
      }
    }
  };

  // 닉네임 중복 체크 react-query
  const dupChk2Mutation = useMutation(dupChk2);
  // 회원가입 axios zerohoney
  const signUp = async () => {
    const signUpResult = await ipUrl.post("/user/signUp", {
      user_id,
      user_pw,
      nickname,
      email,
    });
    if (signUpResult.data === "already user exist") {
      alert("이미 가입된 유저 입니다!");
    } else if (signUpResult.data === "user signUp success") {
      navigate("/login");
    }
  };

  const login = async () => {
    if (!user_pw) {
      const userPwInput = document.querySelector("input[name='user_pw']");
      userPwInput.style.border = "1px solid red";
      userPwInput.focus();
    }
    if (!user_id) {
      const userIdInput = document.querySelector("input[name='user_id']");
      userIdInput.style.border = "1px solid red";
      userIdInput.focus();
    }
    if (!user_id || !user_pw) {
      return;
    }

    const loginClick = await ipUrl.post(
      "/user/login",
      {
        user_id,
        user_pw,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (loginClick.data == "id_non-existent") {
      document.querySelector("input[name='user_id']").focus();
      setTextId("존재하지 않는 아이디입니다. 다시 입력 부탁드립니다.^^");
      setTextColor({ ...textColor, idColor: "red" });
      document.querySelector("input[name='user_id']").style.border =
        "1px solid red";
    } else {
      // 존재하는 아이디를 입력했을때
      setTextId("");
      document.querySelector("input[name='user_id']").style.border =
        "1px solid blue";

      if (loginClick.data == "login_success") {
        // 로그인 성공
        dispatch(check(user_id));
        
        navigate("/");
      } else if (loginClick.data == "id_exist_but_pw_wrong") {
        // 비밀번호 틀렸을때
        setTextPw("비밀번호 확인하세요!!");
        document.querySelector("input[name='user_pw']").focus();
        document.querySelector("input[name='user_pw']").style.border =
          "1px solid red";
      }
    }
  };

  const loginMutation = useMutation(login);

  // ---------------------------------

  // 닉네임 중복 체크 react-query
  const signUpMutation = useMutation(signUp);

  // 이메일 형식 확인 정규식
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // 비밀번호 형식 확인 정규식 zerohoney
  const pwRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])(?=.*[0-9])(?=.*[a-zA-Z]).{8,12}$/;

  // 최종 회원가입
  const trySignup = () => {
    // 중복 체크 완료, 이메일 형식 체크 된 후 post 날리기
    const isEveryTrue = Object.values(signUpValidationResult).every(
      (value) => value === true
    );

   
  };

  // 로그인 체크
  const tryLogin = () => {
    // 아이디 없을 때
    // 비밀번호 틀렸을 때
  };

  useEffect(() => {
    dispatch(reset());
  }, []);

  if (page == "회원가입") {
    return (
      <>
        <SignupMidBox>
          <Title>{page}</Title>
          <InputBox>
            <Label>아이디</Label>
            <Input
              onChange={(e) => {
                setSignUpValidationResult({
                  ...signUpValidationResult,
                  isUserId: false,
                });
                setId(e.target.value);
                setTextId("중복확인을 눌러주세요");
                setTextColor({
                  ...textColor,
                  idColor: "red",
                });
              }}
              type="text"
            ></Input>
            <ChkBtn
              onClick={() => {
                dupChk1Mutation.mutate();
              }}
            >
              중복 확인
            </ChkBtn>
            <Text color={textColor.idColor}>{textId}</Text>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <Input
              onChange={(e) => {
                // 비밀번호 정규식 설정 zerohoney
                const isValiePw = pwRegex.test(e.target.value);
                if (isValiePw) {
                  setPw(e.target.value);
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isUserPw: true,
                  });
                  setTextPw("올바른 형식의 비밀번호 입니다.");
                  setTextColor({
                    ...textColor,
                    pwColor: "#277bc0",
                  });
                } else {
                  setTextPw(
                    "8자 이상, 12자 이하에 특수문자 하나가 들어가햐 합니다."
                  );
                  setTextColor({
                    ...textColor,
                    pwColor: "red",
                  });
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isUserPw: false,
                  });
                }
              }}
              type="password"
            ></Input>
            <Text color={textColor.pwColor}>{textPw}</Text>
          </InputBox>
          <InputBox>
            <Label>이메일</Label>
            <Input
              onChange={(e) => {
                let isValidEmail = emailRegex.test(e.target.value);
                if (isValidEmail == false) {
                  setTextEmail("올바른 이메일 형식이 아닙니다.");
                  setTextColor({
                    ...textColor,
                    emailColor: "red",
                  });
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isEmail: false,
                  });
                } else if (isValidEmail == true) {
                  setTextEmail("사용 가능한 이메일 형식입니다.");
                  setTextColor({
                    ...textColor,
                    emailColor: "#277bc0",
                  });
                  setEmail(e.target.value);
                  setSignUpValidationResult({
                    ...signUpValidationResult,
                    isEmail: true,
                  });
                }
              }}
              type="email"
            ></Input>
            <Text color={textColor.emailColor}>{textEmail}</Text>
          </InputBox>
          <InputBox>
            <Label>닉네임</Label>
            <Input
              onChange={(e) => {
                setSignUpValidationResult({
                  ...signUpValidationResult,
                  isNickName: false,
                });
                setNickname(e.target.value);
                setTextNick("중복확인을 눌러주세요");
                setTextColor({
                  ...textColor,
                  nickColor: "red",
                });
              }}
              type="text"
            ></Input>
            <ChkBtn
              onClick={() => {
                dupChk2Mutation.mutate();
              }}
            >
              중복 확인
            </ChkBtn>
            <Text color={textColor.nickColor}>{textNick}</Text>

            <TryBtn
              onClick={() => {
                signUpMutation.mutate();
              }}
            >
              {page}
            </TryBtn>
          </InputBox>
        </SignupMidBox>
      </>
    );
  } else if (page == "로그인") {
    return (
      <>
        <SignupMidBox>
          <Title>{page}</Title>
          <InputBox>
            <Label>아이디</Label>
            <Input
              type="text"
              name="user_id"
              onChange={(e) => setId(e.target.value)}
            ></Input>
            <Text color={textColor.idColor}>{textId}</Text>
          </InputBox>
          <InputBox>
            <Label>비밀번호</Label>
            <Input
              type="password"
              name="user_pw"
              onChange={(e) => setPw(e.target.value)}
            ></Input>
            <Text color={textColor.pwColor}>{textPw}</Text>

            <TryBtn
              onClick={() => {
                loginMutation.mutate();
              }}
            >
              {page}
            </TryBtn>
          </InputBox>
        </SignupMidBox>
      </>
    );
  }
};

export default SignupMid;
