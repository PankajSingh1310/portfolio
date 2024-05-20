import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_putvixa", "template_8fnku3f", form.current, {
        publicKey: "JJKq3JVl0u16FZx8Z",
      })
      .then(
        () => {
          // console.log("SUCCESS!");

          const node = document.createTextNode("Mail sent successfuly");
          const para = document.createElement("p");
          para.appendChild(node);

          const element = document.getElementById("sendMsg");
          const child = document.getElementById("submit");

          element.insertBefore(para, child);

          setTimeout(() => {
            const toRemove = document.getElementById("sendMsg");
            toRemove.removeChild(toRemove.firstElementChild);
          }, 1500);

          // e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1>Contact</h1>

      <div className="formBox">
        <form form ref={form} onSubmit={sendEmail}>
          <div className="nameField">
            <label>Name</label>
            <input type="text" name="from_name" />
          </div>

          <div className="mailField">
            <label>Email</label>
            <input type="email" name="from_email" />
          </div>

          <div className="msgField">
            <label>Message</label>
            <textarea name="message" />
          </div>

          <div className="sbmtField" id="sendMsg">
            <input type="submit" value="Send" id="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
