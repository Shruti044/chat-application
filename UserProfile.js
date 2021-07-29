import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://www.biography.com/.image/t_share/MTU5MDUzMTE0Mzk2MTI0OTUy/abraham-lincoln-1809---18652c-sixteenth-president-of-the-united-states-of-america-photo-by-stock-montagestock-montagegetty-images_promo.jpg" />
          </div>
          <h4>Abraham Lincoln</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
           CEO and Founder at a Recognised Company.
          </div>
        </div>
      </div>
    );
  }
}