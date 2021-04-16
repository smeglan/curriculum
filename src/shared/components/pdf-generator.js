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
                columns: [
                    {
                        width: '30%',
                        stack: [
                            { text: data.information.title, style: 'title' },
                            " ",
                            [...valuesToJson(data.information.values, "data")],
                            " ",
                            { text: data.links.title, style: 'title' },
                            " ",
                            { text: "LinkedIn", style: 'subtitle' },
                            { text: data.links.values.linkedIn, style: 'link' },
                            { text: "Github", style: 'subtitle' },
                            { text: data.links.values.github, style: 'link' },
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
                        ],
                    },
                    {
                        width: '70%',
                        stack: [
                            { text: data.profile.title, style: 'title' },
                            " ",
                            { text: data.profile.value, style: 'text' },
                        ],

                    },
                ]
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
                fontSize: 14,
                bold: true,
                decoration: 'underline'
            },
            subtitle: {
                fontSize: 12,
                bold: true
            },
            text: {
                fontSize: 10,
            },
            link: {
                decoration: 'underline',
                color: '#0000ee',
                fontSize: 10,
            }
        }
    }
    pdfMake.createPdf(document).download();
}
