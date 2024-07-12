import React, { useState, useEffect } from 'react'
import myTextfile from './AllGroups.txt'
import '../styles/ParsedTest.css'
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
    const [value,setValue] = useState('')
    const filtered = data.filter(group =>{
        return group.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <input type='text' placeholder='Введите группу...ГД-123 и т.д. О_о' class = 'input_box' onChange={(event)=>setValue(event.target.value)}>
             </input>
            <ul>
                {filtered.map((group, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-wrap', padding: '15px' }} dangerouslySetInnerHTML={{ __html: group }}></li>
                ))}
            </ul>

        </div>
    )
}

export default TextParser
