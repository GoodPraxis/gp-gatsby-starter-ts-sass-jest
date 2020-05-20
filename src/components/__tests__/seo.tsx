import * as renderer from 'react-test-renderer';
import * as React from 'react';
import { getMeta, PureSEO as SEO } from '../seo';

describe('SEO', () => {
  it('creates correct SEO props', () => {
    const meta = getMeta({
      description: 'Foobar description',
      title: 'FooBar',
      metaTitle: 'FooBar',
      image: 'foo.bar',
    });
    expect(meta).toMatchSnapshot();
  });

  it('renders the component without any errors', () => {
    renderer.create(<SEO />);
    renderer.create(<SEO title="foobar" />);
    renderer.create(<SEO meta={[{ name: 'foo', content: 'bar' }]} />);
  });

  it('concatenates meta data', () => {
    const meta = getMeta({
      meta: [{ name: 'foo', content: 'bar' }],
    });
    expect(meta.filter(
      (e) => e.name === 'foo' && e.content === 'bar',
    ).length).toBe(1);
  });
});
