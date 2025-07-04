import './globals.css'

export const metadata = {
  title: 'Zuri Hotels & Resorts - Luxury 5 Star Hotels & Resorts in India',
  description: 'Welcome to one of the best Luxury 5 star hotels & resorts in India for an experience far beyond expectations. Discover the true meaning of Zuri.',
}

// import Head from "next/head";
import MetaPixel from "@/components/MetaPixel";
import Script from "next/script";
import "react-datepicker/dist/react-datepicker.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="R23Ey1YcgVLq43ENjiGfVOrj2kWAltzGzqy9TEolc7M" />
        {/* Meta Pixel Script */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '442139957376778');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=442139957376778&ev=PageView&noscript=1"
            alt=""
          />
        </noscript> */}
        {/* Preload critical resources */}
        <link rel="preload" href="/home/zuri_slider_banner_01.jpg" as="image" />
        <link rel="preload" href="/home/mobile_zuri_slider_banner_1.jpg" as="image" media="(max-width: 768px)" />
        {/* Preconnect and optimize Google Fonts - combined request */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=YourOtherFont:wght@400;700&display=swap" />
        {/* Example: Inline critical CSS for above-the-fold content (optional, for best LCP) */}
        {/* <style>{`body { background: #fff; } .header { ... }`}</style> */}
        {/* Example: Defer non-critical CSS (replace with your actual non-critical CSS files) */}
        {/* <link rel="stylesheet" href="/css/non-critical.css" media="print" onLoad="this.media='all'" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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

        <MetaPixel />
      </body>
    </html>
  )
}
