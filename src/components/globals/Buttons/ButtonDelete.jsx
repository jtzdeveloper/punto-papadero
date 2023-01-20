import iconDelete from '../../../assets/icons/delete.svg'
export default function ButtonDelete(props){
    return (
        <button className="" {...props}>
             <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                <img src={iconDelete} alt="delete" width={20} height={20} />
             </a>
        </button>
    )
}