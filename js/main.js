$(document).ready(function () {
    loadHeaderAndFooter();
    initStyleAndEvt();
});

// 加载头部和尾部
function loadHeaderAndFooter() {
    $("#header").load('common/header.html');
    $("#footer").load('common/footer.html');
}

// 初始化样式和事件
function initStyleAndEvt() {
    initStyle();
    initEvt();
}

// 初始化样式
function initStyle() {
}

function initLanguageChoose() {
    $(".lang").removeClass("languageChoose");
    var lanCookie = getCookie('i18n_lang');
    if ("" == lanCookie || "cn" == lanCookie) {
        $("#switchToCn").addClass('languageChoose')
    }
    else {
        $("#switchToEn").addClass('languageChoose')
    }
}

// 初始化事件
function initEvt() {
    window.onresize = function () {
        handleStyleAndEvt()
    }
    var href = window.location.href;
    if (href.indexOf("aboutUS.html") > -1) {
        $(".aboutUSTransportBlock").hover(function() { 
            $(this).find(".aboutUSTransportBlockInfo").show();
        },function () { 
            $(this).find(".aboutUSTransportBlockInfo").hide();
        });        
    }

}

function handleStyleAndEvt() {
    initLanguageChoose();
    initHeaderStyle();
    initPageStyle();
}

function initHeaderStyle() {
    if ($("#menuLst span")) {
        $("#menuLst span").remove();
    }
    var href = window.location.href;
    var appendHtml = '';
    if (href.indexOf("home.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".homeMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".homeMenu").prepend(appendHtml);
    }    
    if (href.indexOf("aboutUS.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".aboutUSMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".aboutUSMenu").prepend(appendHtml);
    }
    if (href.indexOf("lineIntro_rail.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".lineIntroductionMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".lineIntroductionMenu").prepend(appendHtml);
    }
    if (href.indexOf("newsDetails.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".newsDetailsMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".newsDetailsMenu").prepend(appendHtml);
    }     
    if (href.indexOf("news.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".newsMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".newsMenu").prepend(appendHtml);
    }  
    if (href.indexOf("partners.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".partnersMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".partnersMenu").prepend(appendHtml);
    }
    if (href.indexOf("line_details.html") > -1) {
        appendHtml += '<span style="background-color: rgb(245,79,79);width:';
        appendHtml += $(".lineDetailsMenu a").width();
        appendHtml += 'px;height: 2px;position: absolute;"></span>';
        $(".lineDetailsMenu").prepend(appendHtml);
    }        
}

function initPageStyle() {
    var href = window.location.href;
    if (href.indexOf("aboutUS.html") > -1) {
        $(".aboutUSTransportBlockInfo").show();
        if ($(".aboutUSIndustryProfileRight") && $(".aboutUSIndustryProfileLeft")) {
            $(".aboutUSIndustryProfileSrc").css("height", $(".aboutUSIndustryProfileRight").height())
        }
        if ($(".aboutUSIndustryProfileRight01") && $(".aboutUSIndustryProfileLeft01")) {
            $(".aboutUSIndustryProfileSrc01").css("height", $(".aboutUSIndustryProfileRight01").height())
        }
        if ($(".aboutUSIndustryProfileRight02") && $(".aboutUSIndustryProfileLeft02")) {
            $(".aboutUSIndustryProfileSrc02").css("height", $(".aboutUSIndustryProfileRight02").height())
        }        
        if ($(".aboutUSTransportBlock")) {
            var maxHeight = 0;
            $(".aboutUSTransportBlock").removeAttr("style");
            $(".aboutUSTransportBlock").each(function () {
                if (parseFloat($(this).height(), 10) > maxHeight) {
                    maxHeight = parseFloat($(this).height(), 10);
                }
            });
            $(".aboutUSTransportBlock").css("height", maxHeight)
            $(".aboutUSTransport").css("height", maxHeight + 100)
        }
        $(".aboutUSTransportBlockInfo").hide();
    }
    if ($(".footerQRPic") && $(".footerQRText")) {
        $(".footerQRText").css('width', $(".footerQRPic").width());
    }
}

function getCookie(name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split('=');
        if (arr1[0] == name) {
            return arr1[1];
        }
    }
    return '';
};