"use client";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
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
          ></textarea>
        </div>
        <m.button
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="submit_button"
          type="submit"
        >
          Send
        </m.button>
      </form>
    </div>
  );
}
