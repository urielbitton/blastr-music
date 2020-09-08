import React, {Component} from 'react'

const  Artistprop = props => {  
 
        const {artistimg, artistname, genres, page} = props;
        return (
            <div class="singleartist app" re-route={props.page}>
                <div class="inner"> 
                <div class="spacerl"></div>
                    <header>   
                        <div class="left">
                            <img src={props.artistimg} alt="artistimg"/>
                        </div>     
                        <div class="left info">
                            <h4>{props.artistname}</h4>
                            <small>{props.genres}</small>
                            <p>{props.descript}</p>
                            <button><i class="fas fa-play"></i>Play Tracks</button>
                            <h6 class="addtofav"><i class="far fa-heart"></i><span>Add to Favorites</span></h6>
                        </div>
                        <div class="clear"></div>
                    </header>  
                    <div class="tabnav"> 
                        <table> 
                            <tr>
                                <td re-taber="newrel-tab">New Releases</td>
                                <td re-taber="trend-tab">Trending</td>
                                <td re-taber="top-tab">Top Charts</td>
                                <td re-taber="label-tab">By Label</td>
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
                                <tr>
                                    <td><img src="https://i.imgur.com/HwRGACU.jpg"/></td>
                                    <td class="addtofav"><i class="far fa-heart"></i></td>
                                    <td>Tonight</td>
                                    <td>Sick Individuals Vs. Jewelz & Sparks</td>
                                    <td>4:02</td>
                                    <td>425</td>
                                    <td><i class="fas fa-share-alt"></i></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src="https://i.imgur.com/igZgn0V.jpg"/></td>
                                    <td class="addtofav"><i class="far fa-heart"></i></td>
                                    <td>Dance With Me (Radio Edit)</td>
                                    <td>Sick Individuals</td>
                                    <td>3:32</td>
                                    <td>297</td>
                                    <td><i class="fas fa-share-alt"></i></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src="https://i.imgur.com/KvlYUfA.jpg"/></td>
                                    <td class="addtofav"><i class="far fa-heart"></i></td>
                                    <td>Let Me Love You (Humans)</td>
                                    <td>Sick Individuals</td>
                                    <td>4:12</td>
                                    <td>345</td>
                                    <td><i class="fas fa-share-alt"></i></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    
                    <div class="tabcont newreltab" re-tab="newrel-tab">
                        <h3>New Releases</h3>
                        <table> 
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="https://i.imgur.com/igZgn0V.jpg"/></td>
                                    <td class="addtofav"><i class="far fa-heart"></i></td>
                                    <td>Dance With Me (Radio Edit)</td>
                                    <td>Sick Individuals</td>
                                    <td>3:32</td>
                                    <td>297</td>
                                    <td><i class="fas fa-share-alt"></i></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src="https://i.imgur.com/8XTb0ln.png"/></td>
                                    <td class="addtofav"><i class="far fa-heart"></i></td>
                                    <td>Ruby</td>
                                    <td>Sick Individuals</td>
                                    <td>4:32</td>
                                    <td>320</td>
                                    <td><i class="fas fa-share-alt"></i></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><img src="https://i.imgur.com/Gb1CWZ9.jpg"/></td>
                                    <td class="addtofav"><i class="far fa-heart"></i></td>
                                    <td>Higher</td>
                                    <td>Sick Individuals</td>
                                    <td>3:02</td>
                                    <td>285</td>
                                    <td><i class="fas fa-share-alt"></i></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <div class="spacerl"></div>
                </div>
            </div>
            ) 
}
 
export default Artistprop  






