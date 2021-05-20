import '../styles/globals.css';
import SideBar from '../componenets/SideBar';
import Navbar from '../componenets/Navbar';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-black lg:col-span-3 rounded-2xl">
          <SideBar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl ">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
