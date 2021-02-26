'use strict';


// サムネイル画像のスライダー
$(function () {
    // Swiperの設定
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        pagination: {
            el: '.swiper-my-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // 下のサムネイルブロックを出力
                return '<div class="' + className + ' Swiper-Container-Pagination-ImgBox"><div class="Swiper-Container-Pagination-ImgBox-Img" style="background:url(./image/img' + (index + 1) + '.jpg) no-repeat;background-size:cover;background-position:center;">' + '</div></div>';
            },
        },
    });
});
// サムネイル画像のスライダー