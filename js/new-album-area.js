$(document).ready(function () {
    $('body').on('click', '.new-album .img-area .img', function () {
        $('.new-album .img-area .img').css('animation', '');
        $(this).css('animation', ' rotate 5s infinite linear');
    })
})

function get_new_albums() {
    $.ajax({
        url: "http://localhost:3000/top/album?offset=0&limit=30",
        type: "GET",
        success: function (data) {
            data = JSON.parse(data);
            var albums = data.albums;
            var picUrl;
            var name;
            var time;
            var id;
            var $new_albums = $('<div id="new-albums"></div>');
            albums.forEach(function (item, index, array) {
                picUrl = item.picUrl;
                name = item.name;
                id = item.id;
                time = new Date(item.publishTime).toLocaleDateString().split('/').join('.');
                var $new_album = $('<div class="new-album"></div>');
                var $img_area = $('<div class="img-area" data-toggle="modal" data-id="' + id + '" data-target=".album-comment' + index + '">').append('<img class="disc" src="./img/disc.png" alt=""><img class="img img-circle" src="' + picUrl + '" alt="">');
                var $descripation = $('<div class="descripation text-center"></div>').append('<span>' + name + '</span><span><br><i class="fa fa-hand-o-right" aria-hidden="true"></i>' + time + '</span>');
                $new_album.append($img_area);
                $new_album.append($descripation);
                var $modal = $('<div class="modal fade album-comment' + index + '">')
                var $dialog = $('<div class="modal-dialog modal-lg"></div>');
                var $content = $('<div class="modal-content"></div>');
                var $content1 = $('<div class="modal-content">该歌曲尚未评论(；′⌒`)</div>');
                var $table = $('<table class="table comment-area"></table>');
                get_album_comments(id, $table, $content);
                $content.append($table);
                $dialog.append($content);
                $modal.append($dialog);
                $new_albums.append($new_album);
                $new_albums.append($modal);
                $('.new-album-area').append($new_albums);
            })
        }
    })
}

function get_album_comments(id, $table, $content) {
    $.ajax({
        url: "http://localhost:3000/comment/album?id=" + id,
        type: "GET",
        success: function (data) {
            data = JSON.parse(data);
            var comments = data.comments;
            if (comments.length) {
                comments.forEach(function (item, index, array) {
                    var picUrl = item.user.avatarUrl;
                    var id = item.user.nickname;
                    var content = item.content;
                    var time = new Date(item.time).toLocaleDateString() + '&nbsp;' + new Date(item.time).toLocaleTimeString();
                    var $tr = $('<tr></tr>');
                    var $td1 = $('<td></td>').append('<img src="' + picUrl + '" alt="" class="img-circle">').appendTo($tr);
                    var $td2 = $('<td></td>').append('<span class="text-primary id">' + id + ':</span><span class="comment">' + content + '</span><br><br><span class="time">' + time + '</span>').appendTo($tr);
                    $table.append($tr);
                })
            }
        }
    })
}