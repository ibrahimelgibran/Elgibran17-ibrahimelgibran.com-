import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Ibrahim El Gibran - Personal Portfolio</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="subject"
        content="Ibrahim El Gibran, Frontend and Backend Website and Mobile Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Ibrahim El Gibran. A Frontend, Backend Developer and Mobile Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta name="author" content="Ibrahim El Gibran" />

      <link rel="icon" href="./assets/images/home-profile.png" />
    </Head>
  );
}
