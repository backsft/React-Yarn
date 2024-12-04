import React from 'react';

export default function Destructuring() {
  const info = [
    {
      name: "Mr A",
      age: 19,
      phone: [64584, 45544],
      parentsInfo: [
        {
          fatherName: "father A",
          motherName: "mother A",
        },
      ],
    },
    {
      name: "Mr B",
      age: 20,
      phone: [545445, 1254555],
      parentsInfo: [
        {
          fatherName: "father B",
          motherName: "mother C",
        },
      ],
    },
  ];


  const [{name,age,phone,parentsInfo}]=info;

  console.log(name);
  console.log(age);
  console.log(phone);
  console.log(parentsInfo);

  return (
    <div>
      <h1>Destructuring Example</h1>
      {info.map(({ name, age, phone, parentsInfo }, index) => (
        <div key={index}>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Phones: {phone.join(", ")}</p>
          <p>Father's Name: {parentsInfo[0]?.fatherName}</p>
          <p>Mother's Name: {parentsInfo[0]?.motherName}</p>
          
        </div>
      ))}
    </div>
  );
}
