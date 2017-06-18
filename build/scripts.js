(function() {
  $(document).ready(function() {
    var load, unload;
    $('.button').addClass('load_button');
    load = function(x, y, z) {
      x.removeClass('unload_button');
      x.addClass('load_button');
      if (x.hasClass('open')) {
        y.removeClass('unload_button');
        y.addClass('load_button');
        z.removeClass('unload_button');
        return z.addClass('load_button');
      }
    };
    unload = function(x, y, z) {
      x.removeClass('load_button');
      x.addClass('unload_button');
      if (y.hasClass('load_button') && z.hasClass('load_button')) {
        y.removeClass('load_button');
        y.addClass('unload_button');
        z.removeClass('load_button');
        z.addClass('unload_button');
      }
      setTimeout((function() {
        if (x.hasClass('open')) {
          return x.removeClass('open');
        } else {
          return x.addClass('open');
        }
      }), 200);
      return setTimeout((function() {
        return load($('.button'), $('.button1'), $('.button2'));
      }), 400);
    };
    return $('.button').on('click', function() {
      if ($(this).hasClass('load_button')) {
        return unload($('.button'), $('.button1'), $('.button2'));
      } else {
        return load($('.button'), $('.button1'), $('.button2'));
      }
    });
  });

}).call(this);
