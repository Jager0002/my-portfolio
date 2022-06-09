import React from "react"

const PhotoAndShortInfo = () => {
  return (
    <div className="mt-8">
      <div className="hero min-h-full">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/sCB5mKr/Faisal-Moyen-1.jpg"
            className="max-w-sm rounded-full shadow-2xl"
            alt=""
          />
          <div className="">
            <h1 className="text-5xl font-bold">Faisal Moyen</h1>
            <p className="py-6">MERN Stack Developer</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1x_98UrsxqcVRyK7ZolgXiuY4JNZ0tRtF/view?usp=sharing"
              className="btn btn-primary w-1/2"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoAndShortInfo
