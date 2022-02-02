import React from "react";
import Bio from "./components/Bio";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <About />
        <Interests />
        <Footer />
      </div>
    );
  }
}

export default App;
