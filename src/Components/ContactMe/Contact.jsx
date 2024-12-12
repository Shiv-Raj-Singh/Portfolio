import { useRef, useState } from "react";
import "./contact.css";
import axios from "axios";

const dummy = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [user, setUser] = useState(dummy);
  const btn = useRef();

  const onChangeHandle = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    btn.current.setAttribute("disabled", true);
    try {
      const { data } = await axios.post(
        "https://portfolio-server-qm0x.onrender.com/send/email",
        user
      );
      if (data.status) {
        alert("Response sent successfully!");
      }
      setUser(dummy);
      btn.current.removeAttribute("disabled");
    } catch (error) {
      alert(error.message);
      btn.current.removeAttribute("disabled");
    }
  };

  return (
    <div className="contact-page d-flex justify-content-center align-items-center">
      <div className="contact-container shadow p-4 rounded">
        <h2 className="text-center title mb-4">Contact Me</h2>
        <form onSubmit={onSubmitHandle}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <span className="label-highlight">Enter Your Name</span>
            </label>
            <input
              type="text"
              required
              onChange={onChangeHandle}
              className="form-control"
              name="name"
              value={user.name}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <span className="label-highlight">Enter Your Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              onChange={onChangeHandle}
              value={user.email}
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <span className="label-highlight">Write Your Message</span>
            </label>
            <textarea
              name="message"
              value={user.message}
              onChange={onChangeHandle}
              className="form-control"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            ref={btn}
            className="btn btn-custom w-100 mt-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
