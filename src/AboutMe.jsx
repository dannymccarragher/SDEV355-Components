const AboutMe = () => {
    const hobbies = ['Fishing', 'Hiking', 'Video Games', "Coding", "LeetCode"];

  return <>
  <div>
  <h2>Daniel McCarragher</h2>
  <h3>Student of Software Development</h3>
  <ul>Hobbies</ul>
    {hobbies.map(hobby => <li>{hobby}</li>)}  
  </div>

  </>;
};

export default AboutMe;
