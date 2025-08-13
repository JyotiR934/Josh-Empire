import { NavLink } from "react-router-dom";
import { Analytics } from "./Analytics";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
export const About = () => {
  //const [name,setname]=useState("Hari");
  const {user}=useAuth();
//   useEffect(() => {
//   if (user) {
//     setname(user.username);
//   }
// }, [user]);
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="home-container">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <h2>Welcome {user.username}</h2>
              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <NavLink to="/service">
                <button className="btn">learn more</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="./images/about.jpeg"
                alt="coding buddies "
                width="650"
                height="350"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};