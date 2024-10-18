import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slice'

const Home = () => {
  const dispatch = useDispatch()
  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)
  // console.log(allRecipes);


  const [currentPage, setCurrentPage] = useState(1)
  const recipePerPage = 8
  const totalPages = Math.ceil(allRecipes?.length / recipePerPage)
  const currentPageLastRecipeIndex = currentPage * recipePerPage
  const currentPageStartRecipeIndex = currentPageLastRecipeIndex - recipePerPage
  const visibleRecipeCards = allRecipes?.slice(currentPageStartRecipeIndex, currentPageLastRecipeIndex)

  useEffect(() => {
    dispatch(fetchAllRecipes())
  }, [])


  const navigateToNextPage = () => {
    if (currentPage != totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const navigateToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <>
      <Header insideHome={true} />

      <section className='products pb-5' style={{ width: "100%" }}>
        <h2 className='text-center p-5'> THE EASIEST WAY TO MAKE YOUR FAVOURITE MEAL</h2>
        <div className='container'>

          <div className="row">
            {
              loading ?
                <div style={{ height: '60vh' }} className='d-flex justify-content-center align-items-center fw-bold'>
                  <img width={'90px'} height={'90px'} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" />
                  Loading...
                </div>
                :


                <>

                  {
                    allRecipes.length > 0 ?
                      visibleRecipeCards?.map(recipe => (
                        <div key={recipe?.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                          <Card className='text-center'>
                            <Card.Img variant="top" style={{ height: '200px', width: '100%' }} src={recipe?.image} />
                            <Card.Body>
                              <Card.Text className='fw-bold mb-2'>{recipe?.name}</Card.Text>
                              <Link to={`/${recipe?.id}/view`}><Button variant="warning">View Recipe</Button></Link>
                            </Card.Body>
                          </Card>
                        </div>
                      ))
                      :
                      <div className="font-bold text-center mx-5 text-danger">
                        Recipe You Are Searching Is Not Found
                      </div>
                  }


                  {/* pagination */}
                  <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                    <span onClick={navigateToPrevPage} style={{ cursor: 'pointer' }}><i class="fa-solid fa-chevron-left me-5"></i></span>
                    <span className='font-bold'>{currentPage} of {totalPages}</span>
                    <span onClick={navigateToNextPage} style={{ cursor: 'pointer' }}><i class="fa-solid fa-chevron-right ms-5"></i></span>

                  </div>
                </>
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Home

