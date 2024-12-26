// import axios from 'axios';
// import FormData from 'form-data';
// import fs from 'fs';

// const addDoctorData = async () => {
//   // Prepare the doctor details
//   const doctorDetails = {
//     name: "Dr. Richard James",
//     email: "richard@demo.com",
//     password: "12345678",
//     speciality: "General Physiyan",
//     degree: "MBBS",
//     experience: "4 years",
//     about: "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 40,
//     address: JSON.stringify({
//      line1: "17th Cross, Richmond",
//      line2: "Circle , Ring Road , London"
//     })
//   };

//   // Create FormData instance
//   const form = new FormData();

//   // Append doctor details to form
//   for (const [key, value] of Object.entries(doctorDetails)) {
//     form.append(key, value);
//   }

//   // Append an image file to form
//   const imagePath = './images/doc1.png'; // Path to the image file you want to upload
//   form.append('image', fs.createReadStream(imagePath));

//     // Add the token
//   const adminToken = 'eyJhbGciOiJIUzI1NiJ9.YWRtaW5AcHJlY3NjcmlwdG8uY29tcXdlcnR5MTIz.3NUP3Er78iqzXpbSG07uoTUyy8kgR3RO4fm6InkU6e4'; // Replace with a valid admin token

//   try {
//     // Send POST request to the server
//     const response = await axios.post('http://localhost:4000/api/admin/add-doctor', form, {
//       headers: {
//         ...form.getHeaders(),
//       }
//     });

//     console.log('Response:', response.data);
//   } catch (error) {
//     console.error('Error:', error.response?.data || error.message);
//   }
// };

// // Call the function to add a doctor
// addDoctorData();


import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const addDoctorData = async () => {
  // Prepare the doctor details
  const doctorDetails = {
    name: "Dr. Richard James",
    email: "richarssdfdsfdsfd@demo.com",
    password: "12345678",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 years",
    about: "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 40,
    address: JSON.stringify({
      line1: "17th Cross, Richmond",
      line2: "Circle , Ring Road , London"
    })
  };

  // Create FormData instance
  const form = new FormData();

  // Append doctor details to form
  for (const [key, value] of Object.entries(doctorDetails)) {
    form.append(key, value);
  }

  // Append an image file to form
  const imagePath = './images/doc1.png'; // Path to the image file you want to upload

  // Check if the file exists
  if (!fs.existsSync(imagePath)) {
    console.error(`Error: File "${imagePath}" not found!`);
    return;
  }
  form.append('image', fs.createReadStream(imagePath));

  // Add the token
  const adminToken = 'eyJhbGciOiJIUzI1NiJ9.YWRtaW5AcHJlY3NjcmlwdG8uY29tcXdlcnR5MTIz.3NUP3Er78iqzXpbSG07uoTUyy8kgR3RO4fm6InkU6e4'; // Replace with a valid admin token

  try {
    // Send POST request to the server
    const response = await axios.post('http://localhost:4000/api/admin/add-doctor', form, {
      headers: {
        ...form.getHeaders(),
        atoken: adminToken, // Add token in headers
      }
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

// Call the function to add a doctor
addDoctorData();
