import React from 'react';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

function Slider(){
    return(
        <div id="slider">
              <div class="container-all">

<input type="radio" id="1" name="image-slide" hidden/>
<input type="radio" id="2" name="image-slide" hidden/>
<input type="radio" id="3" name="image-slide" hidden/>

<div className="slide">

    <div className="item-slide">
        <img src={img1}/>
        <div className="boton"><a style={{color: "#212F3C", fontFamily: "monospace", fontSize: "1em", fontWeight: 900,
         textAlign:"center"}} href="https://www.fullcarweb.com.ar/">Presione <br></br>aquí</a></div>
    </div>
    <div className="item-slide">

    <div className="boton"> <a href="#b2" style={{color: "#212F3C", fontFamily: "monospace", fontSize: "1em", 
    fontWeight: 900, textAlign:"center"}}> Quienes <br></br>somos? </a></div>  <img src={img2}/>
    </div>

    <div className="item-slide">

    <div className="boton"> <a href="#c3" style={{color: "#212F3C", fontFamily: "monospace", fontSize: "1em", 
    fontWeight: 900, textAlign:"center"}}> Nuestra <br></br>ubicacion! </a></div>  <img src={img3}/>
    </div>

    </div>
    
    <div className="pagination">
   
    <label className="pagination-item" for="1">
        <img src={img1}/>
    </label>
    
    <label class="pagination-item" for="2">
        <img src={img2}/>
    </label>
    
    <label class="pagination-item" for="3">
         <img src={img3}/>
    </label>
    
</div>

</div>
        </div>
    )
}

export default Slider;