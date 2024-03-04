import React from 'react'
import { Container, Content } from '../../../styles/contac_style'
import { FaGlobe, } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
    return (
        <Container>
            <Content>
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://react-entrega-s3-template-hamburgueria-mauricio-abdala.vercel.app/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://m3-s1-entrega-portfolio-mauricio-abdala.vercel.app/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://react-entrega-kenzie-hub-mauricio-abdala.vercel.app/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://react-entrega-s1-template-nukenzie-mauricio-abdala.vercel.app/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/Blog_Kenzie/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/criacao-de-formularios/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/kenzieflix/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/catalogo-geek/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/tabela-fipe/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/open-music/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/control-finance/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/criando-site-institucional/"
                />
                <ItemContact
                    IconFa={FaGlobe}
                    LinkContact="https://mauricioabdala.github.io/criando-rede-social/"
                />
            </Content>
        </Container>
    )
}
