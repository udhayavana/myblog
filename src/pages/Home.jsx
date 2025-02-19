import TypeWriter from "../components/TypeWriter";
import { Container } from "react-bootstrap";
function Home(){

    return (
    <Container className="banner-section section parallax-window" data-parallax="scroll">
            <p id="section_title">Hello, I am Udhayavanan</p>
            <p><TypeWriter text="Technical Lead,Scrum Master,Senior Web Developer" delay={200} /></p>
    </Container>);
}

export default Home;