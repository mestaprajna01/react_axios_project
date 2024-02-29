import React, { useEffect ,useState } from 'react'
import axios from 'axios';
import './Table.css'


function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setData(response.data))


    },[])
    
    
  
    
    return (
        <div>
          <h2>User Data Table</h2>
          <table>
            <thead>
              <tr>
                <th>ID </th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
           
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  {/* Add more columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
 export default Table;