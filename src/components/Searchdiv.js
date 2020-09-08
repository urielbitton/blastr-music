import React, {Component} from 'react'

  
class Searchdiv extends Component {
	render() { 
		return (
            <div className="searchdiv">
                <input type="text" placeholder="Find a song, artist or album"/>
                <i class="fas fa-times close"></i>
            </div>
			)
	} 
} 
  
export default Searchdiv 


