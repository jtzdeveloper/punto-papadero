export default function ContainerMessageText({children,color=''}){
    return (
        <section className={`w-full h-full flex justify-center items-center font-bold ${color}`}>
            {children}
        </section>
    )
}