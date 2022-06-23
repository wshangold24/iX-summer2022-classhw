import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import ImageService from '../services/images.service';
import FileService from '../services/file.service';

import { Image } from '../models/image';
import ImageSelector from './ImageSelector';

export default function AddImagePage() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      // upload the file
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log('Upload Progress: ', progress);
      });
      console.log(downloadUrl);

      // save the movie to firebase
      await ImageService.createImage(new Image({
        id: null,
        name: name,
        downloadUrl: downloadUrl,
      }));

      navigate('/');
    } catch (err) {
        alert(err.message);
    }

  }

  return (
    <div className='container my-4'>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/">Go To Images</Link>
      </div>
      <div className='card card-body'>

        <h1 className='text-center'>Add Image</h1>

        <form onSubmit={onFormSubmit}>

          <ImageSelector title='Image Preview' onFileChange={setFile} />

          <div className="mb-3">
            <label className="form-label">
              Image Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className='text-center'>
            <button className='btn btn-primary px-5'>
              Add Image
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}