

// export const metadata = {
//   title: 'Luxury 5 Star Hotels & Resorts in India - Zuri Hotels & Resorts	',
//   description: 'Welcome to one of the best Luxury 5 star hotels & resorts in India for an experience ‘far beyond expectations’. And discover the true meaning of ‘Zuri’.',
// }

import Head from "next/head";
import Script from "next/script";
import "react-datepicker/dist/react-datepicker.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="R23Ey1YcgVLq43ENjiGfVOrj2kWAltzGzqy9TEolc7M" />
      </Head>
      <body>
        {children}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>

        {/* Start Google Analytics Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-C7Q0PPCFZR`} />

        <Script strategy="afterInteractive" id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-C7Q0PPCFZR');
      `}
        </Script>
        {/* End Google Analytics Manager */}


        {/* Google Tag Manager (noscript) */}
        <Script id="google-tag-manager-start">
          {`
        >(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WHCGQWC');
        
      `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHCGQWC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

      </body>
    </html>
  )
}
