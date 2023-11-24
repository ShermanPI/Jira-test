import './Style/TaskCard.css'

export default function TaskCard ({ title }) {
  return (
    <div className='task-card-cotainer'>
      <h4 className='task-card-title'>{title}</h4>
    </div>
  )
}
