import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Ibrahim El Gibran</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="subject" content="Ibrahim El Gibran, Back End Developer" />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Ibrahim El Gibran. A Back End Developer from Indonesia"
      />
      <meta name="author" content="Ibrahim El Gibran" />

      {/* <link rel="icon" href="../assets/images/home-profile.png" /> */}
      <link
        rel="icon"
        href="https://iegcode.my.id/asset/admin/dist/images/logo.png"
      />
    </Head>
  );
}
