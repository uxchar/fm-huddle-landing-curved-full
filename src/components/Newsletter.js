function Newsletter() {
  return (
    <div>
      <h2 className="newsletter_title">Newsletter</h2>
      <p className="newletter_text">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <input className="newsletter_input" />
      <button className="submit_btn">Subscribe</button>
    </div>
  );
}

export default Newsletter;
