"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// CRITICAL: Setting the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfPageRendererProps {
  pdfPath: string;
  width: number; // Required width for the responsive thumbnail
}

const PdfPageRenderer: React.FC<PdfPageRendererProps> = ({
  pdfPath,
  width,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use a stable, single page for the thumbnail
  const pageNumber = 1;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("Error loading PDF:", error);
    setError("Failed to load PDF document.");
    setLoading(false);
  }

  if (!pdfPath) {
    return (
      <div className="text-center text-red-500 p-4">Invalid PDF path.</div>
    );
  }

  return (
    <div className={`flex flex-col justify-center items-center w-full h-full`}>
      {loading && <div className="text-gray-400 p-4">Loading preview...</div>}

      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className={`w-full h-full ${loading ? "hidden" : ""}`}
      >
        {numPages && ( // Only render page if document loaded successfully
          <Page
            pageNumber={pageNumber}
            width={width}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        )}
      </Document>

      {/* Show error or no data message if loading failed */}
      {!loading && error && (
        <div className="text-center text-red-500 p-4">Error loading PDF.</div>
      )}
      {!loading && !numPages && !error && (
        <div className="text-center text-gray-500 p-4">
          Preview unavailable.
        </div>
      )}
    </div>
  );
};

export default PdfPageRenderer;
