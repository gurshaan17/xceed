import React from 'react';

const Services = () => {
  const tools = [
    { icon: '📄', title: 'PDF to Word', description: 'Convert PDF to editable Word accurately', bgColor: 'bg-blue-600' },
    { icon: '💬', title: 'ChatPDF', description: 'Ask anything about the document', bgColor: 'bg-purple-600' },
    { icon: '✏️', title: 'Edit PDF', description: 'Add texts and markups to your PDF', bgColor: 'bg-green-600' },
    { icon: '🔍', title: 'OCR', description: 'Turn PDF scans and images to text easily', bgColor: 'bg-purple-600' },
    { icon: '📉', title: 'Compress PDF', description: 'Reduce PDF file size without losing quality', bgColor: 'bg-red-600' },
    { icon: '🔗', title: 'Merge PDF', description: 'Combine multiple PDFs into one document', bgColor: 'bg-blue-600' },
  ];

  return (
    <div className="bg-black text-white p-8 h-screen">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-2">Most Popular PDF Tools</h2>
        <p className="text-lg text-gray-300">
          LightPDF provides 25 free online tools to convert, OCR, edit PDFs, and even AI chat with documents. 100% Free. Get started now!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

const ToolCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg bg-gray-800 hover:${bgColor} transition duration-300`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Services;
