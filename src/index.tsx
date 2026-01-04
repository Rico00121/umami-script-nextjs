import Script from 'next/script';

export interface UmamiScriptProps {
  /**
   * Umami website ID
   * If not provided, will use NEXT_PUBLIC_UMAMI_WEBSITE_ID from environment variables
   */
  websiteId?: string;
  /**
   * Umami script source URL
   * Default: "https://cloud.umami.is/script.js"
   */
  scriptSrc?: string;
  /**
   * Next.js Script loading strategy
   * Default: "afterInteractive"
   */
  strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker';
}

export default function UmamiScript({
  websiteId,
  scriptSrc = 'https://cloud.umami.is/script.js',
  strategy = 'afterInteractive',
}: UmamiScriptProps = {}) {
  const id = websiteId || process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!id) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Umami tracking is disabled (website ID not set).');
    }
    return null;
  }

  return (
    <Script
      src={scriptSrc}
      data-website-id={id}
      strategy={strategy}
    />
  );
}

