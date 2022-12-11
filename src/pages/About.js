import styled from "styled-components";
import GithubIcon from "../assets/icons/logo-github.svg";

const About = () => {
  return (
    <div>
      <Heading>
        <h1>About</h1> <br />
        <p>
          This project creates a product listing page and implements a search
          using the products title and a filter functionality, filtering
          products based on the categories.
        </p>{" "}
        <br />
        <p>
          The Project was built with Styled Components , React, Context API , React Testing Library and Framer Motion.
        </p>{" "}
        <br />
        <p>It was nice to learn the use of Context API in React.</p>
        <br />
        <a
          className="btn"
          href="https://github.com/TechieTee/Product-Listing-Page"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} alt="github-icon" />
          View on Github
        </a>
      </Heading>
    </div>
  );
};

//Styled Components
const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  display: block;

  a:nth-of-type(1) {
    border-top: #b0960a solid 2px;
  }
`;

export default About;
