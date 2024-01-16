import React, { useState } from "react";

function AnimalList() {
  const [animals, setAnimals] = useState([
    { vrsta: "Pas", ime: "Rex", datumRodjenja: new Date() },
    { vrsta: "Macka", ime: "Garfild", datumRodjenja: new Date() },
    { vrsta: "Puz", ime: "Gari", datumRodjenja: new Date() },
    { vrsta: "Zmija", ime: "Zmi", datumRodjenja: new Date() },
    { vrsta: "Ptica", ime: "Raven", datumRodjenja: new Date() },
  ]);

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
            <th>{animal.datumRodjenja.toDateString()}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AnimalList;
