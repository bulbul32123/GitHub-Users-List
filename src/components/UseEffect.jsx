import React, { useEffect, useState } from 'react'
import Loading from './Loading';
export default function UseEffect() {
    const [user , setUser] = useState([])
    const [loading , setLoading] = useState(true)
    const getUser= async ()=>{
        try {
            setLoading(false)
            const respo = await fetch('https://api.github.com/users');
            setUser(await respo.json())
        } catch (error) {
            console.log("This i s my "+ error);
        }
    }
    useEffect(()=>{
        getUser()
    },[])

    if(loading){
        return <Loading />
    } 

    return (
        <>

             <h2 className='text-center mt-4 text-secondary'>List Of Github Users</h2>
             <div className="container-fluid mt-5 ">
                 <div className="row text-center">
 
                 { user.map((element)=>{
                    return (

                 <div className="col-10 col-md-4 mt-5 container" key={element.id}>
                      <div className="card p-2 ">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={element.avatar_url} className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{element.login}</h4>
                                            <span className="text-left">ID: {element.node_id}</span>
                                        <div className="p-2 mt-2 bg-secondary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                                    <a href={element.html_url} target='_blank' className='btn'>View Me</a>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                    )
                 })
                 }
             </div>
             </div>
        </>
    )
}
