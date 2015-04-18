module.exports = (function() {

  // banner.dust
  (function() {
    dust.register("banner", body_0);

    function body_0(chk, ctx) {
      return chk.w("<section id=\"main\" class=\"text-center\"><h1>Share your favorite spots for local produce</h1><a class=\"btn btn-warning\" href=\"#/places\" role=\"button\">Search spots</a> <a class=\"btn btn-warning\" href=\"#/add\" role=\"button\">Add a spot</a></section>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // footer.dust
  (function() {
    dust.register("footer", body_0);

    function body_0(chk, ctx) {
      return chk.w("<footer><p>&copy 2013 goLocal. Designed &amp Developed by <a href=\"http://alisonelizabeth.github.io\">Alison Miller</a></p><p>Home page image courtesy of <a href=\"http://www.flickr.com/photos/mcbarnicle/\">SMcGarnigle</a></p></footer>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // header.dust
  (function() {
    dust.register("header", body_0);

    function body_0(chk, ctx) {
      return chk.w("<nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"#\">goLocal</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\">Home</a></li><li><a href=\"#\">Search</a></li><li><a href=\"#\">Add a local spot</a></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // home.dust
  (function() {
    dust.register("home", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div id=\"banner\"></div><div id=\"spotlight\"></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // index.dust
  (function() {
    dust.register("index", body_0);

    function body_0(chk, ctx) {
      return chk.w("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>goLocal</title><meta name=\"description\" content=\"goLocal\"><meta name=\"author\" content=\"Alison Miller\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><!-- <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\"> --><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"public/css/styles.css\"><script data-main=\"public/js/main\" src=\"public/js/vendor/requirejs/require.js\"></script></head><body><div class=\"container-fluid\"><div id=\"header\"></div><div id=\"main-content\"></div><div id=\"footer\"></div></div></body></html>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // place.dust
  (function() {
    dust.register("place", body_0);

    function body_0(chk, ctx) {
      return chk;
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // places.dust
  (function() {
    dust.register("places", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div id=\"places\"></div>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // spotlight.dust
  (function() {
    dust.register("spotlight", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div class=\"col-md-4\" data-action=\"view:place\"><div><img class=\"img-responsive\" src=\"").x(ctx.get(["placePhoto"], false), ctx, {
        "else": body_1,
        "block": body_2
      }, {}).w("\" alt=\"").f(ctx.getPath(false, ["placePhoto", "name"]), ctx, "h").w("\"></div><div><div class=\"row\"><div class=\"col-md-10\">").x(ctx.get(["placeName"], false), ctx, {
        "block": body_3
      }, {}).x(ctx.get(["address"], false), ctx, {
        "block": body_4
      }, {}).w("</div><div class=\"col-md-2\"><button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\">").x(ctx.get(["likes"], false), ctx, {
        "else": body_5,
        "block": body_6
      }, {}).w("</span></button></div></div></div></div>");
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
      return chk.w("images/placeholder.png");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
      return chk.f(ctx.getPath(false, ["placePhoto", "url"]), ctx, "h");
    }
    body_2.__dustBody = !0;

    function body_3(chk, ctx) {
      return chk.w("<p>").f(ctx.get(["placeName"], false), ctx, "h").w("</p>");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.w("<p>").f(ctx.get(["address"], false), ctx, "h").w("</p>");
    }
    body_4.__dustBody = !0;

    function body_5(chk, ctx) {
      return chk.w("0");
    }
    body_5.__dustBody = !0;

    function body_6(chk, ctx) {
      return chk.f(ctx.get(["likes"], false), ctx, "h");
    }
    body_6.__dustBody = !0;
    return body_0;
  })();
  // Returning object for nodejs
  return dust;
})();