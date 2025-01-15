import React from "react";


export const AddMark = ({ setCurrentPage }) => {
    const [subjects, setSubjects] = React.useState([]);
    const [students, setStudents] = React.useState([]);

    const [formValues, setFormValues] = React.useState({
        subject: undefined,
        student: undefined,
        mark: '',
        isWinterSession: false,
        year: ''
    });

    React.useEffect(() => {
        fetch("http://localhost:5000/subjects").then(res => res.json()).then(setSubjects);
        fetch("http://localhost:5000/users").then(res => res.json()).then(setStudents);
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/performances/create", { method: "post", body: JSON.stringify(formValues), headers: {"Content-Type": "application/json"} }).then(() => {
            setCurrentPage('performancies')
        })
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20}}>
            <button onClick={() => setCurrentPage('performancies')}>Перейти на страницу поиска ведомостей</button>
            <h4>Поставить оценку студенту</h4>
            <form onSubmit={onSubmit}  style={{display: "flex", flexDirection: "column", gap: 10}}>
                <label htmlFor='student'>Студент</label>
                <select name="student" id="student" required value={String(formValues?.student)} onChange={(e)=> setFormValues((prev)=> ({...prev, student: +e.target.value}))}>
                    <option/>
                    {students?.map((subject) => <option value={subject.id} key={subject.id}>{subject.name}</option>)}
                </select>

                <label htmlFor='subject'>Предмет</label>
                <select name="subject" id="subject" required value={String(formValues?.subject)} onChange={(e)=> setFormValues((prev)=> ({...prev, subject: +e.target.value}))}>
                    <option/>
                    {subjects?.map((subject) => <option value={subject.id} key={subject.id}>{subject.name}</option>)}
                </select>

                <label htmlFor='mark'>Оценка</label>
                <input name='mark' type="number" required value={formValues.mark} onChange={(e)=> setFormValues((prev)=> ({...prev, mark: +e.target.value}))}/>

                <label htmlFor='year'>Дата сдачи</label>
                <input name='year' type="text" required value={formValues.year} onChange={(e)=> setFormValues((prev)=> ({...prev, year: e.target.value}))}/>
                <span>
                    <label htmlFor='isWinterSession'>Зимняя ли сессия</label>
                    <input name='isWinterSession' type="checkbox" checked={formValues.isWinterSession} onChange={e => setFormValues(prev => ({...prev, isWinterSession: e.target.checked}))}/>
                </span>
                <button type='submit'> Добавить оценку 5 по предмету 1</button>
            </form>
        </div>
    )
}
