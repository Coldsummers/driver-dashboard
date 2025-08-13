import React from "react";
import "./dashboard.css";

const DocumentList = ({ documents }) => (
  <div className="document-list">
    <h2>Uploaded Documents</h2>
    <ul>
      {documents.map((doc, idx) => (
        <li key={idx}>
          <span>{doc.name}</span>
          {" "}
          <a href={doc.url} target="_blank" rel="noopener noreferrer" className="view-link">
            Download
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default DocumentList;