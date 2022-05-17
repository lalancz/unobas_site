import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef, useEffect, Component } from 'react';
import { render } from 'react-dom';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

function App() {
    const carddivstyle = {
      'width' : '100vw',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'display' : 'flex',
      'justifyContent' : 'center'
    };
  
    const cardstyle = {
      'width' : '10vw',
      'minWidth': '100px',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'paddingLeft': '120px',
      'paddingRight': '120px',
      'justifyContent' : 'center'
    };
  
    const textcarddivstyle = {
      'width' : '99vw',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'display' : 'flex',
      'justifyContent' : 'center'
    };
  
    const textcarddivstyletwo = {
      'marginTop': "-55px",
      'width' : '99vw',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'display' : 'flex',
      'justifyContent' : 'center'
    };
  
    const ref = useRef();
  
    return (
      <div style={{'fontFamily': 'Segoe UI'}}>
        <Parallax pages={1.9} ref={ref} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0.01}
            speed={0.1}
            onClick={() => ref.current.scrollTo(1.25)}>
              <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': 'max(1vw, 75%)'}}>Jump to download</p>
              <hr></hr>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.25}
            speed={1}>
            <div style={carddivstyle}>
              <img src='/unobas_site/cards/plus_four.png' style={cardstyle}></img><img src='/unobas_site/cards/green_nine.png' style={cardstyle}></img>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.35}
            speed={1.15}>
            <div style={carddivstyle}>
              <img src='/unobas_site/cards/red_reverse.png' style={cardstyle}></img><img src='/unobas_site/cards/green_two.png' style={cardstyle}></img>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.45}
            speed={1.25}>
            <div style={carddivstyle}>
              <img src='/unobas_site/cards/yellow_plus_two.png' style={cardstyle}></img><img src='/unobas_site/cards/choose_color.png' style={cardstyle}></img>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.55}
            speed={1.35}>
            <div style={carddivstyle}>
              <img src='/unobas_site/cards/blue_four.png' style={cardstyle}></img><img src='/unobas_site/cards/red_eight.png' style={cardstyle}></img>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.15}
            speed={1.25}>
            <div style={{'textAlign': 'center', 'fontSize': 'max(7vw, 70px)', 'minWidth': '10vw', 'fontWeight': 'bold'}}><p style={{'color': 'red', 'display': 'inline'}}>U</p>
              <p style={{'color': 'orange', 'display': 'inline'}}>n</p>
              <p style={{'color': 'blue', 'display': 'inline'}}>o</p>
              <p style={{'color': 'green', 'display': 'inline'}}>b</p>
              <p style={{'color': 'red', 'display': 'inline'}}>a</p>
              <p style={{'color': 'orange', 'display': 'inline'}}>s</p>
              </div>
              <br></br>
              <div style={{'textAlign': 'center', 'width': '40vw', 'minWidth': '200px', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
                <p style={{'textAlign': 'center', 'fontSize': 'max(1.5vw, 20px)', 'overflowWrap': 'break-word'}}>Unobas (Uno-Basel) is a 'remake' of the card-game UNO<br></br> written entirely in Java, available for free.</p>
              </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.90}
            speed={1}>
            <div style={{'width': '50%', 'minWidth': '380px', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'display': 'block', 'marginTop': '15px', 'marginBottom': '200px'}}>
              <Plyr src='/unobas_site/static/mock_trailer.mp4' width="350"></Plyr>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.99999999999999999}
            speed={1.2}
            factor={1}
            style={{'marginTop': '-550px'}}>
            <div style={{'marginTop': '200px', 'background': 'linear-gradient(0deg, #36676e 30%, #B0E0E6 100%)'}}>
              <h3 style={{'textAlign': 'center', 'fontSize': '200%', 'fontWeight': 'bold'}}>Features exclusive cards</h3>
              <div style={textcarddivstyle}>
                <div style={{'display': 'inline-grid'}}>
                  <img src='/unobas_site/cards/blue_x_ray.png' className='textcardstyle'></img>
                  <div className='carddescription'>
                    <p style={{'fontSize': 'max(2vw, 18px)', 'fontWeight': 'bold'}}>The X-Ray Card</p><br></br>
                  </div>
                </div>
                <div style={{'display': 'inline-grid'}}>
                  <img src='/unobas_site/cards/red_plus_two_all.png' className='textcardstyle'></img>
                  <div className='carddescription'>
                    <p style={{'fontSize': 'max(2vw, 18px)', 'fontWeight': 'bold'}}>The Powerful +2 Card</p><br></br>
                  </div>
                </div>
              </div>
              <div style={{'marginTop': '1px'}}>
  
              </div>
              <div style={textcarddivstyletwo}>
                <div style={{'display': 'flex'}}>
                  <div className='carddescription'>
                    <p style={{'fontSize': 'max(1.5vw, 15px)'}}>Allows to see your<br></br> opponents' cards</p>
                  </div>
                </div>
                <div style={{'display': 'flex'}}>
                  <div className='carddescription'>
                  <p style={{'fontSize': 'max(1.5vw, 15px)'}}>Everyone other than<br></br> you draws two cards</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{'background': '#36676e', 'paddingTop': '100px'}}>
              <button style={{'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'display': 'block', 'width': '28vw', 'minWidth': '350px', 'inlineSize': 'min-content'}} className='button-19' onClick={() => window.location.href = "https://git.scicore.unibas.ch/cs108-fs22/Gruppe-1"}>
                <h4 style={{'textAlign': 'center', 'fontSize': 'max(150%, 10px)'}}>Click here to download</h4>
              </button>
            </div>
            <div style={{'height': '5000px', 'background': '#36676e', 'display': 'flex', 'flexDirection': 'column', 'flexGrow': '1'}}></div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }

export default App;