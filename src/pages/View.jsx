import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      <section>
        <div className="row p-5">
          <div className="col-md-6">
            <img className='img-fluid' src={recipe?.image}  alt="" />
          </div>
          <div className="col-md-6 p-5">
            <h2>{recipe?.name}</h2>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default View