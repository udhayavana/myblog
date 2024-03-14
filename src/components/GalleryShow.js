import React from 'react'

function GalleryShow() {
  return (
    <div className="row">
  <div className="col-md-3">
    <div className="thumbnail">
      <a href="/w3images/lights.jpg">
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" style={{width:"100%"}} />
        <div className="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div className="col-md-3">
    <div className="thumbnail">
      <a href="/w3images/nature.jpg">
        <img src="https://www.w3schools.com/w3images/nature.jpg" alt="Nature" style={{width:"100%"}} />
        <div className="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div className="col-md-3">
    <div className="thumbnail">
      <a href="/w3images/fjords.jpg">
        <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="Fjords" style={{width:"100%"}} />
        <div className="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
</div>
  )
}

export default GalleryShow;