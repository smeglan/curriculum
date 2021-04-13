import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IReference } from '../../../interfaces/references.interface';
import { Block } from './block';
import { ItemBlock } from './item-block';

interface IProps {
    title: string;
    leftSubtitle: string;
    rightTitle: string;
    personal: IReference[];
    labor: IReference[];
}

export const References = (props: IProps) => {
    const { title = "", leftSubtitle = '', rightTitle = '', personal = [], labor = [] } = props;
    return (
        <Block title={title}>
            <Row>
                {labor &&
                    <Col>
                        <h4>{leftSubtitle}</h4>
                        {labor.map((reference, i) => {
                            return (
                                <ItemBlock
                                    key={"labor" + i}
                                    title={reference.name}
                                    info={reference.phone}
                                />
                            )
                        })}
                    </Col>
                }
                {personal &&
                    <Col>
                        <h4>{rightTitle}</h4>
                        {personal.map((reference, i) => {
                            return (
                                <ItemBlock
                                    key={"personal" + i}
                                    title={reference.name}
                                    info={reference.phone}
                                />
                            )
                        })}
                    </Col>
                }
            </Row>
        </Block >
    )
}
