const validationService = {
    formValidation: function (errors) {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    },

    registerEmailValidation: function () {
        return RegExp(/[\w]+@[a-z]+\.com/i);
    },

    townNameValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{3,}/i);
        return regex.test(value);
    },

    countryNameValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{4,}/i);
        return regex.test(value);
    },
};

export default validationService;