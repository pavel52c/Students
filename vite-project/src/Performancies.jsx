import React, {useState} from "react";

export const Performancies = ({setCurrentPage}) => {
    const [students, setStudents] = React.useState([]);
    const [performancies, setPerformancies] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/users").then(res => res.json()).then(setStudents);
    }, [])


    const [formValues, setFormValues] = React.useState({
        student: undefined,
        isWinterSession: false,
        year: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        const params = new URLSearchParams(formValues);
        fetch(`http://localhost:5000/performances/session?${params}`, { method: "get", headers: {"Content-Type": "application/json"} }).then(res => res.json()).then(setPerformancies)
    }


    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20}}>
            <button onClick={() => setCurrentPage('addMark')}>Перейти на страницу выставления оценок</button>
            <h4>Найти ведомость студента</h4>
            <form onSubmit={onSubmit}  style={{display: "flex", flexDirection: "column", gap: 10}}>
                <label htmlFor='student'>Студент</label>
                <select name="student" id="student" required value={String(formValues?.student)} onChange={(e)=> setFormValues((prev)=> ({...prev, student: +e.target.value}))}>
                    <option/>
                    {students?.map((subject) => <option value={subject.id} key={subject.id}>{subject.name}</option>)}
                </select>

                <label htmlFor='year'>Дата сдачи</label>
                <input name='year' type="text" required value={formValues.year} onChange={(e)=> setFormValues((prev)=> ({...prev, year: e.target.value}))}/>

                <span>
                    <label htmlFor='isWinterSession'>Зимняя ли сессия</label>
                    <input name='isWinterSession' type="checkbox" checked={formValues.isWinterSession} onChange={e => setFormValues(prev => ({...prev, isWinterSession: e.target.checked}))}/>
                </span>

                <button type='submit'> Найти ведомость </button>
            </form>

            {performancies.length &&
                <table className="product-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Студент</th>
                        <th>Предмет</th>
                        <th>Оценка</th>
                        <th>Дата</th>
                        <th>Зимняя сессия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {performancies.map((performance) => (
                        <tr>
                            <td>{performance.id}</td>
                            <td>{performance.student_id.name}</td>
                            <td>{performance.subject_id.name}</td>
                            <td>{performance.mark}</td>
                            <td>{performance.year}</td>
                            <td>{performance.isWinterSession ? '+' : '-'}</td>
                        </tr>)
                    )}

                    </tbody>
                </table>}
        </div>
    )
}
