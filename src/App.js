import DataTable from 'react-data-table-component';
import './App.css';
import React from 'react';


function App() {

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },

    {
      name: 'Director',
      selector: row => row.director,
    },

    {
      name: 'Year',
      selector: row => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'learn React',
      director: 'Zouhair ETTARAK',
      year: 2023
    },

    {
      id: 2,
      title: 'learn Vue Js',
      director: 'Hafssa ELMESKANI',
      year: 2023
    },

    {
      id: 3,
      title: 'learn Spring Animation',
      director: 'John Ex',
      year: 2012
    },

    {
      id: 4,
      title: 'Java Script',
      director: 'Zouhair ETTARAK',
      year: 2020
    }
  ];

  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);


  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);


  return (

    <div className="container m-3 p-3">
      <div className='row'>
        <div className='col-md-10 mx-auto'>
          <div className='card'>
            <div className='card-header text-center'> React using Package react-data-table-component</div>

            <div className='card-body'>

              <DataTable
                columns={columns}
                data={rows}
                selectableRows
                progressPending={pending}
                pagination
              />

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
