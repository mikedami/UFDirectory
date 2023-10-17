import React from 'react';

function ViewBuilding({data, selectedBuilding}) {
  
  const selectedBuildingInfo = data.find(building => building.id == selectedBuilding);
  console.log('Selected Building ID: ', selectedBuilding);

    return (
    <div>
      {selectedBuildingInfo ? (
        <div>
          <p>
            <b>Code:</b> {selectedBuildingInfo.code}
          </p>
          <p>
            <b>Name:</b> {selectedBuildingInfo.name}
          </p>

          {/*included error handling for if address or coordinates don't exist*/}

          {selectedBuildingInfo.address && (
            <p>
              <b>Address:</b> {selectedBuildingInfo.address}
            </p>
          )}
          
          {selectedBuildingInfo.coordinates && (
            <div>
              <p>
                <b>Latitude:</b> {selectedBuildingInfo.coordinates.latitude}
              </p>
              <p>
                <b>Longitude:</b> {selectedBuildingInfo.coordinates.longitude}
              </p>
            </div>
          )}

        </div>
      ) : (
        <p>
          <i>Click on a name to view more information</i>
        </p>
      )}
    </div>
  );
}

export default ViewBuilding;
