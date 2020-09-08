import React, {Component} from 'react'

class Artists extends Component {
	render() {  
		return (
		<div className="artists app" re-route="artists"> 
             
             <div class="inner">
                <h2>Artists</h2>
                <h1>Discover trending <br/><span>talent</span></h1>
                
                <div class="comp trendcomp">
                    <h5>Popular Artists</h5>
                    <div class="track" re-router="sickindiv">
                        <img src="https://i.imgur.com/Ri4bgex.jpg" alt="artist"/>
                        <h6>Sick Individuals</h6>
                    </div>
                    <div class="track" re-router="axwell"> 
                        <img src="https://i.imgur.com/40XK545.jpg" alt="artist"/>
                        <h6>Axwell</h6>
                    </div>
                    <div class="track" re-router="kaaze">
                        <img src="https://i.imgur.com/LFsoQBu.jpg" alt="artist"/>
                        <h6>KAAZE</h6>
                    </div>
                    <div class="track" re-router="kshmr">
                        <img src="https://i.imgur.com/edEl4JG.jpg" alt="artist"/>
                        <h6>KSHMR</h6>
                    </div>
                    <div class="track" re-router="armin">
                        <img src="https://i.imgur.com/pH5pFyF.jpg" alt="artist"/>
                        <h6>Armin van Buuren</h6>
                    </div>
                    <div class="track" re-router="nicky">
                        <img src="https://i.imgur.com/rbmMC1A.jpg" alt="artist"/>
                        <h6>Nicky Romero</h6>
                    </div>
                    <div class="track" re-router="gammer">
                        <img src="https://i.imgur.com/35rPAe8.jpg" alt="artist"/>
                        <h6>Gammer</h6>
                    </div>
                    <div class="track" re-router="r3hab">
                        <img src="https://i.imgur.com/uadA85I.jpg" alt="artist"/>
                        <h6>R3hab</h6>
                    </div>
                    <div class="track" re-router="koyu">
                        <img src="https://i.imgur.com/cexzaAM.jpg" alt="artist"/>
                        <h6>Deniz Koyu</h6>
                    </div>
                    <div class="track" re-router="dubvision">
                        <img src="https://i.imgur.com/tMBXhsr.jpg" alt="artist"/>
                        <h6>DubVision</h6>
                    </div>
                    
                </div>    
                
            </div>
 
        </div>
			)
	} 
} 
 
export default Artists 


