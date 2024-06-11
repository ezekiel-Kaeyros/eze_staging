// // components/PdfViewer.tsx
// import React, { useState, useEffect, useCallback } from "react";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
// import { PDFDocument } from "pdf-lib";

// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// interface PdfViewerProps {
//   pdfUrl: string;
// }

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
// const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [isPaid, setIsPaid] = useState<boolean>(false);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const existingPdfBytes = await fetch(pdfUrl).then((res) =>
//         res.arrayBuffer()
//       );
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);
//       setNumPages(pdfDoc.getPageCount());
//     };
//     loadPdf();
//   }, [pdfUrl]);

//   const handlePayment = () => {
//     // Simule le paiement
//     setIsPaid(true);
//     alert("Merci pour votre paiement !");
//   };

//   return (
//     <div>
//       <Document
//         file={pdfUrl}
//         onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//       >
//         {Array.from(new Array(numPages), (el, index) => (
//           <div key={`page_${index + 1}`} className="">
//             {index < 3 || isPaid ? (
//               <Page
                
//                 pageNumber={index + 1}
//                 className=""
//                 renderTextLayer={false}
//                 renderAnnotationLayer={false}
//               />
//             ) : (
//               index === 3 &&
//               !isPaid && (
//                 <div className="flex justify-center items-center flex-col absolute border">
//                   <p>Payez pour voir plus de pages</p>
//                   <button onClick={handlePayment}>
//                     Payez pour voir plus de pages
//                   </button>
//                 </div>
//               )
//             )}
//           </div>
//         ))}
//       </Document>
//     </div>
//   );
// };

// export default PdfViewer;
