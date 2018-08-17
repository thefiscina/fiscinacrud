$(document).ready(function () {
     'use strict';

    // Main Navigation
    $('.hamburger-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });
    
    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({
        accordion: true,
        contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function () {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

    // Tabs
    $(function () {
        $('.tab-content:first-child').show();

        $('.tab-nav').bind('click', function (e) {
            $this = $(this);
            $tabs = $this.parent().parent().next();
            $target = $($this.data("target"));
            $this.siblings().removeClass('active');
            $target.siblings().css("display", "none");
            $this.addClass('active');
            $target.fadeIn("slow");
        });

        $('.tab-nav:first-child').trigger('click');
    });

    // Circular Progress Bar
    $('#loader_1').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.83,
        size: 156,
        thickness: 3,
        fill: {
            gradient: ["#0c90f1", "#ff3600"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
    });

    $('#loader_2').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.9999,
        size: 156,
        thickness: 3,
        fill: {
            gradient: ["#0c90f1", "#ff3600"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    });

    $('#loader_3').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 156,
        thickness: 3,
        fill: {
            gradient: ["#0c90f1", "#ff3600"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });

    $('#loader_4').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.65,
        size: 156,
        thickness: 3,
        fill: {
            gradient: ["#0c90f1", "#ff3600"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>');
    });

    // Counter
    $(".start-counter").each(function () {
        var counter = $(this);

        counter.countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
    });

    // Bar Filler
    $('.porcentagem').barfiller({ barColor: '#a8518a', duration: 1500 });


    // Load more
    let $container = $('.portfolio-container');
    let $item = $('.portfolio-item');

    $item.slice(0, 9).addClass('visible');

    $('.load-more-btn').on('click', function (e) {
        e.preventDefault();

        $('.portfolio-item:hidden').slice(0, 9).addClass('visible');
    });

 

});