$(document).ready(function(){
    $all = $('#playlist,#album,#artist');
    $all_classify = $('.classify-playlist,.classify-album,.classify-artist');
    $all.click(function(){
        var text = $(this).attr('id');
        // console.log(text);
        $all.removeClass('active');
        $(this).addClass('active');
        console.log('.classify-' + text);
        $all_classify.css('display','none');
        $('.classify-'+text).css('display','flex');
    })

    $('[data-toggle="popover"').each(function(){
        var element = $(this);
        element.popover({
            trigger:"focus",
            placement:"bottom",
            title:"",
            html:"true",
            content:ContentMethod(),
        })
    })
    // .on("mouseenter",function(){
    //     var _this = this;
    //     $(this).popover("show");
    // })
    // .on("mouseleave",function(){
    //     var _this = this;
    //     setTimeout(function(){
    //         // if(!$(".popover:hover").length){
    //             $(_this).popover("hide")
    //         // };
    //     },100);
    // });
});