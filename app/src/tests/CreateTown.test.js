import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateTown from '../components/CreateTown';

describe('CreateTown component test', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CreateTown />);
    });

    it('Should have input for name', () => {
        expect(wrapper.find('input#name').length).toEqual(0);
    });

    it('Should have input for country', () => {
        expect(wrapper.find('input#country').length).toEqual(0);
    });

    it('Should have input for imageUrl', () => {
        expect(wrapper.find('input#imageUrl').length).toEqual(0);
    });

    it('Town name input should have empty state', () => {
        expect(wrapper.state('name')).toEqual('');
    });

    it('Country name input should have empty state', () => {
        expect(wrapper.state('country')).toEqual('');
    });

    it('Image url input should have empty state', () => {
        expect(wrapper.state('imageUrl')).toEqual('');
    });
});