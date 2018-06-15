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