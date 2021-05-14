import { GetServerSideProps } from 'next';
import { services } from '../data';
const index = (services) => {
  console.log('CLIENT', services);

  return <div>Project Page</div>;
};

export default index;

export const getServerSideProps = async (context: GetServerSideProps) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  console.log('SERVER', services);

  return {
    props: {
      services: data.services,
    },
  };
};
