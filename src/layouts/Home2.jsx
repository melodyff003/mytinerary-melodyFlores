import Carrousel from "../components/Carrousel"
import {Link as Anchor } from 'react-router-dom'

const Home2 = () => {
  return (
<section className="grid justify-items-center">
  <div className="max-w-screen-xl px-3 py-6 sm:px-4 sm:py-10 lg:px-6 lg:py-14">
    <div
      className="grid grid-cols-2 gap-y-6 lg:grid-cols-2 lg:items-center lg:gap-x-14"
    >
      <div
        className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">My Tinerary</h2>

        <p className="mt-4 text-gray-600">
        Find your perfect trip, designed by insiders who love and know their cities!
        </p>
        <div className="mt-4 md:mt-8 grid justify-items-center">
        <Anchor
          to={'/cities'}
          className="inline-block rounded px-12 py-3 text-sm font-medium text-sky outline outline-offset-2 outline-1 focus:ring focus:ring-sky-400"
        >
          For more cities!
        </Anchor>
    </div>
      </div>

      <div className="grid gap-4 sm:grid-row-2 flex flex-wrap">
        <Carrousel className=''/>
      </div>
    </div>
  </div>

</section>
  )
}

export default Home2