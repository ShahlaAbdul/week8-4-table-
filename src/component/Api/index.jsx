import React, { useEffect, useState } from 'react'
import './style.css'
function Api() {
    const [select, setSelect] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getFetch();

    }, [])

    async function getFetch() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        setSelect(data)
    }



    return (
        <div className='table'>
            <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        select.map((item) => {
                            if (
                            item.name.toLowerCase().includes(search.toLowerCase())
                            || item.username.toLowerCase().includes(search.toLowerCase())
                           
                            
                            ) {
                                return (
                                    <tr key={item.id} >
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                    </tr>
                                )
                            }

                        })}

                </tbody>
            </table>


        </div>
    )
}

export default Api