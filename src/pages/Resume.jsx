import PDFViewer from '../components/PDFViewer.jsx';
import pdfUrl from '../assets/UdhayavananS.pdf';

const Resume = () =>{
    <section className="section resume light-background">
        <PDFViewer pdfUrl={pdfUrl} />
    </section>
};

export default Resume;