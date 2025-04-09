"use client";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API endpoint - change this for production
  const API_URL = import.meta.env.VITE_API_URL || '[https://your-backend-url.railway.app](https://your-backend-url.railway.app)' || 'http://localhost:8000';

  async function handleSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
      setStatus("Message sent successfully!");

      // Reset status message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="form_wrapper" id="contact">
      <h3 className="contact">Contact</h3>
      <form onSubmit={handleSubmit} id="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoComplete="true"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            autoComplete="true"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Leave a message for a quick response."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        {status && <div className="status-message">{status}</div>}
        <m.button
          whileHover={{
            scale: isSubmitting ? 1 : 1.1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="submit_button"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending" : "Send"}
        </m.button>
      </form>
    </div>
  );
}
