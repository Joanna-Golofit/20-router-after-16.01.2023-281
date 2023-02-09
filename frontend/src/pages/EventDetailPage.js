import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const EventDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const edit = () => {
    navigate("edit")
  }
  return (
    <>
      <div>EventDetailPage</div>
      <p>{params.id}</p>
      <button onClick={edit}>Edit</button>
    </>
  )
}

export default EventDetailPage