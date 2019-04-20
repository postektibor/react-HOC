import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import App from 'components/App';

let wrapped;

beforeEach(()=>{
  wrapped = shallow(<App/>);
})


it('shows a CommentBox', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a CommentList', () => {
  const wrapped = shallow(<App/>);

  expect(wrapped.find(CommentList).length).toEqual(1);
})