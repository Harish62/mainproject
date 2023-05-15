(function($) {
	"use strict";

    var options = {
        series: [{
          name: "Orders",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 127, 156, 178]
      },{
        name: 'Sales',
        data: [14, 55, 60, 56, 60, 74, 80, 110, 160, 145, 189, 198],
      } ],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
            show: false
          },
      },
      dataLabels: {
        enabled: false
      },
      grid:{
        borderColor: '#f6f7f9',
      },
      stroke: {
        curve: 'smooth',
        width: 3,        
        colors: ['#4c78da',  '#66BD50']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: true,
            color: '#f6f7f9',

        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    
    var options = {
        series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
        chart: {
        type: 'area',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['#4c78da', '#F28B7C', '#66BD50']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1,
        colors: ['#4c78da', '#F28B7C', '#66BD50']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart2"), options);
      chart.render();
    
    

})(jQuery);