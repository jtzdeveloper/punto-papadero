import ReactLogo from '../../src/assets/icons/logo.svg'

export default function Logo({width = 300,height = 200}){
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <img className='animate-wiggle' src={ReactLogo} alt="aaa" width={width} height={height  }  />
       </div>
    )
}