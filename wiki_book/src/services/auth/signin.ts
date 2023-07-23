import { ApiContext, User } from "../../types/data"
import { fetcher } from '../../utils'

export type SigninParams = {
    username: string
    password: string
}

// context 매개변수에는 'API의 루트 URL'을 지정함.
// 요청이 성공하면 응답 헤더의 Set-Cookie에 토큰이 설정됨.

const signin = async( context: ApiContext, params: SigninParams ): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,

        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }
    )
}
export default signin