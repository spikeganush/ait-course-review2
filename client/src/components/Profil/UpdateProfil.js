import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Uploading from './UploadImg'
// updateEmail
import { updateBio } from '../../actions/user.actions'
import { dateParser } from '../Utils'

const UpdateProfil = () => {
  const [bio, setBio] = useState('')
  // const [email, setEmail] = useState('')
  const [updateForm, setUpdateForm] = useState(false)
  // const [updateFormEmail, setUpdateFormEmail] = useState(false)
  const userData = useSelector((state) => state.userReducer)
  const error = useSelector((state) => state.errorReducer.userError)
  const dispatch = useDispatch()

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio))
    setUpdateForm(false)
  }

  // const handleUpdateEmail = () => {
  //   dispatch(updateEmail(userData._id, email))
  //   setUpdateFormEmail(false)
  // }
  return (
    <div className="profil-container">
      <h1>{userData.username}s' profil</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Profil picture</h3>
          <p>{error.maxSize}</p>
          <p>{error.format}</p>
          <img src={userData.picture} alt="user-pic" />
          <Uploading />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Update bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Validate bio</button>
              </>
            )}
          </div>
          {/* <div className="bio-update">
            <h3>Email</h3>
            {updateFormEmail === false && (
              <>
                <p onClick={() => setUpdateFormEmail(!updateFormEmail)}>
                  {userData.email}
                </p>
                <button onClick={() => setUpdateFormEmail(!updateFormEmail)}>
                  Update email
                </button>
              </>
            )}
            {updateFormEmail && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.email}
                  onChange={(e) => setEmail(e.target.value)}
                ></textarea>
                <button onClick={handleUpdateEmail}>Validate email</button>
              </>
            )}
          </div> */}
          <h4>
            Member since: {dateParser(userData.createdAt)}
            <br />
            Profile updated: {dateParser(userData.updatedAt)}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfil
