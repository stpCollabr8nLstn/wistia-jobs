import Document, { Head, Main, NextScript } from 'next/document';
import CSSReset from '../utils/css-reset';
import GlobalCSSClasses from '../utils/global-css-classes';

export default class StorefrontDocument extends Document {
  render() {
    return (
      <html lang="en-US" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta
            content="initial-scale=1.0, width=device-width"
            name="viewport" />
          <link href="/static/favicon.ico" rel="icon" />
          <CSSReset />
          <GlobalCSSClasses />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
