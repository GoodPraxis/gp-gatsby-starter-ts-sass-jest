/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: { name: string; content: any; property?: undefined; }[];
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

export const PureSEO: React.FC<SEOProps> = (props: SEOProps) => {
  const { lang = 'en', title } = props;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate="%s"
      meta={getMeta(props)}
    />
  );
};

/*
  istanbul ignore next
  Covered in E2E test
*/
const SEO: React.FC<SEOProps> = ({
  description = '', lang = 'en', meta = [], title,
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
  const { title: metaTitle, metaAuthor, image } = site.siteMetadata;

  return (
    <PureSEO
      title={title}
      metaTitle={metaTitle}
      description={metaDescription}
      lang={lang}
      metaAuthor={metaAuthor}
      meta={meta}
      image={image}
    />
  );
};

export default SEO;
