import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/User/Login';

describe('Login component test', () => {
    const wrapper = shallow(<Login />);

    it('Should have input for username', () => {
        expect(wrapper.find('input#username')).toHaveLength(1);
    });

    it('Username input should have empty state', () => {
        expect(wrapper.state('username')).toEqual('');
    });

    it('Should have input for password', () => {
        expect(wrapper.find('input#password')).toHaveLength(1);
    });

    it('Password input should have empty state', () => {
        expect(wrapper.state('password')).toEqual('');
    });

    it('Should have a button', () => {
        expect(wrapper.find('button').text()).toEqual('Log In');
    });
});