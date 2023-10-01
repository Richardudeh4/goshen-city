
import "./globals.css";
// import {Figtree} from 'next/font/google'

// const font = Figtree ({ subsets: ['latin']})
export const metadata = {
  title: "nextJs tutotial",
  description: "this is a trainning for next js",
};

export default function RootLayout({ children }) {

 
  return (
    <html lang='en'>
      <body> 
      {children}
      </body>
    </html>
  );
}
