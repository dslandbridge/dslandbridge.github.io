(function () {
    var clientWidth = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
    clientWidth = clientWidth || localStorage.getItem("clientWidth")
    if (clientWidth > 750)
        clientWidth = 750;
    document.documentElement.style.fontSize = clientWidth * 1 / 16 + "px";
})();