/**
 * File Name: SDUtil.js
 *
 * Revision History:
 *       Stephen Draper, 2021-03-06 : Created
 */

function SDFeedbackValidate(){
    var feedback = $("#SDFeedbackForm");

    feedback.validate({
        rules: {
            SDBusinessName: {
                required: true,
                rangelength: [2,20]
            },
            SDReviewerEmail: {
                required: true,
                email: true
            },
            SDReviewDate: {
                required: true
            },
            SDFoodQualityRating: {
                required: true,
                rangeCheck:{
                    // as it turns out, this code doesn't do anything, because JS inherently doesn't check things that
                    // are hidden. Who knew. You, probably. I wrote it anyway, to prove I was thinking about it
                    // and how I would have if it did matter. Woo knowledge.
                    depends: function (){
                        if($("#SDChkRatings").prop("checked")){
                            return true;
                        }
                        return false;
                    }
                }
            },
            SDServiceRating: {
                rangeCheck: true
            },
            SDValueRating: {
                rangeCheck: true
            }


        },
        messages: {
            SDBusinessName: {
                required: "Length must be 2-20 characters long",
                rangelength: "Length must be 2-20 characters long"
            },
            SDReviewerEmail: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            SDReviewDate: {
                required: "Review date is required"
            },
            SDFoodQualityRating: {
                rangeCheck: "Value must be 0-5"
            },
            SDServiceRating: {
                rangeCheck: "Value must be 0-5"
            },
            SDValueRating: {
                rangeCheck: "Value must be 0-5"
            }

        }
    });

    return feedback.valid();
}

jQuery.validator.addMethod("rangeCheck",
    function (value, element){
        return !(value < 0 || value > 5);

    },
    "Value must be between 0 and 5"
);

function SDEditFeedbackValidate(){
    var feedback = $("#SDEditReviewForm");

    feedback.validate({
        rules: {
            SDEditBusinessName: {
                required: true,
                rangelength: [2,20]
            },
            SDEditReviewerEmail: {
                required: true,
                email: true
            },
            SDEditReviewDate: {
                required: true
            },
            SDEditFoodQualityRating: {
                rangeCheck: true
            },
            SDEditServiceRating: {
                rangeCheck: true
            },
            SDEditValueRating: {
                rangeCheck: true
            }


        },
        messages: {
            SDEditBusinessName: {
                required: "Length must be 2-20 characters long",
                rangelength: "Length must be 2-20 characters long"
            },
            SDEditReviewerEmail: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            SDEditReviewDate: {
                required: "Review date is required"
            },
            SDEditFoodQualityRating: {
                rangeCheck: "Value must be 0-5"
            },
            SDEditServiceRating: {
                rangeCheck: "Value must be 0-5"
            },
            SDEditValueRating: {
                rangeCheck: "Value must be 0-5"
            }
        }
    });

    return feedback.valid();
}