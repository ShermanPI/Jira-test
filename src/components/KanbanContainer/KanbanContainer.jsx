import './style/kenbanStyle.css'

export default function KanbanContainer ({ children }) {
  return (
    <section className='kenban-container'>
      {children}
    </section>
  )
}
