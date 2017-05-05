import { expect } from '../test_helper';
import { describe, it } from 'mocha';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('[ Reducer ] Comment', () => {

  it('should handle action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceOf(Array);
  });

  it('should handle action with type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: 'new comment'};

    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});