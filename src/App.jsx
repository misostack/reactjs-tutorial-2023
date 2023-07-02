import "./App.css";
import enviroment from "./shared/environment";

function App() {
  return (
    <>
      <header>
        <h1>{enviroment.APP_NAME}</h1>
      </header>
      <main>Content</main>
      <footer>
        Copyright@JSBase - {enviroment.APP_VERSION} - {enviroment.MODE}
      </footer>
    </>
  );
}

export default App;
