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
    //热门歌手
    $('#artist').click(function () {
        $('.search-result').css('display', 'none');
        $('.hot-artists-area').empty();
        top_artists();
    })
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