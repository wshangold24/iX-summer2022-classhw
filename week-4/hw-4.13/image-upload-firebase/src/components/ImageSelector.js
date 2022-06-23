import React, { useState, useRef } from 'react'

export default function ImageSelector({
    onFileChange, title
}) {

// const [fileContent, setFileContent] = useState('');
const [fileDisplay, setFileDisplay] = useState('');

  const inputRef = useRef(null);

function onFileSelected(e) {
    let tempFile = null;

    if (e.target.files.length) {
      tempFile = e.target.files[0]

      const reader = new FileReader();

      reader.onload = ((res) => {
        setFileDisplay(res.target.result);
      });
      reader.readAsDataURL(tempFile);
    } else {
      setFileDisplay('');
    }
    onFileChange(tempFile);
  }

  return (
    <div className="mb-3">
            <label className="form-label">
              {title}
            </label>
            {
              fileDisplay ?
              <div className='text-center'>
                <img style={{
                  width: '250px',
                  height: '250px',
                  objectFit: 'cover'
                }}
                src={fileDisplay} alt="image">
                </img>
              </div>
                :
                <></>
            }

            <input
              ref={inputRef}
              onChange={onFileSelected}
              type="file"
              className="form-control"
              multiple
              style={{display: 'none'}}
            />
            <div className='text-center'>
              <button type="button"
              className='btn btn-success mt-3'
              onClick={() => inputRef.current.click()}>
                Choose Image
              </button>
            </div>
          </div>
  )
}
