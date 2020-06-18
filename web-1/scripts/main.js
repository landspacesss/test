let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.png') {
      myImage.setAttribute('src', 'images/1.png');
    } else {
      myImage.setAttribute('src', 'images/2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' +myName;
  }

/*初始化程序，如果'name'不存在,则调用setUserName()创建*/
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }


/*为按钮设置onclick事件处理器*/
  myButton.onclick = function() {
    setUserName();
 }