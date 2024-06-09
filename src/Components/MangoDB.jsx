import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function MangoDB() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: ''
    }) //It's important if your send data through API data formate always in json form. otherwise it's throw error.

    const [toggle, setToggle] = useState(false)

    const submitInfo = (e) => {
        e.preventDefault()
        setToggle(true)
        // console.log("MDB :", toggle);
    }

    // const fetchDB = async () => {



    useEffect(() => {

        try {
            fetch('https://deploy-tm73.onrender.com/signup', {
                method: "POST",
                mode: 'cors',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(r => r.json())
                .then(d => {
                    console.log("DATA :", d);
                    console.log("Data save in database");
                })
        } catch (error) {
            console.log("Error message:", error);
        }

    }, [toggle])

    return (
        <div>
            <form onSubmit={submitInfo}>

                <input type="text" placeholder='Username' onChange={e => setUserInfo({ ...userInfo, username: e.target.value })} />
                <br />

                <input type="email" placeholder='email' onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} /><br />

                <input type="password" placeholder='password' onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} /><br />

                <button>Sign up</button>
            </form>
        </div>
    )
}

export default MangoDB