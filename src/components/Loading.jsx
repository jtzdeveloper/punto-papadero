import Logo from './Logo'
export default function Loading({message}){
    return (
        <div className='flex flex-col justify-center items-center'>
            <Logo />
            <section className='animate-pulse text-white'>{ message }</section>
        </div>
        
    )
}