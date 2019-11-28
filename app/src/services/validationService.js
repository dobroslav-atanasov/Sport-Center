import userService from './userService';

const validationService = {
    formValidation: function (errors) {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    },

    registerEmailValidation: function (value) {
        const regex = RegExp(/[\w]+@[a-z]+\.com/i);
        return regex.test(value);
    },

    townNameValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{3,}/i);
        return regex.test(value);
    },

    countryNameValidation: function (value) {
        const regex = RegExp(/[A-Za-z]{4,}/i);
        return regex.test(value);
    },

    isUsernameExist:  function (username) {
        userService.getUsernames()
            .then(usernames => {
                return usernames.includes(username);
            });
    },
};

export default validationService;