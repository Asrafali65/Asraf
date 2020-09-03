import React from "react";
import Header from "./Header";
import Description from "./Description";
import Menu from "./Menu";

function Home() {
  return (
    <div className="homepage">
      <Header />
      <Description />
      <Menu />
    </div>
  );
}

export default Home;
