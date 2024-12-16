import React from 'react';

// Example file list
const files = [
    {
        title: "SafeCloud.pptx",
        url: "/files/SafeCloud.pptx",
        size: "3.0 MB",
    },
    {
        title: "Wahlen zum Deutschen Bundestag.pptx",
        url: "/files/Wahlen zum Deutschen Bundestag.pptx",
        size: "2.4 MB",
    },
];

const FileDownloadList = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Download Files</h1>
            <ul className="space-y-4">
                {files.map((file, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
                    >
                        <div>
                            <span className="text-lg font-medium text-gray-700 block">{file.title}</span>
                            <span className="text-sm text-gray-500">{file.size}</span>
                        </div>
                        <a
                            href={file.url}
                            download
                            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
                        >
                            Download
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileDownloadList;
