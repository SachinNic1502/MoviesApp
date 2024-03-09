// utils/pdfGenerator.js
const pdf = require('html-pdf');

const generatePDFFromHTML = (htmlContent, options = {}) => {
  return new Promise((resolve, reject) => {
    pdf.create(htmlContent, options).toBuffer((err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
};

module.exports = generatePDFFromHTML;
