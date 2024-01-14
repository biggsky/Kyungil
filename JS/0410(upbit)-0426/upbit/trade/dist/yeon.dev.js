"use strict";

var divBtn = document.getElementById("btn");
var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var addBtn = document.getElementById("add-btn");
var closeBtn = document.getElementById("close-btn");
var closeBtn2 = document.getElementById("close-btn2");
var input = document.getElementById("text");
var subContainer = document.querySelector(".sub-container");
var list = document.querySelector(".list");
var textarea = document.getElementById("text2");
var textarea2 = document.getElementById("text4");
var board = getLocalStorage("board");
var tit = document.getElementById("tit");
var titClass = document.querySelectorAll(".tit");
var titleCon = document.getElementById("title-con");
var conClose = document.getElementById("con-close");
var conText = document.querySelector(".content-text");
var delBtn = document.getElementById("delBtn");
var deleteIndex = 0;
var fixBtn = document.getElementById("fixBtn");
var fixIndex = 0;
var updateBtn = document.getElementById("update-Btn");
var input2 = document.getElementById("text3");
var commentBtn = document.getElementById("commentBtn"); // 댓글을 담고있는 박스

var commentBox = document.querySelector('.comment-box'); //---페이지 네이션

var currentPage = 1;
var totalCount = 50;
var listCount = 12;
var limit = 3; //------

document.querySelectorAll(".current-page").forEach(function (a) {
  a.addEventListener("click", function (e) {
    currentPage = parseInt(e.target.getAttribute("value"));
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#page" + currentPage).classList.add("active");
    changePage();
  });
}); // 리스트가 10개 이상일때

if (list.length > listCount) {
  if (list.length % listCount != 0) {
    totalCount = Math.floor(list.length / listCount) + 1; //리스트가 10개일때
  } else if (list.length % listCount == 0) {
    totalCount = list.length / listCount;
  }
} else {
  totalpage = 1;
}

document.querySelector("#page1").innerHTML = currentPage;
document.querySelector("#page2").innerHTML = currentPage + 1;
document.querySelector("#page3").innerHTML = currentPage + 2; //모든배열 요소에 이벤트 추가

conClose.addEventListener("click", function () {
  titleCon.style.display = "none";
}); //---------------글쓰기 버튼 click

