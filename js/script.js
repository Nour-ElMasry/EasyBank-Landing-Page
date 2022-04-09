$('#hamburgerBtn').click(function() {
    if ($(".header").hasClass("open")) {
        $(".header").removeClass("open");
        $(".has-fade").removeClass("fade-in");
        $(".has-fade").addClass("fade-out");
    } else {
        $(".has-fade").addClass("fade-in");
        $(".has-fade").removeClass("fade-out");
        $(".header").addClass("open");
    }
});