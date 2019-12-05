import userService from './userService';

const validationService = {
    formValidation: function (errors) {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    },

    checkFiels: function (data) {
        let valid = true;
        Object.values(data).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    },

    usernameValidation: function (value) {
        const regex = RegExp(/[A-Za-z0-9]{3,}/i);
        return regex.test(value);
    },

    passwordValidation: function (value) {
        const regex = RegExp(/[A-Za-z0-9]{3,}/i);
        return regex.test(value);
    },

    passwordMatchValidation: function (value, password) {
        return value === password;
    },

    registerEmailValidation: function (value) {
        const regex = RegExp(/[\w]+@[a-z]+\.com/i);
        return regex.test(value);
    },

    townNameValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{3,}/i);
        return regex.test(value);
    },

    userNamesValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{2,}/i);
        return regex.test(value);
    },

    countryNameValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{4,}/i);
        return regex.test(value);
    },

    lengthValidation: function (value, minValue) {
        return value.length < minValue;
    },

    checkUndefinedValidation: function (value) {
        return value === undefined;
    },

    compareStringValidation: function (value, result) {
        return value === result;
    },

    imageUrlValidation: function (value) {
        return value.startsWith('http') || value.startsWith('https');
    },

    registerAgeValidation: function (value) {
        return value > 15 && value < 100;
    },

    isUsernameExist: function (username) {
        userService.getUsernames()
            .then(usernames => {
                return usernames.includes(username);
            });
    },

    eventDescriptionValidation: function (value) {
        const regex = RegExp(/[A-Za-z0-9.!?,())\s]{50,}/i);
        return regex.test(value);
    },
};

export default validationService;