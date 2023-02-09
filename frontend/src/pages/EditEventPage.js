import React from 'react'
import { useParams } from 'react-router-dom';

const EditEventPage = () => {
  const params = useParams();

  return (
    <div>EditEventPage of { params.id }</div>
  )
}

export default EditEventPage