import z from "zod";

export const userSchema = z.object({
  id: z.int(),
  name: z.string().nonempty(),
  email: z.email(),
  password: z.string().min(8)
})
export type User = z.infer<typeof userSchema>

export const loginSchema = userSchema.omit({
  id: true,
  name: true
})
export type LoginData = z.infer<typeof loginSchema>

export const signupSchema = userSchema.omit({
  id: true
})
export type SignupData = z.infer<typeof signupSchema>

export const userResponseSchema = userSchema.omit({
  password: true
})
export type UserResponse = z.infer<typeof userResponseSchema>

export const jwtResponseSchema = z.object({
  accessToken: z.jwt()
})
export type JwtResponse = z.infer<typeof jwtResponseSchema>
