/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    $("#hidden").hide();
    $("#pressme").click(function () {
        $("#hidden").show();
    });
});
