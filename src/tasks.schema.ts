import z from "zod"

export const zTaskStatus = z.union([z.literal('TODO'), z.literal('IN_PROGRESS'), z.literal('COMPLETED')])
export type TaskStatus = z.infer<typeof zTaskStatus>

export const zTask = z.object({
  id: z.int(),
  title: z.string().nonempty(),
  description: z.string(),
  status: zTaskStatus
})
export type Task = z.infer<typeof zTask>

export const zTaskCreationData = zTask.omit({ id: true })
export type TaskCreationData = z.infer<typeof zTaskCreationData>

export const zTaskUpdateData = zTaskCreationData.partial()
export type TaskUpdateData = z.infer<typeof zTaskUpdateData>

export const zTaskResponse = zTask
export type TaskResponse = z.infer<typeof zTaskResponse>
