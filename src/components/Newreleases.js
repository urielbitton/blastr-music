import React, {Component} from 'react'
  
 
class Newreleases extends Component { 
    render() { 
        const newreleases = [
            { 
                id: 1,
                title: "Falcon",
                artist: "Mr. Black",
                artwork: "https://i.imgur.com/nX8PzG3t.png",
                time: '3:12'
            },
            { 
                id: 2,
                title: "Fallin' In",
                artist: "Mike WIlliams",
                artwork: "https://i.imgur.com/wIW2jrTt.jpg",
                time: '4:52'
            },
            {
                id: 3,
                title: "Bad At Being Alone (Jay Hardway Remix)",
                artist: "Codeko",
                artwork: "https://i.imgur.com/WFBe4p5t.jpg",
                time: '2:33'
            },
            {
                id: 4,
                title: "Now Or Never",
                artist: "Matisse & Sadko",
                artwork: "https://i.imgur.com/9SGPSiat.jpg",
                time: '4:52'
            },
            {
                id: 5,
                title: "Party Up",
                artist: "Rankz & Richie Loop",
                artwork: "https://i.imgur.com/dQAuPvht.jpg",
                time: '2:33'
            },
            {
                id: 6,
                title: "Secrets (Moti Remix)",
                artist: "Regard & Raye",
                artwork: "https://i.imgur.com/hyDE4AZt.jpg",
                time: '4:52'
            },
            {
                id: 7,
                title: "Bacana",
                artist: "Mountblaq",
                artwork: "https://i.imgur.com/mAyOpnxt.jpg",
                time: '2:33'
            },
            {
                id: 8,
                title: "I Wanna Dance",
                artist: "Dr. Phunk & Le Shuuk",
                artwork: "https://i.imgur.com/n0fcy2bt.jpg",
                time: '5:22'
            },
            {
                id: 9,
                title: "Motivation",
                artist: "Bassjackers",
                artwork: "https://i.imgur.com/1rQud53t.jpg",
                time: '3:12'
            },
            {
                id: 10,
                title: "Dance With Me",
                artist: "Sick Individuals",
                artwork: "https://i.imgur.com/igZgn0Vt.jpg",
                time: '3:12'
            }
        ].map(song => {
            return ( 
                <tr className="song">
                    <td><span></span></td>
                    <td><img src={song.artwork} alt="newrelease"/></td>
                    <td><h6>{song.title}</h6><small>{song.artist}</small></td>
                    <td><span>{song.time}</span></td>
                    <td></td>
                </tr>
            )          
        });
        return (
            <tbody>{newreleases}</tbody>
        )
    }
}

export default Newreleases


