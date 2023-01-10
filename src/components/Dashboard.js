import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const USER_TOKEN = localStorage.getItem('token')
const AuthStr = 'Bearer '.concat(USER_TOKEN)

const api = axios.create({
  baseURL: 'https://crud-de-recurso-emilly12natacha.infozn.repl.co/',
  headers: { Authorization: AuthStr } 
});

export default function Dashboard() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        api.get('posts')
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        localStorage.setItem('post', JSON.stringify(data));
    }
    const getData = () => {
        api.get(`posts`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        api.delete(`posts/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
      <div>
        <ul>
          {APIData.map((data) => {
            return (
              <li>
                {data.id} - {data.text} 
                  <Link to='/update'> <button onClick={() => setData(data)}>Update</button> </Link>
              <button onClick={() => onDelete(data.id)}>Delete</button>
              </li>
            )
          })}
       </ul>
      </div>
    )
}

