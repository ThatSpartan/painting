(function() {
  $(document).ready(function() {
    $('.clicked').hide();
    return $('.paintings > div').on('click', function() {
      var source;
      source = $(this).css('background-image');
      return console.log(source);
    });
  });

}).call(this);

(function() {
  $(document).ready(function() {
    var load, unload;
    $('.button').addClass('load_button');
    load = function(x, y, z) {
      x.removeClass('unload_button');
      x.addClass('load_button');
      if (x.hasClass('open')) {
        setTimeout(function() {
          y.removeClass('unload_button');
          return y.addClass('load_button');
        }, 150);
        return setTimeout(function() {
          z.removeClass('unload_button');
          return z.addClass('load_button');
        }, 300);
      }
    };
    unload = function(x, y, z) {
      x.removeClass('load_button');
      x.addClass('unload_button');
      if (y.hasClass('load_button') && z.hasClass('load_button')) {
        setTimeout(function() {
          y.removeClass('load_button');
          return y.addClass('unload_button');
        }, 150);
        setTimeout(function() {
          z.removeClass('load_button');
          return z.addClass('unload_button');
        }, 300);
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
