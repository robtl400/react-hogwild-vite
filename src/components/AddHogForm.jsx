import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHog = {
      name,
      weight: parseFloat(weight),
      specialty,
      greased,
      "highest medal achieved": "none",
      image: "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg"
    };

    onAddHog(newHog);

    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
  };

  return (
    <div className="ui segment" style={{ margin: "20px" }}>
      <h4>Add a New Hog</h4>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="hog-name">Name:</label>
          <input
            id="hog-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="hog-weight">Weight:</label>
          <input
            id="hog-weight"
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="hog-specialty">Specialty:</label>
          <input
            id="hog-specialty"
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              id="hog-greased"
              checked={greased}
              onChange={(e) => setGreased(e.target.checked)}
            />
            <label htmlFor="hog-greased">Greased?</label>
          </div>
        </div>
        <button className="ui button primary" type="submit">
          Add Hog
        </button>
      </form>
    </div>
  );
}

export default AddHogForm;
