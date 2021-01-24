import { addCount } from '@store/count/count.action'
import { MDBBtn } from 'mdbreact'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddCount = () => {
  const dispatch = useDispatch()
  const AddCount = () => dispatch(addCount())
  const { count } = useSelector((state: { count: any }) => state.count)
  return (
    <>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <MDBBtn onClick={AddCount}>Add To Count</MDBBtn>
    </>
  )
}

export default AddCount
