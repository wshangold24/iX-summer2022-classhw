import React, { useEffect, useState } from "react";

export default function ImagesPage({ images }) {
  return (
    <div>
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
            <hr className="w-50 mx-auto"/>
            <div className="card-body w-100 text-center mx-auto">
              <h5>
                {img.name}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
