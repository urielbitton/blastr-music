import React, {Component} from 'react'
 
class Sidebar extends Component {
	render() { 
		return (
		<div> 
            <div className="sidebar">
              <div className="sidecover"></div>  
            <h3 class="logo"><img src="https://i.imgur.com/QrfHlqI.png"/><span>Blastr</span></h3>
            <div class="insidebar">
                <div class="sidesec">
                    <h4>Browse</h4>
                    <h6 class="discovertab" re-router="discover"><i class="fas fa-music"></i><span>Discover</span></h6>
                    <h6 re-router="artists"><i class="fas fa-microphone-alt"></i><span>Artist</span></h6>
                    <h6 re-router="genres"><i class="far fa-clone"></i><span>Genres</span></h6>
                    <h6 re-router="labels"><i class="fas fa-compact-disc"></i><span>Record Labels</span></h6> 
                    <h6 re-router="podcasts"><i class="fas fa-podcast"></i><span>Podcasts</span></h6>
                </div>
                <div class="sidesec">
                    <h4>My Music</h4>
                    <h6 re-router="favorites"><i class="far fa-heart"></i><span>Favorites</span></h6>
                    <h6 re-router="myartists"><i class="fas fa-guitar"></i><span>My Artists</span></h6>
                </div>
                <div class="sidesec">
                    <h4>Playlists</h4>
                    <h6><i class="fas fa-plus"></i><span>New Playlist</span></h6>
                    <h6 re-router="recents"><i class="fas fa-play"></i><span>Recently Played</span></h6>
                    <h6 re-router="mostplayed"><i class="fas fa-headphones"></i><span>Most Played</span></h6>
                </div>
                <div class="spacerl"></div>
                <div class="spacerl"></div>
            </div>     
            </div>

        </div>
			)
	} 
} 
 
export default Sidebar 