//create a function that you can use to validate your form
export const formValidator = (form) => {
    const errors = {};
    if (!form.author) {
        errors.author = "Author is required";
    }
    if (!form.comment) {
        errors.comment = "Comment is required";
    }
    if (!form.rating) {
        errors.rating = "rating is required";
    }
    if(form.author && form.author.length < 3){
        errors.author = "Author must be at least 3 characters";
    }
    if(form.rating && form.rating == 0){
        errors.rating = "Rating must be at least 1";
    }

    return errors;
}