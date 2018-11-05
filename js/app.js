import '../scss/app.scss';

import $ from 'jquery';
import 'slick-carousel';
import Chart from 'chart.js';

import './lib/type';
// import {TweenMax} from 'gsap';
// import Splitter from './lib/splitter';

// let els = document.querySelectorAll(".split");
// [].forEach.call(els, function(el) {
// 	// outerHTML, thats *important*, no direct text nodes should be in parsed HTML
// 	el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
// });
// // var text = $(".split");

// // var split = new SplitText(text);

// function random(min, max){
// 	return (Math.random() * (max - min)) + min;
// }

// $('.letter').each(function(i){
// 	TweenMax.from($(this), 2.5, {
// 		opacity: 0,
// 		// x: random(-500, 500),
// 		// y: random(-500, 500),
// 		// z: random(-500, 500),
// 		scale: .1,
// 		delay: i * .02,
// 		yoyo: true,
// 		repeat: -1,
// 		repeatDelay: 10
// 	});
// });


var overlay = $('.overlay');
var ctx = document.querySelector(".chart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        datasets: [{
            label: 'Online',
            data: [1693, 3200, 1800, 4800, 3000, 3050, 3000],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: true,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                scaleLabel: {
                    display: true,
                    // labelString: 'Month'
                }
            }],
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                pointStyle: 'circle',
                backgroundColor: 'rgba(255, 109, 66,1)',
                radius: 8,
                hoverRadius: 9,
                hitRadius: 9,
                borderColor: 'rgba(255, 59, 0, 1)'
            },
            line: {
                borderColor: 'rgba(255,255,255,1)',
                backgroundColor: 'rgba(0,0,0,0.0)'
            }
        }
    }
});

