import { renderComponent, expect } from '../test_help';
import CommentList from '../../src/components/comment_list';
import { describe, it } from 'mocha';

describe('[ Comment List ] Component', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['one comment', 'two comment']};

    component = renderComponent(CommentList, null, props);
  });

  it('should display an li for every comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('should display the comments', () => {
    expect(component).to.contain('one comment');
    expect(component).to.contain('two comment');
  });
});
