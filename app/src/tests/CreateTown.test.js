import React from 'react';
import { shallow } from 'enzyme';
import CreateTown from '../components/CreateTown';
import validationService from '../services/validationService';

describe('CreateTown component test', () => {
    const wrapper = shallow(<CreateTown />);

    it('Should have input for name', () => {
        const instance = wrapper.instance();
        instance.componentDidMount();
        console.log(wrapper.find('input#name'));
        expect(wrapper.find('input#name')).toHaveLength(1);
    });
});