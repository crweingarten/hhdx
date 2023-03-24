
export default function ReleaseDateAlbums({releaseData, monthHeader = "today"}) {

    return(
    <div>
    <div className="month-header">{monthHeader}</div>
    {releaseData.map(release =>
        <div key={release.id}>
        <div className="date">{new Date(release.date).toLocaleString('en-US', {month: 'short', day: 'numeric'})
}</div>
        <div className="artist">{release.artist}</div>
        <div className="album">{release.album}</div>
        </div>)}
        </div>)

}