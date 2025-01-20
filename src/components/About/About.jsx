import React from 'react';
import './style.css';
import aboutusimg from '../../assest/about us.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img className="about-image" src={aboutusimg} alt="About Us" />
        <h3 className="about-title">About Us</h3>
      </div>
      <p className="about-description">
        Just Dial Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.
      </p>

      <h3 className="about-mission">Mission</h3>
      <p className="about-description">
        To provide fast, free, reliable, and comprehensive information to our users and enable discovery and transactions for all products and services.
      </p>

      <h3 className="about-title">Corporate Information</h3>
      <ul className="about-list">
        <li>The company's operations began in 1996 with offering local search services under the Justdial brand, which is</li>
        <li>Now the leading local search engine in India.</li>
        <li>The official website www.justdial.com was launched in 2007.</li>
        <li>Justdial's search services are available to users across multiple platforms such as website, mobile website, Apps, voice and text (SMS).</li>
        <li>Justdial's search services bridge the gap between users and businesses by helping users find relevant providers of products and services effortlessly, while helping businesses listed in Justdial's database to market their offerings.</li>
      </ul>

      <h3 className="about-title">Justdial Facts</h3>
      <ul className="about-list">
        <li>Justdial Apps are available on Android and iOS platforms and have location-based services for mobile internet users.</li>
        <li>Justdial's voice services are available on 8888888888, their operator assisted hot line number, across India, which is accessible 24 hours a day, 7 days a week with multi-lingual support.</li>
        <li>Justdial has a database of approximately 47.5 million listings as of December 31, 2024.</li>
        <li>It has 191.2 million quarterly unique users across web, mobile, App & voice platforms as of December 31, 2024.</li>
        <li>Justdial users have contributed 151.4 million reviews and ratings for various listings as of December 31, 2024.</li>
        <li>Justdial had approximately 601,080 campaigns as of December 31, 2024. Business owners have the option to list their business on Justdial's database for free.</li>
        <li>With the registered & corporate office based in Mumbai, Justdial also has offices across India in Ahmedabad, Bengaluru, Chandigarh, Chennai, Coimbatore, Delhi, Hyderabad, Jaipur, Kolkata and Pune.</li>
      </ul>

      <h3 className="about-title">Key Highlights</h3>
      <ul className="about-list">
        <li><b>Pan India presence: </b>Services offered all over India across 250+ cities.</li>
        <li><b>First-mover advantage:</b> Being the industry pioneer, Justdial has a robust presence in all cities and towns of India including deep penetration in Tier II and III cities.</li>
        <li> <b>Advanced and scalable technology platform: </b>A vast range of features for a more engaging user experience with 23 transaction oriented search plus verticals, JD Social – Justdial's own social sharing platform, and a Real Time Chat Messenger, on a single platform.</li>
        <li><b>Large Online community of engaged users:</b> With over 191.2 million users (quarterly average unique users) and who have contributed to 151.4 million ratings and reviews, as of December 31, 2024, Justdial's online community continues to be more engaged than ever.</li>
        <li><b>Attractive value proposition for local MSMEs: </b>Justdial's value-added offerings of huge online visibility, payment solutions, customized website, mobile site and mobile app; all packaged together, make it an attractive value proposition for MSMEs, several of whom have continuous associations with Justdial.</li>
        <li><b>Local Expertise:</b> With a strong and widespread sales force, years of experience and in-depth local market knowledge, Justdial enjoys significant expertise across all regions of the country. Besides, Justdial's healthy relations with existing MSMEs enable them to get referrals and repeat business.</li>
        <li><b>Long operating history with a proven monetization model.</b></li>
        <li><b>Experienced management team</b></li>
      </ul>
    </div>
  );
}

export default About;
