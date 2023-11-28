import { AddIcon } from '../../assets/SvgIcons/Icons'
import './style/NewTagButton.css'

export default function NewTagButton ({ tagInputRef, addTagHandler }) {
  return (
    <>
      <div className='add-tag-container'>
        <input ref={tagInputRef} type='text' className='new-tag-input' name='new-tag-input' id='new-tag-input' placeholder='Add Tag' />
        <div className='create-tag-btn' onClick={addTagHandler}>
          <AddIcon />
        </div>
      </div>
    </>
  )
}
