// import { GetServerSideProps } from 'next';
import ServiceCard from '../componenets/ServiceCard';
import { services } from '../data';

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Hi, I'm Philip Otieno, full stack engineer with experience in web
        development using Python(Django/Flask), Node and React😊. I found myself
        taking a new career path as a web developer with the possibility of
        changing people around me. I love to help the community, I eat blue
        berries and sometimes I go to the gym 🏋! Follow me on social networks
        to be friends!
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
