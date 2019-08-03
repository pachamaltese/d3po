// Generated by CoffeeScript 1.12.7
(function() {
  module.exports = function(decoration) {
    var accepted;
    accepted = ["line-through", "none", "overline", "underline"];
    if (decoration === false) {
      accepted.unshift(false);
    }
    if (accepted.indexOf(decoration) < 0) {
      decoration = "none";
    }
    return {
      accepted: accepted,
      value: decoration
    };
  };

}).call(this);
