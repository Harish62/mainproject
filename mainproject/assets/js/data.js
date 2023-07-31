(function($){
    "use strict";
    $(document).ready(function () {
        $('#example').DataTable();
    });



    $(document).ready(function () {
        // Setup - add a text input to each footer cell
        $('#example1 tfoot th').each(function () {
            var title = $(this).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });
     
        // DataTable
        var table = $('#example1').DataTable({
            initComplete: function () {
                // Apply the search
                this.api()
                    .columns()
                    .every(function () {
                        var that = this;
     
                        $('input', this.footer()).on('keyup change clear', function () {
                            if (that.search() !== this.value) {
                                that.search(this.value).draw();
                            }
                        });
                    });
            },
        });
    });

    $(document).ready(function () {
        $('#example2').DataTable({
            scrollY: '200px',
            scrollCollapse: true,
            paging: false,
        });
    });

    $(document).ready(function () {
        $('#example3').DataTable({
            scrollY: 200,
            scrollX: true,
        });
    });


})(jQuery);