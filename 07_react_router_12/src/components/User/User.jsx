import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {ids} = useParams()
  return (
    <div>User --- {ids}</div>
  )
}

export default User