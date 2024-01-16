import React, { useState } from "react";

function AnimalList() {
  const [animals, setAnimals] = useState([
    { vrsta: "Pas", ime: "Rex", datumRodjenja: new Date() },
    { vrsta: "Macka", ime: "Garfild", datumRodjenja: new Date() },
    { vrsta: "Puz", ime: "Gari", datumRodjenja: new Date() },
    { vrsta: "Zmija", ime: "Zmi", datumRodjenja: new Date() },
    { vrsta: "Ptica", ime: "Raven" },
  ]);

  const sectors = ["ptice", "zmije", "sisari"];

  const [newAnimal, setNewAnimal] = useState([
    { vrsta: "", ime: "", datumRodjenja: "", sector: sectors[0] },
  ]);

  const addAnimal = (e) => {
    e.preventDefault();
    const animalWithSector = {
      ...newAnimal,
      sector: newAnimal.sector || sectors[0],
    };
    setAnimals([...animals, animalWithSector]);

    setNewAnimal({
      vrsta: "",
      ime: "",
      datumRodjenja: "",
      sector: sectors[0],
    });
  };

  const removeAnimal = (index) => {
    // setAnimals([...animals.slice(0, index), ...animals.slice(index + 1)]);

    // const items = animals.filter((item) => animals.indexOf(item) !== index);
    // setAnimals([...items.slice(0, index + 1), ...items.slice(index + 1)]);

    setAnimals((prevAnimals) =>
      prevAnimals.filter((element, i) => i !== index)
    );
  };

  const moveToTop = (index) => {
    // const animalToMove = animals[index];
    // setAnimals([
    //   animalToMove,
    //   ...animals.slice(0, index),
    //   ...animals.slice(index + 1),
    // ]);

    setAnimals((animals) => {
      const updatedAnimals = [...animals];
      const movedAnimal = updatedAnimals.splice(index, 1)[0];
      updatedAnimals.unshift(movedAnimal);
      return updatedAnimals;
    });
  };

  return (
    <div>
      <form onSubmit={addAnimal}>
        <label htmlFor="sector">Izaberite sektor:</label>
        <select
          id="sector"
          value={newAnimal.sector}
          onChange={(e) =>
            setNewAnimal({ ...newAnimal, sector: e.target.value })
          }
        >
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>
              {sector}
            </option>
          ))}
        </select>
        <label>Vrsta</label>
        <input
          type="text"
          value={newAnimal.vrsta}
          onChange={(e) =>
            setNewAnimal({ ...newAnimal, vrsta: e.target.value })
          }
        />
        <label>Ime</label>
        <input
          type="text"
          value={newAnimal.ime}
          onChange={(e) => setNewAnimal({ ...newAnimal, ime: e.target.value })}
        />
        <label>Datum rodjenja</label>
        <input
          type="date"
          value={newAnimal.datumRodjenja}
          onChange={(e) =>
            setNewAnimal({
              ...newAnimal,
              datumRodjenja: new Date(e.target.value),
            })
          }
        />
        <button type="submit">Add Animal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Sektor:</th>
            <th>Vrsta:</th>
            <th>Ime:</th>
            <th>Datum rodjenja:</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <th>{animal.sector ? animal.sector : "Unknown"}</th>
              <th>{animal.vrsta}</th>
              <th>{animal.ime}</th>
              <th>
                {animal.datumRodjenja
                  ? animal.datumRodjenja.toDateString()
                  : "Nepoznat"}
              </th>
              <th>
                <button onClick={() => removeAnimal(index)}>Delete</button>
              </th>
              <th>
                <button onClick={() => moveToTop(index)}>Move To Top</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalList;
