import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './pdf-annotation.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfViewerEn({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState(null);
  const [documentLoadedOnce, setDocumentLoadedOnce] = useState(false);
  const containerRef = useRef(null);
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

  function goToPage(e) {
    const v = Number(e.target.value || 1);
    if (!Number.isNaN(v)) setPageNumber(Math.min(Math.max(v, 1), numPages || 1));
  }

  const fileData = pdfUrl;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const maxA4Width = 794;
    const update = () => setPageWidth(Math.min(el.clientWidth, maxA4Width));
    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="pdf-viewer-wrapper">
      <div className="pdf-toolbar">
        <button onClick={() => changePage(-1)} disabled={pageNumber <= 1}>Prev</button>
        <input type="number" min={1} max={numPages || 1} value={pageNumber} onChange={goToPage} />
        <span>/ {numPages || '-'}</span>
        <button onClick={() => changePage(1)} disabled={numPages ? pageNumber >= numPages : false}>Next</button>
        <label className="zoom-label">Zoom:
          <select value={scale} onChange={(e) => setScale(Number(e.target.value))}>
            <option value={0.75}>75%</option>
            <option value={1}>100%</option>
            <option value={1.25}>125%</option>
            <option value={1.5}>150%</option>
          </select>
        </label>
      </div>

      <section ref={containerRef} className="pdf-viewer" aria-label="PDF viewer">
        {error ? (
          <div className="pdf-error">Failed to load PDF: {error}</div>
        ) : (
          <Document
            file={fileData}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(e) => { console.error('Document load error', e); setError(String(e)); }}
            loading={<div>Loading PDF…</div>}
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
      </section>
    </div>
  );
}

export default PdfViewerEn;
