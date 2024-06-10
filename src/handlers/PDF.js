import generatePDF from 'react-to-pdf';
import "../assets/fonts/Roboto-Regular-normal";
import "../assets/fonts/Roboto-Black-normal";
import { CVCreator } from './CVCreator';
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
    static generateCV = (cv, filename) =>{
        const pdfGen = new CVCreator(cv, filename, "Roboto");
        pdfGen.writeDoc();
    }

   
}
