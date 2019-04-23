$(function() {
  // 0. 数据源
  var goodsNames = ['耳机', '平板电脑', '感谢参与', '平板鞋', 'begin', '特步', '玩偶', 'ipone手机', '安卓手机'];
  var goodsImages = [];
  for (var i = 1; i < 10; i++) {
    goodsImages.push('./images/' + i + '.png');
  }
  console.log(goodsImages);

  // 2. 页面展示
  $('.goods>li>img').each(function(index, element) {
    $(this).attr('src', goodsImages[index]);
  });

  // 3. 监听按钮的点击
  var timer = null;
  var showIndex = 0,
    currentGunIndex = 0;
  $('#begin').click(function() {
    // 3.1 清除定时器
    clearInterval(timer);
    // 3.2 控制滚动的圈数
    var count = Math.floor(Math.random() * 8) + 8;
    // 3.3 指定滚动的路径
    var showIndexs = [0, 1, 2, 5, 8, 7, 6, 3];
    // 3.4 根据路径进行滚动
    timer = setInterval(function() {
      // 3.5 判断
      if (count <= 0) {
        // 判断是否中奖
        if (showIndex === 2) {
          alert('运气不是太好, 加油喔!');
        } else {
          alert('恭喜中奖, 奖品是: ' + goodsNames[showIndex]);
        }

        // 清除定时器
        clearInterval(timer);
        return;
      }

      // 3.6 条件处理
      count--;

      // 滚动循环 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, ...
      currentGunIndex = (currentGunIndex + 1) % showIndexs.length;
      // console.log(currentGunIndex);

      // 根据滚动的下标 找到 当前盒子的下标
      showIndex = showIndexs[currentGunIndex];

      // 3.7 让当前的盒子被选中
      $('.goods>li')
        .eq(showIndex)
        .addClass('current')
        .siblings()
        .removeClass('current');

      // 3.8 控制启动按钮的旋转
      $('#begin').css({
        transform: 'rotate(' + (currentGunIndex - 1) * 45 + 'deg)'
      });
    }, 200);
  });
});
