export default function BubbleAlert({ countProducts = 0 }){
    return (
        <section className="w-5 h-5 flex justify-center items-center font-bold left-4 top-4 absolute rounded-full bg-red-500">{ countProducts }</section>
    )
}