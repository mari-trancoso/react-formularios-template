import { useState } from "react"

export const useForm = (estadoInicial) => {

const [form, setForm] = useState(estadoInicial)

const onChangeForm = (event) => {
    const name = event.target.name
    const value = event.target.value
    // const {name, value } = event.target

    const novoForm = {
      ...form, 
      [name]: value
    }

    setForm(novoForm)
  }

  return [form, onChangeForm]
  //pra retornar mais de um valor tem que ser array ou objeto

}