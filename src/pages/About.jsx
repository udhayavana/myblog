import React,{ useState, useEffect } from 'react';
import demoFile from "../template/pdfs/UpdatedResumeReact.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {pdfjs } from "react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { ToolbarSlot } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
 

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function About() {

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


 /* const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const { ZoomOut } = slots;
        return (
          <div
            className='container'
          >
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px"
                    }}
                    onClick={props.onClick}
                  >
                    Zoom out
                  </button>
                )}
              </ZoomOut>
            </div>
            ...
          </div>
        );
      }}
    </Toolbar>
  );
*/
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pdfWorkerUrl=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  
  return (
    <Worker workerUrl={pdfWorkerUrl} >
      <div className="banner-section section parallax-window" data-parallax="scroll">
        <Viewer fileUrl={demoFile} plugins={[defaultLayoutPluginInstance]} scale={width > 786 ? 1.7 : 0.6} />
      </div>
    </Worker>
  );
}
