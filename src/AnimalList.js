import React, { useState } from "react";

function AnimalList() {
  const [animals, setAnimals] = useState([
    { vrsta: "Pas", ime: "Rex", datumRodjenja: new Date() },
    { vrsta: "Macka", ime: "Garfild", datumRodjenja: new Date() },
    { vrsta: "Puz", ime: "Gari", datumRodjenja: new Date() },
    { vrsta: "Zmija", ime: "Zmi", datumRodjenja: new Date() },
    { vrsta: "Ptica", ime: "Raven" },
  ]);

  const removeAnimal = (index) => {
    // setAnimals([...animals.slice(0, index), ...animals.slice(index + 1)]);

    // const items = animals.filter((item) => animals.indexOf(item) !== index);
    // setAnimals([...items.slice(0, index + 1), ...items.slice(index + 1)]);

    setAnimals((prevAnimals) =>
      prevAnimals.filter((element, i) => i !== index)
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Vrsta:</th>
          <th>Ime:</th>
          <th>Datum rodjenja:</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
          <tr key={index}>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AnimalList;
