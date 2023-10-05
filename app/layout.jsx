
import "./globals.css";
// import {Figtree} from 'next/font/google'

// const font = Figtree ({ subsets: ['latin']})
export const metadata = {
  title: "GOSHEN SCHOOLS",
  description: "this is a the oficial webpage for goshen city schools",
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
// https://goshencityschools.com/wp-content/uploads/2020/05/Building.jpg
// https://goshencityschools.com/wp-content/uploads/2020/05/Lab1.jpg
// https://goshencityschools.com/wp-content/uploads/2020/05/computer-room.jpg
// https://goshencityschools.com/wp-content/uploads/2020/05/prop-2edited.png
// https://goshencityschools.com/wp-content/uploads/2021/09/School-Logo-with-name.jpg