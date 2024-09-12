import { useState } from "react";
import PlusRounded from "../../assets/icons/PlusRounded";
import FilterItem from "./FilterItem";

const FiltersContainer = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="filters-container">
      <div className="filters">
        <FilterItem id={1} title="რეგიონი" setOpen={setOpen} open={open} />
        <FilterItem id={2} title="საფასო კატეგორია" setOpen={setOpen} open={open} />
        <FilterItem id={3} title="ფართობი" setOpen={setOpen} open={open} />
        <FilterItem id={4} title="საძინებლების რაოდენობა" setOpen={setOpen} open={open} />
      </div>

      <div className="actions-container">
        <button className="action-button add-listing">
          <div className="action-icon-plus"><PlusRounded color="white" /></div>
          <span className="action-label">ლისტინგის დამატება</span>
        </button>
        <button className="action-button add-agent">
          <div className="action-icon-plus"><PlusRounded color="#F93B1D" /></div>
          <span className="action-label">აგენტის დამატება</span>
        </button>
      </div>
    </div>
  );
};

export default FiltersContainer;
