import React from 'react';

function BuildingList({ data, filterText, selectedUpdate }) {
  // Filter the building list based on the filter from app.jsx
  const filteredBuildingList = data
    .filter(directory => directory.name.toLowerCase().includes(filterText.toLowerCase()))
    .map(directory => {
      return (
        // handler to capture building id being selected
        <tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
          <td>{directory.code} </td>
          <td> {directory.name} </td>
        </tr>
      );
    });

  return (
    //same as table in app.jsx
    <table className="table table-striped table-hover">
      <tbody>
        {filteredBuildingList}
      </tbody>
    </table>
  );
}

export default BuildingList;
