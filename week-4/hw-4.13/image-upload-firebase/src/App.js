import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import ImagesPage from './components/ImagesPage';
import AddImagePage from './components/AddImagePage';

import ImagesService from './services/images.service';

export default function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const existingImages = await ImagesService.fetchImages();
    setImages(existingImages);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImagesPage images={images}/>} />
        <Route path='/add-image' element={<AddImagePage />} />
      </Routes>
    </BrowserRouter>
  )

}