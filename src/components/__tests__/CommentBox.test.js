import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox/>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});


it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});


describe('the text area', () => {
  const myComment = 'new comment';
  beforeEach(() => {
    //only name of the action and it is change, not onChange, because it is event handler
    wrapped.find('textarea').simulate('change', {
      target: { value: myComment }
    })
    //called update, because this.setState() is asynchronous operation
    wrapped.update();
  });


  it('has a text area, that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(myComment);
  });

  it('when form is submited, text area is emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});