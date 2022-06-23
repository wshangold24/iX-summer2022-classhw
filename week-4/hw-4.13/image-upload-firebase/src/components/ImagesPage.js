import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import './ImagesPage.css';

import FileService from '../services/file.service';
import ImagesService from '../services/images.service';

export default function ImagesPage({ images, setImages }) {
  const [showModal, setShowModal] = useState(false);
  const [imageToRemove, setImageToRemove] = useState(null);


  function onModalClose() {
    setShowModal(false);
    setImageToRemove(null);
  }

  function onRemoveImageClicked(image) {
    setImageToRemove(image);
    setShowModal(true);

  }

  async function removeImage() {
    //TODO: remove the image
    try {
      await FileService.deleteFile(imageToRemove.downloadUrl);
      await ImagesService.deleteImage(imageToRemove.id);
      setImages(images.filter((img) => img.id !== imageToRemove.id));
      onModalClose();
    } catch (err) {
        alert(err.message);
    }
  }



  return (
    <>
      <div className="container m-4">
        <div className="d-flex justify-content-end mb-4">
          <Link to="/add-image">Add Image</Link>
        </div>
        {images.map((img) => {
          return (
            <div className="card w-75 my-5 mx-auto">
              <img
                className="card-image-top"
                src={img.downloadUrl}
                alt={img.name}
                style={{ width: "100px", margin: "auto" }}
                key={img.id}
              ></img>
              <hr className="w-50 mx-auto" />
              <div className="card-body w-100 text-center mx-auto">
                <h5>{img.name}</h5>
              </div>
              <div className="btn btn-secondary remove-button" onClick={(i) => onRemoveImageClicked(i)}>
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={showModal} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove the image {imageToRemove ? imageToRemove.name : ""}?</Modal.Body>
        <Modal.Footer>
          <button variant="btn btn-secondary" onClick={onModalClose}>
            Close
          </button>
          <button variant="btn btn-danger" onClick={removeImage}>
            Remove
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
