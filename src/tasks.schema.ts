import z from "zod"

export const taskStatusSchema = z.union([z.literal('TODO'), z.literal('IN_PROGRESS'), z.literal('COMPLETED')])
export type TaskStatus = z.infer<typeof taskStatusSchema>

export const taskSchema = z.object({
  id: z.int(),
  title: z.string().nonempty(),
  description: z.string(),
  status: taskStatusSchema
})
export type Task = z.infer<typeof taskSchema>

export const createTaskSchema = taskSchema.omit({ id: true })
export type TaskCreationData = z.infer<typeof createTaskSchema>

export const updateTaskSchema = createTaskSchema.partial()
export type TaskUpdateData = z.infer<typeof updateTaskSchema>

export const taskResponseSchema = taskSchema
export type TaskResponse = z.infer<typeof taskResponseSchema>
