import "~/styles/tailwind.css";
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { usePostHog } from "next-use-posthog";

function MyApp({ Component, pageProps }: AppProps) {
  usePostHog(`${process.env.NEXT_PUBLIC_POSTHOG_TOKEN}`, {
    api_host: "https://app.posthog.com",
  });

  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <>
      <DefaultSeo
        defaultTitle="Aayush Sharma"
        titleTemplate="Aayush Sharma • %s"
        description="Aayush Sharma is a final year undergrad student majoring in CSE at BIT Mesra."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: url,
          site_name: "Aayush Sharma",
          title: "Aayush Sharma",
          description:
            "Aayush Sharma is a final year undergrad student majoring in CSE at BIT Mesra",
          images: [
            // {
            //   url: `${url}/images/ananya-seo.png`,
            //   alt: "",
            // },
          ],
        }}
        // twitter={{
        //   handle: "",
        //   cardType: "summary_large_image",
        // }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
