import React from 'react';
import { shallow } from 'enzyme';
import CreateTown from '../components/CreateTown';
import validationService from '../services/validationService';

describe('Login component test', () => {
    const towns = ['Sofia', 'Plovdiv'];
    const wrapper = shallow(<CreateTown />);
    wrapper.setState({ towns: towns });

    it('Should have input for name', () => {
        const result = wrapper.find('input#name').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for country', () => {
        const result = wrapper.find('input#country').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have input for imageUrl', () => {
        const result = wrapper.find('input#imageUrl').length === 1;
        expect(result).toEqual(true);
    });

    it('Should have a button', () => {
        const result = wrapper.find('button').text() === 'Add Town';
        expect(result).toEqual(true);
    });

    it('Town name input should have empty state', () => {
        const result = wrapper.state('name') === '';
        expect(result).toEqual(true);
    });

    it('Country input should have empty state', () => {
        const result = wrapper.state('country') === '';
        expect(result).toEqual(true);
    });

    it('Image url name input should have empty state', () => {
        const result = wrapper.state('imageUrl') === '';
        expect(result).toEqual(true);
    });

    it('Town validation should return correct result', () => {
        const result = validationService.townNameValidation('Sofia')
        expect(result).toEqual(true);
    });

    it('Town validation should return incorrect result', () => {
        const result = validationService.townNameValidation('So');
        expect(result).toEqual(false);
    });

    it('Country validation should return correct result', () => {
        const result = validationService.countryNameValidation('Bulgaria')
        expect(result).toEqual(true);
    });

    it('Country validation should return incorrect result', () => {
        const result = validationService.countryNameValidation('Bul');
        expect(result).toEqual(false);
    });

    it('Image url validation should return correct result', () => {
        const result = validationService.imageUrlValidation('https:\\test')
        expect(result).toEqual(true);
    });

    it('Image url validation should return incorrect result', () => {
        const result = validationService.imageUrlValidation('htp:\\test');
        expect(result).toEqual(false);
    });

    it('Submit should return correct result', () => {
    });
});