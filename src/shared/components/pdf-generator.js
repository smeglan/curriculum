import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const valuesToJson = (values, type = "list") => {
    const stack = [];
    switch (type) {
        case "list":
            values.forEach(element => {
                stack.push({ text: element, style: "text" });
            });
            break;
        case "data":
            values.forEach(element => {
                stack.push(...[{ text: element.title, style: 'subtitle' }, { text: element.value, style: 'text' }]);
            });
            break;
        case "education":
            values.forEach(element => {
                stack.push(...[
                    {
                        columns: [
                            {
                                width: '60%',
                                stack: [
                                    { text: element.title, style: 'subtitle' },
                                    { text: element.date, style: 'text' }

                                ]
                            },
                            {
                                width: '40%',
                                stack: [
                                    { text: element.institution, style: 'subtitle' },
                                    { text: element.location, style: 'text' }
                                ]
                            }
                        ]
                    }
                ]);
            });
            break;
        case "experience":
            values.forEach(element => {
                stack.push(...[
                    {
                        columns: [
                            {
                                width: '60%',
                                stack: [
                                    { text: element.title, style: 'subtitle' },
                                    { text: element.description, style: 'text' },
                                    { text: element.date, style: 'text' }
                                ]
                            },
                            {
                                width: '40%',
                                stack: [
                                    { text: element.institution, style: 'subtitle' },
                                    { text: element.location, style: 'text' }
                                ]
                            }
                        ]
                    }
                ]);
            });
            break;
        case "competence":
            let col = [];
            let count = 1;
            values.forEach(element => {
                const item =
                {
                    width: '33%',
                    stack: [
                        { text: element.title, style: 'subtitle' },
                        { text: element.value, style: 'text' }
                    ]
                }
                col.push(item);
                if (count === 3) {
                    stack.push({ columns: col })
                    col = [];
                    count = 0;
                }
                count++;
            });
            if (count > 1) {
                stack.push({ columns: col })
            }
            break;
        default:
            break;
    }

    return stack
}

export const GeneratePDF = (data) => {


    const document = {

        content: [
            { text: data.name, style: 'header' },
            { text: data.position, style: 'role' },
            " ",
            {
                layout: 'noBorders',
                table: {
                    widths: ['30%', '70%'],
                    body: [[
                        {
                            style: 'section',
                            fillColor: '#404B6B',
                            color: '#E8E8E8',
                            stack: [
                                { text: data.information.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.information.values, "data")],
                                " ",
                                { text: data.links.title, style: 'title' },
                                " ",
                                { text: "LinkedIn", style: 'link', link: data.links.values.linkedIn },
                                { text: "Github", style: 'link', link: data.links.values.github },
                                " ",
                                { text: data.languages.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.languages.values, "data")],
                                " ",
                                { text: data.skills.title, style: 'title' },
                                " ",
                                {
                                    style: 'text',
                                    ul: [...valuesToJson(data.skills.values)]
                                },
                                " ",
                                { text: data.hobbies.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.hobbies.values)],
                                " ",
                            ]
                        },
                        {
                            style: 'section',
                            stack: [
                                { text: data.profile.title, style: 'title' },
                                " ",
                                { text: data.profile.value, style: 'text' },
                                " ",
                                { text: data.education.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.education.values, "education")],
                                " ",
                                { text: data.experience.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.experience.values, "experience")],
                                " ",
                                { text: data.certifications.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.certifications.values, "education")],
                                " ",
                                { text: data.competences.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.competences.values, "competence")],
                                " ",
                            ],

                        }
                    ]]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            role: {
                color: '#c3c3c3',
                fontSize: 16
            },
            title: {
                fontSize: 12,
                bold: true,
                decoration: 'underline'
            },
            section: {
                margin: 10
            },
            subtitle: {
                fontSize: 11,
                bold: true
            },
            text: {
                fontSize: 10,
            },
            link: {
                decoration: 'underline',
                color: '#c3c3c3',
                fontSize: 10,
            }
        }
    }
    pdfMake.createPdf(document).download();
}
