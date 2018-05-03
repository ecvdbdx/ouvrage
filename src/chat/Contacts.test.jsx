import React from 'react';
import renderer from 'react-test-renderer';
import students from './../../mocks/students.json';
import Contacts from './Contacts.jsx';
import { shallow } from 'enzyme';

const openConversationMock = jest.fn();

it('renders correctly', () => {
  const tree = renderer.create(<Contacts students={students} openConversation={openConversationMock}/>).toJSON();
  expect(tree).toMatchSnapshot();
});


it('open conversation on click', () => {
  const element = shallow(<Contacts students={students} openConversation={openConversationMock} />);
  element.find('li').at(0).simulate('click');
  expect(openConversationMock).toHaveBeenCalled();
});

