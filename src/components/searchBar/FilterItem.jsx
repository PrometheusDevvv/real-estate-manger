import Arrow from "../../assets/icons/Arrow";

const FilterItem = ({ id, title, setOpen, open }) => {
  const handleClick = () => {
    setOpen(open === id ? null : id);
  };

  return (
    <button className="filter-item" id={id} onClick={handleClick}>
      <span className="filter-label">{title}</span>
      <div className="filter-icon"><Arrow /></div>
    </button>
  );
};

export default FilterItem;
