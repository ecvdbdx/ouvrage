import React from 'react';
import renderer from 'react-test-renderer';
import students from './../../mocks/students.json';
import Contacts from './Contacts.jsx';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const openConversationMock = jest.fn();

it('renders correctly', () => {
  const tree = renderer.create(<Contacts students={students} openConversation={openConversationMock}/>).toJSON();
  expect(tree).toMatchSnapshot();
});


it('open conversation on click', () => {
  const element = enzyme.mount(<Contacts students={students} openConversation={openConversationMock} />);
  element.find('li').at(0).simulate('click');
  expect(openConversationMock).toHaveBeenCalled();
});

