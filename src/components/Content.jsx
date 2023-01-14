export default function Content({children}){
    return (
        <section className="flex flex-col h-screen max-h-full bg-gray-700">
            { children }
        </section>
    )
}