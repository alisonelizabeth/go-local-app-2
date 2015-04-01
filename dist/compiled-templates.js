module.exports = (function() {

  // index.dust
  (function() {
    dust.register("index", body_0);

    function body_0(chk, ctx) {
      return chk.w("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>goLocal</title><meta name=\"description\" content=\"goLocal\"><meta name=\"author\" content=\"Alison Miller\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><!-- <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\"> --><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\"><script data-main=\"public/js/main\" src=\"public/js/vendor/requirejs/require.js\"></script></head><body><div class=\"container-fluid\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"#\">goLocal</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\">Home</a></li><li><a href=\"#\">Search</a></li><li><a href=\"#\">Add a local spot</a></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav><section id=\"main\" class=\"text-center\"><h1>Share your favorite spots for local produce</h1><button class=\"btn btn-warning\" type=\"submit\">Search spots</button><button class=\"btn btn-warning\" type=\"submit\">Add a spot</button></section><section id=\"spotlight\"></section><footer><p>&copy 2013 goLocal. Designed &amp Developed by <a href=\"http://alisonelizabeth.github.io\">Alison Miller</a></p><p>Home page image courtesy of <a href=\"http://www.flickr.com/photos/mcbarnicle/\">SMcGarnigle</a></p></footer></div><!-- /.container-fluid --></body></html>");
    }
    body_0.__dustBody = !0;
    return body_0;
  })();
  // spotlight.dust
  (function() {
    dust.register("spotlight", body_0);

    function body_0(chk, ctx) {
      return chk.w("<div><div><img src=\"").x(ctx.get(["placePhoto"], false), ctx, {
        "else": body_1,
        "block": body_2
      }, {}).w("\" alt=\"").f(ctx.getPath(false, ["placePhoto", "name"]), ctx, "h").w("\"></div><div><div class=\"row\"><div class=\"col-md-10\"><p>").f(ctx.get(["placeName"], false), ctx, "h").w("</p><p>").f(ctx.get(["address"], false), ctx, "h").w("</p></div><div class=\"col-md-2\"><button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\">").x(ctx.get(["likes"], false), ctx, {
        "else": body_3,
        "block": body_4
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
      return chk.w("0");
    }
    body_3.__dustBody = !0;

    function body_4(chk, ctx) {
      return chk.f(ctx.get(["likes"], false), ctx, "h");
    }
    body_4.__dustBody = !0;
    return body_0;
  })();
  // Returning object for nodejs
  return dust;
})();