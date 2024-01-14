// gptAPI 테스트 -----20230807 zerohoney

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const whoText = (whoArr) => {};

const sendPropmpt = async (gptData) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: ` 여행 국가/도시:${gptData.location} ,
        
        여행 기간:${gptData.choiceDataHow.join(
          ","
        )}${gptData.date}
        ,
        
        파트너: ${gptData.choiceDataWho.join(
          ","
        )}


      이 조건으로 추천 여행장소를 다음과 같은 형식으로 출력해줘 {"location":'',attractions:[

          {"name":'',detail:'',attractionLocation:{"latitude": '', "longitude": ''}},
          ...
        ]} 
        설명: location은 입력한 장소의 값이고, attractions는 너가 추천해줄 장소의 배열이야. 그 안의 name은 8로 출력해줘!, detail은 장소에 대한 자세한 설명,attractionLocation은 그 장소의 위도와 경도야.
        형식은 json이야
        `,
      },
    ],
  });

  return completion.data.choices[0].message;
};

exports.saveUserPlan = async (req, res) => {
  const { gptData } = req.body;
  const ans = await sendPropmpt(gptData);
  res.json(ans);
};
