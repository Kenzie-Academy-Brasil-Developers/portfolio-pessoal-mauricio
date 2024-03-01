import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Mauricio Abdala</Name>
        <Function>Desenvolvedor FullStack</Function>
        <Intro>Certificado pela Kenzie Academy, 
          tenho conhecimento em desenvolvimento Web
          (React, JS, Vite, Next, Python, postgreSQL, mySQL, NodeJS, GitHub, utilização de libs, etc... ), e criação de conteúdo para o YouTube.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/foto.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
