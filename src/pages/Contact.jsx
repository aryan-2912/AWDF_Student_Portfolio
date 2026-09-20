import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="card">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSubmitted(false);
          }}
        />

        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setSubmitted(false);
          }}
        />

        <button type="submit">Send Message</button>
      </form>

      <p>Hello, {name}</p>

      {submitted && (
        <p>
          Message sent successfully!
        </p>
      )}
    </section>
  );
}

export default Contact;