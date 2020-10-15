HTMLWidgets.widget({

  name: 'd3po',

  type: 'output',

  factory: function(el, width, height) {

    var chart;

    return {

      renderValue: function(x) {

        document.getElementById(el.id).innerHTML = "";
    
        // visualization method
        chart = new d3po.viz();
        chart.container("#" + el.id);

        // type
        chart.type(x.type);
    
        // common arguments
        // add id if missing
        chart.id("d3poKey");
        chart.data(x.data);
        
        if (x.group_by) {
          chart.id(x.group_by);
        }
        if (x.size) {
          chart.size(x.size);
        }
    
        // bar/line chart
        if (x.x) {
          chart.x(x.x);
        }
        if (x.y) {
          chart.y(x.y);
        }
    
        // title
        if (x.title) {
          chart.title(x.title);
        }
        
        // legend
        if(x.legend === undefined) {
          x.legend = false;
        }
        chart.legend(x.legend);
        
        // aesthetic parameters
        if (x.color) {
          chart.color(x.color);
        }
        
        if (x.labels) {
          chart.labels({"align": x.labels.align, "valign": x.labels.valign});
        }
        
        setTimeout(function() {
          chart.resize(true);
          chart.draw();
        }, 10);

      },

      getChart: function(){
        return chart;
      }

    };
  }
});

function get_chart(id){

  var htmlWidgetsObj = HTMLWidgets.find("#" + id);

  var g;

  if (typeof htmlWidgetsObj != 'undefined') {
    g = htmlWidgetsObj.getChart();
  }

  return(g);
}

if (HTMLWidgets.shinyMode) {

  Shiny.addCustomMessageHandler('d3po-title',
    function(msg) {
      var chart = get_chart(msg.id);
      if (typeof chart != 'undefined') {
        chart.title(msg.title);
      }
  });

}
