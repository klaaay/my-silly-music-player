//设置一个是否登陆的状态；
let bStatus_login = false;
let iFollows;
let iFolloweds;
let sAvatarUrl;
let sNickname;
let iUid;
let iLevel;
let iListenSongs;
let iPhoneNumber;
let sPassword;
let iEventCount;

//登陆界面设置
$(document).ready(function () {
    //点击右上角用户图标；
    $('#login').click(function () {
        //如果没有登陆
        if (!bStatus_login) {
            $('.login').fadeIn(); //展现出登陆框；
            $('#input-phone').val('');
            $('#input-password').val('');
            $('body').append($('<div class="mask"></div>'));
        }
    });

    $('#login').on('inserted.bs.popover', function () {
        $('.daily-signin').click(function () {
            $('.daily-signin').text('已签到');
        });
    });

    //点击:关闭登陆框；
    $('.login-button button:last').click(() => {
        $('.mask').remove();
        $('.login').fadeOut();
    });


    //点击:登陆按钮；
    $('.login-content form').submit(() => {

        phoneNumber = $('#input-phone').val(); //获取uid的值；
        password = $('#input-password').val();

        fnLogin(phoneNumber, password);
    });
});
