import { Button, Col, Row } from 'react-bootstrap';
import { PureComponent } from 'react';
import { Block } from './components/block';
import { ItemBlock } from './components/item-block';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderBlock } from './components/header-block';
import { Competence } from './components/competence';

export class Home extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <HeaderBlock title="SEBASTIÁN NOREÑA MEGLAN" subtitle="DESARROLLADOR DE SOFTWARE"></HeaderBlock>
                    </Col>
                    <Col md={2}>
                        <Block title='INFORMACIÓN'>
                            <ItemBlock
                                title="TELÉFONO"
                                info="3104395956"
                            />
                            <ItemBlock
                                title="EMAIL"
                                info="sebastiannmeglan@gmail.com"
                            />
                        </Block>
                        <Block title='ENLACES'>
                            <ItemBlock>
                                <Button style={{ marginRight: 10 }} variant="outline-dark">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Button>
                                <Button variant="outline-dark">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </Button>
                            </ItemBlock>
                        </Block>
                        <Block title='IDIOMAS'>
                            {Languajes.map((item, i) => {
                                return (
                                    <ItemBlock title={item.title}>
                                        <Competence points={item.value}></Competence>
                                    </ItemBlock>
                                )
                            })}

                        </Block>
                        <Block title='HOBBIES'>
                            <ItemBlock>
                                <label>Modelado 3D</label>
                                <br></br>
                                <label>Videojuegos</label>
                                <br></br>
                                <label>Streaming</label>
                                <br></br>
                            </ItemBlock>
                        </Block>
                    </Col>
                    <Col md={6} style={{ borderLeftStyle: 'solid', borderLeftWidth: 1, borderRightStyle: 'solid', borderRightWidth: 1 }}>
                        <Block title="PERFIL">
                            <ItemBlock>
                                <p>
                                    Tecnico en desarrollo de software y estudiante de ultimo semestre de ingenieria de sistemas y computación, con mas de un año de experiencia en desarrollo e integración de aplicaciones web y móvil, bajo frameworks basados en node.js.
                                    Responsable, autodidacta, honesto y eficaz en tareas de desarrollo.
                                </p>
                            </ItemBlock>
                        </Block>
                        <Block title="EDUCACIÓN">
                            <ItemBlock
                                title="Ingenieria de sistemas y computación"
                                institution="Universidad de Caldas"
                                location="Manizales"
                                info="2013 - presente"
                            />
                            <ItemBlock
                                title="Automatización en procesos industriales"
                                institution="SENA"
                                location="Manizales"
                                info="2017"
                            />
                            <ItemBlock
                                title="Técnico en programación de software"
                                institution="SENA"
                                location="Manizales"
                                info="2010 - 2012"
                            />
                        </Block>
                        <Block title="EXPERIENCIA LABORAL">
                            <ItemBlock
                                title="Ingeniero desarrollador de software"
                                institution="Reactiva soporte y desarrollo"
                                location="Manizales"
                                info="Enero 2020 - presente"
                            />
                            <ItemBlock
                                title="Desarrollador de software"
                                institution="Desarrollo Eficaz"
                                location="Manizales"
                                info="Julio 2020 - Septiembre 2020"
                            />
                            <ItemBlock
                                title="Practicante desarrollador de software"
                                institution="Reactiva soporte y desarrollo"
                                location="Manizales"
                                info="Agosto 2019 - Enero 2020"
                            />
                        </Block>
                        <Block title="REFERENCIAS">
                            <Row>
                                <Col>
                                    <h4>Laborales</h4>
                                    <ItemBlock
                                        title="Francizco Aristizabal"
                                        info="3013066169"
                                    />
                                    <ItemBlock
                                        title="TELÉFONO"
                                        info="3104395956"
                                    />
                                    <ItemBlock
                                        title="TELÉFONO"
                                        info="3104395956"
                                    />
                                </Col>
                                <Col>
                                    <h4>Personales</h4>
                                    <ItemBlock
                                        title="TELÉFONO"
                                        info="3104395956"
                                    />
                                    <ItemBlock
                                        title="TELÉFONO"
                                        info="3104395956"
                                    />
                                    <ItemBlock
                                        title="TELÉFONO"
                                        info="3104395956"
                                    />
                                </Col>
                            </Row>
                        </Block>
                    </Col>
                    <Col md={2}>
                        <Block title='COMPETENCIAS'>
                            {Competences.map((item, i) => {
                                return (
                                    <ItemBlock title={item.title}>
                                        <Competence points={item.value}></Competence>
                                    </ItemBlock>
                                )
                            })}
                        </Block>
                    </Col>
                </Row>
            </>
        )
    }
}

const Competences = [
    {
        title: "Javascript",
        value: 5
    },
    {
        title: "React.js",
        value: 5
    },
    {
        title: "React Native",
        value: 5
    },
    {
        title: "Express.js",
        value: 3
    },
    {
        title: "MongoDB",
        value: 3
    },
    {
        title: "Angular.js",
        value: 3
    },
    {
        title: "C#",
        value: 4
    },
    {
        title: "ASP.NET",
        value: 3
    },
    {
        title: "Java",
        value: 3
    },
    {
        title: "Python",
        value: 3
    },
    {
        title: "PHP",
        value: 3
    }
]

const Languajes = [
    {
        title: "Español",
        value: 5
    },
    {
        title: "Ingles",
        value: 3
    },
    {
        title: "Japónes",
        value: 2
    }
]