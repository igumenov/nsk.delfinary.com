$(document).ready(function(){
    function coverImg(img){
        $(img).each(function(){
            $(this).css('visibility','hidden');
            var t = $(this),
                src = t.attr('src');
            t.parent().css({
                'background':'url('+src+') center center',
                'background-size':'cover'
            })
        })
    }
    coverImg('#slider .item img');
    coverImg('.fotorama__loaded--img img');

    $('.fancybox').fancybox({
        padding: 0,
		
    });
    $('#slider').slick({
        // infinite: false,
        dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            }
        ],
    }); 
    $('#index_news .items').slick({
        // infinite: false,
        dots: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ],
    }); 
    $('#news_item_slider').slick({
        infinite: false,
        slide: 'a',
        dots: true,
        dotsClass: 'custom_paging',
            customPaging: function (slider, i) {
            return  (i + 1);
        },
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
    }); 
    var total_count_slide = $("#news_item_slider").slick("getSlick").slideCount;
    $('.custom_paging').append('<li>/'+ total_count_slide+ '</li>')
    // alert($("#slider").slick("getSlick").slideCount);


    $('footer a.more').on('click', function(){
        $('footer .more_social').toggle();
    });
    $('#line_1 .tel a').on('click', function(){
        $(' #callback').toggle();
    });
    $('#line_1 .close_modal').on('click', function(){
        $('#callback').toggle('fast');
    });
    $('header .mobile_menu').on('click', function(){
        $('header .sitemenu_mobile .menu').slideToggle('fast');
        $('header .m_menu_close').toggle();
        $("body").css("overflow","hidden"); 
    });

    $('header .sitemenu_mobile .m_menu_close').on('click', function(){
        $('header .sitemenu_mobile .menu').slideToggle('fast');
        $('header .m_menu_close').toggle();
        $("body").css("overflow","auto");
    });
    $('header .sitemenu_mobile .tel a').on('click', function(){
        $(' #callback2').toggle();
    });
    $('header .sitemenu_mobile .close_modal').on('click', function(){
        $('#callback2').toggle('fast');
    });    
	
	$('.sub_menu').on('click', function(){
        $('.sub_menu').addClass('opened');
    });
    //счетчик символов в форме добавления отзыва
    var maxCount = 400;

    $("#counter").html(maxCount);

    $("#review-text").keyup(function() {
    var revText = this.value.length;

        if (this.value.length > maxCount)
            {
            this.value = this.value.substr(0, maxCount);
            }
        var cnt = (maxCount - revText);
        if(cnt <= 0){$("#counter").html('0');}
        else {$("#counter").html(cnt);}

    });

    $("[type=file]").on("change", function(){
        // Name of file and placeholder
        var file = this.files[0].name;
        var dflt = $(this).attr("placeholder");
        if($(this).val()!=""){
            $(this).next().next().text(file);
        } else {
            $(this).next().next().html(file);
        }
    });


    //карта
    $(function() {
		var LocsA = [
			{
				lat: 50.9308368,
				lon: 6.1007468,
				icon: 'images/marker.png',
				show_infowindow: false,
				zoom:15,
				animation: google.maps.Animation.DROP
			},
		];			
		new Maplace({
			locations: LocsA,
			map_div: '#gmap-list',
			controls_type: 'list',
			controls_on_map: false,
			show_infowindow: false,
			start: 0,
			zoom:6,
		}).Load(); 
    });


});