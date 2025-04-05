import React from 'react'

export default async function CarPage({params}) {
    const {id} = await params;
  return (
    <div>Car {id}</div>
  )
}
