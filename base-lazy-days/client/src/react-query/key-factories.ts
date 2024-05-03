import { queryKeys } from "@/react-query/constants"

export const generateUserKey = (userId: number, userToken: string) => {
  return [queryKeys.user, userId]
}

export const generateUserAppointmentsKeys = (userId: number, userToken: string) => {
  return [queryKeys.appointments, queryKeys.user, userId, userToken]
}