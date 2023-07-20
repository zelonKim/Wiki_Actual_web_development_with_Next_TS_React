import {render, screen, RenderResult, fireEvent } from '@testing-library/react'
import {Input} from './index'


describe('Input', () => { // Input 컴포넌트의 테스트를 작성함.
    let renderResult: RenderResult

    beforeEach(() => { // '각 테스트 전'에 컴포넌트를 화면에 그리고, renderResult에 설정함.
        renderResult = render(<Input id="username" label="Username" />)
    })

    afterEach(() => { // '각 테스트 후'에 화면에 그려진 컴포넌트를 릴리스함.
        renderResult.unmount()
    })



    it('should empty in input on initial render', () => { // 처음 화면에 그릴때 input요소가 비어있는지 테스트함.
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement // label이 Username인 컴포넌트에 대응하는 input 요소를 얻음.
        expect(inputNode).toHaveValue('') // input 요소의 표시가 비어있는지 확인함.
    })




    it('should show input text', () => { // 문자를 입력했을 때 입력한 내용이 표시되는지 테스트함.
        const inputText = 'Test Input Text'
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement
  
    fireEvent.change(inputNode, { target: { value: inputText }}) // input 요소의 onChange 이벤트를 트리거함.

    expect(inputNode).toHaveValue(inputText) // input 요소에 입력한 텍스트가 표시되는지 확인함.
    })




    it('should reset when user clicks buton', () => { // 버튼이 클릭되면 입력 텍스트가 클리어하는지 체크함.
        const inputText = 'Test Input Text'
        const inputNode = screen.getByLabelText('Username') as HTMLInputElement
        fireEvent.change(inputNode, { target: { value: inputText } })

    const buttonNode = screen.getByRole('button', { // 버튼을 얻음.
        name: 'Reset',
    }) as HTMLButtonElement

    fireEvent.click(buttonNode) // 버튼을 클릭함.

    expect(inputNode).toHaveValue('') // input요소의 표시가 비어있는지 확인함.
    })  

})