import React from 'react'
import studentData from '../Data/StudentData.json'
function StudentInfo(props) {
 
    console.log(props);

    return (
        <div>
            <h1>StudentInfo</h1>
            <ul>
                {studentData.map((item, key) => (

                    <li key={key}>
                        <p><strong>Name:</strong> {item.stName}</p>
                        <p><strong>Age:</strong> {item.stAge}</p>
                        <p><strong>Address:</strong> {item.stAdrress}</p>
                        <p><strong>Phone:</strong> {item.stPhone}</p>
                        <hr />

                    </li>

                ))
                }
            </ul>
        </div>
    )
}

export default StudentInfo