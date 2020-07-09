(function ($) {
    $("#sidebarToggle").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };

        let classBody = $('body').attr('class');
        $('#projects').removeClass();

        if (classBody == 'sidebar-toggled') {
            $('#projects').toggleClass('nav-link disabled collapsed');
        } else {
            $('#projects').toggleClass('nav-link collapsed');
        }

        let classIcon = $('#sidebarToggle').attr('class');

        $('#sidebarToggle').removeClass(classIcon);

        classIcon = classIcon == 'cil-arrow-circle-left border-0' ? 'cil-arrow-circle-right border-0' : 'cil-arrow-circle-left border-0';
        $('#sidebarToggle').addClass(classIcon);

        boardGrid.refreshItems().layout();
    });

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };

        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('hide');
        };
    });

    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $(document).on('click', 'a.scroll-to-top', function (e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });

    $("#addProject").on('click', function (e) {
        let nameProject = $('#name-project').val();

        if (nameProject) {
            $('#list-projects').append('<a class="collapse-item"><i class="cil-school icon"></i> ' + nameProject + '</a>');
        } else {
            alert('Preencha o campo de nome...');
        }
    });

    $('#projects').on('click', function (e) {
        let classIcon = $('#icon-project').attr('class');

        $('#icon-project').removeClass(classIcon);

        classIcon = classIcon == 'cil-arrow-circle-bottom' ? 'cil-arrow-circle-top' : 'cil-arrow-circle-bottom';
        $('#icon-project').addClass(classIcon);
    });
})(jQuery);