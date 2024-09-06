import "./App.css";
import profileImage from "./assets/profile.jpg";
import Details from "./details";
import styles from "./MyComponent.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.imgContainer}>
        <img className={styles.img} src={profileImage} alt="profile picture" />
      </div>
      <h1>Jian xun</h1>
      <h2>Software Engineer</h2>
      <Details
        title={"About me"}
        content={
          "I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application"
        }
      />
      <Details
        title={"Contact me"}
        content={
          "Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/"
        }
      />
    </div>
  );
}

export default App;
