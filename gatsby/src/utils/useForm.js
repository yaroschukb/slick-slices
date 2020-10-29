import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValue] = useState(defaults);
  // check if its a number and convert
  function updateValue(e) {
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValue({
      ...values,
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
