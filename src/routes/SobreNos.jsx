import React from "react";
import './fontes.css';
import CarrosselSobreNos from "../assets/components/CarrosselSobreNos";
import Navbar from '../assets/components/Navbar';

const SobreNos = () => {
return (
  <>
  <Navbar/>
    <div><h1 className="tituloSobrenos">Nossa equipe de desenvolvedores</h1>
      <CarrosselSobreNos/>

    </div>
    </>
)

}
export default SobreNos;