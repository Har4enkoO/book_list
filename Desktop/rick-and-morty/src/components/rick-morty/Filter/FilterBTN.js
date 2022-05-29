import "./FilterBTN.css";

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input input-style"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
