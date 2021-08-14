import { useEffect, useState } from 'react'
import axios from "axios"
import { useAuth0 } from '@auth0/auth0-react'
import { ProductsList } from '../products/ProductsList'
import Header from '../../components/organisms/header/Header'


const baseURL = "https://6026bada186b4a001778088c.mockapi.io/adrtseries"

const Home = () => {
    const {user, isAuthenticated, isLoading} = useAuth0()

    if(isLoading){
        return <div>Loading ...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <div>
                    <Header></Header>
                    <div>
                        <img src={user?.picture} alt={user?.name} />
                        <h3>{user?.name} </h3>
                        <h5>Email: {user?.email} </h5>
                    </div>
                </div>
                <div>
                    <ProductsList></ProductsList>
                </div>
            </div>
        )
    )
}

export default Home
