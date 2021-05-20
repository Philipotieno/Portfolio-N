import { languages, tools } from '../data';
import Bar from '../componenets/Bar';

const resume = () => {
  return (
    <div className="px-4">
      {/* Education & Exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">BSc With Edu</h5>
            <p className="font-semibold">Karatina University(2012-2016)</p>
            <p className="my-3">Relevant Courses Procedural Programming</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Andela Kenya</h5>
            <p className="font-semibold">Software Engineer</p>
            <p className="my-3">Relevant Courses Procedural Programming</p>
          </div>
        </div>
      </div>
      {/* Language & tools  */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Languages &amp; Frameworks
          </h5>
          <div className="my-2">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools &amp; Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
