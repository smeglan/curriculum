import jsPDF from 'jspdf';
import { ImageRepository } from './ImageRepository';

export class CVCreator {
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
        BLOCK: 8,
        ITEM: 5
    };
    constructor(cv, documentTitle="CV", font=undefined){
        this.doc = new jsPDF();
        this.rows ={
            left: 10,
            right: 16
        }
        this.documentTitle = documentTitle;
        this.font = font;
        this.language = cv.language;
        this.curriculum = cv.curriculum;
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
        this.writeRight();
        this.doc.text(50,285, `${this.curriculum.value}${this.curriculum.url}`);
        this.doc.save(`${this.documentTitle}.pdf`);
    }
    
    writeLeft(){
        const colName = "left";
        const col = this.COL_TILE.LEFT;
        const size = this.COL_SIZE.LEFT;
        //avatar
        this.doc.setDrawColor(25, 25, 25);
        this.doc.setFillColor(25, 25, 25);
        this.doc.rect(col-3, this.rows.left-3, size+8, 250, "F");
        this.doc.addImage(ImageRepository[this.image+"Rounded"], col+5, this.rows.left, size-10, size-10);
        this.rows.left += size - 10 + this.SPACE.BLOCK;
        this.doc.setTextColor(255, 255, 255);
        this.writeList(this.contactInformation, col, colName, size, "line", true);
        this.writeList(this.links, col, colName, size, "line", true);
        this.writeList(this.languages, col, colName, size, "language");
        this.writeList(this.skills, col, colName, size);
        this.writeList(this.hobbies, col, colName, size);
    }  
    writeRight(){
        const colName = "right";
        const col = this.COL_TILE.RIGHT;
        const size = this.COL_SIZE.RIGHT;
        this.doc.setTextColor(20, 20, 20);
        this.doc.setDrawColor(255, 191, 0);
        this.doc.setFillColor(255, 191, 0);
        this.doc.rect(col-10, this.rows.right, col+size, 30, "F");
        this.doc.setFont(this.font, 'bold');
        this.rows.right += 14
        this.doc.setFontSize(24);
        this.writeLine(this.name, col, colName, size);
        this.doc.setFontSize(14);
        this.doc.setTextColor(128, 0, 0);
        this.writeLine(this.position, col, colName, size);
        this.rows.right += 20
        this.doc.setFontSize(this.TITLE_SIZE);
        this.doc.setTextColor(10, 10, 10);
        this.doc.line(col, this.rows.right+1, col+size, this.rows.right+1);
        this.writeLine(this.profile.title, col, colName, size);
        this.doc.setFontSize(10);
        this.doc.setFont(this.font, 'normal');
        this.writeLine(this.profile.value, col, colName, size);
        this.rows.right += (this.SPACE.ITEM*2) + 3;
        this.writeList(this.experience, col, colName, size, "job");
        this.writeList(this.education, col, colName, size, "education");
        this.writeList(this.courses, col, colName, size, "education");
    }  

    writeList(block, col, row, size, type = "line", icon = false){
        this.doc.setFont(this.font, 'bold');
        this.doc.setFontSize(this.TITLE_SIZE);
        this.doc.line(col, this.rows[row]+1, col+size, this.rows[row]+1);
        this.writeLine(block.title, col, row,size);
        this.doc.setFontSize(10);
        this.doc.setFont(this.font, 'normal');
        for (const item of block.items){
            if(icon){
                this.doc.addImage(ImageRepository[item.type], col, this.rows[row] - (this.SPACE.ITEM/2), 3, 3);
                this.createBlock(item, col+4, row, size, type);
            }else{
                this.createBlock(item, col, row, size, type);
            }
        }
        this.rows[row] += 3;
    }

    createBlock(item, col, row, size, type){
        const blocks = {
            line: ()=>this.writeLine(item.value, col, row, size),
            language: () =>this.writeLine(item.value+" | "+item.level, col, row, size),
            job: ()=>this.writeJob(item, col, row, size), 
            education:()=> this.writeEducation(item, col, row, size),
        }
        return blocks[type]();
    }

    writeJob(data, col, row, size){
        this.doc.setFont(this.font, 'bold');
        this.doc.setFontSize(11);
        this.writeLine(data.title, col, row, size);
        this.doc.setFontSize(10);
        this.writeLine(`${data.company} (${data.date})`, col, row, size);
        this.doc.setFontSize(10);
        this.doc.setFont(this.font, 'normal');
        this.writeLine(data.description, col, row, size);
        this.rows[row] += this.SPACE.ITEM+2;
    }

    writeEducation(data, col, row, size){
        this.doc.setFont(this.font, 'bold');
        this.doc.setFontSize(11);
        this.writeLine(data.title, col, row, size);
        this.doc.setFont(this.font, 'normal');
        this.doc.setFontSize(10);
        this.writeLine(`${data.institution} (${data.date})`, col, row, size);
    }

    writeLine (data, col, row, size) {
        const fixedData = this.doc.splitTextToSize(data, size);
        this.doc.text(fixedData, col, this.rows[row]);
        this.rows[row] += this.SPACE.ITEM;
    }
}