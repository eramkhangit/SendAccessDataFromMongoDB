import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DBpart2() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: ''
    }) //It's important if your send data through API data formate always in json form. otherwise it's throw error.

    const [toggle, setToggle] = useState(false)

    const submitInfo = (e) => {
        e.preventDefault()
        setToggle(true)
    }

    const fetchDB = async () => {

        try {
            const res = await fetch('https://deploy-tm73.onrender.com/login', {
                method: "PUT",
                mode: 'cors',
                headers: {
                    "x-content-Type-Options" :"nonsniff",
                    "content-type": 'application/json'
                },
                body: JSON.stringify(userInfo)
            })

            const d = await res.json()
            console.log("DATA :", d); 
            console.log("Access data");
        } catch (error) {
            console.log("Error message:", error);
        }
    }

    useEffect(() => {

        if (toggle){
            fetchDB()
            console.log("DB Run");
        }
        else
            setToggle(false)

    }, [toggle])

    return (
        <div>
            <form onSubmit={submitInfo}>

                <input type="text" placeholder='Username' onChange={e => setUserInfo({ ...userInfo, username: e.target.value })} />
                <br />

                <input type="email" placeholder='email' onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} /><br />

                <input type="password" placeholder='password' onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} /><br />

                <button>Login</button>
            </form>
        </div>
    )
}

export default DBpart2