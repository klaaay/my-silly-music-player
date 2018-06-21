function fnDetails(uid) {
    $.ajax({
        async: false,
        url: 'http://localhost:3000/user/detail?uid=' + uid,
        type: "GET", //提交方式
        success: (data) => { //返回数据根据结果进行相应的处理
            iLevel = data.level;
            iListenSongs = data.listenSongs;
            iEventCount = data.profile.eventCount;
            iFollows = data.profile.follows;
            iFolloweds = data.profile.followeds;
        },
        error: () => {
            level = -1;
            iListenSongs = -1;
            iEventCount = - 1;
            iFollows = -1;
            iFolloweds = -1;
        }
    });
}

function fnLogin(phoneNumber, password) {
    $.ajax({
        async: false,
        url: 'http://localhost:3000/login/cellphone?phone=' + phoneNumber + '&password=' + password,
        type: "GET", //提交方式
        success: (data) => { //返回数据根据结果进行相应的处理
            console.log(data);
            if (data.loginType == 1) { //表示从api已经得到数据
                bStatus_login = true; //设置登陆状态为成功 
                console.log('login success'); //输出日志 登陆成功

                //开始数据操作；
                sAvatarUrl = data.profile.avatarUrl;
                sNickname = data.profile.nickname;
                iUid = data.profile.userId;

                fnDetails(iUid);

                $('#login span').html(sNickname);

                //右上角显示用户信息 信息的获取是上几行代码；

                $('[data-toggle="popover"').each(function () {
                    $(this).popover({
                        placement: "bottom",
                        html: "true",
                        content: ContentMethod()
                    });
                    // $(this).popover('show');

                });
                $('.login-error-code').remove();
                $('.mask').remove();
                $('.login').fadeOut(); //登陆框消失；

            } else {
                if (!$('.login-error-code').length) {
                    let $p = $('<p class="text-center login-error-code"></p>').html(data.msg);
                    $('.login-button').before($p);
                } else {
                    $('.login-error-code').remove();
                    let $p = $('<p class="text-center login-error-code"></p>').html(data.msg);
                    $('.login-button').before($p);
                }
            }
        },
        error: (data) => {
            console.log(data);
            console.log('Login error. Can not get access to the API provided.');
            if (!$('.login-error-code').length) {
                let $p = $('<p class="text-center login-error-code"></p>').html(data.msg);
                $('.login-button').before($p);
            } else {
                $('.login-error-code').remove();
                let $p = $('<p class="text-center login-error-code"></p>').html(data.msg);
                $('.login-button').before($p);
            }
        }
    });
}

function fnSignin(a) {
    let done = false;
    $.ajax({
        async: false,
        url: 'http://localhost:3000/daily_signin',
        type: "GET", //提交方式
        success: (data) => { //返回数据根据结果进行相应的处理
            console.log(data);
            done = true;
        }
    });
    return done;
}