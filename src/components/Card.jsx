
export const Card = ({name, description, province, image}) => {
    return (
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
            alt="Home"
            src={image}
            className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
            <dl>
            <div>
                <dt className="sr-only">{name}</dt>

                <dd className="text-sm text-gray-500">{description}</dd>
            </div>

            <div>
                <h3 className="font-medium">{name}</h3>
            </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                    <p className="font-medium">{name}</p>
                </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">{province}</p>
                </div>
            </div>
            </div>
        </div>
        </a>

    )
}