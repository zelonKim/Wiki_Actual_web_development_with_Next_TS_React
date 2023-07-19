import type { ApiContext, User } from "@/src/types/data"
import { fetcher } from '../../utils'

export type GetUserParams = {
    id: number
}

// 요청이 성공하면 사용자 정보를 응답으로 얻음.
const getUser = async( context: ApiContext, { id }: GetUserParams): Promise<User> => {

    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
        {
            headers: {
                Accept: 'application/json',
                    'Content-Type': 'applicaion/json'
            }
        }
    )
}
export default getUser