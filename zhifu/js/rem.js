(function (doc, win) {
  var docEl = doc.documentElement,
    // 设备重置
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;  // 获取屏幕宽度
      if (!clientWidth) return;
      docEl.style.fontSize = clientWidth /3.75 + 'px'
      // docEl.style.fontSize = 100+"px"
    }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  // resizeEvt是一个变量，所以不加引号
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);