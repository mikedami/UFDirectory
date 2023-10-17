import React from 'react';

function RemoveBuilding({selectedBuilding, onRemoveBuilding}){
    const removeBuildingEvent = () => {
        if(selectedBuilding !== 0){
            onRemoveBuilding(selectedBuilding);
        }
    };

    return(
        <div>
            <button onClick={removeBuildingEvent}>Remove Building</button>
        </div>
    );
};

export default RemoveBuilding