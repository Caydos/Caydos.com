

var btnList = false;
var btnList2 = false;

$(".btnList1").hide();
$(".btnList2").hide();
$(".btnList3").hide();
$(".btnList4").hide();
$(".btnList21").hide();
$(".btnList22").hide();



// $(".baseDivHeader").prepend("<div class='title'>Gestion Entreprise</div>")


function divShowX(divC) {
    console.log(divC)
    if (divC === "btnList") {
        if (btnList == false) {
            $(".btnList1").show();
            $(".btnList2").show();
            $(".btnList3").show();
            $(".btnList4").show();
            $(".btnList21").hide();
            $(".btnList22").hide();
            btnList = true;
        } else {
            $(".btnList1").hide();
            $(".btnList2").hide();
            $(".btnList3").hide();
            $(".btnList4").hide();
            btnList = false;
        }
    }
    if (divC === "btnList2") {
        if (btnList2 == false) {
            $(".btnList21").show();
            $(".btnList22").show();
            $(".btnList1").hide();
            $(".btnList2").hide();
            $(".btnList3").hide();
            $(".btnList4").hide();
            btnList2 = true;
        } else {
            $(".btnList21").hide();
            $(".btnList22").hide();
            btnList2 = false;
        }
    }
}
