var myAudio = $("audio")[0];
var lyricArr = [];
function play() {
    myAudio.play();
    $('.btn1').removeClass('m-play').addClass('m-pause');
}
function pause() {
    myAudio.pause();
    $('.btn1').removeClass('m-pause').addClass('m-play');
}

$(".btn1").click(function () {
    if (myAudio.paused) {
        play();
    } else {
        pause();
    }
});

//歌词渲染
function renderLyric() {
    var lyrLi = "";
    for (var i = 0; i < lyricArr.length; i++) {
        lyrLi += "<li data-time='" + lyricArr[i][0] + "'>" + lyricArr[i][1] + "</li>"
    }
    $('.music-lyric .lyric').append(lyrLi);
    setInterval(showLyric, 100);
}
//显示歌词
function showLyric() {
    var liH = $(".lyric li").eq(0).outerHeight() - 3;
    for (var i = 0; i < lyricArr.length; i++) {
        var curT = $(".lyric li").eq(i).attr("data-time");
        var nexT = $(".lyric li").eq(i + 1).attr("data-time");
        var curTime = myAudio.currentTime;
        if ((curTime > curT) && (curT < nexT)) {
            $(".lyric li").removeClass("active");
            $(".lyric li").eq(i).addClass("active");
            $('.music-lyric .lyric').css('top', -liH * (i - 3));
        }
    }
}

//歌曲时间控制
function showSongTime() {
    var currentTime = myAudio.currentTime;
    var minutes = parseInt(currentTime / 60);
    // console.log(minutes);
    var seconds = parseInt(currentTime - (minutes * 60));
    if (minutes >= 10) {
        $('.basebar .song-minutes').text(minutes + ':');
    } else {
        $('.basebar .song-minutes').text('0' + minutes + ':');
    }
    if (seconds < 10) {
        $('.basebar .song-seconds').text('0' + seconds);
    } else {
        $('.basebar .song-seconds').text(seconds);
    }
    // console.log(currentTime);
}

setInterval(present, 500)	//每0.5秒计算进度条长度
$(".basebar").mousedown(function (ev) {  //拖拽进度条控制进度
    var posX = ev.clientX;
    var targetLeft = $(this).offset().left;
    var percentage = (posX - targetLeft) / 400 * 100;
    console.log(myAudio.duration);
    myAudio.currentTime = myAudio.duration * percentage / 100;
});
function present() {
    var length = myAudio.currentTime / myAudio.duration * 100;
    $('.progressbar').width(length + '%');//设置进度条长度
    if (myAudio.currentTime == myAudio.duration) {
        myAudio.pause();
    }
}

//icon
$('.m-star').on('click', function () {
    $(this).toggleClass('stared')
})
$('.m-heart').on('click', function () {
    $(this).toggleClass('loved')
})
$('.m-xunhuan').on('click', function () {
    $(this).toggleClass('recycleed').toggleClass('colored')
    if ($(this).hasClass('recycleed')) {
        $('audio').attr('loop', 'loop');
    }
    if ($(this).hasClass('colored')) {
        $('audio').removeAttr('loop', 'no-loop');
    }
})
$('.m-lyric').on('click', function () {
    $(this).toggleClass('lyriced');
    if ($(this).hasClass('lyriced')) {
        $('.background .music-lyric').css({ 'display': 'block' })
    } else {
        $('.background .music-lyric').css({ 'display': 'none' })
    }
})