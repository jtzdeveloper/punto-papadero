import Logo from './Logo'
import Container from './globals/Container'
export default function Loading({message}){
    return (
        <Container>
             <section className='flex flex-col justify-center items-center w-full h-full'>
                <Logo />
                <section className='animate-pulse text-white'>{ message }</section>
             </section>
            
        </Container>
     
        
    )
}