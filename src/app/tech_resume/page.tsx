"use client"

import HeroSection from '../../../components/HeroSection';
import Navbar from '../../../components/Navbar';
import { useEffect } from 'react';

const DownloadPage = () => {
  useEffect(() => {
    // Function to trigger file download
    const downloadFile = () => {
      // Replace 'yourfile.txt' with the actual file name and path
      const fileUrl = '/Parmeet_Singh_Tech.docx';

      // Create a link element
      const link = document.createElement('a');

      // Set the href attribute to the file URL
      link.href = fileUrl;

      // Set the download attribute to specify the file name
      link.download = 'Parmeet_Singh_YorkU_Resume.docx';

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    };

    // Call the downloadFile function
    downloadFile();
  }, []);

  return (
    <div>
      <p className='text-center'>Downloading Parmeet Singh Resume...</p>
    </div>
  );
};

export default DownloadPage;
