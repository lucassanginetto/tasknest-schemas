import z from "zod";

export const zUser = z.object({
  id: z.int(),
  name: z.string().nonempty(),
  email: z.email(),
  password: z.string().min(8)
})
export type User = z.infer<typeof zUser>

export const zUserCreationData = zUser.omit({
  id: true
})
export type UserCreationData = z.infer<typeof zUserCreationData>

export const zUserUpdateData = zUserCreationData.partial()
export type UserUpdateData = z.infer<typeof zUserUpdateData>

export const zUserResponse = zUser.omit({
  password: true
})
export type UserResponse = z.infer<typeof zUserResponse>
