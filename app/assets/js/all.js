// header 點擊下拉搜尋
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('bx-x');
    searchForm.classList.toggle('active');
    userMenu.classList.remove('active');
});


// header 點擊下拉選單 或 點擊登入
let userBtn = document.querySelector('#user-btn');
let userMenu = document.querySelector('.user-menu');
let havelogin = "true";
let loginClose = document.querySelector('#close-btn');
let logout = document.querySelector('#logout');
let login = document.querySelector('.login-btn');

login.addEventListener('click',()=>{
    havelogin = "true";
});

userBtn.addEventListener('click', ()=>{
    alert(havelogin)
    searchBtn.classList.remove('bx-x');
    searchForm.classList.remove('active');
    if( havelogin == "true" ){
        userMenu.classList.add('active');
    }else{
        document.getElementById("user-menu").style.display="none";
        document.getElementById("login-container").style.top=0;
    }
});

logout.addEventListener('click',()=>{
    havelogin = "false";
});

loginClose.addEventListener('click',()=>{
    document.getElementById("login-container").style.top="-120%";
});




// 滑動卷軸關閉視窗
window.onscroll = () =>{
  userMenu.classList.remove('active');
  searchForm.classList.remove('active');
  searchBtn.classList.remove('active');
  // document.getElementById("login-container").style.top="-120%";
}