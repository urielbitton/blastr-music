import React, {Component} from 'react'


class Nav extends Component {
	render() { 
		return (
        
        <nav>
            <div class="navarrows">
                <i class="fas fa-angle-left"></i>
                <i class="fas fa-angle-right"></i>
            </div>
            <input placeholder="Find music"/>
            <div class="profile">
                <img src="https://i.imgur.com/0dUTXBm.jpg"/>
            </div>
        </nav>
			)
	} 
} 
 
export default Nav 

