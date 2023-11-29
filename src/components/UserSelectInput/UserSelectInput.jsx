import { users } from '../../utilities/mock/users'
import { useEffect, useState } from 'react'
import './style/UserSelectInput.css'
import useToggle from '../../hooks/useToggle'

export default function UserSelectInput ({ selectedAsigneeRef, asignee }) {
  const [isOptionsHidden, toggleIsOptionsHidden] = useToggle({ initialValue: true })
  const [selectedAsignee, setSelectedAsignee] = useState({})
  const handleAsigneeClick = ({ asignee }) => {
    selectedAsigneeRef.current = asignee
    setSelectedAsignee(asignee)
  }

  useEffect(() => {
    if (asignee) {
      setSelectedAsignee(asignee)
    }
  }, [asignee])

  return (
    <div className='input-group'>
      <label onClick={toggleIsOptionsHidden}> Assignee </label>
      <div className='users-input-container' onClick={toggleIsOptionsHidden}>
        <div>
          {Object.keys(selectedAsignee).length > 0
            ? (
              <div key={selectedAsignee.id} className='user-option-cotainer selected-user-option'>
                <div className='user-profile-pic'>
                  <img src={selectedAsignee.profilePicture} alt={`${selectedAsignee.name} profile picture`} />
                </div>
                {selectedAsignee.name}
              </div>
              )
            : 'Select Asignee'}

        </div>
        <div className={`asignee-options-container ${isOptionsHidden && 'hidden-user-option'}`}>
          {users.map(el => {
            return (
              <div key={el.id} className='user-option-cotainer' onClick={() => handleAsigneeClick({ asignee: el })}>
                <div className='user-profile-pic'>
                  <img src={el.profilePicture} alt={`${el.name} profile picture`} />
                </div>
                {el.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
