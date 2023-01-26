import { useQuery } from "@tanstack/react-query"
import getCategories from '../services/woocommerceCategories'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import TitlePage from "./globals/TitlePage"
import MainContainer from "./globals/MainContainer"
import Container from "./globals/Container"
export default function ScreenCategories(){
  const { isLoading,data,isError,error,isFetched  } = useQuery({
    queryKey:['categories'],
    queryFn: ()=>getCategories()
})   

  console.log(isLoading)
  
  return (
    <>
    <TitlePage>Seleccione una Categoria</TitlePage>
     <MainContainer>
     {isLoading ? <Loading message={'Cargando Categorias'} /> :
     <Container width={100} isLoading={isLoading}>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          data.map(category => (
            <Link key={category.id} img={category.image}  to={`productsByCategory/${category.id}`} className="relative  group bg-gray-700 py-10 sm:py-5 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <img className="w-16 h-16 object-cover object-center rounded-2xl" src={category.image !== null ? category.image.src : ''} alt="cuisine" />
            <h4 className="text-white text-xl font-bold capitalize text-center">{category.name}</h4>
            <p className="text-white/50">{ category.count } Productos</p>
            </Link>
          ))
        }
        </div>
      </Container>
}
     </MainContainer>
     
     </>
    )
}