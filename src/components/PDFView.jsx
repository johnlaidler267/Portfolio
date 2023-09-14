import React, {useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import resume from 'file:///Users/johnnylaidler/Downloads/Jake_s_Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function PDFViewer() {
	const [pdfVisible, setPdfVisible] = useState(false);

	const togglePdfVisibility = () => {
		setPdfVisible(!pdfVisible);
	};

	return (
		<div>
			<button onClick={togglePdfVisibility}>Toggle PDF</button>
			{pdfVisible && (
				<Document file={resume}>
					<Page pageNumber={1} />
				</Document>
			)}
		</div>
	);
}

export default PDFViewer;