import React from 'react';
import CreateTown from '../components/CreateTown';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: "Link"
}));

describe('Create Town component test', () => {
    test('Should render component', () => {
        const component = renderer.create(<CreateTown />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});