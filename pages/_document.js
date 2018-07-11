import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <html>
        <Head>
        <title>{"Noah Gallant"}</title>
          <meta charset="utf-8"/>
          <meta name="description" content="Personal website of Noah Gallant"/>
          <meta name="keywords" content="web, site, noah, gallant, personal, about, technology"/>
          <link rel="canonical" href="https://noah.engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    )
  }
}
