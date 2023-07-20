import {
  render,
  screen,
  RenderResult,
  fireEvent,
  act,
} from "@testing-library/react";
import { DelayInput } from "./index";

describe("DelayInput", () => {
  // DelayInput 컴포넌트에 관한 테스트를 모음
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn(); // mock 함수를 작성하는 함수 -> 콜백의 호출여부를 테스트함.
    renderResult = render(<DelayInput onChange={handleChange} />); // mock함수를 DelayButton에 전달해서 화면을 그림.
    jest.useFakeTimers(); // 타이머를 jest의 타이머로 대체함.
  });

  afterEach(() => {
    renderResult.unmount();
    jest.useFakeTimers(); // 타이머를 원래의 타이머로 되돌림.
  });

  /////////////////

  it("sholud display empty in span on initial render", () => {
    // span 요소의 텍스트가 비어있는지 테스트함.
    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement; // data-testid가 display-text인 요소를 얻음.
    expect(spanNode).toHaveTextContent("입력한 텍스트:"); // 얻은 요소의 내용을 확인함.
  });

  /////////////////

  it('should display "입력 중" immediately after onChange event occurs', () => {
    // onChange 이벤트가 발생한 직후 span이 "입력 중" 이라고 표시하는지 확인함.
    const inputText = "Test Input Text";
    const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;

    expect(spanNode).toHaveTextContent("입력 중"); // "입력 중" 표시 여부를 확인함.
  });

  /////////////////////

  // jest의 타이머mock을 사용하면 실제로 기다리지 않고도, 타이머의 콜백을 실행할 수 있음.
  it("should display input text 1second after onChange event occurs", async () => {
    // 입력하고 1초 뒤에 텍스트가 표시되는지 테스트함.
    const inputText = "Test Input Text";
    const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    await act(() => {
      // 타이머의 콜백 안에서 발생하는 상태 변경이 반영됨을 보증함.
      jest.runAllTimers(); // 타이머에 설정된 timeout을 모두 실행함.
    });

    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;

    expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`); // 입력한 텍스트가 표시되는지 확인함.
  });

  //////////////////

  it("should call onChange 1second after onChange evnet occurs", async () => { // 입력하고 1초 후에 onChange가 호출되는지 테스트함.
    const inputText = "Test Input Text";
    const inputNode = screen.getByTestId("input-text") as HTMLInputElement; 

    fireEvent.change(inputNode, { target: { value: inputText } }); // input의 onChange 이벤트를 호출함.

    await act(() => { // 타이머를 실행함.
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled(); // mock함수를 전달하고, 호출 여부를 확인함.
  });
});
