function Projects() {
  const projects = [
    {
      title: "Diabetes Prediction Model",
      description:
        "A machine learning project for predicting diabetes using patient-related data.",
      technologies:
        "Python | Pandas | NumPy | Scikit-learn | Random Forest",
      colab:
        "https://colab.research.google.com/drive/16NJohojAdvRHk5fgT8_a-CGPDFlrsDR2",
    },

    {
      title: "IPL Winning Team Prediction Model",
      description:
        "A machine learning project focused on predicting the winning team in IPL matches.",
      technologies:
        "Python | Pandas | NumPy | Scikit-learn",
      colab:
        "https://colab.research.google.com/drive/1uElQCXGBo8RXO0A1II7W0HPMsZsBI2Hi",
    },

    {
      title: "Car Price Predictor",
      description:
        "A machine learning project for predicting car prices based on available features.",
      technologies:
        "Python | Pandas | NumPy | Scikit-learn",
      colab:
        "https://colab.research.google.com/drive/1DuUsT8EnrZ8qB-MmB3B-lF9WST1fzIRY",
    },

    {
      title: "Breast Cancer Detection Model",
      description:
        "A neural network based project for breast cancer detection.",
      technologies:
        "Python | Scikit-learn | StandardScaler | TensorFlow | Keras | Neural Network",
      colab:
        "https://colab.research.google.com/drive/1Pa6UBeo99BOVmkm3qEhWz0bVI3JG9aJs",
    },

    {
      title: "Student Portfolio",
      description:
        "A responsive student portfolio developed using React and Vite with reusable components.",
      technologies:
        "React | Vite | JavaScript",
        portfolio:
  "https://awdf-student-portfolio.vercel.app",
    },
  ];

  return (
    <section className="card">
      <h2>My Projects</h2>

      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>

            {project.colab && (
              <a
                href={project.colab}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Colab
              </a>
            )}
            {project.portfolio && (
            <a
             href={project.portfolio}
             target="_blank"
             rel="noopener noreferrer"
              >
               View Portfolio
               </a>
             )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;