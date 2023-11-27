import './style/taskModal.css'
import { useRef } from 'react'
import CloseIcon from '../../assets/SvgIcons/Icons'
import Tag from '../Tag/Tag'
import { useCardContext } from '../../context/cardsContext'

export default function TaskModal ({ isHidden, toggleIsHidden, handleSubmit, title, taskInfo }) {
  const today = new Date()
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const formRef = useRef()
  const tagInputRef = useRef()
  const { tags, addTag } = useCardContext()

  const addTagHandler = () => {
    const name = tagInputRef.current.value
    if (name) {
      console.log('hey')
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
              ? <input type='text' className='title-input' name='title' id='title' placeholder='Title' defaultValue={taskInfo.title} required />
              : (
                <div className='input-group'>
                  <label htmlFor='title'> Title </label>
                  <input type='text' name='title' id='title' placeholder='Write a title for your task' required />
                </div>
                )
          }

          <div className='input-group'>
            <label htmlFor='description'> Description </label>
            <textarea id='description' name='description' placeholder='This is a description' defaultValue={taskInfo && taskInfo.description} required />
          </div>

          <div className='input-group'>
            <label> Tags </label>
            <ul className='card-tags-container'>
              {tags.map(el => {
                return <Tag name={el.name} key={el.id} isSelected />
              })}

              <li>
                <input ref={tagInputRef} type='text' name='new-tag-input' id='new-tag-input' placeholder='Tag Name' />
                <div className='create-tag-btn' onClick={addTagHandler}>+ Create tag</div>
              </li>
            </ul>
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
