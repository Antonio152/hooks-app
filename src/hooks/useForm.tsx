import { ChangeEvent, useState } from 'react'

export const useForm = (initialForm = {}):any => {
  const [formState, setFormState] = useState(initialForm)

  const onChangeEvent = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.name]: target.value })
  }
  const resetForm = () => {
    setFormState(initialForm)
  }
  return {
    ...formState,
    resetForm,
    formState,
    onChangeEvent
  }
}
