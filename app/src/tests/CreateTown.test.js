import React from 'react';
import { shallow } from 'enzyme';
import CreateTown from '../components/CreateTown';

describe('CreateTown component test', () => {
    const wrapper = shallow(<CreateTown />);

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