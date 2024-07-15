import React, { useEffect, useState } from "react";

function HomeworkViewer() {
    const [homeworkData, setHomeworkData] = useState([]);
    useEffect(() => {
        const fetchHomeworkData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/homework');
                const data = await response.json();
                setHomeworkData(data);
            } catch (error) {
                console.error('Ошибка при загрузке домашних заданий:', error);
            }
        };

        fetchHomeworkData();
    }, []);

    return (
        <div>
            {homeworkData.map((homework, index) => (
                <div key={index}>
                    <h2>
                    &#123; 
                    {homework.filename}
                    &#125;
                    </h2>
                    <pre>
                        {homework.content}
                    </pre>
                </div>
            ))}
        </div>
    );
}
export default HomeworkViewer