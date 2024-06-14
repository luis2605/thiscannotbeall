import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page </title>
        <meta
          name="description"
          content="This is the home page of my React application."
        />
        <meta name="keywords" content="home, react, seo, react helmet" />
      </Helmet>
    </div>
  );
};

export default Home;
