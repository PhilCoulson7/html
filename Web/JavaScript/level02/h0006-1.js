console.log('执行h0006-1.js');

var divInfo = document.getElementById('divInfo');

// 本地存储和页面保存无关，而是以网站为单位
divInfo.innerHTML =
  localStorage.getItem('info') + '<br>' + sessionStorage.getItem('sinfo');
