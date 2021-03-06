console.log('执行h0002.js');

// 展示逻辑表达式的计算结果，比对两个文本框中输入的信息

// 1、获取页面相关元素
var info01 = document.getElementById('info01'); //第一个输入框
var info02 = document.getElementById('info02'); //第二个输入框
var btnIf = document.getElementById('btnIf'); //判断按钮
var divResult = document.getElementById('divResult'); //显示结果的div
console.log(info01, info02, btnIf, divResult);

// 2、判断按钮点击动作
btnIf.addEventListener('click', function() {
  console.log('开始判断');
  // 获取输入框中输入的内容
  var val01 = info01.value; //第一个值
  var my = info02.value; //第二个值
  console.log('输入的值:', val01, my);
  // 显示输入信息
  divResult.innerHTML = '第一个值是:' + val01 + '<br>';
  divResult.innerHTML = divResult.innerHTML + '第二个值是:' + my + '<br>';
  // 要输入才能继续判断
  // 去掉空白字符再判断输入的情况  /\s*/g 表示任意的空白字符
  val01 = val01.replace(/\s*/g, '');
  my = my.replace(/\*/g, '');
  console.log('去掉空格之后的值:', val01, my, val01.length, my, length);
  if (val01.length == 0) {
    // 没有第一个值输入就中断执行并显示错误提示
    divResult.innerHTML =
      divResult.innerHTML + '第一个信息没有输入有效内容<br>';
    // 页面元素.focus()表示元素获取焦点
    info01.focus();
    return;
  }
  if (my.length == 0) {
    divResult.innerHTML = divResult.innerHTML + '第二个要输入<br>';
    info02.focus();
    return;
  }

  // 大于的判断
  divResult.innerHTML =
    divResult.innerHTML + '大于的判断结果:' + (val01 > my) + '<br>';
  divResult.innerHTML =
    divResult.innerHTML + '大于或等于的判断结果:' + (val01 >= my) + '<br>';

  // a+=b; 就是a=a+b; !是not
  divResult.innerHTML += '不相等测试的结果' + (val01 != my) + '<br>';
  divResult.innerHTML += '取反操作' + !(val01 == my) + '<br>';
});

// 作业1 : 大于 小于 相等 不相等 大于或等于 小于或等于
// 作业2 : 判断两个文本框中输入的信息哪一个更长
