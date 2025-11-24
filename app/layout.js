import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'Design Arena',
  description: 'Enter the Arena. Create your narrative.',
  themeColor: '#0b0b11',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${grotesk.className} h-full bg-canvas overflow-x-hidden`}>
        <div className="fixed inset-0 -z-10 bg-aurora bg-grid-glow"/>
        <div className="fixed -z-10 inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -left-16 w-80 h-80 rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(circle, #9a6cff, transparent 60%)'}}/>
          <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl opacity-25" style={{background:'radial-gradient(circle, #66e0ff, transparent 60%)'}}/>
        </div>
        <main className="mx-auto max-w-md min-h-screen relative">
          {children}
        </main>
      </body>
    </html>
  );
}
