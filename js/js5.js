window.onload = function () {
    "use strict";
    var link,
        linkSearch,
        info;
    link = window.location.href;
    linkSearch = window.location.search;
    info = window.location.search.split('?')[1].split('&');
    document.write(linkSearch + "<br>");
    document.write(info + "<br>");


    /*for (var i = 0; i < info.length; i++) {
        document.write(info[i].split('=')[i] + "is:" + info[i].split('=')[i + 1] + "<br>");

    }*/
    document.write("<h2>Your data from Form : </h2>")
    for (var i in info) {

        document.write("<h3>" + info[i] + "</h3>");


    }




}