import { renderComponent, expect } from '../test_help';
import CommentBox from '../../src/components/comment_box';
import { describe, it } from 'mocha';

describe('[ Comment Box ] Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('should have a class name of container', () => {
    expect(component).to.have.class('container');
  });

  it('should render a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('should render a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('should show the comment text', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('should clear once submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});