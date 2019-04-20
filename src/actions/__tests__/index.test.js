import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('save comment', () => {
  let action;
  const comment = 'new comment';

  beforeEach(() => {
    action = saveComment(comment);
  })

  it('has the correct type', () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    expect(action.payload).toEqual(comment);
  });
});