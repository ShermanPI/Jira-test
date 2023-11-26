import useToggle from '../../hooks/useToggle'
import './style/createTaskModal.css'
import CloseIcon from '../../assets/SvgIcons/Icons'
import generateUUIDv4 from '../../utilities/generateUUID'

export default function CreateTaskModal ({ buttonClassName, submitFunction }) {
  const [isHidden, toggleIsHidden] = useToggle({ initialValue: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const title = form.get('title')
    const tag = form.get('tag')
    const description = form.get('description')
    const dueDate = form.get('due-time')
    submitFunction({ title, description, asignee: 'sherman', dueDate, tags: [{ name: tag, id: generateUUIDv4() }] })
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
              <button
                className='button-reset close-btn' onClick={(e) => {
                  e.preventDefault()
                  toggleIsHidden()
                }}
              >
                <CloseIcon />
              </button>
            </header>

            <input type='text' className='title-input' name='title' id='title' placeholder='Title' required />

            <div className='input-group'>
              <label htmlFor='task-description'> Description </label>
              <textarea id='task-description' name='description' placeholder='This is a description' required />
            </div>
            <div className='input-group'>
              <label htmlFor='tag'> Tags </label>
              <input type='text' className='input-text-reset' name='tag' id='tag' placeholder='Tag Name' required />
              <div>hey</div>
              <div>ehy</div>
              <div>hey</div>
            </div>
            <div className='input-group'>
              <label htmlFor='due-time'> Due Date </label>
              <input type='date' name='due-time' id='due-time' required />
            </div>
            <div className='input-group'>
              <label htmlFor='asignee'> Assignee </label>
              <input type='text' name='asignee' id='asignee' placeholder='Asignee' required />
            </div>

            <button type='submit'>Create</button>
          </form>
        </div>
      </div>
    </>
  )
}
