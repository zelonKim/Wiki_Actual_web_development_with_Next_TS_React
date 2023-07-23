/* import { useForm, SubmitHandler } from "react-hook-form";

type MyFormData = {
  firstName: string;
  lastName: string;
  category: string;
};


export default function Home() {
  const {register, handleSubmit, formState: { errors } } = useForm<MyFormData>();
  
  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("firstName", { required: true })} placeholder="이름" />
      {errors.firstName && <div>이름을 입력해 주세요</div>}

      <input {...register("lastName", { required: true })} placeholder="성" />
      {errors.lastName && <div>성을 입력해 주세요</div>}

      <select {...register("category", { required: true })}>
        <option value=""> 선택 </option>
        <option value="A"> 카테고리A </option>
        <option value="B"> 카테고리B </option>
      </select>
      {errors.category && <div>카테고리를 선택해 주세요</div>}

      <input type="submit" />

    </form>
  );
} */

////////////////////

/* import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader viewBox="0 038070">
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
) */

///////////////////

/* 
import HomeIcon from '@mui/icons-material/Home'

type HomeIconProps = {
  fontSize?: string
  color?: string
}

const HomeIconComponent = ({ fontSize, color }: HomeIconProps) => (
  <span style={{ fontSize, color }}>
    <HomeIcon fontSize="inherit" color="inherit" /> 
  </span>
)// "inherit" 속성값을 사용해 부모의 스타일에 따르도록 함.


export function HomeIcons() {
  return(
    <div style={{ display: 'flex', alignItems: 'center' }}> 
      <HomeIconComponent />
      <HomeIconComponent fontSize="22px" />
      <HomeIconComponent fontSize="33px" />
      <HomeIconComponent color="red" />
      <HomeIconComponent fontSize="22px" color="#3f51b5" />
    </div>
  )
} */


////////////////////////////////////



import { NextPage } from 'next'
import styled from 'styled-components'
import { theme } from '../themes'

type ResponsiveProp<T> = {
  base?: T // 기본
  sm?: T // 640px 이상
  md?: T // 768px 이상
  lg?: T // 1024px 이상
  xl?: T // 1280px 이상
}

// Responsive 타입을 통해 브레이크 포인트별로 CSS 속성값을 설정함.
// Responsive 타입은 보통의 CSS값 또는 브레이크 포인트에 대응한 CSS의 값 객체를 지정할 수 있음.
type Responsive<T> = T | ResponsiveProp<T>


// Theme 타입
type AppTheme = typeof theme

// Theme 키 타입
type SpaceThemeKeys = keyof typeof theme.space

// Theme 키 타입 혹은 임의의 문자열
type Space = SpaceThemeKeys | (string & {})



//////////////////


// toPropValue 함수를 통과함으로써 임의의 요소에 대한 CSS속성값을 브레이크 포인트별로 설정함.
// toPropValue 함수는 Responsive 타입을 미디어쿼리와 그 값으로 변환하는 함수임.
// prop을 통해 반응형에 대응한 CSS를 지정함.
function toPropValue<T>(propKey: string, prop?: Responsive<T>, theme?: AppTheme): string {
  
}

interface ContainerProps {
  flexDirection?: Responsive<string>
  marginBottom?: Responsive<Space>
}

const Container = styled.section<ContainerProps>`
  padding: 4em;
  display: flex;
  ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
`


///////////////////


const Page: NextPage = () => {
  return (
    <>
      <Container flexDirection="column" marginBottom="8px"> 
        <div> First item </div>
        <div> Second item </div>
      </Container>

      <Container flexDirection={{ base: 'column', sm: 'row' }} marginBottom={1}>
        <div> First item </div>
        <div> Second item </div>
      </Container>

      <Container flexDirection={{ base: 'column', sm: 'row' }} marginBottom={{ base: 1, sm: 2 }}>
        <div> First item </div>
        <div> Second item </div>
      </Container>
    </>
  )
}
export default Page