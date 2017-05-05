import { renderComponent, expect } from '../test_help';
import App from '../../src/components/app';
import { describe, it } from 'mocha';

describe('[ App ] Component', () => {

  it('should return the text React simple starter', () => {
    const app = renderComponent(App);
    expect(app).to.contain('React simple starter');
  });
});