import Footer from "./Footer";

function Newsletter() {
  return (
    <div className="newsletter_footer_container">
      <div className="newsletter">
        <h2 className="newsletter_title">Newsletter</h2>
        <p className="newsletter_txt">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <input className="newsletter_input" />
        <button className="submit_btn">Subscribe</button>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Newsletter;
