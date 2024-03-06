import React from 'react'
import { Container, Content } from '../../../styles/contac_style'
import { FaLinkedin, FaEnvelope,} from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/mauricio-abdala/"
          name="Meu perfil do Linkedin"
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="mauricio.abdala@outlook.com"
        />
      </Content>
    </Container>
  )
}
