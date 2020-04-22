
import * as renderer from 'react-test-renderer';
import * as React from 'react';
import { PureSEO as SEO } from '../seo';


describe('SEO', () => {
  it('renders correctly with default values', () => {
    const tree = renderer
      .create(<SEO title="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with data', () => {
    const tree = renderer
      .create(<SEO
        title="test"
        metaTitle="meta test"
        metaAuthor="meta author test"
        meta={[{ name: 'foo', content: 'bar' }]}
        lang="fr"
        description="description test"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
