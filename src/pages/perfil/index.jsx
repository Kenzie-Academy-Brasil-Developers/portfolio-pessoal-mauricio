import React from 'react'
import { Container, Content } from './styles.js'



export default function Perfil() {
    return (
        <Container>
            <Content>
                <div>
                    <h2>Sobre Mim</h2><br />
                    <h3>Formação</h3>
                    <p>Kenzie Academy Brasil, Desenvolvimento-Web Full-Stack | FEV DE 2023- FEV DE 2024
                        Curso livre com 2.000h.</p><br />
                    <h3>Experiência</h3>
                    <p>Atualmente estou em transição de carreira para a área da tecnologia, sou músico erudito
                        minha formação contempla desde meus 8 anos de idade e sempre adquirindo um vasto conhecimento até os dias atuais,
                        em minha formação como músico estudei na escola do Theatro Municipal de São Paulo , Fundação das Artes de São Caetano do Sul,
                        e participações como concertista em seminários como os do conservatório Souza Lima,
                        tenho experiência no contato com pessoas fruto de projetos com música de câmara e solo,
                        apresentações ao vivo em concertos, conferindo esta ultima habilidade a capacidade de lidar e controlar suas emoções.
                        Sou também Luthier (construtor de violões artesanais ) habilidade está adquirida 100% autodidaticamente.
                        Minhas habilidades como músico nunca foram uma barreira para a tecnologia pois também atuo em freelancers como produtor de áudio
                        operando softwares como Cubase para gravação, edição, mixagem e masterização de áudio.<br />
                        Como mencionado estou fazendo minha transição de carreira junto ao Team Kenzie Academy ,
                        com formação Desenvolvedor FullStack, com domínio teórico e prático em HTML5, CSS3, Vanilla Js, JavaScript(ES6+),
                        noções de UX, React, TypeScript, Express, consumo de APIs, NodJS, PostgreSQL, Python, Django e etc..
                    </p><br />
                    <h3>Principais projetos</h3>
                    <a href="https://react-entrega-kenzie-hub-mauricio-abdala.vercel.app/">Kenzie Hub</a>
                    <p>O objetivo deste projeto foi criar uma aplicação completa com formulário, validação de cadastro,
                        autenticação e Login, permissão e bloqueio de rotas, estilização em CSS3.<br/>
                        Tecnologias utilizadas:<br/>                        React + Vite</p>
                    <a href="https://react-entrega-s1-template-nukenzie-mauricio-abdala-demlngzd6.vercel.app/">Nu Kenzie</a>
                    <p>O objetivo deste projeto foi criar uma aplicação de controle financeiro em React e fazer a configuração
                        para que ele pudesse funcionar no Vite com HMR e regras ESlist.<br/>
                        Tecnologias utilizadas.
                        React + Vite</p>
                    <a href="https://react-entrega-s3-template-hamburgueria-mauricio-abdala.vercel.app/">Burguer Kenzie</a>
                    <p>O objetivo deste projeto foi implementar um conjunto de funcionalidades e estilização a um projeto existente,
                        colocando em prática os conhecimentos para acessar a lista de produto desta API , simulação de um carrinho de
                        compras com React. Além disso foi utilizada a estilização em CSS3 com o SASS.<br/>
                        Tecnologias utilizadas.
                        React, CSS3</p>
                </div>
            </Content>
        </Container>
    )
}
