import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>About </title>
        <meta
          name="description"
          content="This is the home page of my React application."
        />
        <meta name="keywords" content="home, react, seo, react helmet" />
      </Helmet>
    </div>
  );
};

export default About;
