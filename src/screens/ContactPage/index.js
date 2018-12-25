import React, { Component } from "react";
import NavigationBar from "./../../components/NavigationBar";
import ContentContainer from "./../../components/ContentContainer";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar page="Contact" />
        <ContentContainer>
          <h1>this is the Contact Page!</h1>
        </ContentContainer>
      </div>
    );
  }
}

export default ContactPage;
