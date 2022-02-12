import "./styles.css";
import HomeComponent from "././modules/home/HomeComponent";
import LoginComponent from "././modules/login/LoginComponent";

export default function App() {
  return (
    <div className="App">
      <LoginComponent />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <HomeComponent />
    </div>
  );
}
