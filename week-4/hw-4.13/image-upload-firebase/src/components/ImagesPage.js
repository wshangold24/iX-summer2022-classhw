import React, { useEffect, useState } from "react";

export default function ImagesPage({ images }) {
  return (
    <div>
      {images.map((img) => {
        return <img src={img.downloadUrl} alt={img.name} style={{width: "100px", margin: "auto"}} key={images.id}></img>;
      })}
    </div>
  );
}
