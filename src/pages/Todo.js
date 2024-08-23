import React from 'react';
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import '../assets/css/imageContainer.css';
import mainStyles from "../assets/css/Main.module.css";

const Todo = () => {

  const [url, setUrl] = React.useState('');
  const [imagDim,setImageDim]=React.useState({width:0,height:0});
  const [divDim,setDivDim]=React.useState({
    backgroundImage:
        "url('"+url+"')",
    fontSize: "50px",
    backgroundRepeat: "no-repeat",
    backgroundSize:"contain",
    width:"100%",height:"100%"
 })

  const onChange = (e) => {
    const files = e.target.files;
    console.log(files[0]);
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

   const onImageLoad = (e) => {
    const myImg=e.target; 
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;
    setImageDim(imagDim => imagDim.width=currWidth, imagDim.height=currHeight);
    setDivDim( (divDim) =>{  return {...divDim,backgroundImage:
      "url('"+url+"')"} 
    });

   }

  return (
    <>
    <Navbar />
    <div className={mainStyles.homePage}>
    
    <div className="image-container">
    {
    url ?
      <div id="img" 
       style={divDim}>
      <img
    className='image-view'
    style={{ visibility:"none",width: imagDim.width, height:imagDim.height }}
    src={url} alt="" onLoad={onImageLoad} />
    </div>
    :
    <div className="upload-container">
    <input
    type="file"
    className="input-file"
    accept=".png, .jpg, .jpeg"
    onChange={onChange}
    />
    <p>Drag & Drop here</p>
    <p>or <span style={{ color: "blue" }} >Browse</span></p>
    </div>
    }
    </div>
    </div>
    <Footer />
    </>
  );
};



export default Todo;