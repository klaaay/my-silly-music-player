$(document).ready(function () {
    $('.search-button').click(function (event) {
        // event.preventdefault();
        var text = $('.search-box').val();
        // console.log(text);
        var $tbody = $('tbody');
        $tbody.empty();
        console.log(text);
        $.ajax({
            url: "http://localhost:3000/search?keywords=" + text,
            type: "GET",
            success: function (data) {
                var data_obj = JSON.parse(data);
                console.log(data_obj);
                data_obj.result.songs.forEach(function (item, index) {
                    // console.log(item.name);
                    // console.log(item.artists[0].name);
                    // console.log(item.album.name);
                    var information = "<tr>" +
                        "<td>" +
                        item.name +
                        "</td>" +
                        "<td>" +
                        item.artists[0].name +
                        "</td>" +
                        "<td>" +
                        item.album.name +
                        "</td>" +
                        "</tr>";
                    $tbody.append(information);
                })
            }
        })
    })
})