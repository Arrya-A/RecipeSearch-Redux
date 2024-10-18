import React from 'react'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/slice'
import { useDispatch } from 'react-redux'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()

  return (
    <div className='d-flex justify-content-around w-100 bg-warning fixed p-3'>
      <Link className='text-white font-bold' style={{ textDecoration: 'none' }} to={'/'}>
      
        <h3>Recipe Book</h3>
      </Link>

      {insideHome &&
        <input onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))}  style={{ width: '300px' }} className='rounded p-1' type="text" placeholder='Search by recipe or cuisine' />
      }

    </div>
  )
}

export default Header