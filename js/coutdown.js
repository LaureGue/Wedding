//=====>  Countdown (Edit this with your own date)  <====

$("#countdown").countdown("2016/05/14", function(event) {
  var $this = $(this).html(event.strftime(''
     + '<div class="countdown-col-wrapper col-xs-3"><div class="countdown-col"><span class="countdown-time"> %-D </span> Days </div></div> '
     + '<div class="countdown-col-wrapper col-xs-3"><div class="countdown-col"><span class="countdown-time"> %H </span> Hours </div></div>'
     + '<div class="countdown-col-wrapper col-xs-3"><div class="countdown-col"><span class="countdown-time"> %M </span> Minutes </div></div>'
     + '<div class="countdown-col-wrapper col-xs-3"><div class="countdown-col"><span class="countdown-time"> %S </span> Seconds </div></div>'));
});
