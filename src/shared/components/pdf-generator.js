import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generateStars = (number) => {
    const result = []
    const fit = 10
    for (let i = 1; i < 6; i++) {
        const flag = number - i;
        if (flag >= 0) {
            result.push({
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABMUlEQVRIibXVMS8EQQDF8d857hyVUOpIaKg0OsRXUNBRED6Gb6DTaCQKhUIUVyslGpVIDhGXU+pUl1DcXrK39s7O2nvJSzbZee8/O9mZIUyTkTNrJBBwgP3ATGZV0cQHasMAHOE78mHR5WN4jQHeUCkSsBcr73q3qPIynlIADYwWAdhJKe96+69wKfY8gXnMJbyCqT75T9zjOeEGvrqDjtEaMMu8bkXdqrgeAqAutl8quCqw/AbjyfUs47yA8kudfZOqMs7+UX4hw69bwkmO8lMBh2cV7YDydpT5pX7ERZ3lyqoyFkIAywHlAzP9AEs5AKmZUEA9cpqCvjp5dNxhPfZ+FbeJMc2s5TOx0CO29B6KcW3iITZ+OgtgA+86l3uW834kmsQL1rIAZuW71GtRtkc/Mhyx7Tzug0kAAAAASUVORK5CYII=",
                fit: [fit, fit]
            });
        } else {
            if (flag > -1) {
                result.push({
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABiElEQVRIibXVvUvVURzH8Zf3qterIGSOQkOhLTbZ0BIJDfkHNCguNhiFk3+Ck0vg5NYSODQ0BTk3Bi0lEoE9CD5METQIQXEbfkc8nq7ec+T6gS/n9/D9ft5ffufhR5mGQmSrVgh4jMXCmmw1sIdDNC8D8BStEE+6bd6HbxFgF/3dBCxE5tthXOiWeR2fI8B8GHfQ2w3AXGTeSoCznYp7outB3MD1JKZwJal5hOf4iff4ksQOjo4LVnCQdHleUE369w55B8FbE5uFAKpVNI4ZLGHNyQJoBc9mnPyqEJDqNn6EnNcYSBPqeHFBwF38Cu9fqj5hW9VVk1cCeKCa0BY2ZCzdGtYzAdfwOzxfV3B4NvAnAzCIvyG3cVa37XRT9bk66Ui15uuYKAFMnmP6DFej+49hvFUCaJsctKzaZKsYxlZGU//prI33JsTx/aGT/bNZAthPjN9hOnp/B2+TnL1c85Go6BMeOn0oxrqPD1H+aA5gOnSzKO+8r4UmvuJeDmDMxX7qA6H2lP4BsdqgpHIRRl0AAAAASUVORK5CYII=",
                    fit: [fit, fit]
                });
            } else {
                result.push({
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVRIibXVO2gVQRQG4C835mEEQWMpRDCVEG200EIMREhlIVj4aDQQ0dLGPpWNrV0sBAuL2ASMYGUp2JgQHxD1CjGpRJEgKpFrsWfJ3DWJs3L94bC7M/9//jM7L+phV0Q2GjUNrmKypiYbfVjGKnb+D4PraEVc63TyHrxPDD6gt5MGlyPxYkQr2jqCbryJpBdxKd6XsKMTBhcqCVPD838TdyXvAxjGwUocxR5M4G5wr2Aan/EcbyuxhG9l4ims2JjAzaKpmOgSPdG2nWYFU12KNf0Q4yF+iSdRRVlREz8ro+/FgWSkwziNQ9H/GGdT8kw4f8EJ9XEMnyLHLPqrhG7cC8IaxmokP4mvoX2g/Xf+YTIdxO84k5F8XDGhLdyXsXQbuBOCHxjahjsUnFZosg/PPqzjl2L5boWB4KyHJhtHoqrXGdxy0x3erHOrIY3EcyFpG8TtiMGkfT6etQxK8rziN9xU7IsbEU3cwu6kiBE1MKcY9ozigil356OI8nvVxv6Zq2PwUfu2f4bRpP84nlY4y7nJ9yaiVzin/VBMMYYXCX9fjsFoVDMp77xvRBHvcCrHYL9/u9T7Q9uG38R5g2Oum/gEAAAAAElFTkSuQmCC",
                    fit: [fit, fit]
                });
            }
        }
    }
    return result;
}

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
                stack.push(...[
                    { text: element.title, style: 'subtitle' },
                    { text: element.value, style: 'text' },
                    " "
                ]);
            });
            break;
        case "education":
            values.forEach(element => {
                stack.push(...[
                    {
                        columns: [
                            {
                                width: '58%',
                                stack: [
                                    { text: element.title, style: 'subtitle' },
                                    { text: element.date, style: 'text' },
                                    " "

                                ]
                            }, {
                                width: '4%',
                                stack: [

                                ]
                            },
                            {
                                width: '38%',
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
                                width: '58%',
                                stack: [
                                    { text: element.title, style: 'subtitle' },
                                    { text: element.description, style: 'text' },
                                    " ",
                                    " "
                                ]
                            }, {
                                width: '4%',
                                stack: [

                                ]
                            },
                            {
                                width: '38%',
                                stack: [
                                    { text: element.institution, style: 'subtitle' },
                                    { text: element.location, style: 'text' },
                                    { text: element.date, style: 'text' }
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
                    width: '30%',
                    stack: [
                        { text: element.title, style: 'subtitle' },
                        { columns: generateStars(element.value) },
                        " "
                    ]
                }
                col.push(item);
                col.push({ width: '3%', stack: [] })
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
        case "reference":
            const stackLabor = [{ text: values.labor.title, style: 'title' }];
            const stackPersonal = [{ text: values.personal.title, style: 'title' }];
            values.labor.values.forEach(element => {
                stackLabor.push(...[
                    { text: element.name, style: 'subtitle' },
                    { text: element.phone, style: 'text' },
                    " "
                ]);
            });
            values.personal.values.forEach(element => {
                stackPersonal.push(...[
                    { text: element.name, style: 'subtitle' },
                    { text: element.phone, style: 'text' },
                    " "
                ]);
            });
            const columns = {
                columns: [
                    {
                        width: '48%',
                        stack: stackLabor
                    },
                    {
                        width: '4%',
                        stack: []
                    },
                    {
                        width: '48%',
                        stack: stackPersonal
                    }
                ]
            }
            stack.push(columns);
            break;
        default:
            break;
    }

    return stack
}

export const GeneratePDF = (data) => {
    const footerText = data.language === "esp" ? "Mas información" : "More info"
    const document = {
        footer: {
            text: footerText,
            link: 'https://curriculumfinal.vercel.app/',
            style: 'url',
        },
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
                                { text: data.experience.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.experience.values, "experience")],
                                { text: data.certifications.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.certifications.values, "education")],
                                " ",
                                " ",
                                " ",
                                { text: data.competences.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.competences.values, "competence")],
                                " ",
                                { text: data.references.title, style: 'title' },
                                " ",
                                [...valuesToJson(data.references.values, "reference")],
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
            url: {
                decoration: 'underline',
                color: '#0000EE',
                fontSize: 9,
                alignment: 'center'
            },
            link: {
                decoration: 'underline',
                color: '#c3c3c3',
                fontSize: 10,
            }
        }
    }
    pdfMake.createPdf(document).download("Sebastian Noreña Meglan - Curriculum.pdf");
}
