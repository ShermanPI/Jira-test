import { useCardContext } from '../../context/cardsContext'
import DeleteTaskCardModal from '../DeleteTaskCardModal/DeleteTaskCardModal'
import './Style/TaskCard.css'

export default function TaskCard ({ id, title, tags, asignee }) {
  const { showTaskModal, deleteItem, actualDragginTask } = useCardContext()

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteItem({ id })
  }

  const handleDragStart = (e) => {
    actualDragginTask.current = e.target
  }

  return (
    <>
      <div id={id} className='task-card-cotainer' onDragStart={handleDragStart} draggable='true' onClick={() => showTaskModal({ id })}>
        <b className='task-card-title'>{title}</b>
        {tags.length > 0 &&
          <ul className='tags-container'>
            {tags.map(el => {
              return <li className='tag-item' key={el.id}><p>{el.name}</p></li>
            })}
          </ul>}

        <div className='task-control-container'>

          {asignee.id &&
            <div className='asignee-container'>
              <div className='asignee-img'>
                <img src={asignee.profilePicture} alt='asignee profile picture' />
              </div>
              <p>{asignee.name}</p>
            </div>}

          <DeleteTaskCardModal handleDelete={handleDelete} />

        </div>
      </div>
    </>
  )
}
