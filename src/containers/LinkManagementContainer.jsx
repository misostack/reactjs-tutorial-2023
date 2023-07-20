import { useRef, useState } from "react";
import LinkFormComponent from "../components/LinkFormComponent";
import { Modal } from "bootstrap";
import { useImmer } from "use-immer";
import PaginationComponent from "../components/PaginationComponent";
import LinkDetailComponent from "../components/LinkDetailComponent";

export const LINK_TYPE = {
  LINK: "link",
  YOUTUBE: "youtube",
  IMAGE: "image",
};

const LinkManagementContainer = () => {
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
    {
      id: 2,
      link: "https://www.youtube.com/watch?v=M9voXLBcKTk&t=2818s",
      title: "Những Ca Khúc Nhạc Đỏ Cách Mạng",
      type: LINK_TYPE.YOUTUBE,
      publishedDate: new Date(),
    },
    {
      id: 3,
      link: "https://user-images.githubusercontent.com/31009750/246856332-ece36caa-82ef-4a4f-86d9-9dad4a108929.png",
      title: "ReactJS Tutorial Banner",
      type: LINK_TYPE.IMAGE,
      publishedDate: new Date(),
    },
  ]);
  const [paginator, setPaginator] = useImmer({
    currentPage: 1,
    numberOfPages: 10,
    rowsPerPage: 5,
    numberOfItems: 50,
  });

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

  const onDeleteLink = (link) => {
    // delete link
    setLinks((linkList) => {
      const deleteLinkIndex = linkList.findIndex((l) => l.id === link.id);
      linkList.splice(deleteLinkIndex, 1);
    });
  };

  const onSaveLink = (data) => {
    const link = structuredClone(data);
    // new link has no id
    // existed link has id
    if (link && !link.id) {
      setLinks((linkList) => {
        Reflect.set(link, "id", Date.now());
        Reflect.set(link, "publishedDate", new Date());
        Reflect.set(link, "type", LINK_TYPE.LINK);
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
  const onChangeCurrentPage = (newCurrentPage) => {
    setPaginator((p) => {
      p.currentPage = newCurrentPage;
    });
  };

  return (
    <>
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
          <div className="mt-4">
            {links.map((link) => (
              <LinkDetailComponent
                key={link.id}
                link={link}
                onEditLink={() => onEditLink(link)}
                onDeleteLink={() => onDeleteLink(link)}
              />
            ))}
          </div>
          <PaginationComponent
            numberOfPages={paginator.numberOfPages}
            currentPage={paginator.currentPage}
            onChangeCurrentPage={onChangeCurrentPage}
          />
        </div>
      </div>
      <LinkFormComponent
        ref={linkFormComponentModal}
        link={editLink}
        onSaveLink={onSaveLink}
      ></LinkFormComponent>
    </>
  );
};

export default LinkManagementContainer;
