import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-rim-auto-match" content="none" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#3d5af1" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="author" content="https://www.gonzarascon.com" />
          <meta
            name="title"
            content="KnowTo — Framework para cursos y capacitaciones"
          />
          <meta
            name="description"
            content="KnowTo es un framework moderno para crear cursos y capacitaciones a medida."
          />
          <meta
            name="keywords"
            content="elearning, cursos, capacitaciones, framework"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          <meta
            property="og:title"
            content="KnowTo — Framework para cursos y capacitaciones"
          />
          <meta
            property="og:site_name"
            content="KnowTo — Framework para cursos y capacitaciones"
          />
          <meta property="og:url" content="https://gonzarascon.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="KnowTo es un framework moderno para crear cursos y capacitaciones a medida."
          />
          <meta
            property="og:image"
            content="https://gonzarascon.com/images/share-img.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://gonzarascon.com/images/share-img.png"
          />

          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://gonzarascon.com/images/share-img.png"
          />
          <meta name="twitter:site" content="https://gonzarascon.com" />
          <meta name="twitter:creator" content="@gonza_rascon" />

          <link rel="canonical" href="https://www.gonzarascon.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
