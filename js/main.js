$(function(){
  /*=================================================
  スクロール時の画像フェード表示 PROFILEとCONTACTセクション
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function() {
    // fadeIn-f1, fadeIn-f2, fadeIn-f3クラスに対して順に処理を行う
    $('.fadeIn-f1, .fadeIn-f2, .fadeIn-f3').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeInクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeIn-f1クラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight) {
        $(this).css('opacity','1');
        // $(this).css('transform','translateY(0)');
      }
    });
  });

  /*=================================================
  フェード表示 ヘッダー works（h2）
  ===================================================*/
  $(document).ready(function () {
    // HTMLの読み込み（画像などを除いて）が終わったらshowクラスを追加する
    $('.js-fadeIn, .fadeIn-fd3').addClass("show");
  });

  /*=================================================
  フェード表示 works（li.js-fadeUp）
  ===================================================*/
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      // 要素（inviewクラス）が表示されたらshowクラスを追加する
      $(this).stop().addClass("show");
    }
  });
  
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
});