function tabsEvenets() {
    let tabs = $('.tabs');
    tabs.each(function (tab) {
        let tabsList = $(this).find('.tabs__list');
        let realtab = $(this);
        let osu = 0;
        tabsList.find('.tabs__item').each(function (index) {
            $(this).click(function () {
                tabsList.find('.tabs__item').each(function () {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');
                osu = index;
                realtab.find('.tabs__content').each(function (content) {
                    $(this).removeClass('active');
                    if (content == osu) {
                        $(this).addClass('active');
                    }
                });

            });

        });
    });

}

function tabsEvenetss() {
    let tabs = $('.tabs');
    tabs.each(function (t) {
        let tab = $(this).find('.tab');
        let osu = 0;
        tab.find('.tab__header').each(function (index) {
            $(this).click(function () {
                tab.find('.tab__header').each(function () {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');
                osu = index;
                tab.find('.tab__content').each(function (content) {
                    $(this).removeClass('active');
                    if (content == osu) {
                        $(this).addClass('active');
                    }
                });

            });

        });
    });

}

tabsEvenetss();

function countTimer() {

    // $('.countdown').each(function(){

    // });
    var data_date = $('#countdown').data('timer');
    var target_date = new Date(data_date); // set the countdown date
    var days, hours, minutes, seconds; // variables for time units

    var countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    // setInterval(function () {
    //     getCountdown();
    // }, 1000);

    function getCountdown() {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // days = pad(parseInt(seconds_left / 86400));
        days = 0
        // seconds_left = seconds_left % 86400;
        seconds_left = 0;

        // hours = pad(parseInt(seconds_left / 3600));
        hours = 0;
        // seconds_left = seconds_left % 3600;
        seconds_left = 0;

        // minutes = pad(parseInt(seconds_left / 60));
        minutes = 0;
        // seconds = pad(parseInt(seconds_left % 60));
        seconds = 0;

        // format countdown string + set tag value
        countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
    }

    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }


}

tabsEvenets();

countTimer();

$(document).ready(function () {
    $('.s-slider__wrapper').slick({
        arrows: false,
        dots: true,
        fade: true,
    });
    // $('.slider-go').each(function(){
    //     $(this).click(function(event){
    //         event.preventDefault();
    //         var indexS = 1;
    //         // var slide = $(this).closest('.s-slider__wrapper');
    //         var slide = $('.s-slider__wrapper');
    //         slide.slick('slickGoTo', 2, true);
    //     })
    // })
    $('.slider-go').click(function(event){
        event.preventDefault();
        // var slide = $(this).closest('.s-slider__wrapper');
        var slide = $('.s-slider__wrapper');
        slide.slick('slickGoTo', 1, true);
    })
});

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

var elem = document.querySelector('.custom-input__eye');

elem.addEventListener("click", function () {
    let x = document.getElementById("custom-input__password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
});

$('.user__tab').each(function (el) {

    let temp = el;
    $(this).click(function () {
        $('.user__tab').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('.user__content').each(function (ell) {
            $(this).removeClass('active');
            if (temp == ell) {
                $(this).addClass('active');
            }
        });
    });
});

$('.user__trigger').click(function (event) {
    event.preventDefault();
    let userLogin = $(this);
    $('.overlay').addClass('mobile-overlay');
    $(".mobile-menu__dropdown").removeClass('mobile-menu__dropdown--active');
    overlay.removeClass('active');
    userLogin.addClass('user__login--active');
    $('.user__auth').toggleClass('active');
    $(document).mouseup(function (e) {
        var container = $(".user__auth");
        if (container.has(e.target).length === 0 && $('.user__forgot').has(e.target).length === 0) {
            container.removeClass('active');
            userLogin.removeClass('user__login--active');
            $('.overlay').removeClass('mobile-overlay');
        }
    });
});

$('.user__forgot-trigger').click(function (event) {
    event.preventDefault();
    if ($('.user__auth').hasClass('active')) {
        $('.user__auth').removeClass('active');
        $('.user__forgot').addClass('active');
    } else if ($('.user__forgot').hasClass('active')) {
        $('.user__forgot').removeClass('active');
        $('.user__auth').addClass('active');
        $(document).mouseup(function (e) {
            var container = $(".user__forgot");
            if (container.has(e.target).length === 0 && $('.user__auth').has(e.target).length === 0) {
                container.removeClass('active');
                $('.user__trigger').removeClass('user__login--active');
                $('.overlay').removeClass('mobile-overlay');
            }
        });
    }


});


$('.custom-input').each(function () {
    let customInput = $(this);

    customInput.find('.custom-input__input').focus(function () {
        customInput.find('.custom-input__add').addClass('custom-input__add--focused');
        $(document).mouseup(function (e) {
            var container = customInput;
            if (container.has(e.target).length === 0) {
                customInput.find('.custom-input__add').removeClass('custom-input__add--focused');
            }
        });
    })
});

var mobileTrigger = $('.mobile-menu__trigger');

mobileTrigger.click(function (event) {
    event.preventDefault();
    $('.mobile-menu__dropdown').toggleClass('mobile-menu__dropdown--active');
    overlay.addClass('active');
    $('.mobile-menu__close').click(function () {
        $(".mobile-menu__dropdown").removeClass('mobile-menu__dropdown--active');
        overlay.removeClass('active');
    });
    $(document).mouseup(function (e) {
        var container = $(".mobile-menu__dropdown");
        if (container.has(e.target).length === 0) {
            container.removeClass('mobile-menu__dropdown--active');
            overlay.removeClass('active');
        }
    });
});


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector(".mobile-topline");
// var screen = document.querySelector(".screen");

// // Get the offset position of the navbar
// var sticky = screen.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky")
//     $('.wrapper').addClass('pt');
//   } else {
//     navbar.classList.remove("sticky");
//     $('.wrapper').removeClass('pt');
//   }
// }

(function () {
    var mobileMenuDropdown = $('.mobile-menu__list--dropdown');
    mobileMenuDropdown.each(function () {
        $(this).click(function (event) {
            event.preventDefault();
            $(this).find('.mobile-menu__drop').toggleClass('mobile-menu__drop--active');
        })
    })

})();


