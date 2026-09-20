import { useEffect, useState } from "react";

function GitHubRepositories() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://api.github.com/users/aryan-2912/repos")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch GitHub repositories");
          }

          return response.json();
        })
        .then((data) => {
          setRepositories(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch GitHub repositories");
          setLoading(false);
        });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="card">
        <h2>My GitHub Repositories</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="card">
        <h2>My GitHub Repositories</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>My GitHub Repositories</h2>

      <div className="repo-list">
        {repositories.map((repo) => (
          <div className="repo-item" key={repo.id}>
            <h3>{repo.name}</h3>

            <p>
              ⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GitHubRepositories;