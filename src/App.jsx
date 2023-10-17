import React, {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import 'bootstrap/dist/css/bootstrap.css';
import RemoveBuilding from './components/RemoveBuilding';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';


function App({ data }) {
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0); 
  const [buildings, setBuildings] = useState(data);

  //Functionality to add building, and update building list
  const addBuilding = (userBuilding) => {
    const updatedBuildings = [...buildings, userBuilding];

    // Sorting the buildings alphabetically
    updatedBuildings.sort((a, b) => a.name.localeCompare(b.name));

    setBuildings(updatedBuildings);
  };

  //Functionality to remove building, and update list
  const removeBuilding = (id) => {
    const updatedBuildingList = buildings.filter(building => building.id !== id);
    setBuildings(updatedBuildingList);
    if(!building){
      setSelectedBuilding(0);
    }
  };

  function filterUpdate(value) {
    setFilterText(value);
  }

  function selectedUpdate(id) {
    setSelectedBuilding(id);
  }

  return (
    <div className="bg">
      <div className="heading">
        <h1><i>UF Directory App</i></h1>
        <FontAwesomeIcon icon={faFolderOpen} color="black"></FontAwesomeIcon>
      </div>
      <main>
          <div className="column1">
            <div className="search">
              <Search filterUpdate={filterUpdate} /*passing in filter update to search bar*/ />
            </div>
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                <BuildingList
                  data={buildings}
                  filterText={filterText}
                  selectedUpdate={selectedUpdate}
                  //parameters being passsed into buildinglist for searching / updating list
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <div className="viewing">
              <ViewBuilding data={buildings} selectedBuilding={selectedBuilding}/>
            </div>
            <div className="adding">
              <AddBuilding onAddBuilding={addBuilding} />
              <div className="remove">
              <RemoveBuilding selectedBuilding={selectedBuilding} onRemoveBuilding={removeBuilding} />
              </div>
              <div className="credit">
                <Credit />
               </div>
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
