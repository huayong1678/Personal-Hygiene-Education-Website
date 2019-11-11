$(document).ready(function () {
    $('.pour') //Pour Me Another Drink, Bartender!
        .delay(1500)
        .animate({
            height: '110vh'
        }, 1200)
        .delay(2100)
        .animate({
            bottom: '0'
        }, 1200)
        .slideUp(1000);

    $('#liquid') // I Said Fill 'Er Up!
        .delay(3400)
        .animate({
            height: '20vh'
        }, 2400);

    $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
        .delay(3000)
        .animate({
            bottom: '22vh'
        }, 2800);
});