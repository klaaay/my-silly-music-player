$(document).ready(function () {
    //被点击的歌手出现阴影效果，及实现HOVER效果
    $('body').on('click', '.top-singer', function () {
        $(".top-singer").removeClass("shadow");
        $(this).toggleClass("shadow");
    })
    //双击实现歌手电台的播放
    $('body').on('dblclick', '.top-singer', function () {
        var singer_id = $(this).attr("data-id");
        var song_artist = $(this).attr("data-name");
        // console.log(song_artist);
        var picUrl = $(this).attr("data-picUrl");
        var song_id;
        random_artists_song_play(singer_id, song_artist, picUrl, song_id);
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
        // url: "http://localhost:3000/top/artists?offset=0&limit=300",
        url: "http://119.23.201.7:3000/top/artists?offset=0&limit=300",
        type: "GET",
        success: function (result) {
            result = JSON.parse(result);
            // console.log(result);
            var artists = result.artists;
            var $top_six_singer = $('.classify-artist span');
            for (var i = 0; i < 6; i++) {
                $top_six_singer.eq(i).text(artists[i].name);
            }
            // console.log(artists[0].name);
            var $top_artists = $('<div id="top-artists"></div>');
            artists.forEach(function (item, index, array) {
                // console.log(item.id);
                var $top_singer = $('<div class="top-singer" data-id="' + item.id + '" data-name="' + item.name + '" data-picUrl="' + item.picUrl + '" data-toggle="tooltip" data-placement="top" title="' + item.name + '" ></div>');
                $top_singer.append('<img src="' + item.picUrl + '" alt="" width="200px" height="200px" class="img-rounded"><i class="fa fa-play-circle-o fa-3x" aria-hidden="true"></i>').appendTo($top_artists);
            })
            $('.hot-artists-area').append($top_artists);
            $('[data-toggle="tooltip"]').tooltip();
        }
    })
}

function random_artists_song_play(singer_id, song_artist, picUrl, song_id) {
    $.ajax({
        // url: "http://localhost:3000/artists?id=" + singer_id,
        url: "http://119.23.201.7:3000/artists?id=" + singer_id,
        type: "GET",
        success: function (result) {
            result = JSON.parse(result);
            // console.log(result.hotSongs);
            var i = Math.floor(Math.random() * (result.hotSongs.length - 0 + 1) + 0);
            song_id = result.hotSongs[i].privilege.id;
            var song_name = result.hotSongs[i].name;
            var song_album = "";
            showImg(picUrl);
            play_selected_song(song_id, song_name, song_artist, song_album);
            get_lyrics(song_id);
        }
    })
}