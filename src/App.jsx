import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import LinkFormComponent from "./components/LinkFormComponent";
import enviroment from "./shared/environment";
import { Modal } from "bootstrap";

function App() {
  const linkFormComponentModalInstance = useRef(null);
  const linkFormComponentModal = useRef(null);
  const { editLink, setEditLink } = useState(null);
  const onNewLink = (e) => {
    e.preventDefault();
    if (!linkFormComponentModalInstance.current) {
      console.log("new modal", linkFormComponentModalInstance.current);
      linkFormComponentModalInstance.current = new Modal(
        linkFormComponentModal.current,
        {
          backdrop: true,
          focus: true,
          keyboard: true,
        }
      );
      linkFormComponentModalInstance.current.show();
      console.log("created modal", linkFormComponentModalInstance.current);
      return;
    }
    console.log("existing modal", linkFormComponentModalInstance.current);
    linkFormComponentModalInstance.current.show();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://nextjsvietnam.com/themes/2022/src/assets/images/logo.png"
              alt="Bootstrap"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {enviroment.APP_NAME}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="mt-4">
        <div className="card">
          <div className="card-header text-bg-primary">
            <h3 className="card-title">Links</h3>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={onNewLink}>
                New Link
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-4">
        <div className="container">
          <p className="text-center">
            Copyright@JSBase - {enviroment.APP_VERSION} - {enviroment.MODE}
          </p>
        </div>
      </footer>
      <LinkFormComponent
        ref={linkFormComponentModal}
        link={editLink}
      ></LinkFormComponent>
    </>
  );
}

export default App;
