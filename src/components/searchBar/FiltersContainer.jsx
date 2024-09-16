import { useState } from "react";
import FilterItem from "./FilterItem";

const FiltersContainer = ({children}) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="filters-container">
      <div className="filters">
        <FilterItem id={1} title="რეგიონი" setOpen={setOpen} open={open} />
        <FilterItem id={2} title="საფასო კატეგორია" setOpen={setOpen} open={open} />
        <FilterItem id={3} title="ფართობი" setOpen={setOpen} open={open} />
        <FilterItem id={4} title="საძინებლების რაოდენობა" setOpen={setOpen} open={open} />
      </div>

     {children}
    </div>
  );
};

export default FiltersContainer;
