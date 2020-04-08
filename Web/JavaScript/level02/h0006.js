console.log('执行h0006.js');

var txtInfo = document.getElementById('txtInfo');
var btnSave = document.getElementById('btnSave');
var divInfo = document.getElementById('divInfo');
var btnLoad = document.getElementById('btnLoad');
var btnDel = document.getElementById('btnDel');
console.log(txtInfo, btnSave, divInfo, btnLoad, btnDel);

btnSave.addEventListener('click', function () {
  console.log('开始保存本地存储信息');
  // 将txtInfo的输入值用info这个名称保存到本地存储中
  localStorage.setItem('info', txtInfo.value);
  divInfo.innerHTML = '保存本地存储成功';
});

btnLoad.addEventListener('click', function () {
  console.log('开始加载本地存储信息');
  // 获取本地储存中叫info的对应数据
  var info = localStorage.getItem('info');
  txtInfo.value = info;
});

btnDel.addEventListener('click', function () {
  console.log('开始删除本地存储信息');
  // 删除本地存储中叫info的数据
  localStorage.removeItem('info');
});

// localStorage拥有保存数据的能力
// 保存: setItem(名称,值)
// 读取: 变量名 = getItem(名称)
// 删除: removeItem(名称)

// sessino本地存储
var txtSession = document.getElementById('txtSession');
var btnSaveSession = document.getElementById('btnSaveSession');
var btnLoadSession = document.getElementById('btnLoadSession');
var btnDleSession = document.getElementById('btnDleSession');

btnSaveSession.addEventListener('click', function () {
  sessionStorage.setItem('sinfo', txtSession.value);
  divInfo.innerHTML = '保存session数据成功';
});

btnLoadSession.addEventListener('click', function () {
  txtSession.value = sessionStorage.getItem('sinfo');
  divInfo.innerHTML = '加载session数据成功';
});

btnDleSession.addEventListener('click', function () {
  sessionStorage.removeItem('sinfo');
  divInfo.innerHTML = '删除session数据成功';
});

// 页面跳转
var btnLink = document.getElementById('btnLink');
btnLink.addEventListener('click', function () {
  // 转换页面
  location = 'h0006-1.html';
});

var alink = document.getElementById('alink');
alink.addEventListener('click', function () {
  divInfo.innerHTML = '页面将会在5秒后跳转...';
  setTimeout(function () {
    location = 'https://huhuiyu.top';
  }, 5000);
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('https://myoss.huhuiyu.top');
});

// 作业编写js课程的首页,要求将上课的知识点对应页面的全部超链接写出来
