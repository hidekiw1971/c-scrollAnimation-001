
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //
  if ($(".js-scroll-trigger").length) {
    scrollAnimation();
  }

  // animation関数
  function scrollAnimation() {
    $(window).scroll(function () {
      $(".js-scroll-trigger").each(function () { // each(要素に対して行う処理)
        // ↓情報を変数に格納している
        let position = $(this).offset().top, // topのy座標を取得
          scroll = $(window).scrollTop(), // scroll位置を取得
          windowHeight = $(window).height(); // ウィンドウの高さを取得

        if (scroll > position - windowHeight + 200) {
          $(this).addClass("is-active");
        } else {
          $(this).removeClass("is-active");

        }
      });
    });
  }
  // 
});
