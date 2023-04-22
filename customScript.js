$('.mainSlider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: false,
    nav: false,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//////////////////News Slider Script
$('.newsSlider').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    nav: true,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$('.eventSlider').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    nav: true,
    autoplayTimeout: 3000,
    smartSpeed: 1200,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});