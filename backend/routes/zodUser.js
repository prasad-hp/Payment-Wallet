import zod, { string } from "zod"

export const zodSignUp = zod.object({
    email:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string(),
    })

export const zodSignIn = zod.object({
    email:zod.string().email(),
    password: string()
})