/**
 * File Name: SDFacade.js
 *
 * Revision History:
 *       Stephen Draper, 2021-03-06 : Created
 */

function SDShowRatings() {
    var checked = document.getElementById("SDChkRatings").checked;

    if(checked) {
        $("#SDFoodRatings").show();
    }
    else {
        $("#SDFoodRatings").hide();
    }
}

function SDEditShowRatings() {
    var checked = document.getElementById("SDEditChkRatings").checked;

    if(checked) {
        $("#SDEditFoodRatings").show();
    }
    else {
        $("#SDEditFoodRatings").hide();
    }
}

function SDCalculateRating() {
    var foodRating = parseInt($("#SDFoodQualityRating").val());
    var serviceRating = parseInt($("#SDServiceRating").val());
    var valueRating = parseInt($("#SDValueRating").val());
    var overallRating = (foodRating + serviceRating + valueRating) * 100/15;
    overallRating = overallRating.toFixed(0);

    $("#SDOverallRating").val(overallRating + "%");

}

function SDEditCalculateRating() {
    var foodRating = parseInt($("#SDEditFoodQualityRating").val());
    var serviceRating = parseInt($("#SDEditServiceRating").val());
    var valueRating = parseInt($("#SDEditValueRating").val());
    var overallRating = (foodRating + serviceRating + valueRating) * 100/15;
    overallRating = overallRating.toFixed(0);

    $("#SDEditOverallRating").val(overallRating + "%");

}

function SDSaveReview(){
    console.log("test");
    if(SDFeedbackValidate()){
        console.log("valid?");
    }
    else
    {
        console.log("Form is not valid");
    }
}

function SDUpdateReview(){
    console.log("test");
    if(SDEditFeedbackValidate()){
        console.log("Form is valid");
    }
    else
    {
        console.log("Form is not valid");
    }
}

function SDSaveDefaultEmail(){
    var email = $("#SDDefaultReviewerEmail").val();
    localStorage.setItem("DefaultEmail", email);
    window.alert("Default reviewer email saved.");

}