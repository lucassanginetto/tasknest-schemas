import z from "zod";
import { zUser } from "./users.schema";

export const zLoginData = zUser.omit({
  id: true,
  name: true
})
export type LoginData = z.infer<typeof zLoginData>

export const zJwtResponse = z.object({
  accessToken: z.jwt()
})
export type JwtResponse = z.infer<typeof zJwtResponse>
