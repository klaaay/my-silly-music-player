$(document).ready(function () {
    // 导航条按钮
    $('.commend-playlist-area').css('display', 'none');
    $('.search-result').css('display', 'none');
    $('.hot-artists-area').css('display', 'none');
    $('.new-album-area').css('display', 'none');
    hide_and_show('commend-playlist-area');
    get_hot_playlists();

    $all = $('#playlist,#album,#artist');
    $all_classify = $('.classify-playlist,.classify-album,.classify-artist');
    $all.click(function () {
        var text = $(this).attr('id');
        $all.removeClass('active');
        $(this).addClass('active');
        $all_classify.css('display', 'none');
        $('.classify-' + text).css('display', 'flex');
    })
    //推荐歌单
    $('#playlist').click(function () {
        hide_and_show('commend-playlist-area');
        get_hot_playlists();
    });
    //新专辑
    $('#album').click(function(){
        hide_and_show('new-album-area');
        get_new_albums();
    })
    //热门歌手
    $('#artist').click(function () {
        hide_and_show('hot-artists-area');
        top_artists();
    });
    //歌曲搜索
    $('.search-button').click(function (event) {
        hide_and_show('search-result');
        var text = $('.search-box').val();
        var $tbody = $('tbody');
        $tbody.empty();
        //获取和显示搜索列表
        if (text) {
            search_songs(text, $tbody);
        }
    })
    /*$('body').keydown(function (e) {   
        var keycode = e.keyCode || e.which;  
        var name = $(e.target).attr('name')
        if (name === 'searchBox') {
           if (keycode == 13) {
               e.preventDefault();
               e.stopPropagation();
                $('.search-button').trigger('click');
            } 
        }else {
            return false;
        }
    });
    $('.search-box').keyup(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var keycode = e.which;
        if (keycode == 13) {
            $('.search-button').trigger('click');
        }
    });*/
});
function hide_and_show(text) {
    $('.commend-playlist-area').css('display', 'none');
    $('.search-result').css('display', 'none');
    $('.hot-artists-area').css('display', 'none');
    $('.new-album-area').css('display', 'none');
    $('.' + text).css('display', 'block');
    $('.hot-artists-area').empty();
    $('.commend-playlist-area').empty();
    $('.new-album-area').empty();
}