'use client';

import { useFormState } from 'react-dom';

export default function Home() {
  async function createTodo(prevState: any, formData: any) {
    for (let [key, value] of formData.entries())
      console.log(`Key: ${key}, Value: ${value}`);

    return prevState.concat(formData.get('todo'));
  }

  const [state, formAction] = useFormState(createTodo, []);

  return (
    <form action={formAction}>
      <input type='text' name='todo' />
      <button type='submit'>Submit</button>
      <p>{state.join(',')}</p>
    </form>
  );
}
