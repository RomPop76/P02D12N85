$('.interface').on("click", function() {
// console.log("działa!");
// console.log(this);
// console.log($(this).attr("class"));
// console.log(this.className);
if ($(this).hasClass("orange")) {
    console.log("prawda w pomarańczowy");
    // $('body').toggleClass("orange");
    // $('body').css("background-color", "orange");
    // $("body").css({
    //         "background-color" : "orange"
    // })

    $("body").attr("class", "orange")
    // $("p").css({
    //     "font-size" : "130px",
    // })
}

if ($(this).hasClass("green")) {
    console.log("prawda w zielony");
   
    // $("body").css({
    //         "background-color" : "green"
    // })

    $("body").attr("class", "green")
}

if ($(this).hasClass("increase")) {
    console.log("prawda w plus");
    $(".text").animate({
        "font-size" : "+=10px",
    }, 500)
}

if ($(this).hasClass("move")) {
    console.log("prawda w strzałka");
    $(".text").animate({
        "left" : "+=10px",
        "letter-spacing" : "+=10px"
    }, 500)
}

})






// if (this.classList.contains("green")) {
//     console.log("prawda w zielony");
// }