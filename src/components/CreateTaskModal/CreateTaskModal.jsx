import useToggle from '../../hooks/useToggle'
import './style/createTaskModal.css'
import CloseIcon from '../../assets/SvgIcons/Icons'
// import cardsStorageManagment from '../../mock/repositoryPattern'

export default function CreateTaskModal ({ buttonClassName, submitFunction }) {
  const [isHidden, toggleIsHidden] = useToggle({ initialValue: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <>
      <button className={buttonClassName} onClick={toggleIsHidden}>
        Create
      </button>
      <div className={`modal-shadow ${!isHidden && 'hidden-modal'}`} onClick={toggleIsHidden}>
        <div className='form-modal-container'>
          <form className='task-form' onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
            <header className='card-header'>
              <h2>Create Task Card</h2>
              <button className='button-reset close-btn' onClick={toggleIsHidden}>
                <CloseIcon />
              </button>
            </header>
            <input type='text' className='title-input input-text-reset' name='title' id='title' placeholder='Title' />

            <div className='input-group'>
              <label htmlFor='task-description'> Description </label>
              <textarea id='task-description' name='task-description' placeholder='This is a description' />
            </div>
            <div className='input-group'>
              <label htmlFor='tag'> Tags </label>
              <div>hola</div>
              <div>hola2</div>
              <div>hola3</div>
            </div>
            <div className='input-group'>
              <label htmlFor='due-time'> Due Date </label>
              <input type='date' name='due-time' id='due-time' />
            </div>
            <div className='input-group'>
              <label htmlFor='due-time'> Assignee </label>
              <p>sherman</p>
            </div>
            <button type='submit'>Create</button>

          </form>
        </div>
      </div>
    </>
  )
}
