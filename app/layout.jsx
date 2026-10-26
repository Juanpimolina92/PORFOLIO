export const metadata = {
  title: 'Juan Pablo Molina · Diseño Web',
  description: 'Sitios a medida para profesionales y emprendimientos. Conocé mis proyectos y conversemos sobre tu próxima web.',
  icons: { icon: '/assets/favicon.svg' },
  openGraph: {
    title: 'Tu idea merece una gran web · Juan Pablo Molina',
    description: 'Diseño y desarrollo de páginas web para que tu negocio dé su próximo paso.',
    locale: 'es_AR',
    type: 'website',
  },
};

export const viewport = { themeColor: '#f7f7f2' };

export default function RootLayout({ children }) {
  return <html lang="es-AR"><head>
    <meta property="og:image" content="assets/images/social-preview.png" />
    <link rel="preload" href="/assets/fonts/Montserrat.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    <link rel="stylesheet" href="/assets/vendor/aos.css" />
    <link rel="stylesheet" href="/assets/styles.css" />
  </head><body>{children}</body></html>;
}
