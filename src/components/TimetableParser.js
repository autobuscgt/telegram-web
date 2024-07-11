import React, { useState, useEffect } from 'react'
import myTextfile from './AllGroups.txt'

function TextParser() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(myTextfile)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader()
                reader.onload = () => {
                    const text = new TextDecoder("windows-1251").decode(reader.result)
                    const groups = text.split('\n')
                    const formatedGroups = groups.map(group => formatGroup(group))
                    setData(formatedGroups)
                }
                reader.readAsArrayBuffer(blob)
            })
            .catch(error => console.error('Ошибка при загрузке данных ', error))
    }, [])

    const formatGroup = (group) => {
        const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
        const formattedGroup = weekDays.reduce((result, weekDay) => {
            const regex = new RegExp(weekDay, 'i')
            if (regex.test(result)) {
                return result.replace(regex, `<h1 style="font-size: 20px">{${weekDay}}</h1>`)
            }
            return result
        }, group)

        const groupRegex = /Группа/i
        if (groupRegex.test(formattedGroup)) {
            return formattedGroup.replace(groupRegex, `<b>Дни недели</b>`)
        }

        return formattedGroup
    }

    return (
        <div>
            <ul>
                {data.map((group, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: group }}></li>
                ))}
            </ul>
        </div>
    )
}

export default TextParser
