import React, {Component} from 'react'
import Trendlist from './Trendlist' 
import Topcharts from './Topcharts'
import Newreleases from './Newreleases' 
import Lastweek from './Lastweek' 
import Topmonth from './Topmonth'  
import Sidetrends from './Sidetrends'

class Discover extends Component { 
    
    render() { 
		return (
            <div class="discover app" re-route="discover">
            <div class="inner">
                    <h2>Discover</h2>
                    <h1>Hot new tracks <br/>this <span>week</span></h1>
                    <button class="mainbtn"><i class="fas fa-play"></i>Play Now</button>
                    <i class="fas fa-share-alt mainshare"></i>
                    <i class="fas fa-ellipsis-h mainopt"></i>
                    <div class="spacers"></div>
                    
                    <div class="comp trendcomp"> 
                        <h5>Trending Tracks</h5>
                        <Trendlist />
                    </div> 
                     
                    <div class="comp top10comp">
                        <h5>Top Charts</h5>
                        <table> 
                            <Topcharts />
                        </table> 
                    </div>
                    
                    <div class="comp newcomp">
                        <h5>New Releases</h5>
                        <table> 
                            <Newreleases />
                        </table>
                    </div> 
                    
                    <div class="comp contcomp">
                        <div class="innercontcomp">
                            <Sidetrends />
                         </div>
                    </div>
                    <div class="comp lastweekcomp">
                        <h5>Last Week Releases</h5> 
                        <table>    
                           <Lastweek /> 
                        </table>
                    </div> 
                
                    <div class="comp monthlycomp">
                        <h5>Top Monthly Tracks</h5> 
                        <table> 
                            <Topmonth />
                        </table>
                    </div>
                                      
                </div>
                <div class="spacerl"></div>
            </div>
             
			)
	} 
} 
 
export default Discover 

