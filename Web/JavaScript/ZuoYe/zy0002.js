console.log('执行zy0002.js');

// 功能说明: 点击计算按钮之后，要求文本框中必须输入的是数，如果不是就显示错误信息，如果是就就行计算

// 1、获取页面的计算按钮和输入框以及提示信息的元素
var jisuan = document.getElementById('jisuan'); //计算按钮
var sperr = document.getElementById('sperr'); //错误提示信息

var n01 = document.getElementById('n01'); //加法第一个输入框
var n02 = document.getElementById('n02'); //加法第二个输入框
var jieguo01 = document.getElementById('jieguo01'); //加法结果

var n03 = document.getElementById('n03'); //减法第一个输入框
var n04 = document.getElementById('n04'); //减法第二个输入框
var jieguo02 = document.getElementById('jieguo02'); //减法结果

console.log(jisuan, n01, n02, jieguo01, jieguo02, n03, n04, sperr); //控制台查看

// 2、计算按钮的单击动作
jisuan.addEventListener('click', function() {
  // 3、校验输入的值是不是数
  var num01 = parseFloat(n01.value); //获取n01(加法的第一个输入框)的输入值
  if (isNaN(num01)) {
    sperr.innerHTML = '加法的第一个输入值不是数';
    return;
  } //判断n01的值是不是数

  var num02 = parseFloat(n02.value);
  if (isNaN(num02)) {
    sperr.innerHTML = '加法的第二个输入值不是数';
    return;
  }

  var num03 = parseFloat(n03.value);
  if (isNaN(num03)) {
    sperr.innerHTML = '加法的第三个输入值不是数';
    return;
  }

  var num04 = parseFloat(n04.value);
  if (isNaN(num04)) {
    sperr.innerHTML = '加法的第四个输入值不是数';
    return;
  }

  // 4、计算并显示结果
  sperr.innerHTML = ''; //清空错误信息
  jieguo01.innerHTML = num01 + num02; //加法结果
  jieguo02.innerHTML = num03 - num04; //减法结果
});
