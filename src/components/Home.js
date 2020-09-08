import React, {Component} from 'react'
import Nav from './Nav'
import Discover from './Discover'
import Artists from './Artists'
import Genres from './Genres'
import Labels from './Labels'
import Podcasts from './Podcasts'
import Favorites from './Favorites'
import Myartists from './Myartists'
import Recents from './Recents'
import Mostplayed from './Mostplayed'
import SingleArtist from './SingleArtist'
import SingleLabel from './SingleLabel'
  

class Home extends Component {
	render() { 
		return (
		<div className="home"> 
             
            <Nav />
            <Discover />
            <Artists />
			<Genres />	
			<Labels />
			<Podcasts />
			<Favorites />
			<Myartists />
			<Recents />
			<Mostplayed />
			<SingleArtist />
			<SingleLabel />
 
        </div>
			)
	} 
} 
 
export default Home 