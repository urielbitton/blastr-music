import React, {Component} from 'react'
  
 
class Sidetrends extends Component { 
    render() { 
        const sideartists = [
            {  
                id: 1,
                title: "Sick Individuals",
                artwork: "https://i.imgur.com/Ri4bgexm.jpg",
                router: "sickindiv"
            },
            { 
                id: 2,
                title: "Axwell",
                artwork: "https://i.imgur.com/40XK545m.jpg",
                router: "axwell"
            },
            { 
                id: 3,
                title: "Kaaze",
                artwork: "https://i.imgur.com/LFsoQBum.jpg",
                router: "kaaze"
            },
            { 
                id: 4,
                title: "DubVision",
                artwork: "https://i.imgur.com/tMBXhsrm.jpg",
                router: "dubvision"
            },
            { 
                id: 5,
                title: "Armin Van Buuren",
                artwork: "https://i.imgur.com/pH5pFyFm.jpg",
                router: "armin"
            }, 
        ].map(song => {
            return ( 
                <div class="artistcomp" re-router={song.router}>
                    <img src={song.artwork} alt="artist"/>
                    <h6>{song.title}</h6>
                </div>
            )          
        });
        const sidelabels = [
            { 
                id: 1,
                title: "Revealed Radio",
                artwork: "https://i.imgur.com/789CWEbm.jpg",
                router: "revealed"
            },
            { 
                id: 2,
                title: "Protocol Radio",
                artwork: "https://i.imgur.com/SavQctgm.jpg",
                router: "protocol"
            },
            { 
                id: 3,
                title: "This Is Sick",
                artwork: "https://i.imgur.com/9LPKt0Om.jpg",
                router: "newmade"
            },
            { 
                id: 4,
                title: "Armada Radio",
                artwork: "https://i.imgur.com/2SfUcMzm.jpg",
                router: "armada"
            },
            { 
                id: 5,
                title: "Musical Freedom Radio",
                artwork: "https://i.imgur.com/AKnV5r1m.jpg",
                router: "musical"
            }
        ].map(song => {
            return ( 
                <div class="labelcomp" re-router={song.router}>
                    <img src={song.artwork} alt="label"/>
                    <h6>{song.title}</h6>
                </div>
            )          
        });
        return (
        <div>
            <div className="innercontcomp">
                <h5>Trending Artists</h5>
                {sideartists}
            </div>
            <div className="innercontcomp">
                <h5>Weekly Radio Mix</h5>    
                {sidelabels}
            </div>
        </div>
        ) 
    }
}

export default Sidetrends


