/**
 * File Name: SDGlobal.js
 *
 * Revision History:
 *       Stephen Draper, 2021-03-06 : Created
 */

function SDChkRatings_Click() {
    SDShowRatings();
}

function SDEditChkRatings_Click() {
    SDEditShowRatings();
}

function SDOverallRating_change() {
    SDCalculateRating();
}

function SDEditOverallRating_change() {
    SDEditCalculateRating();
}

function SDBtnSave_click() {
    SDSaveReview();
}

function SDBtnUpdate_click() {
    SDUpdateReview();
}

function SDBtnSaveDefault_click() {
    SDSaveDefaultEmail();
}

function SDInit() {
    $("#SDChkRatings").on("click", SDChkRatings_Click);
    $("#SDFoodRatings").on("change", SDOverallRating_change);
    $("#SDValueRating").on("change", SDOverallRating_change);
    $("#SDServiceRating").on("change", SDOverallRating_change);
    $("#SDEditChkRatings").on("click", SDEditChkRatings_Click);
    $("#SDEditFoodRatings").on("change", SDEditOverallRating_change);
    $("#SDEditValueRating").on("change", SDEditOverallRating_change);
    $("#SDEditServiceRating").on("change", SDEditOverallRating_change);
    $("#SDBtnSave").on("click", SDBtnSave_click);
    $("#SDBtnUpdate").on("click", SDBtnUpdate_click);
    $("#SDBtnSaveDefault").on("click", SDBtnSaveDefault_click)

}

$(document).ready(function() {
    SDInit();
})