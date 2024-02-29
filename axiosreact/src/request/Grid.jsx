import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Grid.css';

function Grid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data table </h2>
          <table> 
            <div className='Table'>

        <div className='ghead'>
            <div className='a1'> ID</div>
            <div className='a2'> Title</div>
            <div className='a3'> Body</div>
            {/* Add more headers as needed */}
          
        </div>
        
        <div className='dbody'>
          {data.map(item => (
              <div className='gbody' key={item.id}>
                <div className='a4'> {item.id} </div>
                <div className='a5'>  {item.title} </div>
                <div className='a6'> {item.body} </div>
                 {/* Add more columns as needed */}
            </div>
          ))}
        </div>
     
          </div>
      </table>
    </div>
  )
}

export default  Grid;