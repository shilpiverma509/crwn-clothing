import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomepageContainer } from "./homepage.styles";
import './homepage.styles.scss';

const Homepage = () =>{
  return (
    <HomepageContainer>
      <Directory />          
    </HomepageContainer>
  )
  }

export default Homepage;