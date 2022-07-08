import React from 'react'
import './monstercard.css'
import {Link} from 'react-router-dom'

export default function MonsterCard({searchResult}) {
  
  return (
    <div className='monster_container'>
    {searchResult.length>0 ? searchResult.map(item=>{
       const {id, name, email}=item;
        return(
            <Link to={`/${id}`} key={id}>
            <div className='monster_card' ><div className="monster_img"><img src={`https://robohash.org/${id}?set1`} alt={name} /></div>
            <p className="monster-name">{name}</p>
            <p className="monster_contact">{email}</p>
            </div>
            </Link>
        )
    })
    : <div className="not_found">Monster not found :)</div>
    }
    </div>
  )
}
