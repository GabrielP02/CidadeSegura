import React from "react";
import './solucao.css';
import pag1 from '../img/pag1.png'

const Solucao = () => {
return (
   
    <div className="container3">
        <h1 className="tituloSolucao">Solução Proposta</h1>
        <h1 className="Solucao">
        Em um mundo em constante evolução, a segurança urbana tornou-se uma prioridade essencial para comunidades em todo o mundo. Para enfrentar os desafios crescentes e promover a segurança nas cidades, apresentamos uma solução inovadora: um aplicativo inteligente de monitoramento, alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) número 11 da ONU.<br></br><br></br>

O ODS 11, intitulado "Cidades e Comunidades Sustentáveis", busca tornar as cidades inclusivas, seguras, resilientes e sustentáveis. Nosso aplicativo contribui diretamente para alcançar esse objetivo, fornecendo uma plataforma abrangente para monitorar e melhorar a segurança urbana.<br></br><br></br>

Este aplicativo permite que os cidadãos relatem incidentes de segurança em tempo real, como crimes, acidentes ou condições de infraestrutura precárias. Esses relatórios são georreferenciados e instantaneamente enviados para as autoridades competentes, permitindo uma resposta rápida e eficaz.
          
        </h1>
        <img src={pag1} className="pag1" ></img>
      

    </div>
)

}
export default Solucao;