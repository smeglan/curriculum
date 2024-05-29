import jsPDF from 'jspdf';
import generatePDF from 'react-to-pdf';
import { ImageRepository } from './ImageRepository';

export class PDF{
    
    static captureFromHTML = (ref, filename) =>{
        generatePDF(ref, {
            filename: filename,
            resolution: 3,
            page: {
               margin: 20,
               format: 'A4',
               orientation: 'landscape',
            },
            overrides: {
               canvas: {
                  backgroundColor: "#ffffff"
               }
            }
        });
    }
    static generateCV = (cv) =>{
        const pdfGen = new PDFGen(cv);
        pdfGen.writeDoc();
    }

   
}
class PDFGen {
    TITLE_SIZE = 12;
    COL_SIZE = {
        LEFT: 50,
        RIGHT: 128
    };
    COL_TILE = {
        LEFT: 10,
        RIGHT: 75
    };
    SPACE = {
        BLOCK: 10,
        ITEM: 5
    };
    constructor(cv, font=undefined){
        this.doc = new jsPDF();
        this.rows ={
            left: 10,
            right: 10
        }
        this.font = font;
        this.language = cv.language;
        this.image = cv.image;
        this.name = cv.name;
        this.position = cv.position;
        this.contactInformation = cv.contactInformation;
        this.links = cv.links;
        this.languages = cv.languages;
        this.hobbies = cv.hobbies;
        this.profile = cv.profile;
        this.experience = cv.experience;
        this.education = cv.education;
        this.courses = cv.courses;
        this.skills = cv.skills;
    }
    writeDoc(){
        this.writeLeft();
        this.doc.save('CV.pdf');
    }
    
    writeLeft(){
        const col = this.COL_TILE.LEFT;
        const size = this.COL_SIZE.LEFT;
        //avatar
        this.doc.addImage(ImageRepository[this.image], col+5, this.rows.left, size-10, size-10);
        this.rows.left += size - 10 + this.SPACE.BLOCK;
        this.writeListWithIcons(this.contactInformation, col, "left", size);

    }
    writeListWithIcons(block, col, row, size){
        this.doc.setFont(this.font, 'bold');
        this.doc.setFontSize(this.TITLE_SIZE);
        this.writeLine(block.title, col, row);
        this.doc.setFontSize(10);
        this.doc.setFont(this.font, 'normal');
        for (const item of block.items){
            this.writeLine(item.value, col, row, size)
        }
    }

    writeLine (data, col, row, size) {
        const fixedData = this.doc.splitTextToSize(data, size);
        this.doc.text(fixedData, col, this.rows[row]);
        this.rows[row] += this.SPACE.ITEM;
    }
 }