'use server'

import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";

export const signIn= async() => {
    try {
        //Mutation/modifying Database
    } catch (error) {
        console.log('Error', error);
    }
}

export const signUp = async(userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData;
    try {
        //Mutation
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);

        const session = await account.createEmailPasswordSession(email, password);
        cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        });
        return parseStringify(newUserAccount);
    } catch (error) {
        console.log('Error', error);
    }
}


export async function getLoggedInUser() {
    try {
    const { account } = await createSessionClient();
    return await account.get();
    } catch (error) {
    return null;
    }
}
