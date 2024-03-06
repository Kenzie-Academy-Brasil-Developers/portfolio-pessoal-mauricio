import React from 'react'
import { Container, Content } from '../../../styles/contac_style'
import { FaGlobe, } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
    return (
        <Container>
            <Content>
                <h3>Publicações</h3>
            <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://react-entrega-s3-template-hamburgueria-mauricio-abdala.vercel.app/"
                    name= "Hamburgueria"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://m3-s1-entrega-portfolio-mauricio-abdala.vercel.app/"
                    name= "Portfólio"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://react-entrega-kenzie-hub-mauricio-abdala.vercel.app/"
                    name= "Kenzie-hub"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://react-entrega-s1-template-nukenzie-mauricio-abdala.vercel.app/"
                    name= "Nukenzie"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/Blog_Kenzie/"
                    name= "Blog Kenzie"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/criacao-de-formularios/"
                    name= "Criação de formulários"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/kenzieflix/"
                    name= "Kenzieflix"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/catalogo-geek/"
                    name= "Catálogo geek"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/tabela-fipe/"
                    name= "Tabela fipe"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/open-music/"
                    name= "Open music"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/control-finance/"
                    name= "Control finance"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/criando-site-institucional/"
                    name= "Criando site institucional"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/criando-rede-social/"
                    name= "Criando rede social"
                />
            </Content>
        </Container>
    )
}
