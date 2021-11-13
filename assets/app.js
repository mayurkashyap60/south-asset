// Ram
$(document).ready(function() {
    var theta = 0;
    var scrollTimer = null;
    var isScroll = false;
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"
    document.addEventListener(mousewheelevt, function(e) {
        if (!isScroll) {
            isScroll = true;

            if (!e) { e = window.event; }
            if (e.preventDefault) { e.preventDefault(); }
            e.returnValue = false;

            var evt = window.event || e;
            var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;

            if (delta > 0) {
                theta -= 72;
                //theta = (theta <= -361) ? 0 : theta;
            } else {
                theta += 72;
                //theta = (theta >= 361) ? 0 : theta;
            }
            pageAnimation();
            scrollTimer = setTimeout(function() {
                isScroll = false;
            }, 1000);
        }
        return false;
    }, false);

    //Scroll  To Explore
    $(".scroll_to_explore").on('click', function() {
        theta += 72;
        pageAnimation();
    });

    let touchstartX = 0;
    let touchendX = 0;
    let touchstartY = 0;
    let touchendY = 0;
    const slider = document.getElementById('swiped');

    slider.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        //console.log("start", e.changedTouches[0]);
        touchstartY = e.changedTouches[0].screenY;
    });

    slider.addEventListener('touchend', e => {
        //console.log(e.changedTouches[0]);
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;  
        var diffX = touchstartX - touchendX;  
        var diffY = touchstartY - touchendY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (touchendX < touchstartX)
                theta -= 72;
            else if (touchendX > touchstartX)
                theta += 72;
            pageAnimation();
        }

    });
    var btnlinkElList = document.querySelectorAll(".btnlink");
    document.querySelector(".btnlink[dc-theta='0']").classList.add("active");


    function pageAnimation() {

        for (let btnlinkEl of btnlinkElList) {
            let dcTheta = btnlinkEl.getAttribute("dc-theta");
            btnlinkEl.classList.remove("active");

            let dcThetaStep = (theta / 72) % 5;
            //console.log(theta, dcThetaStep)
            if (dcThetaStep < 0) {
                dcThetaStep = 5 - (-1 * dcThetaStep);
            }
            if (dcThetaStep == dcTheta) {
                btnlinkEl.classList.add("active");
            }
        }

        $(".wheel-bg").animate({ rotate: theta }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + theta + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + theta + 'deg)');
                $(this).css('transform', 'rotate(' + theta + 'deg)');
            }
        });
        $(".pyramids").animate({ rotate: theta }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + theta + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + theta + 'deg)');
                $(this).css('transform', 'rotate(' + theta + 'deg)');
            }
        });
        $(".wheel-1").animate({ rotate: (-1 * theta) }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + (-1 * theta) + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + (-1 * theta) + 'deg)');
                $(this).css('transform', 'rotate(' + (-1 * theta) + 'deg)');
            }
        });
        $(".wheel-2").animate({ rotate: theta }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + theta + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + theta + 'deg)');
                $(this).css('transform', 'rotate(' + theta + 'deg)');
            }
        });
        $(".clouds").animate({ rotate: theta }, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + theta + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + theta + 'deg)');
                $(this).css('transform', 'rotate(' + theta + 'deg)');
            }
        });
        // $(".wheel-btns").animate({ rotate: theta }, {
        //     step: function(now, fx) {
        //         $(this).css('-webkit-transform', 'rotate(' + theta + 'deg)');
        //         $(this).css('-moz-transform', 'rotate(' + theta + 'deg)');
        //         $(this).css('transform', 'rotate(' + theta + 'deg)');
        //     }
        // });
    }

});