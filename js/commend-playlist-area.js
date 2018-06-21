$(document).ready(function () {
    $('body').on('click', '.commend-img', function () {
        $(".commend-img").removeClass("shadow");
        $(this).toggleClass("shadow");
    });
    $('body').on('dblclick', '.commend-song', function () {
        var song_id = $(this).attr("data-id");
        var song_name = $(this).attr("data-name");
        var song_artist = $(this).attr("data-artist");
        var list_imgurl = $(this).attr("data-imgurl");
        var song_album = "";
        showImg(list_imgurl);
        //播放选中歌曲
        play_selected_song(song_id, song_name, song_artist, song_album);
        //获取显示相应的歌词
        get_lyrics(song_id);
    })
})
function get_hot_playlists() {
    $.ajax({
        // url: "http://localhost:3000/personalized",
        url: "http://119.23.201.7:3000/personalized",
        type: "GET",
        success: function (data) {
            data = JSON.parse(data);
            result = data.result;
            // console.log(result);
            //获取歌单及歌单的信息创建歌单DOM
            var $accordion = $('<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>');
            result.forEach(function (item, index, array) {
                var id = item.id;
                var name = item.name;
                var description = item.copywriter;
                var counts = item.playCount.toFixed(0);
                var picUrl = item.picUrl;
                var $panel = $('<div class="panel panel-default"></div>');
                var $heading = $('<div class="panel-heading heading" role="tab" id="heading' + index + '"></div>');
                var $bbody = $('<div id="collapse' + index + '" class="panel-collapse collapse body" role="tabpanel" aria-labelledby="heading' + index + '"></div>');
                var $image_information = $('<div class="img-area" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + index + '" aria-expanded="false" aria-controls="collapse' + index + '"><img src="' + picUrl + '" alt="" class="img-rounded commend-img"></div><div class="information"><h3>' + name + '</h3><p>"' + description + '"</p><span>播放次数:' + counts + '次</span></div>');
                $image_information.appendTo($heading);
                $.ajax({
                    // url: "http://localhost:3000/playlist/detail?id=" + id,
                    url: "http://119.23.201.7:3000/playlist/detail?id=" + id,
                    type: "GET",
                    success: function (data) {
                        data = JSON.parse(data);
                        var list = data.result.tracks;
                        //获取歌单详情创建歌曲信息的DOM
                        var $panel_body = $('<div class="panel-body"></div>');
                        var $table = $('<table class="table"></table>');
                        for (var i = 0; i < (list.length >= 10 ? 10 : list.length); i++) {
                            var artist_name = list[i].artists[0].name;
                            var song_id = list[i].id;
                            var song_name = list[i].name;
                            var duration = list[i].duration / 1000;
                            var min = parseInt(duration / 60);
                            var second = parseInt(duration - (min * 60));
                            second = second < 10 ? ('0' + second) : second;
                            var $tr = $('<tr class="commend-song" data-id="' + song_id + '" data-artist="' + artist_name + '" data-name="' + song_name + '"  data-imgurl ="' + picUrl + '"></tr>').append('<td>' + (i + 1) + '&nbsp;&nbsp;' + song_name + '</td><td>' + artist_name + '</td><td>' + min + ':' + second + '</td>');
                            $tr.appendTo($table);
                        }
                        $table.appendTo($panel_body);
                        $panel_body.appendTo($bbody);
                        $heading.appendTo($panel);
                        $bbody.appendTo($panel);
                        $panel.appendTo($accordion);
                    }
                })
            })
            // console.log($accordion);
            $('.commend-playlist-area').append($accordion);
        }
    })
}