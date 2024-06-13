import React from 'react';

const CodingPlatforms = () => (
  <div className="p-4">
    <div className="flex flex-col space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">LeetCode</h3>
        <p>Profile: <a href="https://leetcode.com/u/biradar_rafeek/" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://leetcode.com/u/biradar_rafeek/</a></p>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">GeeksforGeeks</h3>
        <p>Profile: <a href="https://www.geeksforgeeks.org/user/rafeek786biradar/" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://www.geeksforgeeks.org/user/rafeek786biradar/</a></p>
        {/* <p>Articles Published: 5</p>
        <p>Number of Problems Solved: 100</p> */}
      </div>
    </div>
  </div>
);

export default CodingPlatforms;
