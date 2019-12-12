import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/User/Register';
import validationService from '../services/validationService';

describe('Register component test', () => {
    const wrapper = shallow(<Register />);

    it('Should have input for username', () => {
        const result = wrapper.find('input#username').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for password', () => {
        const result = wrapper.find('input#password').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for confirm password', () => {
        const result = wrapper.find('input#confirmPassword').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for email', () => {
        const result = wrapper.find('input#email').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for first name', () => {
        const result = wrapper.find('input#firstName').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for last name', () => {
        const result = wrapper.find('input#lastName').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for age', () => {
        const result = wrapper.find('input#age').length === 1;
        expect(result).toEqual(true);
    });

    it('Username input should have empty state', () => {
        const result = wrapper.state('username') === '';
        expect(result).toEqual(true);
    });

    it('Password input should have empty state', () => {
        const result = wrapper.state('password') === '';
        expect(result).toEqual(true);
    });

    it('Confirm password input should have empty state', () => {
        const result = wrapper.state('confirmPassword') === '';
        expect(result).toEqual(true);
    });

    it('Email input should have empty state', () => {
        const result = wrapper.state('email') === '';
        expect(result).toEqual(true);
    });

    it('First name input should have empty state', () => {
        const result = wrapper.state('firstName') === '';
        expect(result).toEqual(true);
    });

    it('Last name input should have empty state', () => {
        const result = wrapper.state('lastName') === '';
        expect(result).toEqual(true);
    });

    it('Age input should have empty state', () => {
        const result = wrapper.state('age') === '';
        expect(result).toEqual(true);
    });

    it('Gender input should have empty state', () => {
        const result = wrapper.state('gender') === '';
        expect(result).toEqual(true);
    });

    it('Should have a button', () => {
        const result = wrapper.find('button').text() === 'Create Account';
        expect(result).toEqual(true);
    });

    it('Username validation should return correct result', () => {
        const result = validationService.usernameValidation('Dobri');
        expect(result).toEqual(true);
    });

    it('Username validation should return incorrect result', () => {
        const result = validationService.usernameValidation('as#$');
        expect(result).toEqual(false);
    });

    it('Password validation should return correct result', () => {
        const result = validationService.passwordValidation('123');
        expect(result).toEqual(true);
    });

    it('Password validation should return incorrect result', () => {
        const result = validationService.passwordValidation('1!');
        expect(result).toEqual(false);
    });

    it('Email validation should return correct result', () => {
        const result = validationService.registerEmailValidation('test@test.com');
        expect(result).toEqual(true);
    });

    it('Email validation should return incorrect result', () => {
        const result = validationService.registerEmailValidation('test@test.bg');
        expect(result).toEqual(false);
    });

    it('First name and last name validation should return correct result', () => {
        const result = validationService.userNamesValidation('Dobroslav');
        expect(result).toEqual(true);
    });

    it('First name and last name validation should return incorrect result', () => {
        const result = validationService.userNamesValidation('d');
        expect(result).toEqual(false);
    });

    it('Age validation should return correct result', () => {
        const result = validationService.registerAgeValidation(18);
        expect(result).toEqual(true);
    });

    it('Age validation should return incorrect result', () => {
        const result = validationService.registerAgeValidation(12);
        expect(result).toEqual(false);
    });

    it('Age validation should return incorrect result', () => {
        const result = validationService.registerAgeValidation(102);
        expect(result).toEqual(false);
    });

    it('Match validation should return correct result', () => {
        const result = validationService.passwordMatchValidation('pass', 'pass');
        expect(result).toEqual(true);
    });

    it('Match validation should return incorrect result', () => {
        const result = validationService.passwordMatchValidation('pass', 'pas');
        expect(result).toEqual(false);
    });
});