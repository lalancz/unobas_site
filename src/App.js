import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import { render } from 'react-dom';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import { saveAs } from 'file-saver'

function App() {
  const carddivstyle = {
    'width': '100vw',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'display': 'flex',
    'justifyContent': 'center'
  };

  const cardstyle = {
    'width': '10vw',
    'minWidth': '100px',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'paddingLeft': '120px',
    'paddingRight': '120px',
    'justifyContent': 'center'
  };

  const textcarddivstyle = {
    'width': '99vw',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'display': 'flex',
    'justifyContent': 'center'
  };

  const textcarddivstyletwo = {
    'marginTop': "-55px",
    'width': '99vw',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'display': 'flex',
    'justifyContent': 'center'
  };

  const saveJar = () => {
    saveAs(
      "https://lalancz.github.io/unobas_site/static/unobas-1.0.0.jar",
      "unobas-1.0.0.jar"
    );
  };

  const ref = useRef();

  return (
    <div style={{ 'fontFamily': 'Segoe UI' }}>
      <Parallax pages={3.3} ref={ref} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0.01}
          speed={0.1}
          onClick={() => ref.current.scrollTo(1.1)}>
          <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': 'max(1vw, 75%)' }}>Jump to download</p>
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
          <div style={{ 'textAlign': 'center', 'fontSize': 'max(7vw, 70px)', 'minWidth': '10vw', 'fontWeight': 'bold' }}><p style={{ 'color': 'red', 'display': 'inline' }}>U</p>
            <p style={{ 'color': 'orange', 'display': 'inline' }}>n</p>
            <p style={{ 'color': 'blue', 'display': 'inline' }}>o</p>
            <p style={{ 'color': 'green', 'display': 'inline' }}>b</p>
            <p style={{ 'color': 'red', 'display': 'inline' }}>a</p>
            <p style={{ 'color': 'orange', 'display': 'inline' }}>s</p>
          </div>
          <br></br>
          <div style={{ 'textAlign': 'center', 'width': '40vw', 'minWidth': '200px', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
            <p style={{ 'textAlign': 'center', 'fontSize': 'max(1.5vw, 20px)', 'overflowWrap': 'break-word' }}>Unobas (Uno-Basel) is a 'remake' of the card-game UNO<br></br> written entirely in Java, available for free.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.90}
          speed={1}>
          <div style={{ 'width': '50%', 'minWidth': '370px', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'display': 'block', 'marginTop': '15px', 'marginBottom': '200px' }}>
            <Plyr src='/unobas_site/static/trailer.mp4' poster='/unobas_site/static/trailer_Moment.jpg' width="350"></Plyr>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.0}
          speed={1}>
            <div style={{'height': '30vw'}}>
              <video autoPlay muted loop src='/unobas_site/static/cards.mp4' style={{'zIndex': '-2', 'position': 'absolute', 'resize': 'both', 'height': '30vw'}}>
              </video>
              <div style={{'positon': 'absolute', 'textAlign': 'center', 'fontSize': 'max(3vw, 20px)', 'fontWeight': 'bold', 'paddingTop': '40px', 'paddingBottom': '40px', 'color': 'white', 'backgroundImage': 'url(/unobas_site/static/code.png)', 'backgroundRepeat': 'no-repeat', 'backgroundAttachment': 'fixed', 'backgroundSize': 'cover', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '50vw', 'minWidth': '325px', 'height': '25vw'}}>
                <p style={{'color': 'orange', 'display': 'inline'}}>683</p> commits in total<br></br>
                <p style={{'color': '#00a2ff', 'display': 'inline'}}>93</p> 0-6am commits<br></br>
                Averaging <p style={{'color': 'green', 'display': 'inline'}}>8.1</p> commits per day<br></br>
                Over <p style={{'color': 'red', 'display': 'inline'}}>8000</p> lines of Java code
              </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9999}
          speed={1.2}
          factor={1}
          style={{ 'marginTop': '-350px' }}>
          <div style={{ 'marginTop': '200px', 'background': 'linear-gradient(0deg, #36676e 30%, #B0E0E6 100%)' }}>
            <h3 style={{ 'textAlign': 'center', 'fontSize': 'max(3vw, 30px)', 'fontWeight': 'bold' }}>Features exclusive cards</h3>
            <div style={textcarddivstyle}>
              <div style={{ 'display': 'inline-grid' }}>
                <img src='/unobas_site/cards/blue_x_ray.png' className='textcardstyle'></img>
                <div className='carddescription'>
                  <p style={{ 'fontSize': 'max(2vw, 18px)', 'fontWeight': 'bold' }}>The X-Ray Card</p><br></br>
                </div>
              </div>
              <div style={{ 'display': 'inline-grid' }}>
                <img src='/unobas_site/cards/red_plus_two_all.png' className='textcardstyle'></img>
                <div className='carddescription'>
                  <p style={{ 'fontSize': 'max(2vw, 18px)', 'fontWeight': 'bold' }}>The Powerful +2 Card</p><br></br>
                </div>
              </div>
            </div>
            <div style={{ 'marginTop': '1px' }}>

            </div>
            <div style={textcarddivstyletwo}>
              <div style={{ 'display': 'flex' }}>
                <div className='carddescription'>
                  <p style={{ 'fontSize': 'max(1.5vw, 15px)' }}>Allows you to see your<br></br> opponents' cards</p>
                </div>
              </div>
              <div style={{ 'display': 'flex' }}>
                <div className='carddescription'>
                  <p style={{ 'fontSize': 'max(1.5vw, 15px)' }}>Everyone other than<br></br> you draws two cards</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ 'background': '#36676e', 'paddingTop': '100px' }}>
            <button style={{ 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'display': 'block', 'width': '30vw', 'minWidth': '350px', 'inlineSize': 'min-content' }} className='button-19' onClick={() => saveJar()}>
            </button>
          </div>
          <div style={{ 'backgroundColor': '#36676e', 'paddingTop': '10px', 'verticalAlign': 'center', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
            <p style={{ 'fontSize': 'max(3vw, 40px)', 'fontWeight': 'bold', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '50%', 'minWidth': '360px' }}>About us</p>
            <div style={{ 'paddingTop': '5px', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '80vw', 'display': 'flex', 'verticalAlign': 'center' }}>
              <img src="/unobas_site/static/avatar.png" style={{ 'borderRadius': '50%', 'border': 'solid', 'height': '12vw', 'minHeight': '140px', 'borderWidth': '2px' }} />
              <div style={{ 'width': '35vw', 'paddingLeft': '35px' }}>
                <p style={{ 'fontSize': 'max(2vw, 25px)', 'fontWeight': 'bold', 'top': '-25px', 'position': 'relative' }}>Dario Llarden</p><br></br>
                <p style={{ 'fontSize': 'max(1.2vw, 17px)', 'top': '-100px', 'position': 'relative', 'paddingTop': '25px' }}>Commits both mentally and onto the master branch, day and night, very diligent when it comes to docs</p>
                <p style={{ 'top': '-65px', 'position': 'relative' }}>GitHub: <a href="https://github.com/Togira123">https://github.com/Togira123</a></p>
              </div>
            </div>
            <div style={{ 'paddingTop': '50px', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '80vw', 'display': 'flex', 'verticalAlign': 'center' }}>
              <img src="/unobas_site/static/avatar3.png" style={{ 'borderRadius': '50%', 'border': 'solid', 'height': '12vw', 'minHeight': '140px', 'borderWidth': '2px' }} />
              <div style={{ 'width': '35vw', 'paddingLeft': '35px' }}>
                <p style={{ 'fontSize': 'max(2vw, 25px)', 'fontWeight': 'bold', 'top': '-25px', 'position': 'relative' }}>Pascal Wohlewender</p><br></br>
                <p style={{ 'fontSize': 'max(1.2vw, 17px)', 'top': '-100px', 'position': 'relative', 'paddingTop': '25px' }}>The most experienced of the three with a couple of projects already behind him across many languages</p><br></br>
                <p style={{ 'top': '-100px', 'position': 'relative' }}>Personal site: <a href="https://wohlwender.ch/">https://wohlwender.ch/</a></p>
              </div>
            </div>
            <div style={{ 'paddingTop': '50px', 'justifyContent': 'center', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '80vw', 'display': 'flex' }}>
              <img src="/unobas_site/static/avatar2.png" style={{ 'borderRadius': '50%', 'border': 'solid', 'height': '12vw', 'minHeight': '140px', 'borderWidth': '2px' }} />
              <div style={{ 'width': '35vw', 'paddingLeft': '35px' }}>
                <p style={{ 'fontSize': 'max(2vw, 25px)', 'fontWeight': 'bold', 'top': '-25px', 'position': 'relative' }}>Petr Sabovčik</p><br></br>
                <p style={{ 'fontSize': 'max(1.2vw, 17px)', 'top': '-100px', 'position': 'relative', 'paddingTop': '25px' }}>A somewhat taciturn coder who likes Python a lot, is known to get peeved by Java from time to time and made this site with a decent amount of headaches</p>
                <p style={{ 'top': '-100px', 'position': 'relative' }}>GitHub: <a href="https://github.com/lalancz/">https://github.com/lalancz/</a></p>
              </div>
            </div>
          </div>
          <div style={{ 'height': '5000px', 'background': 'rgba(38, 74, 79)', 'flexDirection': 'column', 'flexGrow': '1', 'borderTop': 'solid', 'display': 'inline-flex', 'width': '100vw' }}>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;