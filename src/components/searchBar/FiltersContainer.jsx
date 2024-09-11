import PlusRounded from "../../assets/icons/PlusRounded"
import FilterItem from "./FilterItem"

const FiltersContainer = () => {
  return (
    <div className="filters-container">
        <div className="filters">
            <FilterItem title="რეგიონი"/>
            <FilterItem title="საფასო კატეგორია"/>
            <FilterItem title="ფართობი"/>
            <FilterItem title="საძინებლების რაოდენობა"/>
      
    </div>

    <div className="actions-container">
        <div className="action-button add-listing">
            <div className="action-icon-plus"> <PlusRounded color="white"/> </div>
            <span className="action-label">ლისტინგის დამატება</span>
        </div>
        <div className="action-button add-agent">
            <div className="action-icon-plus"> <PlusRounded color="#F93B1D"/> </div>
            <span className="action-label">აგენტის დამატება</span>
        </div>
    </div>
    
    </div>
  )
}

export default FiltersContainer