

var btnList = true;
$(".btn1").css({"border-top": "0.3rem solid", "border-top-color": "rgb(101, 180, 212)"});

var btnList2 = false;
var btnList3 = false;

var stats = false;

$(".btnList1").show();
$(".btnList2").show();
$(".btnList3").show();
$(".btnList4").show();
$(".btnList21").hide();
$(".btnList22").hide();
// $(".statsTable").hide();
// $(".statsTable").hide();


// $(".baseDivHeader").prepend("<div class='title'>Gestion Entreprise</div>")

function resetAll() {
    $(".btnList1").hide();
    $(".btnList2").hide();
    $(".btnList3").hide();
    $(".btnList4").hide();
    $(".btnList21").hide();
    $(".btnList22").hide();
    $(".statsTable").hide();
    $(".btn1").css({"border-top": "", "border-top-color": ""});
    $(".btn2").css({"border-top": "", "border-top-color": ""});
    $(".btn3").css({"border-top": "", "border-top-color": ""});
    $(".btnList2").css("background-color", "black");
    $(".btnList21 p").css("color", "white");
    btnList = false;
    btnList2 = false;
    btnList3 = false;
    stats = false;
}
function divShowX(divC) {
    console.log(divC)
    if (divC === "btnList") {
        if (btnList == false) {
            resetAll()
            $(".btn1").css({"border-top": "0.4rem solid", "border-top-color": "rgb(101, 180, 212)"});
            $(".btnList1").show();
            $(".btnList2").show();
            $(".btnList3").show();
            $(".btnList4").show();
            btnList = true;
        } else {
            resetAll()
        }
    }
    if (divC === "btnList2") {
        if (btnList2 == false) {
            resetAll()
            $(".btn2").css({"border-top": "0.4rem solid", "border-top-color": "rgb(101, 180, 212)"});
            $(".btnList21").show();
            $(".btnList22").show();
            btnList2 = true;
        } else {
            resetAll()
        }
    }
    if (divC === "stats") {
        if (stats === false) {
            resetAll()
            $(".btn2").css({"border-top": "0.4rem solid", "border-top-color": "rgb(101, 180, 212)"});
            $(".btnList21").css("background-color", "white");
            $(".btnList21 p").css("color", "black");
            $(".btnList21").show();
            $(".btnList22").show();
            $(".statsTable").show();
            btnList2 = true;
            stats = true;

        } else {
            resetAll()
            $(".btnList2").css("background-color", "black");
            $(".btnList21 p").css("color", "white");
            $(".btnList21").show();
            $(".btnList22").show();
            btnList2 = true;
        }
    }
}
