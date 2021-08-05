import './App.css';
import video from './video/skistairs.m4v'

function App () {

  return (
    <div className='App'>
      <div> Hi Matt...</div>
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/IdoBzFCXqXM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <video width="560" height="315" muted autoPlay loop controls id="full-screenVideo" >
        <source src={video} />
      </video>
    </div>

  );
}

export default App;
