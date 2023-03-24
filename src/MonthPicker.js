export default function MonthPicker({monthHandler, monthsWithReleases, selected}) {


  const months = Array.from({length: 12}, (item, i) => {
  const monthLabel = new Date(0, i).toLocaleString('en-US', {month: 'short'})
  const monthColor = selected === i + 1 ? "month-selected" : "month-picker"

    if (monthsWithReleases.includes(i + 1))
     return <div className={monthColor} key={i} onClick={() => monthHandler(i)}>{monthLabel}</div>
    else
      return <div className="month-disabled" key={i}>{monthLabel}</div>
  });

return(
    <div className="month-container">{months}</div>   
)}