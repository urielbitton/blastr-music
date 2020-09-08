import React, {Component} from 'react'


class Labels extends Component {
	render() { 
		return (
            <div class="labels app" re-route="labels">
                <div class="inner">
                    <h2>Record Labels</h2>
                    <h1>Discover the record<br/> labels behind the <span>music</span></h1>
                    
                    <div class="comp trendcomp">
                        <h5>Popular Labels</h5>
                        <div class="track" re-router="revealed">
                            <img src="https://i.imgur.com/23AcUqz.jpg" alt="label"/>
                            <h6>Revealed Recordings</h6>
                        </div> 
                        <div class="track" re-router="newmade"> 
                            <img src="https://i.imgur.com/zJIW0bG.jpg" alt="label"/>
                            <h6>Newmade Records</h6>
                        </div>
                        <div class="track" re-router="axtone">
                            <img src="https://i.imgur.com/LLvbGY9.jpg" alt="label"/>
                            <h6>Axtone Records</h6>
                        </div>
                        <div class="track" re-router="spinnin">
                            <img src="https://i.imgur.com/8N8WRjA.jpg" alt="label"/>
                            <h6>Spinnin' Records</h6> 
                        </div> 
                        <div class="track" re-router="armada">
                            <img src="https://i.imgur.com/2SfUcMz.jpg" alt="label"/>
                            <h6>Armada Music</h6>
                        </div>
                        <div class="track" re-router="protocol">
                            <img src="https://i.imgur.com/aw4PnQe.jpg" alt="label"/>
                            <h6>Protocol Recordings</h6>
                        </div>
                        <div class="track" re-router="monstercat">
                            <img src="https://i.imgur.com/Y9foc03.png" alt="label"/>
                            <h6>Monstercat</h6>
                        </div>
                        <div class="track" re-router="smash">
                            <img src="https://i.imgur.com/u3hXm9O.jpg" alt="label"/>
                            <h6>Smash The House</h6>
                        </div>
                        <div class="track" re-router="maxximize">
                            <img src="https://i.imgur.com/dHKtSGE.jpg" alt="label"/>
                            <h6>Maxximize Recordings</h6>
                        </div>
                        <div class="track" re-router="musical">
                            <img src="https://i.imgur.com/rD65Vfn.jpg" alt="label"/>
                            <h6>Musical Freedom</h6>
                        </div>
                         
                    </div>
                    
                </div>
            </div>
			)
	} 
} 
 
export default Labels 

