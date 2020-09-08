import React, {Component} from 'react'
  

class Topcharts extends Component { 
    render() { 
        const topcharts = [
            {
                id: 1,
                title: "Dance With Me",
                artist: "Sick Individuals",
                artwork: "https://i.imgur.com/igZgn0Vt.jpg",
                time: '3:12'
            },
            { 
                id: 2,
                title: "Want You Back",
                artist: "KAAZE",
                artwork: "https://i.imgur.com/rh09TDrt.jpg",
                time: '4:52'
            },
            {
                id: 3,
                title: "I Need To Know",
                artist: "Armin van Buuren & Nicky Romero",
                artwork: "https://i.imgur.com/CHAQMgzt.jpg",
                time: '2:33'
            },
            {
                id: 4,
                title: "Matalo",
                artist: "R3hab",
                artwork: "https://i.imgur.com/OoGvNKSt.jpg",
                time: '4:52'
            },
            {
                id: 5,
                title: "DYSLM",
                artist: "Gammer",
                artwork: "https://i.imgur.com/7rklHMNt.png",
                time: '2:33'
            },
            {
                id: 6,
                title: "Everything I Need",
                artist: "KAAZE",
                artwork: "https://i.imgur.com/K6BHXBMt.png",
                time: '4:52'
            },
            {
                id: 7,
                title: "I Won't Tell",
                artist: "MATN & Reggi",
                artwork: "https://i.imgur.com/uu2MrUft.jpg",
                time: '2:33'
            },
            {
                id: 8,
                title: "Burning",
                artist: "Nicky Romero & Jordan Grace",
                artwork: "https://i.imgur.com/xeikBQwt.png",
                time: '5:22'
            },
            {
                id: 9,
                title: "Ruby",
                artist: "Sick Individuals",
                artwork: "https://i.imgur.com/8XTb0lnt.png",
                time: '3:12'
            },
            {
                id: 10,
                title: "Fallin In",
                artist: "Mike Williams",
                artwork: "https://i.imgur.com/wIW2jrTt.jpg",
                time: '3:12'
            }
        ].map(song => {
            return ( 
                <tr className="song">
                    <td><span></span></td>
                    <td><img src={song.artwork}/></td>
                    <td><h6>{song.title}</h6><small>{song.artist}</small></td>
                    <td><span>{song.time}</span></td>
                    <td></td>
                </tr>
            )          
        });
        return (
            <tbody>{topcharts}</tbody>
        )
    }
}

export default Topcharts


