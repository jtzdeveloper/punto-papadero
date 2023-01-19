import { useQuery } from "@tanstack/react-query"
import getCategories from '../services/woocommerceCategories'
import { Link } from 'react-router-dom'
import Loading from './Loading'

export default function ScreenCategories(){
  const { isLoading,data,isError,error,isFetched  } = useQuery({
    queryKey:['categories'],
    queryFn: ()=>getCategories()
})   


  
  return (
        <div className=" ">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white ">Seleccione una Categoria</h3>
                <div className="inline-flex items-center space-x-2">
                  <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </a>
                  <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </a>
                </div>
              </div>
                
              <div className="h-[calc(100vh-155px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-110px)] overflow-y-auto">
              { isLoading  ? <Loading message={'Cargando Categorias'}/> :
              <div className=" mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    data.map(category => (
                      <Link img={category.image} key={category.name} to={`productsByCategory/${category.id}`} className="relative  group bg-gray-900 py-10 sm:py-5 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                      <img className="w-16 h-16 object-cover object-center rounded-2xl" src={category.image !== null ? category.image.src : ''} alt="cuisine" />
                      <h4 className="text-white text-xl font-bold capitalize text-center">{category.name}</h4>
                      <p className="text-white/50">{ category.count } Productos</p>
                      {/* <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">22 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p> */}
                    </Link>
                    ))
                }
              </div>
              
            }</div>
        </div>    
    )
}