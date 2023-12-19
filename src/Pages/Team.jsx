import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Mr. A", job: "Legal Advisor1", email: "jainayush9453@gmail.com", mob:"+91 7985225033", link: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
    { img: Person2, name: "Mr. B", job: "Legal Advisor2", email: "2jainayush9453@gmail.com",mob:"+91 7985225033", link: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
    { img: Person3, name: "Mr. C", job: "Legal Advisor3",email: "jainayush9453@gmail.com",mob:"+91 7985225033", link: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
    { img: Person4, name: "Mr. D", job: "Legal Advisor4",email: "jainayush9453@gmail.com", mob:"+91 7985225033",link: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
    { img: Person5, name: "Mr. E", job: "Legal Advisor5", email: "jainayush9453@gmail.com",mob:"+91 7985225033",link: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
    { img: Person6, name: "Mr. F", job: "Legal Advisor6", email: "jainayush9453@gmail.com",mob:"+91 7985225033",link: "https://mail.google.com/mail/u/0/#inbox?compose=new" },
  ];

  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt={`team_img_${id}`} />
                </div>
                <div className="team-container__box__descr">
                  <h3>
                    <p>{ppl.name}</p>
                  </h3>
                  
                  <h4><p>{ppl.job}</p></h4>
                  <h4><a href={ppl.link}>{ppl.email}</a></h4>
                  <h4> <p>{ppl.mob}</p></h4>
        
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book an appointment by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 xxxxxxxxxx</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
