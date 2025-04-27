import { useState } from 'react';
import { Document , Page , pdfjs } from 'react-pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Worker setup for Vite

function PdfViewer({pdfUrl}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
      <div style={{ height: '750px' }}>
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPlugin]} />
      </div>
    </Worker>
  );
}

export default PdfViewer;
