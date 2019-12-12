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
        const result = root.findByType('button').children.length;
        expect(result).toEqual(1);
    });

    test('Should have button with text Log In', () => {
        const component = renderer.create(<Login />);
        const root = component.root;
        const result = root.findByType('button').children[0] === 'Log In';
        expect(result).toEqual(true);
    });

    test('Should have 2 input fields', () => {
        const component = renderer.create(<Login />);
        const root = component.root;
        const result = root.findAllByType('input').length === 2;
        expect(result).toEqual(true);
    });

    test('Should set state of username', () => {
        const component = renderer.create(<Login />);
        const root = component.root;
        const instance = root.instance;
        instance.setState({username: 'Dobri'})
        expect(instance.state.username === 'Dobri').toEqual(true);
    });
    
    test('Should set state of password', () => {
        const component = renderer.create(<Login />);
        const root = component.root;
        const instance = root.instance;
        instance.setState({password: 'Pass'})
        expect(instance.state.password === 'Pass').toEqual(true);
    });
});