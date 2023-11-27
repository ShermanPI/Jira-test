import { useRef } from 'react'
import CloseIcon from '../../assets/SvgIcons/Icons'

export default function TaskModal ({ isHidden, toggleIsHidden, handleSubmit, title, taskInfo }) {
  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const formRef = useRef()

  const handleCloseModal = () => {
    toggleIsHidden()
    if (taskInfo) {
      handleSubmit({ formRef, id: taskInfo.id })
    }
  }

  return (
    <div className={`modal-shadow ${!isHidden && 'hidden-modal'}`} onClick={handleCloseModal}>
      <div className='form-modal-container'>
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
        <form ref={formRef} className='task-form' onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>

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
              <input
                type='date' name='due-time' id='due-time' defaultValue={taskInfo ? taskInfo.dueDate : date} required
                min={date}
              />
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
