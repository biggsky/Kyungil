const id = document.getElementById('id')
const pw = document.getElementById('pw')
const login = document.getElementById('login')


login.addEventListener('click', () => {
    if (id.value =='qwer' || pw.value == '123456789a'){
        alert('로그인이 완료되었습니다!')
    function newPage()  {
        window.location.href = 'http://127.0.0.1:5500/mainFrame.html';
        }
        newPage()
    }else{
        alert('다시한번 더 입력해주세요')

    }
})
