import { useCardContext } from '../../context/cardsContext'
import './Style/TaskCard.css'

export default function TaskCard ({ id, title, tags, asigneeName }) {
  const { showTaskModal, deleteItem } = useCardContext()

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteItem({ id })
  }

  return (
    <>

      <div className='task-card-cotainer' onClick={() => showTaskModal({ id })}>
        <b className='task-card-title'>{title}</b>
        {tags.length > 0 &&
          <ul className='tags-container'>
            {tags.map(el => {
              return <li className='tag-item' key={el.id}><p>{el.name}</p></li>
            })}
          </ul>}

        <div className='task-control-container'>

          <div className='asignee-container'>
            <div className='asignee-img'>
              <img src={`https://unavatar.io/${asigneeName}`} alt='asignee profile picture' />
            </div>
            <p>{asigneeName}</p>
          </div>

          <button className='delete-card-btn' onClick={handleDelete}>delete</button>

        </div>
      </div>
    </>
  )
}