divBtn.addEventListener("click", function () {
  modal.style.display = "block";
});
addBtn.addEventListener("click", function () {
  location.reload();
  modal.style.display = "none";
  var data = JSON.parse(localStorage.getItem("nowLogin"));
  board = JSON.parse(localStorage.getItem("board"));
  var num = index();
  var obj = {
    num: num,
    title: input.value,
    writer: data.name,
    content: textarea.value,
    id: data.id
  };

  if (board) {
    board.push(obj);
    setLocalStorage("board", board);
    subContainer.innerHTML = "";
    changePage();
  } else {
    setLocalStorage("board", [obj]);
    subContainer.innerHTML = "";

    var _list = document.createElement("div");

    _list.classList.add("list");

    var numElement = document.createElement("div");
    numElement.className = "num";
    numElement.innerHTML = obj.num;
    var titElement = document.createElement("div");
    titElement.className = "tit";
    titElement.innerHTML = obj.title;
    var writerElement = document.createElement("div");
    writerElement.className = "writer";
    writerElement.innerHTML = obj.writer;

    _list.append(numElement);

    _list.append(titElement);

    _list.append(writerElement); // _list.append(viewElement)


    subContainer.append(_list);
  }
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
closeBtn2.addEventListener("click", function () {
  modal2.style.display = "none";
});

if (board) {
  // 연수 삽질 할 곳
  if (board.length < 12) {
    var _loop = function _loop(i) {
      var _list = document.createElement("div");

      _list.classList.add("list");

      var numElement = document.createElement("div");
      numElement.className = "num";
      numElement.innerHTML = board[i].num;
      var titElement = document.createElement("div");
      titElement.className = "tit";
      titElement.innerHTML = board[i].title;
      var writerElement = document.createElement("div");
      writerElement.className = "writer";
      writerElement.innerHTML = board[i].writer;

      _list.append(numElement);

      _list.append(titElement);

      _list.append(writerElement); // _list.append(viewElement)


      subContainer.append(_list); //중요

      titClass = document.querySelectorAll(".tit");
      titClass[i].addEventListener("click", function () {
        commentBox.innerHTML = ''; //댓글 다루기

        if (localStorage.getItem('comment')) {
          var comment = JSON.parse(localStorage.getItem('comment')).filter(function (a) {
            return a.boardId == board[i].num;
          });
          console.log(comment);
          comment.forEach(function (a) {
            var commentContent = document.createElement('div');
            commentContent.classList.add('comment-content');
            var commentName = document.createElement('div');
            commentName.classList.add('comment-name');
            var hr = document.createElement('div');
            hr.classList.add('divide-name-content');
            var commentText = document.createElement('div');
            hr.classList.add('comment-text');
            commentName.innerHTML = a.name;
            commentText.innerHTML = a.commentText;
            commentContent.append(commentName);
            commentContent.append(hr);
            commentContent.append(commentText);
            commentBox.append(commentContent);
          });
        }

        conText.innerHTML = board[i].content;
        deleteIndex = i;
        fixIndex = i;
        titleCon.style.display = "block";
      });
    };

    for (var i = (currentPage - 1) * 12; i < board.length; i++) {
      _loop(i);
    }
  } else {
    var _loop2 = function _loop2(_i) {
      var _list = document.createElement("div");

      _list.classList.add("list");

      var numElement = document.createElement("div");
      numElement.className = "num";
      numElement.innerHTML = board[_i].num;
      var titElement = document.createElement("div");
      titElement.className = "tit";
      titElement.innerHTML = board[_i].title;
      var writerElement = document.createElement("div");
      writerElement.className = "writer";
      writerElement.innerHTML = board[_i].writer;

      _list.append(numElement);

      _list.append(titElement);

      _list.append(writerElement); // _list.append(viewElement)


      subContainer.append(_list); //중요

      titClass = document.querySelectorAll(".tit");

      titClass[_i].addEventListener("click", function () {
        console.log(board[_i].num);
        var commentValue = document.querySelector('#commentValue').value;

        var _JSON$parse = JSON.parse(localStorage.getItem('nowLogin')),
            name = _JSON$parse.name,
            id = _JSON$parse.id;

        var num = JSON.parse(localStorage.getItem('board'))[fixIndex].num;
        var commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');
        var commentName = document.createElement('div');
        commentName.classList.add('comment-name');
        var hr = document.createElement('div');
        hr.classList.add('divide-name-content');
        var commentText = document.createElement('div');
        hr.classList.add('comment-text');
        commentName.innerHTML = name;
        commentText.innerHTML = commentValue;
        commentContent.append(commentName);
        commentContent.append(hr);
        commentContent.append(commentText);
        commentBox.append(commentContent);
        conText.innerHTML = board[_i].content;
        titleCon.style.display = "block";
        deleteIndex = _i;
        fixIndex = _i;
      });
    };

    for (var _i = (currentPage - 1) * 12; _i < currentPage * 12; _i++) {
      _loop2(_i);
    }
  }
} // q&a 수정 등록 버튼 만들기
//------삭제버튼


delBtn.addEventListener("click", function (e) {
  console.log('클릭'); //보드 안에 있는 특정한 key의 value를 삭제
  //get으로 다 가져와=> 그 중에서 삭제할 게시판의 고유 아이디를 가진 객체를 찾아
  //그 다음 그 객체의 content를 지우고, 다시 setLocalstorage로 저장

  var boardArr = JSON.parse(localStorage.getItem("board"));
  console.log(boardArr[deleteIndex]);
  boardArr.splice(deleteIndex, 1);
  console.log(boardArr);
  localStorage.setItem("board", JSON.stringify(boardArr));
  document.querySelectorAll('.list')[deleteIndex].remove();
}); //--------수정버튼

fixBtn.addEventListener("click", function (e) {
  console.log("click");
  modal2.style.display = "block";
  localStorage.getItem('board');
  var boardContent = JSON.parse(localStorage.getItem('board'));
  console.log("click");
  console.log(boardContent[fixIndex]);
  updateBtn.addEventListener("click", function (e) {
    console.log(boardContent[fixIndex].title = input2.value);
    console.log(boardContent[fixIndex].content = textarea2.value);
    localStorage.setItem('board', JSON.stringify(boardContent));
    location.reload(); // console.log(boardContent[fixIndex])
    // localStorage.setItem ("board",JSON.stringify(boardContent))
  });
}); //------댓글 등록 버튼

commentBtn.addEventListener("click", function () {
  var commentValue = document.querySelector('#commentValue').value;

  var _JSON$parse2 = JSON.parse(localStorage.getItem('nowLogin')),
      name = _JSON$parse2.name,
      id = _JSON$parse2.id;

  var num = JSON.parse(localStorage.getItem('board'))[fixIndex].num;
  var commentContent = document.createElement('div');
  commentContent.classList.add('comment-content');
  var commentName = document.createElement('div');
  commentName.classList.add('comment-name');
  var hr = document.createElement('div');
  hr.classList.add('divide-name-content');
  var commentText = document.createElement('div');
  hr.classList.add('comment-text');
  commentName.innerHTML = name;
  commentText.innerHTML = commentValue;
  commentContent.append(commentName);
  commentContent.append(hr);
  commentContent.append(commentText);
  commentBox.append(commentContent);
  var tempCommentObj = {
    name: name,
    commentText: commentValue,
    writerId: id,
    boardId: num
  };

  if (localStorage.getItem('comment')) {
    var tempComment = JSON.parse(localStorage.getItem('comment'));
    tempComment.push(tempCommentObj);
    localStorage.setItem('comment', JSON.stringify(tempComment));
  } else {
    localStorage.setItem('comment', JSON.stringify([tempCommentObj]));
  }

  console.log('click');
});

function index() {
  if (board && board.length > 0) {
    return board.length + 1;
  } else {
    return 1;
  }
}

var validatePagination = function validatePagination() {
  if (12 * currentPage > board.length) {
    return true;
  } else {
    return false;
  }
};

var changePage = function changePage() {
  if (validatePagination()) {
    subContainer.innerHTML = "";
    var j = 0;

    var _loop3 = function _loop3(_i2) {
      var _list = document.createElement("div");

      _list.classList.add("list");

      var numElement = document.createElement("div");
      numElement.className = "num";
      numElement.innerHTML = board[_i2].num;
      var titElement = document.createElement("div");
      titElement.className = "tit";
      titElement.innerHTML = board[_i2].title;
      var writerElement = document.createElement("div");
      writerElement.className = "writer";
      writerElement.innerHTML = board[_i2].writer; // let viewElement = document.createElement("div");
      // viewElement.className = "view";
      // viewElement.innerHTML = board[i].view

      _list.append(numElement);

      _list.append(titElement);

      _list.append(writerElement); // _list.append(viewElement)


      subContainer.append(_list);
      titClass = document.querySelectorAll(".tit");
      titClass[j].addEventListener("click", function () {
        conText.innerHTML = board[_i2].content;
        console.log('asd');
        titleCon.style.display = "block";
      });
      j++;
    };

    for (var _i2 = (currentPage - 1) * 12; _i2 < board.length; _i2++) {
      _loop3(_i2);
    } // 반장의 아이디어입니다
    // titClass = document.querySelectorAll('.tit');
    // console.log(titClass)
    // titClass.forEach((a) => {
    //     a.addEventListener("click", function () {
    //         titleCon.style.display = "block";
    //     })
    // })

  } else {
    var _j = 0;
    subContainer.innerHTML = "";

    var _loop4 = function _loop4(_i3) {
      var _list = document.createElement("div");

      _list.classList.add("list");

      var numElement = document.createElement("div");
      numElement.className = "num";
      numElement.innerHTML = board[_i3].num;
      var titElement = document.createElement("div");
      titElement.className = "tit";
      titElement.innerHTML = board[_i3].title;
      var writerElement = document.createElement("div");
      writerElement.className = "writer";
      writerElement.innerHTML = board[_i3].writer; // let viewElement = document.createElement("div");
      // viewElement.className = "view";
      // viewElement.innerHTML = board[i].view

      _list.append(numElement);

      _list.append(titElement);

      _list.append(writerElement); // _list.append(viewElement)


      subContainer.append(_list);
      titClass = document.querySelectorAll(".tit");

      titClass[_j].addEventListener("click", function () {
        conText.innerHTML = board[_i3].content;
        titleCon.style.display = "block";
      });

      _j++;
    };

    for (var _i3 = (currentPage - 1) * 12; _i3 < currentPage * 12; _i3++) {
      _loop4(_i3);
    }
  }
}; //----active---


document.querySelector("#pre").addEventListener("click", function () {
  currentPage -= 1;

  if (currentPage < 1) {
    currentPage = 1;
  }

  document.querySelector(".active").classList.remove("active");
  document.querySelector("#page" + currentPage).classList.add("active");
  changePage();
});
document.querySelector("#next").addEventListener("click", function () {
  currentPage += 1;

  if (currentPage > Math.floor(board.length / 12) + 1) {
    currentPage = Math.floor(board.length / 12) + 1;
  }

  document.querySelector(".active").classList.remove("active");
  document.querySelector("#page" + currentPage).classList.add("active");
  changePage();
}); //---거래소에서 로그아웃을 누르면 처음main으로 넘어가게 하는함수
// 관리자일때
// console.log(JSON.parse(localStorage.getItem("nowLogin")))

if (JSON.parse(localStorage.getItem("nowLogin")).isAdmin == true) {
  document.getElementById("logOut").innerHTML = "LogOut";
  document.getElementById("myPage").innerHTML = "Admin";
  var logOut = document.getElementById("logOut");
  logOut.href = "../main/main.html";
  var admin = document.getElementById("myPage");
  console.log(admin);
  admin.href = "../admin/admin.html";

  logOut.onclick = function () {
    window.localStorage.removeItem('nowLogin');
  }; // 회원일때

} else if (JSON.parse(localStorage.getItem("nowLogin")).isAdmin == false) {
  document.getElementById("logOut").innerHTML = "로그아웃";
  document.getElementById("myPage").innerHTML = "My page";

  var _logOut = document.getElementById("logOut");

  _logOut.href = "../main/main.html";
  var mypage = document.getElementById("myPage");
  mypage.href = "../mypage/myPage.html";

  _logOut.onclick = function () {
    window.localStorage.removeItem('nowLogin');
  };
} else {}