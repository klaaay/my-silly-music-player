$(document).ready(function(){
    //被点击的歌手出现阴影效果，及实现HOVER效果
    $('body').on('click', '.top-singer', function () {
        $(".top-singer").removeClass("shadow");
        $(this).toggleClass("shadow");
    })
    $('body').on('mouseenter mouseleave', 'div.top-singer', function (event) {
        var $icon = $(this).find('i');
        if (event.type == 'mouseenter') {
            $icon.fadeTo('fast', 1);
        } else {
            $icon.fadeOut('fast');
        }
    });
})
function top_artists() {
    //获取热门歌手信息动态生成DOM
    $.ajax({
        url: "http://localhost:3000/top/artists?offset=0&limit=300",
        type: "GET",
        success: function (result) {
            result = JSON.parse(result);
            console.log(result);
            // console.log(result.artists[0].picUrl);
            var artists = result.artists;
            var $top_artists = $('<div id="top-artists"></div>');
            artists.forEach(function (item, index, array) {
                // console.log(item.picUrl);
                // $('img').eq(index).attr('src', item.picUrl);
                var $top_singer = $('<div class="top-singer"></div>');
                $top_singer.append('<img src="' + item.picUrl + '" alt="" width="200px" height="200px" class="img-rounded"><i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i>').appendTo($top_artists);
                // console.log($top_artists);
            })
            $('.music-search-area').append($top_artists);
        }
    })
}
