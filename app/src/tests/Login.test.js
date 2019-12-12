import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/User/Login';

describe('Login component test', () => {
    const wrapper = shallow(<Login />);

    it('Should have input for username', () => {
        const result = wrapper.find('input#username').length === 1;
        expect(result).toEqual(true);
    });

    it('Username input should have empty state', () => {
        const result = wrapper.state('username') === '';
        expect(result).toEqual(true);
    });

    it('Should have input for password', () => {
        const result = wrapper.find('input#password').length === 1;
        expect(result).toEqual(true);
    });

    it('Password input should have empty state', () => {
        const result = wrapper.state('password') === '';
        expect(result).toEqual(true);
    });

    it('Should have a button', () => {
        const result = wrapper.find('button').text() === 'Log In';
        expect(result).toEqual(true);
    });
});