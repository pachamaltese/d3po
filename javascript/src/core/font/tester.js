// Creates an invisible test element to populate
(function() {
    module.exports = function(type) {
        var tester;
        return d3
          .select("body")
          .selectAll("div" + ".d3po_tester")
          .data([0])
          .join("div")
          .attr("class", "d3po_tester")
          .attr("position", "absolute")
          .style("position", "absolute")
          .style("left", "-9999px")
          .style("top", "-9999px")
          .style("visibility", "hidden")
          .style("display", "block");
    };
}).call(this);
