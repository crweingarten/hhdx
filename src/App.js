import { useState } from 'react';
import './App.css';
import releaseData from './releaseData';
import ReleaseDateAlbums from './ReleaseDateAlbums'
import MonthPicker from './MonthPicker';

function App() {

  const [showMore, setShowMore] = useState('');
  const [monthData, setMonth] = useState(selectedReleases(2));
  const [monthHeader, setMonthHeader] = useState('Today');
  const [selectedMonth, setSelectedMonth] = useState();

  const toggleMore = () => {
    setShowMore(showMore === '' ? "open" : '');
  }

  releaseData.sort((a, b) => a.date.localeCompare(b.date))
  
  const monthsWithReleases = [...new Set(releaseData.map(release => {
    let [, month] = release.date.split('-');
    return parseInt(month)}))];

  function selectedReleases(i){
    const month = releaseData.filter(release => {
      let [, month] = release.date.split('-');
      return parseInt(month) === i + 1;}
    )
    return month
  }

  function monthHandler(i){
    setMonth(selectedReleases(i))
    setMonthHeader(new Date(0, i).toLocaleString('en-US', {month: 'long'})
    ) 
    setSelectedMonth(i + 1)
  }
  
  const more = showMore === '' ? 'more' : 'less'

  return (
  <div className="App">
  <div className={`release-banner ${showMore}`}>
  <div className="release-header">Upcoming Rap, R&#38;B And Hip Hop Albums</div>
  <div className={`release-subhead ${showMore}`}>Your #1 source for new hip hop albums and upcoming rap and R&#38;B album release dates and new music releases</div>
  <div className={`release-${more}`} onClick={toggleMore}>{more}</div>
  </div>
  <div className="scroller">
  <div className="timeline">
  <MonthPicker monthHandler={monthHandler} monthsWithReleases={monthsWithReleases} selected={selectedMonth}/>
  <ReleaseDateAlbums releaseData={monthData} monthHeader={monthHeader}/>
  </div>
  </div>
</div>
  );
}

export default App;

