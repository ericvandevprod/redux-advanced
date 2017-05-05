import { expect } from '../test_help';
import { describe, it } from 'mocha';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('[ Actions ]', () => {

  describe('SAVE_COMMENT', () => {

    it('should have the correct type', () => {
      const action = saveComment();

      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('should have the correct payload', () => {
      const action = saveComment('new comment');

      expect(action.payload).to.equal('new comment');
    });
  });
});