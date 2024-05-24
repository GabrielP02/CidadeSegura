import React from "react";
import './fontes.css';
import ods from '../img/ods.png'

import Group from '../img/Group.png'
import  recife from '../img/recife.jpg'



const Desafios = () => {
return (
    <div>
    <img src={ods} className="ods"></img>
 
    <div className="container"> 
     
    <h1 className="Explicando">Explicando a ods 11</h1>
        <h2 className="topico">Planejamento Urbano para Segurança:Explorar como o planejamento urbano pode ser utilizado para criar comunidades mais seguras. Isso inclui a implementação de medidas de design urbano que promovam a segurança, como iluminação adequada, espaços públicos bem projetados, ruas acessíveis e seguras, além de áreas verdes que incentivem a interação comunitária e a vigilância natural.
        <br></br>
        <br></br>
        Participação Comunitária e Empoderamento: Discutir a importância da participação comunitária e do empoderamento para promover comunidades seguras e inclusivas. Isso inclui o envolvimento ativo dos residentes na tomada de decisões relacionadas à segurança, a promoção da coesão social, a construção de redes de apoio comunitário e o fortalecimento das capacidades locais para resolver conflitos e responder a desafios de segurança de forma colaborativa.<br></br>
        <br></br>
        Resiliência a Desastres e Gerenciamento de Riscos: Abordar estratégias para fortalecer a resiliência das comunidades em face de desastres naturais e riscos emergentes. Isso envolve a implementação de planos de preparação para desastres, sistemas de alerta precoce, infraestrutura robusta e políticas de uso da terra que reduzam a exposição a ameaças, protegendo vidas e propriedades.
        
        </h2>
        
        </div>
        
        <img src={Group} className="Group"></img>
        
        <div className="container2">

       
        <h2>A escolha da ods 11</h2>
        <h3 className="topico2">Cidades e Comunidades Sustentáveis' para representar o projeto 'Cidade Segura' é fundamentada na nossa visão de promover comunidades seguras e sustentáveis por meio da melhoria da segurança em locais públicos.<br></br><br></br> Este objetivo está intrinsecamente ligado ao desenvolvimento sustentável das cidades, pois a segurança é um elemento essencial para o bem-estar dos cidadãos e o florescimento do turismo, que desempenha um papel significativo na economia e na identidade das comunidades.<br></br><br></br>

Ao abordar problemas como vandalismo e insegurança em locais turísticos, estamos contribuindo diretamente para a criação de cidades mais seguras, inclusivas e resilientes, conforme preconiza a ODS 11. Além disso, nosso aplicativo fomenta a participação cidadã e a colaboração com as autoridades locais, fortalecendo os laços comunitários e promovendo a governança urbana eficaz, outro aspecto central da ODS 11.<br></br><br></br>

Portanto, a escolha da ODS 11 para representar o projeto 'Cidade Segura' reflete nosso compromisso com a construção de cidades e comunidades onde todos possam viver com segurança, qualidade de vida e oportunidades para prosperar.</h3>
        </div>
        <img src={recife} className="recife" />
       
       
    </div>
)

}
export default Desafios;