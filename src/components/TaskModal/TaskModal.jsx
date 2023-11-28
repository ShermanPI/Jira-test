import './style/taskModal.css'
import { useRef } from 'react'
import CloseIcon from '../../assets/SvgIcons/Icons'
import Tag from '../Tag/Tag'
import { useCardContext } from '../../context/cardsContext'
import NewTagButton from '../NewTagButton/NewTagButton'

export default function TaskModal ({ isHidden, toggleIsHidden, handleSubmit, title, taskInfo, submitButtonText = 'Done' }) {
  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const formRef = useRef()
  const tagInputRef = useRef()
  const { tags, addTag } = useCardContext()

  const addTagHandler = () => {
    const name = tagInputRef.current.value
    if (name) {
      tagInputRef.current.value = ''
      addTag({ name })
    }
  }

  const handleCloseModal = (e) => {
    toggleIsHidden()
    if (taskInfo) {
      handleSubmit({ formRef, id: taskInfo.id })
    } else {
      handleSubmit(e)
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
        <form ref={formRef} className='task-form' onSubmit={handleCloseModal} onClick={(e) => e.stopPropagation()}>

          {
            taskInfo
              ? <input type='text' className='title-input task-form-input' name='title' id='title' placeholder='Title' defaultValue={taskInfo.title} required />
              : (
                <div className='input-group'>
                  <label htmlFor='title'> Title </label>
                  <input type='text' className='task-form-input' name='title' id='title' placeholder='Write a title for your task' required />
                </div>
                )
          }

          <div className='input-group'>
            <label htmlFor='description'> Description </label>
            <textarea id='description' name='description' placeholder='This is a description' defaultValue={taskInfo && taskInfo.description} required />
          </div>

          {
            taskInfo &&
              <div className='input-group'>
                <label> Tags </label>
                <ul className='card-tags-container'>
                  {tags.map(el => {
                    const isTagSelected = (taskInfo && JSON.stringify(taskInfo) !== '{}') ? taskInfo.tags.some(tag => tag.id === el.id) : false
                    return <Tag name={el.name} key={el.id} id={el.id} taskInfo={taskInfo} isSelected={isTagSelected} />
                  })}

                  <li>
                    <NewTagButton tagInputRef={tagInputRef} addTagHandler={addTagHandler} />
                  </li>
                </ul>
              </div>
          }

          <div className='due-time-container'>

            <div className='input-group'>
              <label htmlFor='due-time'> Due Date </label>
              <input
                type='date' className='task-form-input' name='due-time' id='due-time' defaultValue={taskInfo ? taskInfo.dueDate : date} required
                min={date}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='asignee'> Assignee </label>
              <input type='text' className='task-form-input' name='asignee' id='asignee' placeholder='Asignee' required />
            </div>
          </div>

          <button type='submit' className='action-btn modal-submit-btn'>{submitButtonText}</button>
        </form>
      </div>
    </div>
  )
}
