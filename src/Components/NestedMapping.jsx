import React from 'react';

function NestedMapping() {
    const info = [
        {
            "name": "Mr A",
            "age": 19,
            "address": "dhaka",
            "phones": [
                {
                    "home-phone": 192355656,
                    "office-phone": 32658558
                }
            ]
        },
        {
            "name": "Mr B",
            "age": 20,
            "address": "khulna",
            "phones": [
                {
                    "home-phone": 6585655,
                    "office-phone": 654582
                }
            ]
        },
        {
            "name": "Mr C",
            "age": 21,
            "address": "rajshahi",
            "phones": [
                {
                    "home-phone": 7854554,
                    "office-phone": 23566585
                }
            ]
        }
    ];

    return (
        <>
            <div>StudentInfo</div>
            <br />
            {info.map((infoItem, index) => (
                <article key={index}>
                    <h3>FullName: {infoItem.name}</h3>
                    <h3>Age: {infoItem.age}</h3>
                    <h3>Address: {infoItem.address}</h3>
                    {infoItem.phones.map((phone, phoneIndex) => (
                        <div key={phoneIndex}>
                            <p>Home Phone: {phone['home-phone']}</p>
                            <p>Office Phone: {phone['office-phone']}</p>
                        </div>
                    ))}
                    <br />
                    <hr />
                </article>
            ))}
        </>
    );
}

export default NestedMapping;
