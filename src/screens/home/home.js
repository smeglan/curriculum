import { Button, Col, Row } from 'react-bootstrap';
import { PureComponent } from 'react';
import { Block } from './components/block';
import { ItemBlock } from './components/item-block';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderBlock } from './components/header-block';

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
                    </Col>
                    <Col md={8} style={{ borderLeftStyle: 'solid', borderLeftWidth: 1 }}>
                        <Block title="PERFIL"></Block>
                    </Col>
                </Row>
            </>
        )
    }
}