import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
const comments =  ['coment 1', 'comment 2', 'comment 3'];
beforeEach(() => {
  const initialState = {
    comments: comments
  };
  wrapped = mount(<Root initialState={initialState}><CommentList/></Root>);
});

afterEach(() => {
  wrapped.unmount();
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(3);
});

it('shows the text for each comments',()=>{
  console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain(comments[0]);
  expect(wrapped.render().text()).toContain(comments[1]);
  expect(wrapped.render().text()).toContain(comments[2]);
});