$(function (){
    //drawer.js
    $('.drawer').drawer();

    //wow.js
    new WOW().init();

    //google form
  let $form = $( '#js-form' )//辺陬の定義
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  //formの入力確認
  let $submit = $( '#js-submit' )
  $('#js-form input, #js-form textarea').on( 'change', function() {
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form input[name="entry.1559111921"]').prop( 'checked' ) === true
    ) {
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  });

  $('a[href^="#"]').click(function() {
    // スムーススクロールの処理を書く
    //  移動速度を指定(ミリ秒)。varとletは後から再代入できる。letは再宣言が不可能。constは定数。
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    //  idの値が#のみだったらターゲットをhtmlタグにしてトップへ
    let target = $("#" == id ? "html" : id);
    //  頁のトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    //  ターゲットの位置までspeedの速度で移動
    $("html, body").animate(
      {
        scrollTop: position - $( '#js-header' ).outerHeight()
      },
      speed
    );
    return false;
  });
})