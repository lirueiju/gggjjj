// 轮播图的js
var timer1;
var timer2;
var oldValue;
var newValue;
var index = 0;
var allA = document.querySelectorAll(".carousel #nav a");
var imgList = document.getElementById("imglist");
var imgArr = document.querySelectorAll("#imglist img");
var qhz = document.getElementById("qhz");
var qhy = document.getElementById("qhy");
// 自动轮播开启
autoChange();
// 给A绑定单击响应函数
for(var i=0;i<allA.length;i++){
    allA[i].num = i;
    allA[i].onclick = function(){
        index = this.num;
        clearInterval(timer1);
        clearInterval(timer2);
        move(setA());
        autoChange();
    };
}
// 左右按钮绑定单击事件
qhz.onclick = function(){
    clearInterval(timer1);
    clearInterval(timer2);
    index == 0 ? index = imgArr.length-2 : index--;
    move(setA());
    autoChange();
}
qhy.onclick = function(){
    clearInterval(timer1);
    clearInterval(timer2);
    index++;
    move(setA());
    autoChange();
}
// 鼠标悬停停止播放
imgList.onmouseenter = function(){
    clearInterval(timer2);
};
imgList.onmouseleave = function(){
    autoChange();
};
// 轮播图的定时器
function move(callback){
    timer1 = setInterval(function(){
    oldValue = imgList.offsetLeft;
    newValue = oldValue-200;
    if(newValue < -540*index){
        newValue = -540*index;
        }
    imgList.style.left = newValue+"px";
    if(newValue == -540*index){
        clearInterval(timer1);
        }
        callback;
    },30);
};
// A的选择器
function setA(){
    if(index == imgArr.length-1){
        index = 0;
        imgList.style.left = 0;
    };
    for(var i=0;i<allA.length;i++){
        allA[i].classList.add("short");
    }
    allA[index].classList.remove("short");
}
// 自动播放
function autoChange(){
    timer2 = setInterval(function(){
        index++;
        move(setA());
    },5000)
};
// 轮播图js结束