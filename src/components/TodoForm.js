import React, {useState} from 'react'


export default function TodoForm({addTodo}) {
    const [input,setInput] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(input)
        setInput('')
        // console.log(input)
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type= "text" className="input-text"
        placeholder= "what s new today"
        onChange={(e)=>setInput(e.target.value)}
        value={input}/>
            <button type ="submit" className="btn-submit">Add todo</button>

    </form>
  )
}

// La ligne setInput('') est utilisée pour réinitialiser la valeur de l'état input à une chaîne vide.

// Dans le composant TodoForm, la valeur de l'état input est utilisée pour contrôler la valeur de l'élément <input> du formulaire. Lorsque l'utilisateur soumet le formulaire en cliquant sur le bouton "Add todo", la fonction handleSubmit est appelée. Cette fonction ajoute la valeur actuelle de input à la liste des todos (via la prop addTodo) et réinitialise ensuite la valeur de input à une chaîne vide en appelant setInput('').

// Cela permet de réinitialiser le champ de saisie de texte après avoir ajouté un nouveau todo, afin que l'utilisateur puisse facilement saisir un autre todo sans avoir à effacer manuellement le texte précédent.