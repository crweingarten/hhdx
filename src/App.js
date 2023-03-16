import { useState } from 'react';
import './App.css';

const releases = [{artist: 'Danny Brown & JpegMafia', album: 'Lean Beef Patty', date: "2023-03-13", id: 101}, 
{artist: 'Conway The Machine & Jae Skeese', album: 'Pain Provided Profit', date: "2023-03-24", id: 102},
{artist: 'RK Nephew', album: 'Till I\'m Dead', date: "2023-03-10", id: 103}]

function App() {

  const [showMore, setShowMore] = useState('');
  
  const toggleMore = () => {
    setShowMore(showMore === '' ? "open" : '');
  }

  releases.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

  const sortedReleases = releases.map(release =>
    <div key={release.id}>
    <div className="date">{release.date}</div>
    <div className="artist">{release.artist}</div>
    <div className="album">{release.album}</div>    
    </div>)

  return (
  <div className="App">
  <div className={`release-banner ${showMore}`}>
  <div className="release-header">Upcoming Rap, R&#38;B And Hip Hop Albums</div>
  <div className={`release-subhead ${showMore}`}>Your #1 source for new hip hop albums and upcoming rap and R&#38;B album release dates and new music releases</div>
  <div className="release-more" onClick={toggleMore}>MORE</div>
  </div>
  <div className="scroller">
  <div className="timeline">
  <div>{sortedReleases}</div>
  </div>
  </div>
</div>
  );
}

export default App;

