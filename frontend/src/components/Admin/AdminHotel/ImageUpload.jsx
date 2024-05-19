import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Vui lòng chọn một file!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        alert('Ảnh tải lên thành công!');
        onUpload(response.data.filePath);
      } else {
        alert('Tải lên thất bại!');
      }
    } catch (error) {
      console.error('Lỗi khi tải ảnh lên:', error);
      alert('Có lỗi xảy ra khi tải ảnh lên!');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
