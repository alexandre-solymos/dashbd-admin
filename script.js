$('#menu-toggle,#menu-overlay').click(function(){
  $('body').toggleClass('open-menu');
});

$('#main-nav li a').click(function(){
  $('#main-nav li').removeClass('active');
  $(this).parent().addClass('active')
});