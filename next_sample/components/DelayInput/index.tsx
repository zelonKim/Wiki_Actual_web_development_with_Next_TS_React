import React, { useState, useCallback, useRef } from "react";

type DelayButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};


export const DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props;

  const [isTyping, setIsTyping] = useState(false); // 입력 중 여부를 유지함.
  const [inputValue, setInputValue] = useState(""); // input에 표시하는 텍스트를 유지함.
  const [viewValue, setViewValue] = useState(""); // span에 표시할 텍스트를 유지함.

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null); // 타이머를 유지함.

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsTyping(true); // 입력중인 플래그를 설정함.
      setInputValue(e.target.value); // input에 표시할 텍스트를 업데이트함.

      if (timerRef.current !== null) { // 만약 timerRef에 이전 설정한 타이머가 있다면 먼저 해제함.
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => { // 1초 후에 실행하는 타이머를 설정함.
        timerRef.current = null;
        setIsTyping(false); // 입력중 플래그를 해제함.
        setViewValue(e.target.value); // span에 표시할 텍스트를 업데이트함.
        onChange(e);
      }, 1000);
    },
    [onChange]
  );

  const text = isTyping ? "입력 중" : `입력한 텍스트: ${viewValue}`;

  return (
    <div>
      <input
        data-testid="input-text"
        value={inputValue}
        onChange={handleChange}
      />
      <span data-testid="display-text"> {text} </span>
    </div>
  );
}
