<<<<<<< HEAD
var num = 30;

var drop_menu = '<table class="drop-menu" style="width:275px;font-family: Verdana, sans-serif;background-color: white;">' +
    '<tr style="display: flex;margin-bottom: 10px;padding-top:5px;">' +
    '<td>' +
    '<img src="img/test.png" class="img-circle" style="width:30px;height: 30px;margin-left: 20px;">' +
    '<span>_hi_ha</span>' +
    '</td>' +
    '<td style="flex-grow: 2;visibility: hidden;"></td>' +
    ' <td>' +
    '<button class="btn btn-default" style="margin-right: 10px;">签到</button>' +
    '</td>' +
    '</tr>' +
    '<tr class="text-center" style="display: flex;padding-bottom: 10px;border-bottom: 1px solid #e9e9e9;">' +
    '<td style="flex-basis: 30%;border-right: 1px solid #e9e9e9;">' +
    '<span style="font-weight:bold;">0</span>' +
    '<br>' +
    '<span>动态</span>' +
    '  </td>' +
    '<td style="flex-basis: 40%;border-right: 1px solid #e9e9e9;">' +
    ' <span style="font-weight:bold;">' + num + '</span>' +
    ' <br>' +
    '<span>关注</span>' +
    ' </td>' +
    ' <td style="flex-basis: 30%;">' +
    '<span style="font-weight:bold;">7</span>' +
    '<br>' +
    ' <span>粉丝</span>' +
    '</td>' +
    ' </tr>' +
    ' <tr style="display: flex;padding-top:10px;">' +
    '<td style="margin-left: 20px;"><i class="fa fa-yelp" aria-hidden="true" style="padding-right:10px;"></i>等级</td>' +
    '<td style="flex-grow: 2;visibility: hidden;"></td>' +
    '<td style="margin-right: 20px;font-weight:bold;">Lv.7' +
    ' <i class="fa fa-angle-right" aria-hidden="true"></i>' +
    '  </td>' +
    '  </tr>' +
    '<tr style="display: flex;padding-top:10px;padding-bottom: 10px;border-bottom: 1px solid #e9e9e9;">' +
    '<td style="margin-left: 20px;"><i class="fa fa-shopping-cart" aria-hidden="true" style="padding-right:10px;"></i>商城</td>' +
    '  <td style="flex-grow: 2;visibility: hidden;"></td>' +
    '<td style="margin-right: 20px;">' +
    '<i class="fa fa-angle-right" aria-hidden="true"></i>' +
    '</td>' +
    '</tr>' +
    '<tr style="display: flex;padding-top:10px;">' +
    '<td style="margin-left: 20px;"><i class="fa fa-cog" aria-hidden="true" style="padding-right:10px;"></i>个人信息设置</td>' +
    '<td style="flex-grow: 2;visibility: hidden;"></td>' +
    '<td style="margin-right: 20px;">' +
    '<i class="fa fa-angle-right" aria-hidden="true"></i>' +
    '</td>' +
    '</tr>' +
    '<tr style="display: flex;padding-top:10px;padding-bottom: 10px;border-bottom: 1px solid #e9e9e9;">' +
    '<td style="margin-left: 20px;"><i class="fa fa-gift" aria-hidden="true" style="padding-right:10px;"></i>绑定社交账号</td>' +
    '<td style="flex-grow: 2;visibility: hidden;"></td>' +
    '<td style="margin-right: 20px;">' +
    '<i class="fa fa-weibo" aria-hidden="true" style="padding-right:10px;"></i>' +
    '<i class="fa fa-twitter" aria-hidden="true"></i>' +
    '</td>' +
    '</tr>' +
    '<tr style="display: flex;padding-top:10px;padding-bottom: 5px;">' +
    '<td style="margin-left: 20px;"><i class="fa fa-sign-out" aria-hidden="true" style="padding-right:10px;"></i>退出登录</td>' +
    '</tr>' +
    '</table>';


function ContentMethod() {
    return drop_menu;
}
=======
 function ContentMethod() {
     let drop_menu =
         '<table class="drop-menu">' +
         '<tr>' +
         '<td>' +
         '<img src=' + sAvatarUrl + ' class="img-circle" style="width:30px;height: 30px;margin-left: 20px; margin-right:5px;">' +
         '<span style="font-weight:bold;">' + sNickname + '</span>' +
         '</td>' +
         '<td style="flex-grow: 2;visibility: hidden;"></td>' +
         ' <td>' +
         '</td>' +
         '</tr>' +
         '<tr class="text-center">' +
         '<td style="flex-basis: 30%;border-right: 1px solid #e9e9e9;">' +
         '<span style="font-weight:bold;">' + iEventCount + '</span>' +
         '<br>' +
         '<span>动态</span>' +
         '  </td>' +
         '<td style="flex-basis: 40%;border-right: 1px solid #e9e9e9;">' +
         ' <span id="follows" style="font-weight:bold;">' + iFollows + '</span>' +
         ' <br>' +
         '<span>关注</span>' +
         ' </td>' +
         ' <td style="flex-basis: 30%;">' +
         '<span id="followeds" style="font-weight:bold;">' + iFolloweds + '</span>' +
         '<br>' +
         ' <span>粉丝</span>' +
         '</td>' +
         ' </tr>' +
         ' <tr>' +
         '<td style="margin-left: 20px;"><i class="fa fa-yelp" aria-hidden="true" style="padding-right:10px;"></i>等级</td>' +
         '<td style="flex-grow: 2;visibility: hidden;"></td>' +
         '<td style="margin-right: 20px;font-weight:bold;">Lv.' + iLevel +
         '  </td>' +
         '  </tr>' +
         '<tr>' +
         '<td style="margin-left: 20px;"><i class="fa fa-music" aria-hidden="true" style="padding-right:10px;"></i>听歌数</td>' +
         '  <td style="flex-grow: 2;visibility: hidden;"></td>' +
         '<td style="margin-right: 20px;font-weight:bold;">' + iListenSongs +
         '</td>' +
         '</tr>' +
         '<tr>' +
         '</tr>' +
         '<tr>' +
         '<td style="margin-left: 20px;" onclick="exit()"><i class="fa fa-sign-out" aria-hidden="true" style="padding-right:10px;"></i><span id="logOut">退出登录</span></td>' +
         '</tr>' +
         '</table>';
     if (bStatus_login) {
         return drop_menu;
     } else {
         return;
     }
 }
 function exit() {
     bStatus_login = false;
     $('[data-toggle="popover"').each(function () {
         $(this).popover('destroy');
     });
     $('#login span').html('Sign in');
 }
>>>>>>> 6f5c17edce21e3280c1ee15711be7dbeab6cf8cf
