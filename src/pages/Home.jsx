import TypeWriter from "../components/TypeWriter";

function Home(){

    return (
    <div className="banner-section section parallax-window" data-parallax="scroll">
    <div className="container">
            <div className="logo-fa"><span><i className="fas fa-2x fa-atom"></i></span> Hello, I am Udhayavanan</div>
            <div className="simple"><TypeWriter text="Technical Lead,Scrum Master,Senior Web Developer" delay={200} /></div>
        
    </div>
</div>);
}

export default Home;