import './Style/TaskCard.css'

export default function TaskCard ({ title, tags, asigneeName }) {
  return (
    <div className='task-card-cotainer'>
      <b className='task-card-title'>{title}</b>

      {tags &&
        <ul className='tags-container'>
          {tags.map(el => {
            return <li className='tag-item' key={el.id}><p>{el.name}</p></li>
          })}
        </ul>}

      <div className='task-container'>

        <div className='asignee-container'>
          <div className='asignee-img'>
            <img src={`https://unavatar.io/${asigneeName}`} alt='asignee profile picture' />
          </div>
          <p>{asigneeName}</p>
        </div>

      </div>
    </div>
  )
}
