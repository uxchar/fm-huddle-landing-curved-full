import { useState, useRef } from "react";
import Footer from "./Footer";

function Newsletter() {
  const emailInput = useRef();
  const emailMessage = useRef();

  const [inputVal, setInputVal] = useState("");
  const emailTest =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // // email validation

  const checkEmail = (e) => {
    e.preventDefault();

    if (inputVal === "") {
      emailInput.current.classList.add("newsletter_email_err");
      emailMessage.current.classList.remove("email_success");
      emailMessage.current.classList.add("email_err_message");
    } else if (!emailTest.test(inputVal)) {
      emailInput.current.classList.add("newsletter_email_err");
      emailMessage.current.classList.remove("email_success");
      emailMessage.current.classList.add("email_err_message");
    } else {
      emailInput.current.classList.remove("newsletter_email_err");
      emailMessage.current.classList.remove("email_err_message");
      emailMessage.current.classList.add("email_success");
    }
  };

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
            ref={emailInput}
            value={inputVal}
            onChange={(event) => setInputVal(event.target.value)}
            placeholder="Please type in your email."
          ></input>
          <div className="btn">
            <div className="btn_background">
              <button className="subscribe_btn" onClick={checkEmail}>
                Subscribe
              </button>
            </div>
          </div>
          <div class="break"></div>
          <p className="email_success" ref={emailMessage}>
            {" "}
            Check your email please
          </p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Newsletter;
