import React from 'react'
import {Header} from "../components"
import {useLocation, useParams, useSearchParams } from "react-router-dom"

// useLocation : hook 함수 현재 브라우저의 url 위치 값을 가져오는데 사용

// useParams : hook 함수 url에 params 값을 접근하는데 사용 객체의 형태로 가져올 수 있다.

// useSearchParams : hook 함수 url의 쿼리값을 가져올때 사용 / 문자열을 해석해서 쿼리 매개변수의 값을 가져온다.

const Detail = () => {
  let temp = [{num : 10, name: "셔츠"}, {num:20, name:"바지"}, {num:30, name:"모자"}, {num:40, name:"장갑"} ]
  const location = useLocation();
  console.log("location : ", location);
  const params = useParams();
  console.log("params :", params);
  const [query, setQuery] = useSearchParams();
  // query.get 메서드 : 쿼리문의 키로 값을 가져올수 있다.
  console.log(" query.get('id') : ", query.get("id"));
  
  // http://localhost:3000/detail/1/10/%EC%85%94%EC%B8%A0?num=10 했을때
  console.log("query.get('num') : ", query.get("num"));
  return (
    <div>
      <Header name={"상세 페이지"}></Header>
      <div> {temp && temp[params.id].num } 번</div>
      <div> 이름 {temp && temp[params.id].name }</div>

    </div>
  )
}

export default Detail