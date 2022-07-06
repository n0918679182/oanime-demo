"use strict";

// header 點擊下拉搜尋
var searchBtn = document.querySelector('#search-btn');
var searchForm = document.querySelector('.search-form');
searchBtn.addEventListener('click', function () {
  searchBtn.classList.toggle('bx-x');
  searchForm.classList.toggle('active');
  userMenu.classList.remove('active');
}); // header 點擊下拉選單 或 點擊登入

var userBtn = document.querySelector('#user-btn');
var userMenu = document.querySelector('.user-menu');
var havelogin = "true";
var loginClose = document.querySelector('#close-btn');
var logout = document.querySelector('#logout');
var login = document.querySelector('.login-btn');
login.addEventListener('click', function () {
  havelogin = "true";
});
userBtn.addEventListener('click', function () {
  alert(havelogin);
  searchBtn.classList.remove('bx-x');
  searchForm.classList.remove('active');

  if (havelogin == "true") {
    userMenu.classList.add('active');
  } else {
    document.getElementById("user-menu").style.display = "none";
    document.getElementById("login-container").style.top = 0;
  }
});
logout.addEventListener('click', function () {
  havelogin = "false";
});
loginClose.addEventListener('click', function () {
  document.getElementById("login-container").style.top = "-120%";
}); // 滑動卷軸關閉視窗

window.onscroll = function () {
  userMenu.classList.remove('active');
  searchForm.classList.remove('active');
  searchBtn.classList.remove('active'); // document.getElementById("login-container").style.top="-120%";
};
//# sourceMappingURL=all.js.map
