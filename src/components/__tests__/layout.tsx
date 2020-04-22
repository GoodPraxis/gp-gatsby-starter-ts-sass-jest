import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Layout from '../layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Layout><div>Foobar</div></Layout>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
