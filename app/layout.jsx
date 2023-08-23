
import "./globals.css";
// import {Figtree} from 'next/font/google'

// const font = Figtree ({ subsets: ['latin']})
export const metadata = {
  title: "an investment platform",
  description: "this is application of one of the world's biggest music platform ",
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
