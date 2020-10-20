import React, { useEffect, useState } from 'react'
import './calendar.css'
import FetchData from '../../service/FetchData'
import { Link } from 'react-router-dom'

import Main from '../Main/Main'

const fetchData = new FetchData();

const Calendar =() => {

    const [data, setData] = useState([]);

    useEffect (() =>{
        fetchData.getLaunches()
            .then(launches => setData(state => [...launches]))
    }, [])
    return (
        <>
        <Main/>
        <div class="calendar">
            <div class="container">
                <ul class="calendar-list">
                {
                    data.map(item => (
                    <li class="calendar-item" key={item.id}>
                        <article class="launches">
                            <div class="launches-image">
                                <img src={item.links.patch.small} alt=''/>
                            </div>
                            <div class="launches-content">
                                <h2 class="launches-title">{item.name}</h2>
                               <Link to='/details' className='button launches-content' />
                            </div>
                        </article>
                    </li>
                    ))
                }



                </ul>
            </div>
        </div>
 
        </>
    )
}

export default Calendar