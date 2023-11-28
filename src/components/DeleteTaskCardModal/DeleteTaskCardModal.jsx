import DeleteIcon from '../../assets/SvgIcons/Icons'
import useToggle from '../../hooks/useToggle'
import './style/DeleteTaskCardModal.css'

export default function DeleteTaskCardModal ({ handleDelete }) {
  const [isDeleteModalHidden, toggleIsDeleteModalHidden] = useToggle({ initialValue: true })

  const handleShowModal = (e) => {
    e.stopPropagation()
    toggleIsDeleteModalHidden()
  }

  return (
    <>
      <div className={`modal-shadow ${isDeleteModalHidden && 'delete-modal-hidden'}`} onClick={handleShowModal}>
        <div className='delete-task-modal'>
          <h2><b>Are you sure you want to delete this task?</b></h2>
          <div className='delete-tag-buttons-container'>
            <button onClick={toggleIsDeleteModalHidden}>CANCEL</button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
      <button className='delete-card-btn' onClick={handleShowModal}>
        <DeleteIcon />
      </button>
    </>
  )
}
