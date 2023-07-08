import { useState , useEffect } from 'react';
import "./App.css"
function App() {
  const [tableInput, setTableInput] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleNumber = (e) => {
    setTableInput(e.target.value);
  }

  useEffect(() => {
    const generateTableData = () => {
      const data = [];
      for (let i = 1; i <= 10; i++) {
        const row = tableInput * i;
        data.push(row);
      }
      return data;
    };

    setTableData(generateTableData());
  }, [tableInput]);

  return (
    <div className="App">
      <div className='Table_Input'>
        <input type="number" placeholder='Enter' onChange={handleNumber} />
      </div>
      <div className='Table_show'>
        <table>
          <thead>
            <tr>
              <th>Multiplication</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
