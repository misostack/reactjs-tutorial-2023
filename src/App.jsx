import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import LinkFormComponent from "./components/LinkFormComponent";
import enviroment from "./shared/environment";
import { Modal } from "bootstrap";
import { useImmer } from "use-immer";

export const LINK_TYPE = {
  LINK: "link",
  YOUTUBE: "youtube",
  IMAGE: "image",
};

function App() {
  const linkFormComponentModalInstance = useRef(null);
  const linkFormComponentModal = useRef(null);
  const [editLink, setEditLink] = useState(null);
  const [links, setLinks] = useImmer([
    {
      id: 1,
      link: "https://nextjsvietnam.com",
      title: "https://nextjsvietnam.com",
      type: LINK_TYPE.LINK,
      publishedDate: new Date(),
    },
  ]);

  const openModal = () => {
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
      // handler event close
      linkFormComponentModal.current.addEventListener("hide.bs.modal", () => {
        // reset state
        setEditLink(null);
      });
      return;
    }
    console.log("existing modal", linkFormComponentModalInstance.current);
    linkFormComponentModalInstance.current.show();
  };

  const closeModal = () => {
    if (linkFormComponentModalInstance.current) {
      linkFormComponentModalInstance.current.hide();
    }
  };

  const onNewLink = (e) => {
    e.preventDefault();
    openModal();
  };

  const onEditLink = (link) => {
    // set editLink
    setEditLink(link);
    // open modal
    openModal();
  };

  const onSaveLink = (data) => {
    const link = structuredClone(data);
    // new link has no id
    // existed link has id
    if (link && !link.id) {
      setLinks((linkList) => {
        Reflect.set(link, "id", Date.now());
        Reflect.set(link, "publishedDate", new Date());
        linkList.push(link);
      });
      // close modal
      closeModal();
      return;
    }
    // otherwise edit mode
    if (link && link.id) {
      setLinks((linkList) => {
        Reflect.set(link, "publishedDate", new Date());
        const editLinkIndex = linkList.findIndex((l) => l.id === link.id);
        linkList[editLinkIndex] = link;
      });
      // close modal
      closeModal();
      return;
    }
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
            <div>
              {links.map((link) => (
                <div key={link.id}>
                  <h4>
                    <a rel="noreferrer" target="_blank" href={link.link}>
                      {link.title}
                    </a>
                  </h4>
                  <span>
                    {link.publishedDate && link.publishedDate.toISOString()}
                  </span>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      onEditLink(link);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ))}
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
        onSaveLink={onSaveLink}
      ></LinkFormComponent>
    </>
  );
}

export default App;
