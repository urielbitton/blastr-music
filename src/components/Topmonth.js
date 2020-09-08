import React, {Component} from 'react'
  
 
class Topmonth extends Component { 
    render() { 
        const topmonth = [
            {  
                id: 1,
                title: "With Your Love",
                artist: "Jaxx & Vega vs Futuristic Polar Bears",
                artwork: "https://i.imgur.com/IecjNNnt.png",
                time: '3:12'
            },
            {  
                id: 2,
                title: "Tarzan",
                artist: "Armin van Buuren & Blasterjaxx",
                artwork: "https://i.imgur.com/EuwR66st.jpg",
                time: '4:52'
            },
            {
                id: 3,
                title: "Rise Above",
                artist: "Thomas Gold",
                artwork: "https://i.imgur.com/jTW8B2rt.jpg",
                time: '2:33'
            },
            {
                id: 4,
                title: "Time (Alan Walker Remix)",
                artist: "Hans Zimmer",
                artwork: "https://i.imgur.com/g2xFD63t.png",
                time: '4:52'
            },
            {
                id: 5,
                title: "Voices",
                artist: "Brooks & KSHMR",
                artwork: "https://i.imgur.com/aRGXBUit.png",
                time: '2:33'
            },
            {
                id: 6,
                title: "I Fly",
                artist: "Galantis",
                artwork: "https://i.imgur.com/fZUZzVXt.png",
                time: '4:52'
            },
            {
                id: 7,
                title: "Erase You",
                artist: "Kaaze",
                artwork: "https://i.imgur.com/OIRUwvft.png",
                time: '2:33'
            }
        ].map(song => {
            return ( 
                <tr className="song">
                    <td><span></span></td>
                    <td><img src={song.artwork} alt="topmonth"/></td>
                    <td><h6>{song.title}</h6><small>{song.artist}</small></td>
                    <td><span>{song.time}</span></td>
                    <td></td>
                </tr>
            )          
        });
        return (
            <tbody>{topmonth}</tbody>
        )
    }
}

export default Topmonth


