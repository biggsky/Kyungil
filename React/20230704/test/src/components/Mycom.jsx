// es6문법으로 가져올거임 (require이 아닌)
import React, { Component } from "react";
// export default class Mycom extends Component{
//     render(){
//         return(
//             <div>
//                 안녕 나는 컴포넌트
//             </div>
//         )
//     }
// }

class Mycom extends Component{
    // 컴포넌트의 구조는 같은데 내용이 다른경우
    // 재사용성이 용이해서 컴포넌트를 만든다고 했는데
    // props라는 값을 받아서 그려주면 된다.
    constructor(props){
        super(props)
        // super : 부모의 생성자 함수를 호출해줘야 this사용할 수 있다.
        // this
        this.state = {
            num : 0
        }
    }
    // 컴포넌트가 초기에 생성되면
    // constructor -> render -> componentDidMount 실행함
    componentDidMount(){
        console.log("나 생성");
    }

    // 컴포넌트의 상태가 변화되면
    // 상태 변환 후 -> componentDidUpdate

    componentDidUpdate(){
        console.log(this.props.name +  "인데 나 상태 변함. 리렌더링");
    }

    // 업데이트 상태변화되면 상태값이 변한후에 didUpdate

    render(){
        return(
            <div className={"com " + this.props.Cname}>
                {this.props.name}
                <button onClick={()=>{
                    this.setState({...this.state, num : this.state.num+=1 })
                }}>상태 변경</button>
                {/* 안녕 나는 컴포넌트
                안녕 나는 수정되었음 */}
            </div>
        )
    }
}

class Mycom2 extends Component{
    render(){
        return(
            <div>
                안녕 나는 컴포넌트 2야
            </div>
        )
    }
}

// 다수의 컴포넌트를 내보낼경우
export {Mycom, Mycom2};

// 단일로 한개만 내보낼경우
// export default Mycom;