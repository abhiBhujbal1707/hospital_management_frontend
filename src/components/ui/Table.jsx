export const Table = ({ children, className }) => (
    <table className={`w-full border-collapse border border-gray-300 ${className}`}>{children}</table>
  );
  
  export const TableHead = ({ children }) => (
    <thead className="bg-gray-100">{children}</thead>
  );
  
  export const TableHeader = ({ children, className }) => (
    <th className={`p-2 text-left font-semibold border border-gray-300 ${className}`}>{children}</th>
  );
  
  export const TableBody = ({ children }) => <tbody>{children}</tbody>;
  
  export const TableRow = ({ children, className }) => (
    <tr className={`hover:bg-gray-50 ${className}`}>{children}</tr>
  );
  
  export const TableCell = ({ children, className }) => (
    <td className={`p-2 border border-gray-300 ${className}`}>{children}</td>
  );
  