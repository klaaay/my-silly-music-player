$(document).ready(function () {
    //播放搜索结果歌曲
    $('body').on('dblclick', '.search-result tbody tr', function () {
        var song_id = $(this).attr("data-id");
        // console.log(song_id);
        var song_name = $(this).attr("data-name");
        var song_artist = $(this).attr("data-artist");
        var song_album = $(this).attr("data-album");
        var song_imgurl = $(this).attr("data-imgurl");
        var album_id = $(this).attr("data-albumid");
        //获取专辑图片
        found_album_pic(album_id);
        //播放选中歌曲
        play_selected_song(song_id, song_name, song_artist, song_album);
        //获取显示相应的歌词
        get_lyrics(song_id);
    });
})
//获取专辑图片
function found_album_pic(album_id) {
    $.ajax({
        url: "http://localhost:3000/album?id=" + album_id,
        type: "GET",
        success: function (result) {
            result = JSON.parse(result);
            var album_pic_url = result.songs[0].al.picUrl;
            showImg(album_pic_url);
        }
    })
}
//播放选中歌曲
function play_selected_song(song_id, song_name, song_artist, song_album) {
    $.ajax({
        url: "http://localhost:3000/music/url?id=" + song_id,
        type: "GET",
        success: function (result) {
            var song_url = result.data[0].url;
            $('audio').attr('src', song_url);
            $('.musicname').text(song_name);
            $('.musicer').text(song_artist);
            $('.record').text(song_album);
            //复位歌词位置
            $('.music-lyric .lyric').css('top', 10);
            play();
        }
    })
};
//获取显示相应的歌词
function get_lyrics(song_id) {
    $.ajax({
        url: "http://localhost:3000/lyric?id=" + song_id,
        type: "GET",
        success: function (lyr) {
            var lyr = JSON.parse(lyr);
            if (lyr.uncollected) {
                $('.music-lyric .lyric').html("<li style='top:100px'>抱歉该歌曲暂时没有歌词(；′⌒`)</li>");
            } else {
                if (lyr.nolyric) {
                    $('.music-lyric .lyric').html("<li style='top:100px'>本歌曲为纯音乐，请欣赏O(∩_∩)O</li>");
                }
                else {
                    // console.log(lyr);
                    var lyric = lyr.lrc.lyric;
                    // console.log(lyric);
                    if (!!lyric) {
                        $('.music-lyric .lyric').empty();//清空歌词
                        var line = lyric.split('\n');
                        // console.log(line);
                        var timeReg = /\[\d{2}:\d{2}.\d{2,}\]/g;//歌词时间的正则
                        var result = [];
                        if (line != "") {
                            for (var i in line) {
                                var time = line[i].match(timeReg);
                                if (!time) continue;
                                var value = line[i].replace(timeReg, "");
                                for (j in time) {
                                    var t = time[j].slice(1, -1).split(':');
                                    var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                                    result.push([timeArr, value]);
                                }
                            }
                        }
                        //时间排序
                        result.sort(function (a, b) {
                            return a[0] - b[0];
                        });
                        lyricArr = result;//存到lyricArr里面
                        // console.log(lyricArr);
                        setInterval(showSongTime, 1000);
                        renderLyric();//渲染歌词
                    }
                }
            }
        }
    })
};
//获取和显示搜索列表
function search_songs(text, $tbody) {
    $.ajax({
        url: "http://localhost:3000/search?keywords=" + text,
        type: "GET",
        success: function (data) {
            var data_obj = JSON.parse(data);
            data_obj.result.songs.forEach(function (item, index) {
                // console.log(item.album.id);
                var information = "<tr data-id='" +
                    item.id +
                    "'data-name='" +
                    item.name +
                    "'data-artist='" +
                    item.artists[0].name +
                    "'data-album='" +
                    item.album.name +
                    "'data-imgurl='" +
                    item.artists[0].img1v1Url +
                    "'data-albumid='" +
                    item.album.id +
                    "'> " +
                    "<td>" +
                    item.name +
                    "</td>" +
                    "<td>" +
                    item.artists[0].name +
                    "</td>" +
                    "<td>" +
                    item.album.name +
                    "</td>" +
                    "</tr>";
                $tbody.append(information);
            })
        }
    })
};