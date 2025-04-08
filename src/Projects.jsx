// Components Renders The data from the projects array
const Projects = () => {

  const projects = [
    {
      name: "MacroMate",
      description:
        "Full Stack Application to enter the food you consumed to track MacroNutrients and Calories",
    },
    {
      name: "Office of The Registrar ChatBot",
      description: "Used AI Tools to build  chatbot to handle FAQ Questions",
    },
  ];

  const projectName = projects.map(project => <h4> {project.name} </h4>);
  const projectDescription = projects.map(project => <p> {project.description}</p>)

  return (
    <>
    <div>
      <h3> Projects </h3>
      {projectName}
      {projectDescription}
    </div>
    </>
  );
};

export default Projects;
