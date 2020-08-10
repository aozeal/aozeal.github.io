
var bag_status = 0;
var hashi_status = 0;
var microwave_status = 0;
var point_card_status = 0;
var payment_status = "money";
var rotate_deg = "";

var bag_frame = document.getElementById("bag_frame")
var hashi_frame = document.getElementById("hashi_frame")
var microwave_frame = document.getElementById("microwave_frame")
var point_card_frame = document.getElementById("point_card_frame")
var payment_frame = document.getElementById("payment_frame")


function change_item_status(frame_id, text_id){
    if (bag_status == 0) {
        bag_status = 1;
        document.getElementById(text_id).innerHTML = "必要";
        document.getElementById(text_id).style.color = "#E65757";
        document.getElementById(frame_id).style.backgroundColor="#F0F2BF";
    }
    else{
        bag_status = 0;
        document.getElementById(text_id).innerHTML = "不要";
        document.getElementById(text_id).style.color = "#b5b5b5";
        document.getElementById(frame_id).style.backgroundColor="#EBEBEB";
    }
}

bag_frame.onclick = function() {
    change_item_status("bag_frame", "bag_text");
};

hashi_frame.onclick = function() {
    change_item_status("hashi_frame","hashi_text");
};

microwave_frame.onclick = function() {
    change_item_status("microwave_frame","microwave_text");
};



function change_pc_status(){
    if (point_card_status == 0) {
        point_card_status = 1;
        document.getElementById("point_card_text").innerHTML = "使う";
        document.getElementById("point_card_text").style.color = "#E65757";
        document.getElementById("point_card_frame").style.backgroundColor="#E7FCF8";
    }
    else if(point_card_status == 1){
        point_card_status = 2;
        document.getElementById("point_card_text").innerHTML = "貯める";
        document.getElementById("point_card_text").style.color = "#E65757";
        document.getElementById("point_card_frame").style.backgroundColor="#93FFD9";

    }
    else{
        point_card_status = 0;
        document.getElementById("point_card_text").innerHTML = "なし";
        document.getElementById("point_card_text").style.color = "#b5b5b5";
        document.getElementById("point_card_frame").style.backgroundColor="#EBEBEB";
    }
}
point_card_frame.onclick = function() {
    change_pc_status();
};

//var payment_select = document.getElementById("payment_select")

payment_frame.onclick = function(){
    $("#payment-dialog").dialog();
}

function change_payment_status(index){
    var payment_type = ["現金", "クレジットカード", "交通系電子マネー", "楽天Edy", "ＷＡＯＮ", "ｎａｎａｃｏ", "ｉＤ", "QuickPay", "PayPay", "LINE Pay", "d払い", "au PAY", "その他"];
    var payment_icon = ["img/money.png", "img/credit_card.png", "img/suica.png", "img/Edy.png", "img/waon.png", "img/nanaco.png", "img/iD.png", "img/QuickPay.png", "img/PayPay.png", "img/LINEPay.png", "img/dBarai.png", "img/auPAY.png", "img/noicon.png"];

    document.getElementById("payment_text").innerHTML = payment_type[index];
    document.getElementById("payment_icon").src = payment_icon[index];
}

//payment_select.onchange = function(){
//    change_payment_status(this.selectedIndex);
//}

var rotate_img = document.getElementById("rotate_img")

rotate_img.onclick = function() {
    if (rotate_deg == "rotate(180deg)"){
        document.getElementById("container").style.transform = "rotate(0deg)";
        rotate_deg = document.getElementById("container").style.transform
    }
    else{
        document.getElementById("container").style.transform = "rotate(180deg)";
        rotate_deg = document.getElementById("container").style.transform
    }
};


