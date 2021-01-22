$(".js-offcanvas").hiraku({
    btn: ".js-offcanvas-btn"
    , fixedHeader: ".js-fixed-header"
    , direction: "right"
    , breakpoint: 997
});
$('.js-close-btn').click(function () {
    $(".js-hiraku-offcanvas").click()
});