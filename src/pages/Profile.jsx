import pdfUrl from '/UdhayavananS.pdf';
import PdfViewer from '../components/PdfViewer';

const Resume = () =>{
    return (
    <section className="section resume light-background">
        <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
          </div>
        <PdfViewer pdfUrl={pdfUrl}/>
    </section>
    );
};

export default Resume;