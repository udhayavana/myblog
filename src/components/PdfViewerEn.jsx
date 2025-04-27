import { useState } from 'react';
import { Document , Page , pdfjs } from 'react-pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Worker setup for Vite
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function PdfViewerEn({pdfUrl}) {
  
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <div style={{ height: '750px' }}>
        <Viewer fileUrl={pdfUrl} />
      </div>
    </Worker>
  );
}

export default PdfViewerEn;
