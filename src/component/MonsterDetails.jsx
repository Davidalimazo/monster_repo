import React, { useEffect } from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import './monsterDetails.css'

export default function MonsterDetails() {
    const {id} = useParams();

    const [monster, setMonster] = useState([])

   

    useEffect(()=>{
        const fetchData=async()=>{
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
              .then(json =>{ setMonster(json)})
        }
        fetchData();
        return ()=>console.log("clean up");
      },[])
 

  return (
    <div className='monster_details'>
        <div className="img"><img src={`https://robohash.org/${id}?set1`} alt={monster.name} /></div>
        <div className="details">
            <p className="name"> Name:Name: <span className="fd">{monster.name}</span></p>
            <p className="email"> Cosmic gallaxy: <span className="fd">{monster.email}</span></p>
            <p className="origin"> Origin: <span className="fd">{monster.username}</span></p>
            <p className="origin"> Favourite Food: <span className="fd">{monster.phone}</span></p>
            <div className="desc"><h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt accusamus cupiditate vel dolorem vitae blanditiis distinctio officia aspernatur, quod accusantium ut alias pariatur eos possimus debitis quae ducimus aperiam libero veritatis fuga ab nam ipsam? Laboriosam quam reprehenderit et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, vero cupiditate. Quas nesciunt saepe, doloremque quasi quaerat eligendi error maiores laudantium veritatis, enim explicabo dolore vel, eveniet maxime quibusdam illo.</p>
            </div>
            <div className="desc"><h3>History</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt accusamus cupiditate vel dolorem vitae blanditiis distinctio officia aspernatur, quod accusantium ut alias pariatur eos possimus debitis quae ducimus aperiam libero veritatis fuga ab nam ipsam? Laboriosam quam reprehenderit et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti dolor vitae, vero atque unde provident maxime sed architecto enim ducimus consectetur voluptatem earum quibusdam! Adipisci natus quo doloremque dignissimos, numquam nisi dolorum laboriosam voluptatibus, provident cumque nam consectetur sequi, incidunt atque impedit! Sunt ratione ex velit eos commodi exercitationem, numquam voluptatibus a quia dignissimos debitis accusantium harum tempore. Magnam debitis suscipit officiis, accusantium cupiditate ratione molestias. Iure, vel ea. Assumenda odio consequuntur fuga, adipisci quasi reprehenderit hic temporibus provident itaque vel veniam, repudiandae iste libero distinctio repellendus quidem cumque! Adipisci blanditiis totam beatae voluptatem impedit ad accusantium quas necessitatibus?</p>
            </div>
        </div>
    </div>
  )
}
