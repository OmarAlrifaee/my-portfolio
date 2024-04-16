import Data from "./skillsData";
const Skills = () => {
  return (
    <div className="content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5 mt-5">
      {Data.map(({ id, icon: Icon, iconStyle, experiance, title }) => (
        <div
          className="skill p-3"
          key={id}
        >
          <div className="flex gap-3">
            <Icon className={iconStyle} />
            <div>
              <h3 className="font-bold text-start">{title}</h3>
              <small className="text-c-light">{experiance}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
