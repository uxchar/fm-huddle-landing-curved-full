function Footer() {
  return (
    <div className="footer_container">
      <img src="./assets/images/logo-white.svg" className="footer_logo" />
      <p className="footer_txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <div className="contact_container">
        <img className="footer_icon" src="./assets/images/icon-phone.svg" />
        <p className="phone"> Phone: +1-543-123-4567</p>
        <br></br>
        <img className="footer_icon" src="./assets/images/icon-email.svg" />
        <p className="email">example@huddle.com</p>
      </div>
      <div className="social_icons">
        <img src="./assets/images/5365678_fb_facebook_facebook logo_icon.svg" />
        <img src="./assets/images/1161953_instagram_icon.svg" />
        <img src="./assets/images/5305172_tweet_twitter_twitter logo_icon.svg" />
      </div>
    </div>
  );
}

export default Footer;
