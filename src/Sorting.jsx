

export default function Sorting({sortFn, sortDirection}) {
  return(
    <div className="sort" onClick={() => sortFn()}>Sort {sortDirection?'<':'>'} </div>
  );
}