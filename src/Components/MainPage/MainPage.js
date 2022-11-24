import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [form, onChangeForm] = useForm({nome:"", idade:"", email: "", profissao: ""})
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

  // const [form, setForm] = useState({nome:"", idade:"", email: ""})

  // const onChangeForm = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   // const {name, value } = event.target

  //   const novoForm = {
  //     ...form, 
  //     [name]: value
  //   }

  //   setForm(novoForm)
  // }

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          pattern="[A-Z]{3}"
          title='é preciso que o nome tenha no mínimo 3 letras maiúculas'
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          name="idade"
          type="number"
          value={form.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChangeForm}
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input 
          id="profissao"
          name="profissao"
          value={form.profissao}
          onChange={onChangeForm}
          required
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
