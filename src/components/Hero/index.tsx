import React from "react"
import logoVite from "@/assets/logo-vite.svg"
import logoElectron from "@/assets/logo-electron.svg"
const Hero: React.FC = () => {
  return (
    <section className="hero is-small">
      <div className="hero-body has-text-centered">
        <div className="logo-box">
          <img
            src={logoVite}
            className="logo vite"
            alt="Electron + Vite logo"
          />
          <img
            src={logoElectron}
            className="logo electron"
            alt="Electron + Vite logo"
          />
        </div>
        <p className="title mt-5">React+Electron</p>
      </div>
    </section>
  )
}
export default Hero
