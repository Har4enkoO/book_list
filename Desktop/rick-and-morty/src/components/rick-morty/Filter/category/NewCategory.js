import FilterBTN from "../FilterBTN";

const NewCategory = ({ updateField, updatePageNumber, arr, name, id }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          {name}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {arr.map((items, index) => {
            return (
              <FilterBTN
                name={name}
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateField}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
