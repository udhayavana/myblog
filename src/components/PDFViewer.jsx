import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './pdf-annotation.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.1);
  const [error, setError] = useState(null);
  const [documentLoadedOnce, setDocumentLoadedOnce] = useState(false);
  const viewerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    if (!documentLoadedOnce) {
      setPageNumber(1);
      setDocumentLoadedOnce(true);
    } else {
      setPageNumber((currentPage) => Math.min(currentPage, numPages));
    }
  }

  function changePage(offset) {
    setPageNumber(prev => Math.min(Math.max(prev + offset, 1), numPages || 1));
  }

  function goToPage(event) {
    const value = Number(event.target.value || 1);
    if (!Number.isNaN(value)) {
      setPageNumber(Math.min(Math.max(value, 1), numPages || 1));
    }
  }

  function changeScale(event) {
    setScale(Number(event.target.value));
  }

  useEffect(() => {
    const element = viewerRef.current;
    if (!element) return;

    const updateWidth = () => {
      const width = element.clientWidth || 0;
      const maxWidth = 940;
      setPageWidth(Math.min(width, maxWidth));
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="pdf-viewer-card">
      <div className="pdf-viewer-header">
        { /* <div>
          <div className="pdf-viewer-title">Preview Resume</div>
        </div>
        <div className="pdf-viewer-info">
          <span>{pageNumber}</span>
          <span className="divider">/</span>
          <span>{numPages || '--'}</span>
        </div> */ }
      </div>

      <div className="pdf-viewer-toolbar">
        <button className="toolbar-button" onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
          Prev
        </button>
        <div className="toolbar-group">
          <label htmlFor="pdf-page-input">Page</label>
          <input
            id="pdf-page-input"
            type="number"
            min={1}
            max={numPages || 1}
            value={pageNumber}
            onChange={goToPage}
          />
          <span>of {numPages || '--'}</span>
        </div>
        <button className="toolbar-button" onClick={() => changePage(1)} disabled={numPages ? pageNumber >= numPages : false}>
          Next
        </button>
      </div>

      <div className="pdf-viewer-frame" ref={viewerRef}>
        {error ? (
          <div className="pdf-error">Failed to load PDF: {error}</div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(e) => {
              console.error('Document load error', e);
              setError(String(e));
            }}
            loading={<div className="pdf-loading">Loading PDF…</div>}
          >
            <Page
              key={`pdf-page-${pageNumber}`}
              pageNumber={pageNumber}
              width={pageWidth ? Math.round(pageWidth * scale) : undefined}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        )}
      </div>
    </div>
  );
}

export default PdfViewer;
