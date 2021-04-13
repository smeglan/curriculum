import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import { PureComponent } from 'react';
import { Block } from './components/block';
import { ItemBlock } from './components/item-block';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderBlock } from './components/header-block';
import { Competence } from './components/competence';
//import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { References } from './components/references/references';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
//import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
export class Home extends PureComponent {

    constructor() {
        super();
        this.state = {
            data: {},
            language: {
                label: "English",
                value: 'eng'
            },
            languageList: [{
                label: "Español",
                value: 'esp'
            },
            {
                label: "English",
                value: 'eng'
            }]
        }
    }
    componentDidMount() {
        try {
            const languageFile = require('../../information/' + this.state.language.value + '.json');
            this.setState({ data: languageFile })
        } catch (error) {
            alert(String(error))
        }
    }

    printDocument = () => {
        const source = document.getElementById('divToPrint');
        var doc = new jsPDF({
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });
        //var source = window.document.getElementsByTagName("body")[0];
        doc.html(source).then(pdf => {
            doc.save("Hoja de vida - Sebastián Noreña Meglan")
        }).catch(e => console.log(e));
    }
    changeLanguage = (language) => {
        const languageFile = require('../../information/' + language.value + '.json');
        this.setState({ data: languageFile, language })
    }

    render() {
        return (
            <>
                {this.state.data && <Row id="divToPrint" className="justify-content-md-center">
                    <Col md={12}>
                        <HeaderBlock
                            title={this.state.data.name}
                            subtitle={this.state.data.position}
                            rightComponent={
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        <FontAwesomeIcon icon={faGlobe} /> {this.state.language.label}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.state.languageList.map((lang, i) => {
                                            return (
                                                <Dropdown.Item key={"lang" + i} onClick={() => this.changeLanguage(lang)}>{lang.label}</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                        ></HeaderBlock>

                    </Col>
                    <Col md={2}>
                        {this.state.data.information &&
                            <Block title={this.state.data.information.title}>
                                {this.state.data.information.values.map((info, i) => {
                                    return (
                                        <ItemBlock
                                            key={"information" + i}
                                            title={info.title}
                                            info={info.value}
                                        />
                                    )
                                })}
                            </Block>
                        }
                        {this.state.data.links && <Block title={this.state.data.links.title}>
                            <ItemBlock>
                                <Button href={this.state.data.links.values.github} style={{ marginRight: 10 }} variant="outline-dark">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Button>
                                <Button href={this.state.data.links.values.linkedIn} variant="outline-dark">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </Button>
                            </ItemBlock>
                        </Block>
                        }
                        {this.state.data.languages &&
                            <Block title={this.state.data.languages.title}>
                                {this.state.data.languages.values.map((item, i) => {
                                    return (
                                        <ItemBlock key={"langauge" + i} title={item.title}>
                                            <Competence points={item.value}></Competence>
                                        </ItemBlock>
                                    )
                                })}
                            </Block>
                        }
                        {this.state.data.hobbies && <Block title={this.state.data.hobbies.title}>
                            <ItemBlock>
                                {this.state.data.hobbies.values.map((hobby, i) => {
                                    return (
                                        <div key={"hobby" + i}>
                                            <label>
                                                {hobby}
                                            </label>
                                        </div>
                                    )
                                })}
                            </ItemBlock>
                        </Block>}
                    </Col>
                    <Col md={6} >
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
                    <Col md={2}>
                        {this.state.data.competences && <Block title={this.state.data.competences.title}>
                            {this.state.data.competences.values.map((item, i) => {
                                return (
                                    <ItemBlock key={"competence" + i} title={item.title}>
                                        <Competence points={item.value}></Competence>
                                    </ItemBlock>
                                )
                            })}
                        </Block>}
                    </Col>
                </Row>}
            </>
        )
    }
}