import InputText from '../InputText/InputText'
import SelectField from '../SelectField/SelectField'

export default function FilterForm () {
  return (
    <form>
      <InputText placeHolder='Search by title' />
      <SelectField title='Asignee' inputName='asignee' />
      <SelectField title='Tag' inputName='tag' />
    </form>
  )
}
