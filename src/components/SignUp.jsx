import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="grid justify-items-center gap-4">
      <h1>Sign Up</h1>
      <div className="grid py-2">
        <div className="grid py-2">
          <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-900">
            Name
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="name"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="grid py-2">
          <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-900">
            Surname
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="surname"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="grid py-2">
          <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-900">
            Email
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="example@gmail.com"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="grid py-2">
          <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-900">
            Password
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="password"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="grid py-2">
          <label htmlFor="UserEmail" className="block text-sm font-medium text-gray-900">
            Profile Icon
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="url"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        {/* select */}
        <div>
        <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
          Country
        </label>

        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="ARG">Argentina</option>
          <option value="GM">Germany</option>
          <option value="USA">United States of America</option>
          <option value="UK">United Kingdom</option>
          <option value="FN">Finland</option>
        </select>
      </div>
      <Link
          to={'/login'}
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md inline-block rounded px-12 py-3 text-sm font-medium text-sky outline outline-offset-2 outline-1 focus:ring focus:ring-sky-400"
        >
          <span className="text-sm font-medium"> Already have an account? Sign in!</span>

          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
      

    </div>
  )
}

export default SignUp