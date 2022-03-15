import { useState } from "react";
import Footer from "./Footer";

function Newsletter() {
  // const [emailInput] = useState("");
  // const emailTest =
  //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // // email validation

  // const checkEmail = (e) => {
  //   e.preventDefault();
  //   if (this.state.emailInput === "")
  //     console.log("Please provide an email address");
  // };

  return (
    <div className="newsletter_footer_container">
      <div className="newsletter">
        <h2 className="newsletter_title">Newsletter</h2>
        <p className="newsletter_txt">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <div className="sign-up">
          <input
            className="newsletter_input"
            type="text"
            // onChange={(e) => this.setState({ emailInput: e.target.value })}
            // value={this.state.emailInput}
            placeholder="Please type in your email."
          ></input>
          <div className="btn_background">
            <button className="subscribe_btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Newsletter;
