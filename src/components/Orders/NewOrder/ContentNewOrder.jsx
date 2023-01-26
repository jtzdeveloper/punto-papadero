import Loading from "../../Loading";

export default function ContentNewOrder({ isLoading,children }){
    return (
        <section className="w-full h-[calc(100vh-150px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-200px)] xl:h-[calc(100vh-150px)]  flex items-center  flex-col xl:flex-row gap-1">
            <section className="w-full  h-[calc(100vh-150px)] justify-center sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-200px)] xl:h-full  flex items-center  flex-col xl:flex-row gap-1">
                {children}
            </section>
        </section>
    )
}