import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/User/Register';

describe('Register component test', () => {
    const wrapper = shallow(<Register />);

    it('Should have input for username', () => {
        expect(wrapper.find('input#username')).toHaveLength(1);
    });

    it('Should have input for password', () => {
        expect(wrapper.find('input#password')).toHaveLength(1);
    });

    it('Should have input for confirm password', () => {
        expect(wrapper.find('input#confirmPassword')).toHaveLength(1);
    });

    it('Should have input for email', () => {
        expect(wrapper.find('input#email')).toHaveLength(1);
    });

    it('Should have input for first name', () => {
        expect(wrapper.find('input#firstName')).toHaveLength(1);
    });

    it('Should have input for last name', () => {
        expect(wrapper.find('input#lastName')).toHaveLength(1);
    });

    it('Should have input for age', () => {
        expect(wrapper.find('input#age')).toHaveLength(1);
    });

    it('Username input should have empty state', () => {
        expect(wrapper.state('username')).toEqual('');
    });

    it('Password input should have empty state', () => {
        expect(wrapper.state('password')).toEqual('');
    });

    it('Confirm password input should have empty state', () => {
        expect(wrapper.state('confirmPassword')).toEqual('');
    });

    it('Email input should have empty state', () => {
        expect(wrapper.state('email')).toEqual('');
    });

    it('First name input should have empty state', () => {
        expect(wrapper.state('firstName')).toEqual('');
    });

    it('Last name input should have empty state', () => {
        expect(wrapper.state('lastName')).toEqual('');
    });

    it('Age input should have empty state', () => {
        expect(wrapper.state('age')).toEqual('');
    });

    it('Gender input should have empty state', () => {
        expect(wrapper.state('gender')).toEqual('');
    });

    it('Should have a button', () => {
        expect(wrapper.find('button').text()).toEqual('Create Account');
    });
});