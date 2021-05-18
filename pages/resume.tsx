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
    </div>
  );
};

export default resume;
