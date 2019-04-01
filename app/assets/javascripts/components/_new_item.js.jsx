const NewFruit = (props) => {
  
  let formFields = {}
  
  return(
    <form onSubmit={ (e) => {
      props.handleFormSubmit(formFields.name.value, formFields.description.value)
    }}>
      <input ref={input => formFields.name = input}
      placeholder='Enter name of item' />
      <input ref={input => formFields.description = input}
      placeholder='Ender a description' />
      <button>Submit</button>
    </form>
  )
}