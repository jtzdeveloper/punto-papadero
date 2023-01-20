export default function TitlePage({children}){
    return (
        <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extralight text-white/50 ">{children}</h3>
        </div>
    )
}