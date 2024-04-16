import Data from "./skillsData";
const Skills = () => {
  return (
    <div className="content flex justify-center items-center gap-5 flex-wrap place-items-center mt-5">
      {Data.map(({ id, icon: Icon, iconStyle, experiance, title }) => (
        <div
          className="skill p-3"
          key={id}
        >
          <div className="flex flex-col items-center justify-center">
            <Icon className={`${iconStyle} text-[40px]`} />
            <h3 className="font-bold text-center mt-3">{title}</h3>
            <small className="text-c-light">{experiance}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
