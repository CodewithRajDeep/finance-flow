'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { authFormSchema } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomInput from "./CustomInput"

const AuthForm = ({type}: {type:string}) => {
    const [user, setUser] = useState(null);
    const [IsLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
        email: "",
        password: '',
        },
    })

    function onSubmit(values: z.infer<typeof authFormSchema>) {
    setIsLoading(true)
    console.log(values)
    setIsLoading(false);
    }
return (
    <section className="auth-form">
    <header className="flex flex-col gap-5 md:gap-8">
    <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="FinanceFlow logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinanceFlow</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? 'Link Account': type === 'sign-in'
            ? 'Sign In': 'Sign Up' }
            <p className="text-16 font-normal text-gray-600">
                {user ? 'Link your account to get started': 'Please enter your details'}
            </p>
        </h1>
        </div>
    </header>
    {user ? (
        <div className="flex flex-col gap-4">
        {/**Plaid account link */}
        </div>
    ): (
        <>
        <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomInput
        control={form.control} name='email' label='Email' placeholder='Enter your E-mail'/>
        <CustomInput
        control={form.control} name='password' label='Password' placeholder='Enter your password'/>
        <Button type="submit" disabled={IsLoading} className="form-btn">
            {IsLoading ? (
                <>
                <Loader2 size={20} className="animate-spin"/> &nbsp;
                Loading...
                </>
            ): type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </Button>
    </form>
    </Form>
    <footer className="flex justify-center gap-1">
    <p className="text-14 font-normal text-gray-600">
        {type === 'sign-in' ? "Don't have an account?" : "Already have a account"}
    </p>
    <Link href={type === 'sign-in' ? '/sign-up': '/sign-in' } className="form-link">
    {type === 'sign-in' ? 'Sign up': 'Sign in' }
    </Link>
    </footer>
        </>
    )}
    </section>
)
}

export default AuthForm
