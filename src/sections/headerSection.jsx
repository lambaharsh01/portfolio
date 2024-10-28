import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";

export default function HeaderSection() {
  return (
      <header className="mt-12">
        {/* <i className="ri-moon-line change-theme" id="theme-button">lol</i> */}
        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border" >
            <img src="/portfolio_images/profile.jpg" alt="profile" className="rounded-full" />
            </div>

            <h2 className="profile__name" >
              Harsh Lamba
            </h2>
            <h3 className="profile__profession" >
              Web developer
            </h3>

            <ul className="profile__social" >
              <a
                href="https://www.instagram.com/lambaharsh01"
                target="_blank"
                rel="noreferrer"
                className="profile__social-link"
                
              >
               <FaInstagram className="text-xl"  />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-lamba-1b185b214"
                target="_blank"
                rel="noreferrer"
                className="profile__social-link mx-2"
              >
                <TbBrandLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/lambaharsh01"
                target="_blank"
                rel="noreferrer"
                className="profile__social-link"
              >
                <BsGithub className="text-xl"/>
              </a>
            </ul>
          </div>

          <div className="profile__info grid">
            <div className="profile__info-group" >
              <h3 className="text-base">1.5 +</h3>
              <p className="profile__info-description">
                Years of <br />
                experience
              </p>
            </div>
            <div className="profile__info-group" >
              <h3 className="text-base">20 +</h3>
              <p className="profile__info-description">
                Completed <br />
                projects
              </p>
            </div>
            <div className="profile__info-group" >
              <h3 className="text-base">2 +</h3>
              <p className="profile__info-description">
                Projects <br />
                lead
              </p>
            </div>
          </div>

          <div className="profile__buttons">
            <a
              download=""
              href="/lambaharsh01.pdf"
              rel="noreferrer"
              className="button"
            >
              <span className="text-bold">Download CV</span> <MdOutlineFileDownload className="text-2xl"/>
            </a>

            <div className="profile__buttons-small">
              <a
                href="https://api.whatsapp.com/send?phone=+91 8287868558&amp;text=Hello,%20more%20information!"
                target="_blank"
                rel="noreferrer"
                className="button button__small button__gray p-3.5"
              >
               <FaWhatsapp className="text-3xl"/> 
              </a>
            </div>
          </div>
        </div>
      </header>

  );
}