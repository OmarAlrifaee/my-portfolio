import Skills from "./Skills";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container">
        <div className="frontend bg-c-primary-variant rounded-[20px] p-12 hover:bg-transparent border mx-auto">
          <h3 className="text-[35px]">Frontend Developer</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Experiance;
