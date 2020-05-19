import { getMeta } from '../seo';

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

  it('concatenates meta data', () => {
    const meta = getMeta({
      meta: [{ name: 'foo', content: 'bar' }],
    });
    expect(meta.filter(
      (e) => e.name === 'foo' && e.content === 'bar',
    ).length).toBe(1);
  });
});
