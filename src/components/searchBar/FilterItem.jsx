import Arrow from "../../assets/icons/Arrow"

const FilterItem = ({title}) => {
  return (
    <button className="filter-item">
            <span className="filter-label">{title}</span>
            <div className="filter-icon"> <Arrow/></div>
           
    </button>
  )
}

export default FilterItem