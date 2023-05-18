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
    series: [85, 60, 43, 23, 35],
    colors: ['#4c78da', '#F28B7C', '#66BD50', '#FFA07A','#63D1C4'],
    chart: {
    type: 'donut',
    width: 400,
    show:false,
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },
      dataLabels: {
        enabled: false
      },
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
    
    var options = {
        series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61],
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45]
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
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
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

      var chart = new ApexCharts(document.querySelector("#chart3"), options);
      chart.render();

       var options = {
          series: [{
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'TEAM C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
        
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart3"), options);
        chart.render();
    
    

})(jQuery);

