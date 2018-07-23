import { shallowMount } from '@vue/test-utils';
import PatientDemographics from '@/components/PatientDemographics.vue';

describe('PatientDemographics.vue', () => {
  it('renders patient name when passed', () => {
    const patient = {
      name: [
        {
          given: ['John', 'W.'],
          family: 'Doe'
        }
      ]
    };
    const wrapper = shallowMount(PatientDemographics, {
      propsData: { patient }
    });
    expect(wrapper.find('h1').text()).toMatch('John W. Doe');
  });
});
