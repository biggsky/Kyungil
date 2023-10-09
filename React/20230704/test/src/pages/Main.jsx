import {Component} from "react";
import Mycom3 from "../components/Mycom3";
import { Mycom, Mycom2 } from "../components/Mycom";

class Main extends Component{
    render(){
        return(
            <>
            메인 페이지 <br />
            <Mycom name="첫번째 컴포넌트" Cname="red" />
            <Mycom name="두번째 컴포넌트" Cname="blue" />
            <Mycom2 />
            {/* <Mycom3 newnum={1} newnum2={2} newnum3={3} /> */}
            </>
        )
    }
}
export {Main};