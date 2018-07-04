export const UTMAnalysisStyle = () => (
  <style jsx global>{`
    .glyphicon-trash::after {
      font-weight: bold;
      content: 'X';
    }

    .react-grid-Toolbar {
      padding: 10px;
    }

    .react-grid-Toolbar span {
      padding: 0 5px 0 5px;
    }

    input[type='text'] {
      padding: 4px 5px 2px 5px;
      font: 15px/24px 'Lato', Arial, sans-serif;
      color: #333;
      width: 100%;
      box-sizing: border-box;
      letter-spacing: 1px;
      border: 1px solid #ccc;
      transition: 0.4s;
    }
  `}</style>
);
