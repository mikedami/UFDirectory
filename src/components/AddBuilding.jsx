import React, {useState} from 'react';

function AddBuilding({onAddBuilding}){
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [address, setAddress] = useState('');

    const submitEvent = (event) => {
        event.preventDefault();
        //prevents webpage from completely reloading, for cleaner UI

    if(!code || !name){
        alert('Please fill in required fields (name and code)')
        return;
    }

    /*buildings are allowed to be inputted even if user does not specify
    coorindates and address (in line with current functionality)
    */
   
    const userBuilding = {
        code,
        name,
    };

    if (latitude && longitude) {
        userBuilding.coordinates = {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        };
    }

    if(address){
        userBuilding.address = address;
    }

    onAddBuilding(userBuilding);

    setCode('');
    setName('');
    setLatitude('');
    setLongitude('');
    setAddress('');

}

    return (
        <div>
            <h2>Add or Remove Building</h2>
            <form onSubmit={submitEvent}>
                <label>
                    Code (required):
                    <input type="text" value={code} onChange={(event) => setCode(event.target.value)}></input><br></br>
                </label>
                <label>
                    Name (required):
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input><br></br>
                </label>
                <label>
                    Latitude:
                    <input type="text" value={latitude} onChange={(event) => setLatitude(event.target.value)}></input><br></br>
                </label>
                <label>
                    Longitude:
                    <input type="text" value={longitude} onChange={(event) => setLongitude(event.target.value)}></input><br></br>
                </label>
                <label>
                    Address:
                    <input type="text" value={address} onChange={(event) => setAddress(event.target.value)}></input><br></br>
                </label>
                <button type="Submit">Add</button>
            </form>
        </div>
    );

}

export default AddBuilding