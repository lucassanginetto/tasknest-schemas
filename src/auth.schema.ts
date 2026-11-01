import z from "zod";

export const zUser = z.object({
  id: z.int(),
  name: z.string().nonempty(),
  email: z.email(),
  password: z.string().min(8)
})
export type User = z.infer<typeof zUser>

export const zLoginData = zUser.omit({
  id: true,
  name: true
})
export type LoginData = z.infer<typeof zLoginData>

export const zSignupData = zUser.omit({
  id: true
})
export type SignupData = z.infer<typeof zSignupData>

export const zUserResponse = zUser.omit({
  password: true
})
export type UserResponse = z.infer<typeof zUserResponse>

export const zJwtResponse = z.object({
  accessToken: z.jwt()
})
export type JwtResponse = z.infer<typeof zJwtResponse>
