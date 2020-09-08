import React, {Component} from 'react'

const  Labelprop = props => {

        const {artistimg, artistname, genres, page} = props;
        return (
            <div class="singleartist app" re-route={props.page}>
                <div class="inner">
                    <div class="spacerl"></div>
                    <header>  
                        <div class="left">
                            <img src={props.artistimg} alt="labelimg"/>
                        </div>     
                        <div class="left info">
                            <h4>{props.artistname}</h4>
                            <small>{props.genres}</small>
                            <p>{props.descript}</p>
                            <button><i class="fas fa-play"></i>Play Tracks</button>
                            <h6 class="addtofav"><i class="far fa-heart"></i><span>Add to Favorites</span></h6>
                        </div>
                    </header> 
                    <div class="clear"></div>
                    <div class="tabnav"> 
                        <table> 
                            <tr>
                                <td re-taber="newrel-tab">New Releases</td>
                                <td re-taber="trend-tab">Trending</td>
                                <td re-taber="top-tab">Top Charts</td>
                                <td re-taber="label-tab">By Artist</td>
                                <td re-taber="genre-tab">By Genre</td>
                            </tr>
                        </table>
                    </div> 
                    <div class="tabcont trendtab" re-tab="trend-tab">
                        <h3>Trending Tracks</h3>
                        <table> 
                            <thead>
                            </thead>
                            <tbody> 
                                
                            </tbody>
                        </table>    
                    </div>
                    
                    <div class="tabcont newreltab" re-tab="newrel-tab">
                        <h3>New Releases</h3>
                        <table> 
                            <thead>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </table>    
                    </div>
                    
                </div>
            </div>
            ) 
} 
 
export default Labelprop  






