import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import { sendForm } from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null!);
  const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendForm(
      import.meta.env.VITE_SERVICES_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_PUPLIC_KEY
    )
      .then((respone) => console.log(respone))
      .then((data) => console.log(data));
    e.currentTarget.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container flex md:flex-row flex-col md:items-start items-center gap-12">
        <div className="contact-options flex flex-col gap-5 flex-1 w-full">
          <div className="option text-center bg-c-bg-variant p-3 rounded-md border border-transparent hover:bg-transparent hover:border-c-primary-variant transition-all duration-[0.5s]">
            <MdEmail className="mx-auto text-c-primary" />
            <h4 className="mt-3">Email</h4>
            <h6>jivara211@gmail.com</h6>
            <a
              href="mailto:jivara211@gmail.com"
              target="_blank"
              className="mt-3"
            >
              Send A Message
            </a>
          </div>
          <div className="option text-center bg-c-bg-variant p-3 rounded-md border border-transparent hover:bg-transparent hover:border-c-primary-variant transition-all duration-[0.5s]">
            <FaWhatsapp className="mx-auto text-c-primary" />
            <h4 className="mt-3">WhatsApp</h4>
            <h6>+963 938105365</h6>
            <a
              href="https://api.whatsapp.com/send?phone=0938105365"
              target="_blank"
              className="mt-3"
            >
              Send A Message
            </a>
          </div>
        </div>
        {/* end of contact options */}
        <form
          action=""
          className="flex flex-col flex-1 gap-3 w-full"
          ref={formRef}
          onSubmit={hundleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="py-2 px-3 rounded-md w-full bg-transparent border border-c-primary-variant"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="py-2 px-3 rounded-md w-full bg-transparent border border-c-primary-variant"
          />
          <textarea
            name="massege"
            placeholder="Your Massege"
            rows={7}
            className="py-2 px-3 rounded-md w-full bg-transparent border border-c-primary-variant resize-none"
          ></textarea>
          <button className="btn btn-primary font-bold md:mx-0 mx-auto">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
