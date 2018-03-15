;(function ($) {

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

    window.onload = function () {
        var map;
        var point =  {lat: 55.7421357, lng: 37.6530287};
        var iv1content = document.querySelector('.info-window-1');
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,  
                zoom: 17,
                disableDefaultUI: true
            });
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                title: 'Нижняя Радищевская улица, 5 строение 1',
                //icon: '../images/logo.svg'
            });
            var infowindow = new google.maps.InfoWindow({
                content: iv1content
            });
            marker.addListener('click', function(){
                infowindow.open(map, marker);
            });
        }
        initMap()
    }
    $(function () {
        $('.slider').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            alidesToScroll: 2,
            infinite: true
        });
    });
})(jQuery);