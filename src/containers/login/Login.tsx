import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../../components/molecules/Buttons/LoginButton'
import LogoutButton from '../../components/molecules/Buttons/LogoutButton'
import Home from '../home/Home'
import { redirectTo } from '@reach/router'
import { url } from 'inspector'

export const Login = () => {
    const { isAuthenticated} = useAuth0()
    const surl = window.location.pathname
    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>Image</div>
            <div>
                {isAuthenticated ? <><Home/><LogoutButton /></>:<LoginButton/>}
            </div>
        </div>
    )
}
