// import React, { useState, useEffect } from 'react';

// function SecondApiCall() {
//   const [data, setData] = useState([]); // State to store API data
//   const [error, setError] = useState(null); // State to store any error

//   useEffect(() => {
//     fetch('http://localhost:9090/api/v1/organizations')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         setData(data); // Save data to state
//       })
//       .catch(error => {
//         setError(error.message); // Save error to state
//       });
//   }, []);


//  //console.log(data);

//   return (
//     // <div>
//     //   <h1>Fetched Data</h1>
//     //   {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error if any */}
//     //   <div>
//     //     {data.length > 0 ? (
//     //       data.map(item => (
//     //         <div key={item.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//     //           <p><strong>ID:</strong> {item.id}</p>
//     //           <p><strong>Name:</strong> {item.name}</p>
//     //           <p><strong>Age:</strong> {item.age}</p>
//     //         </div>
//     //       ))
//     //     ) : (
//     //       <p>Loading data...</p>
//     //     )}
//     //   </div>
//     // </div>
//   ""
//   );
// }

// export default SecondApiCall;
