console.log(chrome.extension.getBackgroundPage().location.href);
var lis = document.querySelector('.r_burst tganime-fadein-trigger');
console.log('bg.js--------------'+lis);

//popup和background通信
var bg = chrome.extension.getBackgroundPage();
bg.test();   //访问bg的函数
alert(bg.document.querySelector('#only').innerHTML);
alert(bg.document.body.innerHTML);