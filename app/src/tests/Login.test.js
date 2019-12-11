import React from 'react';
import Login from '../components/User/Login';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: "Link"
}));

describe('Login component test', () => {
    test('Should render component', () => {
        const component = renderer.create(<Login />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Should have button', () => {
        const component = renderer.create(<Login />);
        const root = component.root;
        const element = root.findByType('button').children.length;
        expect(element).toEqual(1);
    });

    test('Should have button with text Log In', () => {
        const component = renderer.create(<Login />);
        const root = component.root;
        const result = root.findByType('button').children[0] === 'Log In';
        expect(result).toEqual(true);
    });

    // test('Should have button with name Log In', () => {
    //     const component = renderer.create(<Login />);
    //     const instance = component.root;

    //     const result = instance.find((el) => el.type === 'button');
    //     expect(result).toBe(true);
    // });

    // const wrapper = shallow(<Login />);

    // it('Should have input for username', () => {
    //     expect(wrapper.find('input#username')).toHaveLength(1);
    // });

    // it('Username input should have empty state', () => {
    //     expect(wrapper.state('username')).toEqual('');
    // });

    // it('Should have input for password', () => {
    //     expect(wrapper.find('input#password')).toHaveLength(1);
    // });

    // it('Password input should have empty state', () => {
    //     expect(wrapper.state('password')).toEqual('');
    // });

    // it('Should have a button', () => {
    //     expect(wrapper.find('button').text()).toEqual('Log In');
    // });
});