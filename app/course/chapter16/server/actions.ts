'use server'

import { revalidatePath } from "next/cache";

const data = ['阅读', '写作', '冥想']
 
export async function findToDos() {
  return data
}

export async function createToDo(formData: any) {
  const todo = formData.get('todo')
  data.push(todo)
  revalidatePath("/form2");
  return data
}
