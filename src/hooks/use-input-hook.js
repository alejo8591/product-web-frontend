import {useState} from "react";

export const useInputHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        console.log('onChange: ', event.target.value);
        setValue(event.target.value);
      }
    }
  };
}