import { useState } from 'react'
import './style/UserSelectInput.css'
import useToggle from '../../hooks/useToggle'

export default function UserSelectInput ({ asignee }) {
  const users = [
    {
      id: '9a32020d-c396-44e1-abd6-cbdd05b46c25',
      name: 'Sherman Pérez',
      profilePicture: 'https://unavatar.io/shermanPI'
    },
    {
      id: '4f583395-9c43-4322-b152-d64eb4be1b43',
      name: 'Oniel Santos',
      profilePicture: 'https://unavatar.io/Oniel1721'
    },
    {
      id: '09e044b4-0820-40cb-b762-2395d5cab886',
      name: 'Jhon Joel',
      profilePicture: 'https://unavatar.io/Jhon'
    },
    {
      id: '727d184d-e016-4580-adfb-df5ae54cafa8',
      name: 'Jeff Delaney',
      profilePicture: 'https://unavatar.io/codediodeio'
    }
  ]

  const [isOptionsHidden, toggleIsOptionsHidden] = useToggle({ initialValue: true })
  const [selectedAsignee, setSelectedAsignee] = useState()

  const handleAsigneeClick = ({ asignee }) => {
    setSelectedAsignee(asignee)
  }

  return (
    <div className='input-group'>
      <label onClick={toggleIsOptionsHidden}> Assignee </label>
      <div className='users-input-container' onClick={toggleIsOptionsHidden}>
        <div>
          {selectedAsignee
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
