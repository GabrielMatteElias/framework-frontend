"use client"

//react
import { useEffect, useReducer, useState } from 'react'

//css
import styles from './index.module.css'

//google next auth
// import { signIn, signOut, useSession } from "next-auth/react"

//components
import BasicButton from "@/components/Buttons/BasicButton"
import InputPassword from "@/components/Inputs/Password"
import BasicTextFields from "@/components/Inputs/TextField"

//MUI
import { Box } from "@mui/material"

//image
import googleIcon from '@/assets/google-icon.png'
import Image from 'next/image'
import LogoutIcon from '@mui/icons-material/Logout';

export function FormLogin({ isRegister }) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
    const [helperErrorConfirmPassword, setHelperErrorConfirmPassword] = useState('')

    const [snackbar, setSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('false')

    async function handleSubmit(e) { //submit credentials 
        e.preventDefault();
        // setErrorConfirmPassword(false)
        // setHelperErrorConfirmPassword('')

        // if (isRegister) { //register
        //     if (password !== confirmPassword) {
        //         console.log(password);
        //         console.log(confirmPassword);
        //         setErrorConfirmPassword(true)
        //         setHelperErrorConfirmPassword('Password and confirmation dont match. Please try again.')
        //     }


        // } else {//sig in
        //     console.log('aaaaaa');

        //     const response = await fetch('archweb-dev.eba-dmzpwwpv.us-east-2.elasticbeanstalk.com/auth/register', userData)
        //     console.log(response);
        // const userData = {
        //     FirstName: "Gabriel",
        //     LastName: "Elias",
        //     Email: "gabrielelias@gmail.com",
        //     password: "teste99"
        // }

        // const formData = new FormData()
        // formData.append('user', userData)
        // console.log(userData);

        // const response = await fetch("http://archweb-dev.eba-dmzpwwpv.us-east-2.elasticbeanstalk.com/auth/register",
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: 'POST',
        //         body: JSON.stringify(userData)
        //     })
        // console.log(response);
    }

    // const { status, data } = useSession()

    // useEffect(() => {
    //     if (data && data.user) {
    //         alert("A")
    //     }
    // }, [data])

    // async function handleGoogleLogin() {
    //     await signIn("google")

    //     // if (!data || !data.user) {
    //     //     alert("Erro ao logar com conta google")
    //     // }

    // }

    // async function handleGoogleLogOut() {
    //     await signOut()
    // }

    return (
        <div className={styles.form_Wrapper}>
            <h2>Welcome to <span>Framework!</span></h2>

            <Box
                component="form"
                autoComplete="off"
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <BasicTextFields labelText='Email' type='email' value={email} setValue={setEmail} />

                <InputPassword error={errorConfirmPassword} value={password} setValue={setPassword} />

                {isRegister &&
                    <InputPassword
                        error={errorConfirmPassword}
                        errorHelper={helperErrorConfirmPassword}
                        labelText='Confirm Password'
                        value={confirmPassword}
                        setValue={setConfirmPassword} />
                }
                <div className={styles.submit_button}>
                    <BasicButton type='submit' text='Submit' />
                </div>

                <button className={styles.button_google_login} 
                // onClick={handleGoogleLogin}
                >
                    <Image
                        src={googleIcon}
                        alt='Google Icon'
                        priority
                        width={24}
                        height={24}
                    />
                    {status === 'loading' ? (
                        <span>Carregando...</span>
                    ) : (
                        <span>Sigin with Google Account</span>
                    )}
                </button>
                {data && (
                    <p>Bem vindo {data.user.name}</p>
                )}
                {/* <LogoutIcon onClick={handleGoogleLogOut} sx={{ fontSize: '10px', cursor: 'pointer' }} /> */}


            </Box>
        </div>
    )
}