import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Benefits from "./components/Benefits";
import ActionCall from "./components/ActionCall";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <div className="stat_container">
        <Stats
          stat_icon="./assets/images/icon-communities.svg"
          stat_num="1.4k+"
          stat_text="Communities Formed"
        />
        <Stats
          stat_icon="./assets/images/icon-messages.svg"
          stat_num="2.7m+"
          stat_text="Messages Sent"
        />
      </div>

      <div className="bg1">
        <Benefits
          benefits_img="./assets/images/illustration-grow-together.svg"
          benefits_title="Grow Together"
          benefits_text="Generate meaningful discussions with your audience and build a strong, loyal community. 
        Think of the insightful conversations you miss out on with a feedback form. "
        />
      </div>
      <Benefits
        benefits_img="./assets/images/illustration-flowing-conversation.svg"
        benefits_title="Flowing Conversations"
        benefits_text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
        just-in-time loading for a more natural flow."
      />
      <div className="bg2">
        <Benefits
          benefits_img="./assets/images/illustration-your-users.svg"
          benefits_title="Your Users"
          benefits_text="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
        once signed in to your app, your users can start chatting immediately."
        />
      </div>

      <ActionCall />

      <div className="bg3">
        <Newsletter />
      </div>
    </div>
  );
}

export default App;
