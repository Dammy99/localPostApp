import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Upload } from 'lucide-react';
import './App.scss';

interface FormData {
  name: string;
  files: File[];
}

const UploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    files: []
  });
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData(prev => ({
      ...prev,
      name: e.target.value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        files: Array.from(e.target.files as FileList)
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Here will be submit logic
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <div className="upload-header">
          <h2 className="upload-title">Завантаження файлів</h2>
          <p className="upload-subtitle">Вкажіть кого будем завантажувати?</p>
        </div>
        
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Ім'я
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleNameChange}
              className="form-input"
              placeholder="Введіть ваше ім'я"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">
              Файли
            </label>
            <div className="file-upload-area">
              <div className="file-upload-content">
                <Upload className="upload-icon" size={24} />
                <div className="file-upload-text">
                  <label htmlFor="file-upload" className="file-upload-button">
                    <span>Завантажити файли</span>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      className="hidden-input"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="file-upload-hint">
                    {formData.files.length > 0 
                      ? `Обрано файлів: ${formData.files.length}` 
                      : 'Перетягніть файли сюди або натисніть для вибору'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;