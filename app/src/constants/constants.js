const constants = {
    register: {
        USERNAME_EXIST: 'Username already exist',
        INVALID_USERNAME: 'Username should be at least 3 characters long and contains only letters and digits!',
        INVALID_PASSWORD: 'Password should be at least 3 characters long and contains only letters and digits!',
        PASSWORD_MATCH: 'Passwords don\'t match!',
        INVALID_FIRST_NAME: 'First name should be more than 2 symbols and contains only letters!',
        INVALID_LAST_NAME: 'Last name should be more than 2 symbols and contains only letters!',
        INVALID_EMAIL: 'Invalid email!',
        INVALID_AGE: 'Age should be between 16 and 100!',
        USERNAME_REQUIRED: 'Username is required!',
        PASSWORD_REQUIRED: 'Password is required!',
        CONFIRM_PASSWORD_REQUIRED: 'Confirm password is required!',
        FIRST_NAME_REQUIRED: 'First name is required!',
        LAST_NAME_REQUIRED: 'Last name is required!',
        EMAIL_REQUIRED: 'Email is required!',
        AGE_REQUIRED: 'Age is required!',
        GENDER_REQUIRED: 'Gender is required!',        
    },

    login: {
        INVALID_USERNAME_PASSWORD: 'Invalid username or password!'
    },

    createTown: {
        TOWN_EXIST: 'Town already exist!',
        INVALID_TOWN: 'Town should be at least 3 symbols long and contains only letters!',
        INVALID_COUNTRY: 'Country should be at least 4 symbols long and contains only letters!',
        INVALID_IMAGE_URL: 'Image url should start with http or https!',
        TOWN_NAME_REQUIRED: 'Town name is required!',
        COUNTRY_NAME_REQUIRED: 'Country name is required!',
        IMAGE_URL_REQUIRED: 'Image url is required!',
    },

    createEvent: {
        INVALID_NAME: 'Event name should be at least 2 characters long!',
        INVALID_LOCATION: 'Location should be at least 2 characters long!',
        INVALID_DESCRIPTION: 'Description should be at least 50 symbols and contains only letters, digits and special symbols /.,!?()/!',
        NAME_REQUIRED: 'Event name is required!',
        LOCATION_REQUIRED: 'Location is required!',
        DATE_REQUIRED: 'Date is required!',
        DESTRICTION_REQUIRED: 'Description is required!',
        TOWN_REQUIRED: 'Town is required!'
    }
};

export default constants;