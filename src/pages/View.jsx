import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'

const View = () => {
  const [recipe, setRecipe]= useState({})
  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allRecipes")) {
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipe(allRecipes.find(item => item.id == id))
    }
  }, [])
  console.log(recipe);
  
  return (
    <>
    <Header/>
      <section>
        <div className="row p-1">
          <div className="col-md-6">
            <img className='img-fluid' src={recipe?.image}  alt="" />
          </div>
          <div className="col-md-6 p-5">
            <h2 >{recipe?.name}</h2>
            <hr className='w-75' style={{ height: '3px',backgroundColor:'black', border: 'none' }} />
            <p className="mb-1"><strong>Rating:</strong> {recipe?.rating} ⭐ <br /><span className='ps-5 ms-2'>{recipe?.reviewCount}</span> reviews</p>
            <p><span className='fw-bold'>Cuisine : </span>{recipe?.cuisine}</p>
            <div className='d-flex justify-content-between'>
              <p>SERVINGS: {recipe?.servings}MIN</p>
              <p>PREPPING TIME: {recipe?.prepTimeMinutes} MIN</p>
              <p>COOKING TIME: {recipe?.cookTimeMinutes} MIN</p>

            </div>
            <hr />
            <p><span className='fw-bold'>Ingredients:</span> {recipe?.ingredients}</p>
            <p><span className='fw-bold'>Instructions:</span> {recipe?.instructions}</p>
           <div className='pt-5'  style={{ textAlign: 'right' }}> 
            <Link to='/'><button className='btn btn-warning'><i class="fa-solid fa-arrow-left me-2"></i>Back</button></Link>
            </div>
          </div>
          
        </div>
        
      </section>
    </>
  )
}

export default View