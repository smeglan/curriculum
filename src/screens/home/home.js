import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import { PureComponent } from 'react';
import { Block } from './components/block';
import { ItemBlock } from './components/item-block';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderBlock } from './components/header-block';
import { Competence } from './components/competence';
import { References } from './components/references';
import { faFileDownload, faFilePdf, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { GeneratePDF } from '../../shared/components/pdf-generator';
//import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
export class Home extends PureComponent {

    constructor() {
        super();
        this.state = {
            data: {},
            language: "esp",
            languageList:
            {
                esp: {
                    label: "Español",
                    value: 'esp'
                },
                eng: {
                    label: "English",
                    value: 'eng'
                }
            }
        }
    }
    componentDidMount() {
        try {
            const language = this.props.language ?? "esp";
            const languageFile = require('../../information/' + language + '.json');
            this.setState({ data: languageFile, language })
        } catch (error) {
            alert(String(error))
        }
    }

    downloadPDF = () => {
        GeneratePDF(this.state.data);
    }

    changeLanguage = (language) => {
        const languageFile = require('../../information/' + language + '.json');
        this.setState({ data: languageFile, language })
    }

    render() {
        return (
            <div id="jsx-template">
                {this.state.data && <Row>
                    <Col lg={12} style={{ paddingBottom: 20, borderBottomStyle: 'solid', borderBottomWidth: 2, borderBottomColor: "#404B6B" }} >
                        <Row style={{ backgroundColor: "#404B6B" }}>
                            <Col md={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <HeaderBlock
                                    title={this.state.data.name}
                                    subtitle={this.state.data.position}
                                    variant="light"
                                />
                            </Col>
                            <Col md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 2 }} style={{ alignSelf: 'center' }}>
                                <Dropdown style={{ margin: 10 }}>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        <FontAwesomeIcon icon={faGlobe} /> {this.state.languageList[this.state.language].label}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {Object.keys(this.state.languageList).map((lang, i) => {
                                            return (
                                                <Dropdown.Item key={"lang" + i} onClick={() => this.changeLanguage(lang)}>{this.state.languageList[lang].label}</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button style={{margin:10}} variant="dark" onClick={this.downloadPDF}><FontAwesomeIcon icon={faFileDownload} /> {this.state.data.language ==="esp"?" Descargar ":" Download "}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Row style={{ marginRight: '5%', marginLeft: '5%', marginTop: 20 }}>
                        <Col md={12} lg={4} style={{ backgroundColor: "#404B6B", padding: 5 }}>

                            {this.state.data.information &&
                                <Block title={this.state.data.information.title}>
                                    {this.state.data.information.values.map((info, i) => {
                                        return (
                                            <ItemBlock
                                                key={"information" + i}
                                                title={info.title}
                                                info={info.value}
                                                variant="light"
                                            />
                                        )
                                    })}
                                </Block>
                            }
                            {this.state.data.links && <Block title={this.state.data.links.title}>
                                <ItemBlock>
                                    <Button href={this.state.data.links.values.github} style={{ marginRight: 10 }} variant="light">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Button>
                                    <Button href={this.state.data.links.values.linkedIn} variant="light">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </Button>
                                </ItemBlock>
                            </Block>
                            }
                            {this.state.data.languages &&
                                <Block title={this.state.data.languages.title}>
                                    {this.state.data.languages.values.map((item, i) => {
                                        return (
                                            <ItemBlock
                                                key={"langauge" + i}
                                                title={item.title}
                                                info={item.value}
                                                variant="light"
                                            />
                                        )
                                    })}
                                </Block>
                            }
                            {this.state.data.skills &&
                                <Block title={this.state.data.skills.title}>
                                    {this.state.data.skills.values.map((item, i) => {
                                        return (
                                            <div key={"skill" + i}>
                                                <label style={{ color: "#E8E8E8" }}>
                                                    {item}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </Block>
                            }
                            {this.state.data.hobbies && <Block title={this.state.data.hobbies.title}>
                                <ItemBlock>
                                    {this.state.data.hobbies.values.map((hobby, i) => {
                                        return (
                                            <div key={"hobby" + i}>
                                                <label style={{ color: "#E8E8E8" }}>
                                                    {hobby}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </ItemBlock>
                            </Block>}
                        </Col>
                        <Col md={12} lg={8}>
                            {this.state.data.profile && <Block title={this.state.data.profile.title}>
                                <ItemBlock>
                                    <p>
                                        {this.state.data.profile.value}
                                    </p>
                                </ItemBlock>
                            </Block>}
                            {this.state.data.education &&
                                <Block title={this.state.data.education.title}>
                                    {this.state.data.education.values.map((grade, i) => {
                                        return (
                                            <ItemBlock
                                                key={"education" + i}
                                                title={grade.title}
                                                institution={grade.institution}
                                                location={grade.location}
                                                info={grade.date}
                                            />
                                        )
                                    })}
                                </Block>
                            }
                            {this.state.data.experience && <Block title={this.state.data.experience.title}>
                                {this.state.data.experience.values.map((experience, i) => {
                                    return (
                                        <ItemBlock
                                            key={"experience" + i}
                                            title={experience.title}
                                            institution={experience.institution}
                                            location={experience.location}
                                            info={experience.date}
                                            description={experience.description}
                                        />
                                    )
                                })}
                            </Block>}
                            {this.state.data.competences && <Block title={this.state.data.competences.title}>
                                <Row>
                                    {this.state.data.competences.values.map((item, i) => {
                                        return (
                                            <Col md={4} key={"competence" + i}>
                                                <ItemBlock title={item.title}>
                                                    <Competence points={item.value}></Competence>
                                                </ItemBlock>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Block>}
                            {this.state.data.certifications &&
                                <Block title={this.state.data.certifications.title}>
                                    {this.state.data.certifications.values.map((certification, i) => {
                                        return (
                                            <ItemBlock
                                                key={"certification" + i}
                                                title={certification.title}
                                                institution={certification.institution}
                                                location={certification.location}
                                                info={certification.date}
                                                link={certification.link}
                                            />
                                        )
                                    })
                                    }
                                </Block>
                            }
                            {this.state.data.references &&
                                <References
                                    title={this.state.data.references.title}
                                    leftSubtitle={this.state.data.references.values.labor.title}
                                    rightTitle={this.state.data.references.values.personal.title}
                                    personal={this.state.data.references.values.personal.values}
                                    labor={this.state.data.references.values.labor.values}
                                />
                            }
                        </Col>

                    </Row>
                </Row>}
            </div>
        )
    }
}