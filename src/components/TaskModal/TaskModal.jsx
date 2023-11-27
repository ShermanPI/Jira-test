import CloseIcon from '../../assets/SvgIcons/Icons'

export default function TaskModal ({ isHidden, toggleIsHidden, handleSubmit, title, taskInfo }) {
  return (
    <div className={`modal-shadow ${!isHidden && 'hidden-modal'}`} onClick={toggleIsHidden}>
      <div className='form-modal-container'>
        <form className='task-form' onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
          <header className='card-header'>
            <h2>{title}</h2>
            <button
              className='button-reset close-btn' onClick={(e) => {
                toggleIsHidden()
                e.preventDefault()
              }}
            >
              <CloseIcon />
            </button>
          </header>

          {
            taskInfo
              ? <input type='text' className='title-input' name='title' id='title' placeholder='Title' defaultValue={taskInfo.title} required />
              : (
                <div className='input-group'>
                  <label htmlFor='title'> Title </label>
                  <input type='text' name='title' id='title' placeholder='Write a title for your task' required />
                </div>
                )
          }

          <div className='input-group'>
            <label htmlFor='task-description'> Description </label>
            <textarea id='description' name='description' placeholder='This is a description' defaultValue={taskInfo && taskInfo.description} required />
          </div>
          <div className='input-group'>
            <label htmlFor='tag'> Tags </label>
            <input type='text' className='input-text-reset' name='tag' id='tag' placeholder='Tag Name' required />
            <div>hey</div>
            <div>ehy</div>
            <div>hey</div>
          </div>
          <div className='due-time-container'>

            <div className='input-group'>
              <label htmlFor='due-time'> Due Date </label>
              <input type='date' name='due-time' id='due-time' required />
            </div>
            <div className='input-group'>
              <label htmlFor='asignee'> Assignee </label>
              <input type='text' name='asignee' id='asignee' placeholder='Asignee' required />
            </div>
          </div>

          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}
