(function ($) {
  "use strict";

  // Loading
  var loading = function () {
    setTimeout(function () {
      if ($("#loading").length > 0) {
        $("#loading").removeClass("show");
      }
    }, 1);
  };
  loading();
})(jQuery);
