export default function SelectField ({ title, onChangeHandler, options }) {
  return (
    <select name={title} id='' defaultValue='hey' onChange={onChangeHandler}>
      <option value=''>{title}</option>
      {options && options.map(el => {
        return (
          <option key={el.id} value={el.name}>{el.name}</option>
        )
      })}
    </select>
  )
}
