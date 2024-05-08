import zod, { string } from "zod"

export const zodSignUp = zod.object({
    email:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string(),
    })

export const zodLogIn = zod.object({
    email:zod.string().email(),
    password: string()
})

export const zodUpdate = zod.object({
    firstName: zod.string().optional(),
    lastName:zod.string().optional(),
    password:zod.string().optional()
})