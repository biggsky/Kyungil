/* 
요청 응답을 처리할때
axios
요청 응답 처리를 해줄겁니다.

axios 설치
npm i axios


*/
import axios from 'axios'

function getWeather(name){
    return async(dispatch) =>{
        // api 작업 데이터 요청
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8d2cef2b8a89d66cf6a65d4e91ada5c5`)
        // 요청의 처리가 끝나면
        dispatch({type : "GET_WEATHER", payload : data})
    }
}
// 액션은 리듀서가 좋아하고, 리듀서는 액션이 좋아함
// 액션 리듀서 스토어 삼각관계????

export default { getWeather }