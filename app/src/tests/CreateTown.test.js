import React from 'react';
import { shallow } from 'enzyme';
import CreateTown from '../components/CreateTown';
import validationService from '../services/validationService';

describe('CreateTown component test', () => {
    const wrapper = shallow(<CreateTown />);

    it('Should have input for username', () => {
        expect(wrapper.find('input#username')).toHaveLength(1);
    });
});