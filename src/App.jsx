import "./App.css";
import enviroment from "./shared/environment";

function Hello() {
  return (
    <li>
      <strong>Hello</strong>
    </li>
  );
}

function App() {
  const aString = "aString";
  const aBoolean = true;
  const aNumber = 0.3;
  const anObject = {};
  const anArray = ["green", "red", "yellow"];
  const anArrayElements = [<Hello key="1" />, <Hello key="2" />];
  for (let index = 3; index <= 10; index++) {
    anArrayElements.push(<Hello key={index} />);
  }
  return (
    <>
      <h1>ReactJS Tutorial 2023</h1>
      <header>
        <h1>{enviroment.APP_NAME}</h1>
      </header>
      <main>
        <h2>JSX</h2>
        <br />
        <h3
          className="success"
          style={{
            fontSize: "2rem",
          }}
        >
          Inline style and Class
        </h3>
        <p>aString: {aString}</p>
        <p>aBoolean: {aBoolean}</p>
        <p>aNumber: {aNumber}</p>
        <p>An Array: {anArray}</p>
        <p>An Object: {JSON.stringify(anObject)}</p>
        <p>
          {anArray.length > 3 ? (
            <strong>Long list</strong>
          ) : (
            <strong>Short list</strong>
          )}
        </p>
        <div>
          An Array Of Elements: <ul>{anArrayElements}</ul>
        </div>
        <ol style={{ listStyleType: "\\1F44" }}>
          {anArrayElements.map((item) => item)}
        </ol>
        <button
          onClick={() => {
            alert("This button has been clicked!");
          }}
        >
          On click event handler
        </button>
      </main>
      <footer>
        Copyright@JSBase - {enviroment.APP_VERSION} - {enviroment.MODE}
      </footer>
    </>
  );
}

export default App;
