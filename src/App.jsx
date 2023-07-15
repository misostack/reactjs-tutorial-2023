import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import LinkFormComponent from "./components/LinkFormComponent";
import enviroment from "./shared/environment";
import { Modal } from "bootstrap";
import Lession003 from "./Lession003";

function App() {
  return (
    <>
      <Lession003></Lession003>
    </>
  );
  console.log("1:App");
  const linkFormComponentModal = useRef(null);
  console.log("2:App", linkFormComponentModal);
  const [
    linkFormComponentBootstrapModalInstance,
    setLinkFormComponentBootstrapModalInstance,
  ] = useState(null);
  console.log("3:App", linkFormComponentBootstrapModalInstance);

  useEffect(() => {
    console.log("4:useEffect", linkFormComponentModal);
    const options = {
      keyboard: true,
      focus: true,
      backdrop: true,
    };
    const modal = new Modal(linkFormComponentModal.current, options);
    // handler events
    linkFormComponentModal.current.addEventListener(
      "hidden.bs.modal",
      (event) => {
        console.log("7:closeModalEvent");
      }
    );
    console.log("5:useEffect", modal);
    setLinkFormComponentBootstrapModalInstance(modal);
  }, [linkFormComponentModal]);

  const onNewLink = useCallback(
    (e) => {
      e.preventDefault();
      console.log("6:useCallback", linkFormComponentBootstrapModalInstance);
      if (linkFormComponentBootstrapModalInstance) {
        linkFormComponentBootstrapModalInstance.show();
      }
    },
    [linkFormComponentBootstrapModalInstance]
  );

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
      <LinkFormComponent ref={linkFormComponentModal}></LinkFormComponent>
    </>
  );
}

export default App;
