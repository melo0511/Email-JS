import React,{useRef} from 'react'
import { Inputs } from '../UI/Inputs'
import emailjs from '@emailjs/browser';

export const Main = () => {

    const refForm = useRef()
    
    const handleSubmit = (event)=>{
        event.preventDefault()

        const servicesId = "service_74pqhzu"
        const templateId = "template_uuekete"
        const apikey = "zQicBJJsc1jyfwMOT"

        emailjs.sendForm(servicesId,templateId,refForm.current,apikey)
        .then(result => console.log(result.text))
        .catch(error => console.error(error))
    }

  return (
    <form id='main' ref={refForm} action="" onSubmit={handleSubmit}>

        <div id='containerInput1'>

            <p>Name *</p>
            <Inputs
                name="userName"
                id="input"
            />

        </div>

        <div id='containerInput2'>

            <p>Email *</p>
            <Inputs
                name="email"
                id="input"
            />

        </div>

        <div id='containerArea'>

            <p>Email *</p>
            <textarea name="message" id="textArea" cols="30" rows="10"></textarea>

        </div>

        <button id='button'>Send</button>
    
    </form>
  )
}
