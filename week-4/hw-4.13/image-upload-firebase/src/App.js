import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ImagesPage from './components/ImagesPage';
import AddImagePage from './components/AddImagePage';

import ImagesService from './services/images.service';
import FileService from './services/file.service';

export default function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [images]);

  async function fetchImages() {
    try {
    const existingImages = await ImagesService.fetchImages();
    setImages(existingImages);
    } catch (err) {
      alert(err.message);
    }
  }

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImagesPage images={images} setImages={setImages}/>} />
        <Route path='/add-image' element={<AddImagePage />} />
      </Routes>
    </BrowserRouter>
  )

}