import {useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
function App() {
  const {
    register,
    handleSubmit,
    reset,
   
    formState: { errors },
  } = useForm();
const form = useRef();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "portfolio_rana_arju",
        "template_we34ezl",
        form.current,
        "NVoyRWy1HhJ-3DfFm"
      )
      .then(
        (result) => {
          if (result) {
            toast.success("Message Send Successful!");
            reset();
          }
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Delete Account Request.</h2>
          <p></p>
        </div>

        <div className="row" data-aos="fade-in">
       
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch rounded">
            <form
              ref={form}
              className="contact-form  rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              {(errors.name?.type === "required" ||
                errors.email?.type === "required" ||
                errors.message?.type === "required" || errors.subject?.type === "required") && (
                  <p role="alert" className="text-danger">
                    One or more field are required*
                  </p>
                )}
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Account Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Register Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject of Message"
                  {...register("subject", { required: true })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  rows="8"
                  placeholder="Why you want to delete your account?"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="button"
                  style={{ border: "1px solid #149ddd" }}
                >
                  Delete Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default App