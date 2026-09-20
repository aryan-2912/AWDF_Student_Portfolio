import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  const skills = [
    "Python",
    "C",
    "C++",
    "SQL",
    "Data Analysis",
    "Pandas",
    "NumPy",
    "Git & GitHub",
  ];

  return (
    <>
      <About />
      <Skills skillList={skills} />
    </>
  );
}

export default Home;