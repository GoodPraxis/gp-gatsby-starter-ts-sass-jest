import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaEntry = {
  name: string,
  content: any,
  property?: any,
}

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: MetaEntry[];
  image?: string;
  title?: string;
  metaTitle?: string;
  metaAuthor?: string;
}

export function getMeta({
  description = '',
  meta = [],
  title = '',
  metaTitle = '',
  image = '',
}: SEOProps) {
  return [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:title',
      content: metaTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ].concat(meta);
}

export const PureSEO = (props: SEOProps) => {
  const {
    lang = 'en', title, description, meta, image, metaTitle, metaAuthor,
  } = props;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate="%s"
      meta={getMeta({
        lang, title, description, meta, image, metaTitle, metaAuthor,
      })}
    />
  );
};

/*
  istanbul ignore next
  Covered in E2E test
*/
const SEO = ({
  description, lang, meta, title, image, metaTitle, metaAuthor,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const { title: dataMetaTitle, metaAuthor: dataMetaAuthor, image: dataImage } = site.siteMetadata;

  return (
    <PureSEO
      title={title}
      metaTitle={metaTitle || dataMetaTitle}
      description={metaDescription}
      lang={lang}
      metaAuthor={metaAuthor || dataMetaAuthor}
      meta={meta}
      image={image || dataImage}
    />
  );
};

const defaultProps = {
  description: '',
  lang: 'en',
  title: '',
  meta: [] as MetaEntry[],
  image: '',
  metaTitle: '',
  metaAuthor: '',
};

SEO.defaultProps = defaultProps;

PureSEO.defaultProps = defaultProps;

export default SEO;
