
export const Card = ({name, description, province, image}) => {
    return (
        <div className='  grid grid-cols-2 group flex flex-wrap sm:flex-wrap justify-items-center gap-4 m-2'>
            <div className='group p-3 w-auto'>
                <h3>{name}</h3>
                <img
                alt={name}
                src={image}
                className="group-hover:opacity-80 w-80 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 flex items-center space-x-3">
                    <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-sky" fill="none" viewBox="0 0 24 24">
                    <p>{description}</p>
                    <h4>{province}</h4>
                    </svg>
                </div>
            </div>
        </div>
    )
}