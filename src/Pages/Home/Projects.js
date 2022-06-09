import React from "react"

const Projects = () => {
  return (
    <div className="my-8">
      <h2 className="normal-case text-4xl font-bold text-center">Projects</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-16 m-12">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              className="max-h-64"
              src="https://i.ibb.co/N9f4wMn/alyona.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Alyona Industries Ltd</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <a
                href="https://alyona-industries-ltd.web.app/"
                className="btn btn-primary"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              className="max-h-64"
              src="https://i.ibb.co/d2qKCtC/boi-bari.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Boi Bari</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <a href="https://boi-bari.web.app/" className="btn btn-primary">
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              className="max-h-64"
              src="https://i.ibb.co/6mb172X/vinyl.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vintage Vinyl</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <a
                href="https://fanciful-semolina-8580c3.netlify.app/"
                className="btn btn-primary"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
