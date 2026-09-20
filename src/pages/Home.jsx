import About from "../components/About";
import Skills from "../components/Skills";
import GitHubRepositories from "../components/GitHubRepositories";

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
      <GitHubRepositories />
    </>
  );
}

export default Home;