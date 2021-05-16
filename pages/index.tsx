// import { GetServerSideProps } from 'next';
import ServiceCard from '../componenets/ServiceCard';
import { services } from '../data';

const index = () => {
  return (
    <div>
      <h5>
        Hi, I'm Philip Otieno, full stack engineer with experience in web
        development using Python(Django/Flask), Node and React😊. I found myself
        taking a new career path as a web developer with the possibility of
        changing people around me. I love to help the community, I eat blue
        berries and sometimes I go to the gym 🏋! Follow me on social networks
        to be friends!
      </h5>
      <div>
        <h6>What I offer</h6>
        <div>
          {services.map((service) => (
            <ServiceCard service={service} />
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
