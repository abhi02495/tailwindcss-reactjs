import React from "react";
import './index.css';
import EmailImage from './assets/img/email-subscriber.jpg';

const EmailSubscribeComponent = () => {
    return (
     //   <!-- Background Container -->
    <div className="email-container">
       {/* <!-- Card --> */}
      <div className="card">
        {/* <!-- Flex Container --> */}
        <div className="flex-container">
          {/* <!-- Image --> */}
          <img
            src={EmailImage}
            alt=""
            className="image"
          />
          {/* <!-- Content --> */}
          <div className="p-6 md:p-12">
            <h2
              className="content-h2"
            >
              Get diet and fitness tips in your inbox
            </h2>

            <p
              className="content-p"
            >
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>

            <div
              className="content-div"
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="content-div-input"
              />

              <button
                className="content-div-button"
              >
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default EmailSubscribeComponent;