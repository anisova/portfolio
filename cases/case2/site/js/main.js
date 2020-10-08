$(function(){
$('.service__text').equalHeights();
$('select').selectize();
$(".owl-carousel").owlCarousel({
		loop:true,
		items:1,
		dots:true,
		smartSpeed:700})
});

$(function() {
    var height = $( '.service__text' ).height(); //получаем высоту одного элемента
    $( '.service__img_n' ).height(height); //записываем высоту другому элементу
});
       $(function() {
    var height = $( '.service__text' ).height(); //получаем высоту одного элемента
    $( '.service__img_c' ).height(height); //записываем высоту другому элементу
});
          $(function() {
    var height = $( '.service__text' ).height(); //получаем высоту одного элемента
    $( '.service__img_h' ).height(height); //записываем высоту другому элементу
});





