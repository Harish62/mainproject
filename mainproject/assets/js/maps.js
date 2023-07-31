(function($){
    "use strict";
    jQuery('#vmapworld').vectorMap({
        map: 'world_en',
        backgroundColor: '#fff',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'polynomial'
    });


    jQuery(document).ready(function () {
        jQuery('#vmap').vectorMap({
          map: 'tunisia',
          onRegionClick: function (element, code, region) {
            var message = 'You clicked "'
              + region
              + '" which has the code: '
              + code.toUpperCase();
  
            alert(message);
          }
        });
      });

      jQuery(document).ready(function () {
        jQuery('#vmap1').vectorMap({
            map: 'turkey',
            onRegionClick: function (element, code, region) {
                var message = 'You clicked "'+ region + '" which has the code: '+ code.toUpperCase();
                alert(message);
            }
        });
    });

    jQuery('#vmapusa').vectorMap({
        map: 'usa_en',
        backgroundColor: null,
        color: '#ffffff',
        enableZoom: true,
        showTooltip: true,
        selectedColor: null,
        hoverColor: null,
        colors: {
            mo: '#2980b9',
            fl: '#27ae60',
            or: '#8e44ad'
        },
        onRegionClick: function(event, code, region){
            event.preventDefault();
        }
    });

    jQuery('#vmapeurope').vectorMap({
        map: 'europe_en',
        backgroundColor: null,
        color: '#273c75',
        hoverColor: '#999999',
        enableZoom: true,
        showTooltip: false
    });

    jQuery('#vmapcanada').vectorMap({
        map: 'canada_en',
        backgroundColor: null,
        color: '#c23616',
        hoverColor: '#999999',
        enableZoom: false,
        showTooltip: true
    });

    jQuery('#vmapbri').vectorMap({
        map: 'brazil_br',
        backgroundColor: null,
        color: '#4cd137',
        hoverColor: '#44bd32',
        enableZoom: false,
        showTooltip: false
    });

    jQuery('#vmapasia').vectorMap({
        map: 'asia_en',
        backgroundColor: null,
        color: '#273c75',
        hoverColor: '#999999',
        enableZoom: true,
        showTooltip: true
    });

    jQuery('#vmapger').vectorMap({
        map: 'germany_en',
        backgroundColor: null,
        color: '#c23616',
        hoverColor: '#999999',
        enableZoom: false,
        showTooltip: false
    });

})(jQuery);