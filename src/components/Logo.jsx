import ReactLogo from '../../src/assets/icons/logo.svg'

export default function Logo({width = 200,height = 150}){
    return (
        <div className=' flex justify-center items-center'>
            <img className='animate-wiggle' src={ReactLogo} alt="aaa" width={width} height={height  }  />
       </div>
    )
}