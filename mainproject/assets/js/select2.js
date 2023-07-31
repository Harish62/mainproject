(function($){
    "use strict";
    // In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

var $disabledResults = $(".js-example-disabled-results");
$disabledResults.select2();

//  //
var $example = $(".js-example-programmatic").select2();
var $exampleMulti = $(".js-example-programmatic-multi").select2();

$(".js-programmatic-set-val").on("click", function () {
    $example.val("CA").trigger("change");
});

$(".js-programmatic-open").on("click", function () {
    $example.select2("open");
});

$(".js-programmatic-close").on("click", function () {
    $example.select2("close");
});

$(".js-programmatic-init").on("click", function () {
    $example.select2();
});

$(".js-programmatic-destroy").on("click", function () {
    $example.select2("destroy");
});

$(".js-programmatic-multi-set-val").on("click", function () {
    $exampleMulti.val(["CA", "AL"]).trigger("change");
});

$(".js-programmatic-multi-clear").on("click", function () {
    $exampleMulti.val(null).trigger("change");
});
})(jQuery);