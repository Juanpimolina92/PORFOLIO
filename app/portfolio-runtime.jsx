'use client';

import { useState } from 'react';
import Script from 'next/script';
import { InteractiveEffects } from '../src/interactive-effects';

export default function PortfolioRuntime() {
  const [aosReady, setAosReady] = useState(false);
  return <>
    <Script src="/assets/vendor/aos.js" strategy="afterInteractive" onReady={() => setAosReady(true)} onError={() => setAosReady(true)} />
    {aosReady && <Script src="/assets/app.js" strategy="afterInteractive" />}
    <InteractiveEffects />
  </>;
}
