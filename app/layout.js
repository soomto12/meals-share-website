import './globals.css';
import Header from '@/components/header';
import MainHeader from '@/components/main.header-background';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
       
<Header/>
        {children}
      </body>
    </html>
  );
}
