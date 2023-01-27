export default function Container({ children }){
    return (
        <section className={`bg-slate-900 h-[calc(100vh-200px)] sm:h-[calc(100vh-200px)] lg:h-[calc(100vh-400px)] xl:h-[calc(100vh-150px)]    overflow-y-auto w-full    rounded-xl text-sm mt-10 border-separate text-gray-400`}>
            {
                 children
            }
        </section>
    )
}