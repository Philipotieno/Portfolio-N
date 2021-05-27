// import { GetServerSideProps } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';
import { routeAnimation } from '../animations';
import Head from 'next/head';
const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>
          Software Engineer | Web Developer | Portfolio | Philip Otieno
        </title>
      </Head>
      <h5 className="my-3 font-medium">
        Hi, I'm Philip Otieno, full stack engineer with experience in web
        development using Python(Django/Flask), and React😊. I found myself
        taking a new career path as a web developer with the possibility of
        changing people around me. I love to help the community, I eat blue
        berries and sometimes I go to the gym 🏋! Follow me on social networks
        to be friends!
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
