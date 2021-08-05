import './App.css';
import video from './video/skistairs.m4v'
import ReactPlayer from 'react-player'

function App () {
  const toggleFullScreen = () => {
    var el = document.getElementById("full-screenVideo");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };
  return (
    <div className="App">
      <div> Hi Matt...</div>
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/IdoBzFCXqXM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <video muted autoPlay loop controls id="full-screenVideo" >
        <source src={video} />
      </video>
    </div>

  );
}

export default App;
