import Arrow from "../../assets/icons/Arrow"

const FilterItem = ({title}) => {
  return (
    <div className="filter-item">
            <span className="filter-label">{title}</span>
            <div className="filter-icon"> <Arrow/></div>
           
    </div>
  )
}

export default FilterItem