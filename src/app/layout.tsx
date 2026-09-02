import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { STORE_INFO } from '../data/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://appsungmobiles.com'),
  title: `${STORE_INFO.name} | Dubai's Flagship Store`,
  description: `${STORE_INFO.name} - Premier destination for genuine Apple iPhones, Samsung Galaxy, smartwatches, iPads, and Meta Quest VR headsets in Bur Dubai, UAE.`,
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: STORE_INFO.name,
    description: STORE_INFO.tagline,
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
