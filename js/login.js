$(document).ready(function () {
    $('#login').click(function () {
        $('.login').fadeIn();
        $('.main-body').addClass('blur');
    });

    
$('.login-id form').submit(function(){
    console.log($('.login-id input').val());
});
    
    $('.login-button-close').click(()=>{
        $('.login').fadeOut();
        $('.main-body').removeClass('blur');
    });

    $('.login-button-login').click(()=>[
        
    ])
});


