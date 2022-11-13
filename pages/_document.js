// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html>
          <Head>
              <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps.css"
              />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
}