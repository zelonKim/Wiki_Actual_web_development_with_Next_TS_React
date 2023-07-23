/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  compiler: (() => {
    let compilerConfig = {
      styledComponents: true
    }

    if(process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$']},
      } // 프로덕션 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-testid 속성을 삭제함.
    }
    
    return compilerConfig
}) (),



async rewrites() {
  return [
    {
      source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
      destination: `${process.env.API_BASE_URL}/:match*`
    }
  ]
}
}

module.exports = nextConfig
