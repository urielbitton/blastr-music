import React, {Component} from 'react'
import Discover from './Discover'

  

class Player extends Component {
	render() { 
		return (
		<div className="player"> 
            <div class="playerinfo">
            <div class="left playerartwork">
                <img src="https://i.imgur.com/igZgn0V.jpg" alt="playertrack"/>
            </div>
            <div class="left">
                <h6>Dance With Me (Radio Edit)</h6>
                <small>Sick Individuals</small>
            </div>
        </div>
        <div class="playercontrols"> 
            <div class="controls">
                <i class="fas fa-step-backward prev"></i>
                <i class="fas fa-play-circle play playbtn mainplay"></i>
                <i class="fas fa-step-forward next"></i>
                
            </div>
            <div class="duration">
                <div class="durationdiv">
                    <div><small class="timeat">1:37</small></div>
                    <div class="length">
                        <div class="prog"></div>
                        <div class="pos"></div>
                    </div>
                        <div><small class="totaltime">3:45</small></div>
                </div>
            </div>
        </div>
        <div class="playeroptions">
            <img src="https://i.imgur.com/CuJvFea.png" alt="shuffle"/>
            <img src="https://i.imgur.com/AipjqG9.png" alt="repeat"/>
            <img src="https://i.imgur.com/7AyjqM5.png" alt="volume"/>
        </div>
 
        </div>
			)
	} 
} 
 
export default Player 

