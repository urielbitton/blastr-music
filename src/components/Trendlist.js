import React, {Component} from 'react'
import Player from './Player'
  
const secrets = 'https://www.mboxdrive.com/secrets.mp3';
const dance_with_me = 'https://www.mboxdrive.com/dance-with-me.mp3';
const bacana = 'https://www.mboxdrive.com/bacana.mp3';
const matalo = 'https://www.mboxdrive.com/Sidney Samson & Marboo - Matalo (Original Mix).mp3';
const want_you_back = 'https://www.mboxdrive.com/BLK RSE — Want You Back (KAAZE Touch).mp3';
const now_or_never = ' https://www.mboxdrive.com/Matisse & Sadko - Now or Never (Extended Mix).mp3';
const i_need_you_to_know = 'https://www.mboxdrive.com/Armin_van_Buuren_&_Nicky_Romero_feat_Ifimay_I_Need_You_To_Know_Extended.mp3';
const my_best_life = 'https://www.mboxdrive.com/KSHMR ft. Mike Waters — My Best Life (Club Mix).mp3';
const humans = 'https://www.mboxdrive.com/Sick Individuals — Humans (Let Me Love You).mp3';
const dont_wanna_fall = 'https://www.mboxdrive.com/Seven_Lions_x_Last_Heroes_feat_HALIENE_Don\'t_Wanna_Fall_Original.mp3';
 
function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  }

class Trendlist extends Component { 
    state = {
        currentSong: null,
        currentArtist: null,
        currentArtwork: null,
        music: "stopped",
        currentTime: null,
        duration: null
      };
    
    render() { 
        const currentTime = getTime(this.state.currentTime);
        const duration = getTime(this.state.duration);
        const trendlist = [
            {
                id: 1,
                title: "Dance With Me",
                artist: "Sick Individuals",
                artwork: "https://i.imgur.com/igZgn0Vt.jpg",
            },
            { 
                id: 2,
                title: "Now Or Never",
                artist: "Matisse & Sadko",
                artwork: "https://i.imgur.com/9SGPSiat.jpg",
            },
            {
                id: 3,
                title: "Don't Wanna Fall",
                artist: "Seven Lions",
                artwork: "https://i.imgur.com/t9W7V2Ht.jpg",
            },
            {
                id: 4,
                title: "Matalo",
                artist: "R3hab",
                artwork: "https://i.imgur.com/OoGvNKSt.jpg",
            },
            {
                id: 5,
                title: "Humans",
                artist: "Sick Individuals",
                artwork: "https://i.imgur.com/KvlYUfAt.jpg",
            },
            {
                id: 6,
                title: "I Need You To Know",
                artist: "Armin van Buuren",
                artwork: "https://i.imgur.com/CHAQMgzt.jpg",
            },
            {
                id: 7,
                title: "My Best Life",
                artist: "KSHMR",
                artwork: "https://i.imgur.com/EGevdbot.jpg",
            },
            {
                id: 8,
                title: "Want You Back",
                artist: "KAAZE",
                artwork: "https://i.imgur.com/rh09TDrt.jpg",
            }
        ].map(song => {
            return ( 
                <div className="track song" onClick={() => this.setState({ currentSong: song.title, currentArtist: song.artist, currentArtwork: song.artwork })}>
                    <img src={song.artwork} alt="trending"/>
                    <div class="playcover">
                    {this.state.music === "stopped" && (
                        <i class="fas fa-play-circle play playbtn mainplay" onClick={() => this.setState({ music: "paused" })}></i>
                    )}     
                    {this.state.music === "paused" && (
                    <i class="fas fa-pause-circle pause playbtn mainplay" onClick={() => this.setState({ music: "playing" })}></i>
                    )}
                    {this.state.music === "playing" && (
                        <i class="fas fa-pause-circle pause playbtn mainplay" onClick={() => this.setState({ music: "paused" })}></i>
                    )} 
                    </div>
                    <h6>{song.title}</h6>
                    <small>{song.artist}</small>
                </div>
        
            )           
        });
        return (
            <> 
          <div className="playlist">{trendlist}</div>

          <audio ref={ref => (this.music = ref)} /> 

          <div className="player"> 
            <div class="playerinfo">
            <div class="left playerartwork">
                {this.state.music === "stopped" && (
                      <img src="https://i.imgur.com/fg9hGUal.png" alt="playertrack"/>  
                )} 
                {(this.state.music === "paused"  || this.state.music === "playing" ) && (
                    <img src={this.state.currentArtwork} alt="playertrack"/>
                )}
                
            </div>
            <div class="left">
                <h6>{this.state.currentSong}</h6>
                <small>{this.state.currentArtist}</small>
            </div>
        </div>
        <div class="playercontrols"> 
            <div class="controls"> 
            <i class="fas fa-step-backward prev"></i>
            {this.state.music === "paused" && (
                <i class="fas fa-pause-circle pause playbtn mainplay" onClick={() => this.setState({ music: "playing" })}></i>
              )}
              {this.state.music === "playing" && (
                <i class="fas fa-pause-circle pause playbtn mainplay" onClick={() => this.setState({ music: "paused" })}></i>
              )} 
              {this.state.music === "stopped" && (
                      <i class="fas fa-pause-circle play playbtn mainplay" onClick={() => this.setState({ music: "paused" })}></i>  
                )}
              <i class="fas fa-step-forward next"></i> 
            </div>
            <div class="duration">
                <div class="durationdiv">
                    <div><small class="timeat">{currentTime}</small></div>
                    <div class="length">
                        <div class="prog"></div>
                    </div>
                        <div><small class="totaltime">{duration}</small></div>
                </div>
            </div>
        </div>
        <div class="playeroptions">
            <img src="https://i.imgur.com/CuJvFea.png" alt="shuffle"/>
            <img src="https://i.imgur.com/AipjqG9.png" alt="repeat"/>
            <img src="https://i.imgur.com/7AyjqM5.png" alt="volume"/>
        </div>
 
        </div>
      </>
        );
    } 
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentSong !== prevState.currentSong) {
          let track;
          switch (this.state.currentSong) {
            case "Dance With Me":
                track = dance_with_me;
                break;
            case "Secrets":
                track = secrets;
                break;
            case "Don't Wanna Fall":
                track = dont_wanna_fall;
                break;
            case "Now Or Never":
                track = now_or_never;
                break;  
            case "Matalo":
                track = matalo;
                break;
            case "Humans":
                track = humans;
                break; 
            case "I Need You To Know":
                track = i_need_you_to_know;
                break;  
            case "My Best Life":
                track = my_best_life;
                break;   
            case "Want You Back":
                track = want_you_back;
                break;   
            case "Bacana":
                track = bacana;
                break;           
            default:
              break;
          }
    
          if (track) {
            this.music.src = track;
            this.music.play();
            this.setState({
              music: "playing"
            });
          }
        }
    
        if (this.state.music !== prevState.music) {
          if (this.state.music === "paused") {
            this.music.pause();
          }
          if (this.state.music === "playing" && prevState.music === "paused") {
            this.music.play();
          }
          if (this.state.music === "stop") {
            this.music.pause();
            this.currentTime = 0;
            this.setState({
              currentSong: null
            }); 
          }
        }
      }
    
      componentDidMount() {
        this.music.addEventListener("timeupdate", e => {
          this.setState({
            currentTime: e.target.currentTime,
            duration: e.target.duration
          });
        });
      }
    
      componentWillUnmount() {
        this.music.removeEventListener("timeupdate", () => {});
      }
}

export default Trendlist


