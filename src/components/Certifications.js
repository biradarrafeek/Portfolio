
import React from 'react';
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaServer } from 'react-icons/fa';

const certifications = [
    {
        name: 'JDAC-24 Certification',
        link: 'https://drive.google.com/file/d/1ZSXt6w1PjZ6-zTe5ncU72pnSSn6-ZBFP/view?usp=sharing',
        icon: <FaJava className="text-xl text-orange-500" />
    },
    // {
    //     name: 'Java Certification',
    //     link: 'https://drive.google.com/file/d/1gTTEHTEtzFsc5uP2c1YOQqhJJlG8eAVy/view?usp=sharing',
    //     icon: <FaJava className="text-xl text-orange-500" />
    // },
    {
        name: 'Data Structures in JAVA',
        link: 'https://drive.google.com/file/d/1KeHrSNBDrwt870BIKG3tJg_qO-S7ozQ7/view?usp=sharing',
        icon: <FaJava className="text-xl text-orange-500" />
    },
    {
        name: 'Fundamentals of HTML',
        link: 'https://drive.google.com/file/d/1mtl_W85R0rdWwCzlc4jVsFQOD5G7_-N_/view?usp=sharing',
        icon: <FaHtml5 className="text-xl text-red-500" />
    },
    {
        name: 'Fundamentals of CSS',
        link: 'https://drive.google.com/file/d/1D8iudQAnEQ8uo3eayX-q3w8dX9BjqDEn/view?usp=sharing',
        icon: <FaCss3Alt className="text-xl text-blue-500" />
    },
    {
        name: 'React JS Certification',
        link: 'https://drive.google.com/file/d/1Deq1nLX7bUEUXuypeSN5OUMGi8UITL_v/view?usp=sharing',
        icon: <FaReact className="text-xl text-blue-600" />
    },
    {
        name: 'Backend Development Certification',
        link: 'https://drive.google.com/file/d/1znKGe5FiikiEj4IZAH3UB_eGCZy-PvKX/view?usp=sharing',
        icon: <FaServer className="text-xl text-green-500" />
    },
    {
        name: 'DBMS',
        link: 'https://drive.google.com/file/d/1yd9bEdmz7XZ0tVi6GeftKHfuDk1cX_Zk/view?usp=sharing',
        icon: <FaDatabase className="text-xl text-gray-500" />
    }
];

const Certifications = () => (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Certifications</h1>
        <ul className="mt-4 space-y-2">
            {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                    {cert.icon}
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
                        {cert.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Certifications;
