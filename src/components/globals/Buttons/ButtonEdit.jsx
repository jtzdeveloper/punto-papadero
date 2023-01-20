import iconEdit from '../../../assets/icons/edit.svg'
export default function ButtonEdit(props){
    return (
        <button className="" {...props}>
             <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                <img src={iconEdit} alt="edit" width={20} height={20} />
             </a>
        </button>
    )
}