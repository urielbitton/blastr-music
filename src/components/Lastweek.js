import React, {Component} from 'react'
  
 
class Lastweek extends Component { 
    render() { 
        const lastweek = [
            { 
                id: 1,
                title: "Everything I Need",
                artist: "Kaaze",
                artwork: "https://i.imgur.com/K6BHXBMt.png",
                time: '3:12'
            },
            {  
                id: 2,
                title: "Allein Allein (Dubvision Remix)",
                artist: "Frey & Sway Gray",
                artwork: "https://i.imgur.com/cmvUOl1t.png",
                time: '4:52'
            },
            {
                id: 3,
                title: "Stay With Me",
                artist: "Kryder",
                artwork: "https://i.imgur.com/axF5SKCt.png",
                time: '2:33'
            },
            {
                id: 4,
                title: "Ruby",
                artist: "Sick Individuals",
                artwork: "https://i.imgur.com/8XTb0lnt.png",
                time: '4:52'
            },
            {
                id: 5,
                title: "Animal",
                artist: "Vicetone",
                artwork: "https://i.imgur.com/IvK2Eigt.png",
                time: '2:33'
            },
            {
                id: 6,
                title: "Feel The Power",
                artist: "Alex Moreno",
                artwork: "https://i.imgur.com/9i5Dn1gt.png",
                time: '4:52'
            },
            {
                id: 7,
                title: "Do It Again",
                artist: "Rich Edwards & Victoria Voss",
                artwork: "https://i.imgur.com/PIAFjVyt.png",
                time: '2:33'
            }
        ].map(song => { 
            return ( 
                <tr className="song">
                    <td><span></span></td>
                    <td><img src={song.artwork} alt="lastweek"/></td>
                    <td><h6>{song.title}</h6><small>{song.artist}</small></td>
                    <td><span>{song.time}</span></td>
                    <td></td>
                </tr>
            )          
        });
        return (
            <tbody>{lastweek}</tbody>
        )
    }
}

export default Lastweek


