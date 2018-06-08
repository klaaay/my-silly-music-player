$(document).ready(function () {
    //导航条按钮
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
        $('.commend-playlist-area').css('display', 'block');
        $('.search-result').css('display', 'none');
        $('.hot-artists-area').css('display', 'none');
        $('.hot-artists-area').empty();
        $('.commend-playlist-area').empty();
        get_hot_playlists();
    })

    //热门歌手
    $('#artist').click(function () {
        $('.hot-artists-area').css('display', 'block');
        $('.search-result').css('display', 'none');
        $('.commend-playlist-area').css('display', 'none');
        $('.hot-artists-area').empty();
        $('.commend-playlist-area').empty();
        top_artists();
    })
    //歌曲搜索
    $('.search-button').click(function (event) {
        $('.search-result').css('display', 'block');
        $('.hot-artists-area').css('display', 'none');
        $('.commend-playlist-area').css('display', 'none');
        var text = $('.search-box').val();
        var $tbody = $('tbody');
        $tbody.empty();
        $('.hot-artists-area').empty();
        $('.commend-playlist-area').empty();
        //获取和显示搜索列表
        if (text) {
            search_songs(text, $tbody);
        }
    })
    $('.search-box').keyup(function (e) {
        var keycode = e.which;
        if (keycode == 13) {
            $('.search-button').trigger('click');
        }
    });
    //登陆信息下拉框
    $('[data-toggle="popover"').each(function () {
        var element = $(this);
        element.popover({
            trigger: "focus",
            placement: "bottom",
            title: "",
            html: "true",
            content: ContentMethod(),
        })
    })
});