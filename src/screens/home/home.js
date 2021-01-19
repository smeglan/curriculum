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
                                info="3104395956"
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
                        <Block title='COMPETENCIAS'>
                            {Competences.map((item, i) => {
                                return (
                                    <ItemBlock title={item.title}>
                                        <Competence points={item.value}></Competence>
                                    </ItemBlock>
                                )
                            })}
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
                                <label>Videojuegos</label>
                                <label>Streaming</label>
                            </ItemBlock>
                        </Block>
                    </Col>
                    <Col md={8} style={{ borderLeftStyle: 'solid', borderLeftWidth: 1 }}>
                        <Block title="PERFIL">
                            <ItemBlock></ItemBlock>
                        </Block>
                        <Block title="EDUCACIÓN">
                            <ItemBlock
                                title="Universidad de Caldas, Ingenieria de sistemas y computación"
                                location="Manizales"
                                info="2013-2021"
                            />
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
        value: 1
    }
]