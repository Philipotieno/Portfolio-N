import '../styles/globals.css';
import SideBar from '../componenets/SideBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <SideBar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
