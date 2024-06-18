"use client";

import { createContext, useState } from "react";
import { request } from '../services/request';
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    registerUser: (username: string, password: string, isAdmin: boolean) => void;

    authError: string | null;
    registerError: string | null;
}

type UserAuthentication = {
    'x-access-token': string
}

type RegisterResponse = {
    'statusCode': number
}

export const AuthContext = createContext({} as AuthContextType);


export default function AuthProvider( { children }: { children: React.ReactNode } ){
    const [authError, setAuthError] = useState<string | null>(null);

    const [registerError, setRegisterError] = useState<string | null>(null);

    const router = useRouter();

    async function login({username, password} : SignIdData) {
        
        let {'x-access-token': token} = await request<UserAuthentication>('http://127.0.0.1:5000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });

        if(!token) setAuthError('Usuário ou senha inválidos. Verifique e tente novamente!');
        else{
            setCookie(null, 'auth.token', token, {
                maxAge: 60 * 60 * 1,
            });
            
            router.push('/products');
        }
    }

    const registerUser = async (username:string, password:string, isAdmin:boolean) => {
        let res = await request<RegisterResponse>('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, isAdmin}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        }, )
        if(res.statusCode == 201) { 
            router.push('/login')
        } else {
            setRegisterError('Erro no Login' + res.statusCode)
        }
    }

    
    return (
        <AuthContext.Provider value={{login, authError, registerUser, registerError}} >
            {children}
        </AuthContext.Provider>
    );
};