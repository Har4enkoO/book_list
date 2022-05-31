import NewCategory from "./category/NewCategory";

const genders = ["Female", "Male", "Genderless", "Unknown"].sort();
const species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
].sort();
const status = ["Alive", "Dead", "Unknown"].sort();

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <NewCategory
          updatePageNumber={updatePageNumber}
          updateField={updateGender}
          arr={genders}
          name="Gender"
          id="One"
        />
        <NewCategory
          updatePageNumber={updatePageNumber}
          updateField={updateSpecies}
          arr={species}
          name="Species"
          id="Two"
        />
        <NewCategory
          updatePageNumber={updatePageNumber}
          updateField={updateStatus}
          arr={status}
          name="Status"
          id="Three"
        />
      </div>
    </div>
  );
};

export default Filter;
