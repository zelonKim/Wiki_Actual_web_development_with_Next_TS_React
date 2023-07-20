/*
 import { Meta } from "@storybook/react";
import { StyledButton } from "@/components/StyledButton";

export default {
  title: "StyledButton",
  component: StyledButton,
} as Meta<typeof StyledButton>;

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant="primary">
      {" "}
      Primary{" "}
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      {" "}
      Success{" "}
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      {" "}
      Transparent{" "}
    </StyledButton>
  );
};
 */


//////////////////


/* export default {
  title: "StyledButton",
  component: StyledButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta<typeof StyledButton>;
 */

////////////////////


/* 
import { useState } from 'react'
import { Meta } from '@storybook/react'
import { StyledButton } from '@/components/StyledButton';
import { action } from '@storybook/addon-actions'

export default {
    title: 'StyledButton',
    component: StyledButton,
  } as Meta<typeof StyledButton>;

  const incrementAction = action('increment') // increment라는 이름으로 action을 출력하기 위한 함수를 만듦.

  export const Primary = (props) => {
    const [count, setCount] = useState(0)

    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count) // 현재 카운트를 전달하고, Action을 호출함.
        setCount((c) => c + 1)
    }

    return(
        <StyledButton {...props}  variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
  } 
  */

 ///////////////////////


/* 
 import { Meta, ComponentStory } from '@storybook/react'
 import { StyledButton } from '@/components/StyledButton'

 export default {
    title: 'StyledButton',
    component: StyledButton,
    argTypes: {
        variant: { // props에 전달하는 variant를 스토리북으로부터 변경할 수 있도록 추가함.
            control: {type: 'radio'}, 
            options: ['primary', 'success', 'transparent'] // 라디오 버튼에서 설정할 수 있도록 지정함.
        },
        children: { // props에 전달하는 children을 스토리북으로부터 변경할 수 있도록 추가함.
            control: { type: 'text' } // 텍스트 박스에 입력할 수 있도록 지정함.
        }
    }
  } as Meta<typeof StyledButton>;


// 스토리북으로부터 전달된 props를 그대로 Button으로 전달함.
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bind를 호출해서 스토리를 작성함.
export const TemplateTest = Template.bind({})

// 기본 props를 설정함.
TemplateTest.args = {
    variant: 'primary',
    children: 'Primary',
}
 */
///////////////////////


import { Meta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { linkTo } from '@storybook/addon-links'

export default {
    title: 'StyledButton',
    component: StyledButton,
} as Meta<typeof StyledButton>


export const Primary = (props) => { // 클릭하면 StyledButton/Success의 스토리로 이동함.
    return (
        <StyledButton {...props}  variant="primary"  onClick={linkTo('StyledButton', 'Success')}>
            Primary
        </StyledButton>
    )
}

export const Success = (props) => { // 클릭하면 StyledButton/Transparent의 스토리로 이동함.
    return (
        <StyledButton {...props} variant="success" onClick={linkTo('StyledButton', 'Transparent')}>
            Success
        </StyledButton>
    )
}


export const Transparent = (props) => { // 클릭하면 StyledButton/Primary의 스토리로 이동함.
    return (
        <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton', 'Primary')}>
            Transparent
        </StyledButton>
    )
}

