// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './style.css';
// export const FileUploader = ({ onSuccess }) => {
//     const [files, setFiles] = useState([]);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [data, setData] = useState(null);

//     const onInputChange = (e) => {
//         setFiles(e.target.files);
//     };

//     const onNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const onEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();

//         for (let i = 0; i < files.length; i++) {
//             formData.append('file', files[i]);
//         }
        
//         // Add name and email fields to the form data
//         formData.append('name', name);
//         formData.append('email', email);

//         axios.post('//localhost:8001/upload', formData)
//             .then((response) => {
//                 toast.success('Upload Success');
//                 onSuccess(response.data);
//             })
//             .catch((e) => {
//                 toast.error('Upload Error');
//             });
//     };

//     useEffect(() => {
//         axios.get('//localhost:8001/file')
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     }, []);

//     return (
//         <div className="file-uploader-container"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    
//         <form method="post" action="#" id="#" onSubmit={onSubmit}>
//           <div className="form-group files">
//             <label>Upload Your File </label>
//             <input
//               type="file"
//               onChange={onInputChange}
//               className="form-control"
//               multiple
//             />
//           </div>
    
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={onNameChange}
//               className="form-control"
//             />
//           </div>
    
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={onEmailChange}
//               className="form-control"
//             />
//           </div>
    
//           <button className="submit-button">Submit</button>
//         </form>
//       </div>
//     )
// };
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './style.css';

export const FileUploader = ({ onSuccess }) => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setError('Please select at least one file.');
      return;
    }

    if (!name || !email) {
      setError('Please provide both name and email.');
      return;
    }

    setError('');

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    // Add name and email fields to the form data
    formData.append('name', name);
    formData.append('email', email);

    axios
      .post('//localhost:8001/upload', formData)
      .then((response) => {
        toast.success('Upload Success');
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error('Upload Error');
      });
  };

  useEffect(() => {
    axios
      .get('//localhost:8001/file')
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div
      className="file-uploader-container"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <form method="post" action="#" id="#" onSubmit={onSubmit}>
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" onChange={onInputChange} className="form-control" multiple />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={onNameChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={onEmailChange} className="form-control" />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};
