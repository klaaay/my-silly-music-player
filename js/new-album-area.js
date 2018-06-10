$(document).ready(function () {
})

function get_new_albums(){
    $.ajax({
        url: "http://localhost:3000/top/album?offset=0&limit=30",
        type: "GET",
        success: function (data) {
            data = JSON.parse(data);
            var albums = data.albums;
            console.log(albums);
            var picUrl;
            var name;
            var time;
            var $new_albums = $('<div id="new-albums"></div>');
            albums.forEach(function (item, index, array) {
                // var artists = item.artists;
                // console.log(artists);
                // var $p = $('<p></p>');
                // var artists_str = "";
                // for(var i = 0; i < artists.length;i++){
                //     artists_str += artists[i].name;
                //     if( i !== (artists.length-1)){
                //         artists_str += '<br>';
                //     }
                // }
                // console.log(artists_str);
                picUrl = item.picUrl;
                name = item.name;
                time = new Date(item.publishTime).toLocaleDateString().split('/').join('.');
                var $new_album = $('<div class="new-album"></div>');
                var $img_area = $('<div class="img-area"></div>').append('<img class="disc" src="./img/disc.png" alt=""><img class="img img-circle" src="' + picUrl + '" alt="">');
                var $descripation = $('<div class="descripation text-center"></div>').append('<span>' + name + '</span><span><br><i class="fa fa-hand-o-right" aria-hidden="true"></i>' + time + '</span>');
                $new_album.append($img_area);
                $new_album.append($descripation);
                $new_albums.append($new_album)
                $('.new-album-area').append($new_albums);
            })
        }
    })
}