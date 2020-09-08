import React, {Component} from 'react'
  

class Genres extends Component { 
	render() { 
		return (
        <div class="genres app" re-route="genres"> 
            <div class="inner">
                <h2>Genres</h2>
                <h1>Find your <br/>favorite <span>genres</span></h1>
            </div> 
 
            <div class="comp trendcomp">
                    <h5>Popular Artists</h5>
                    <div class="track" re-router="dance">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Dance</h6>
                    </div>
                    <div class="track" re-router="edm"> 
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>EDM</h6>
                    </div>
                    <div class="track" re-router="house">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>House</h6>
                    </div>
                    <div class="track" re-router="progressive">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Progressive</h6>
                    </div>
                    <div class="track" re-router="electro">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Electro House</h6>
                    </div>
                    <div class="track" re-router="trance">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Trance</h6>
                    </div>
                    <div class="track" re-router="bigroom">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Bigroom</h6>
                    </div>
                    <div class="track" re-router="hardcore">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Hardcore</h6>
                    </div>
                    <div class="track" re-router="pop">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Pop</h6>
                    </div>
                    <div class="track" re-router="futurebass">
                        <img src="https://i.imgur.com/2xS1X3L.png" alt="genre"/>
                        <h6>Future Bass</h6>
                    </div>
                    
                </div> 

        </div>
			)
	} 
}  
 
export default Genres 

