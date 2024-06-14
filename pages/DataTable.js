import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className="shadow overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full overflow-hidden sm:px-6 lg:px-8">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 border-b border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              {/* Add more table headers based on your data */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="text-left px-3 py-2 border-b border-gray-200 bg-white">
                  {item.name}
                </td>
                {/* Add more table cells based on your data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
