import React from 'react'
import { shallow } from 'enzyme'
import Input from './index'

describe('Input Component', () => {
  it('should render Input without any optional prop', () => {
    const wrapper = shallow(<Input name="test-input" />)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.contains('Label')).toBeFalsy()
    expect(wrapper.contains('Invalid Message')).toBeFalsy()
  })

  it('should render Input with label and error message', () => {
    const wrapper = shallow(
      <Input name="test-input" label="Label" invalidMessage="Invalid Message" />
    )

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.contains('Label')).toBeTruthy()
    expect(wrapper.contains('Invalid Message')).toBeTruthy()
  })
})
