import React , {useState} from  "react";
import "./main.css"


function App(){
    const [data ,setData] = useState([])
    const [name , setName] = useState("")
    const [date , setDate] = useState("")

    function submit(e) {
        e.preventDefault()
        if(name&&date){
            const year = parseInt(date.slice(0,4));
            const month = parseInt(date.slice(5,7))-1;
            const day = parseInt(date.slice(8,10));
            const birth = new Date(year,month,day)
            setData([...data , {ID: Math.random()*Date.now(), Name:name , Birthday:birth}])
            setName("")
            setDate("")
        }
        console.log(data)  
    }

    function remove(id) {
        const Newdata = data.filter((person)=> person.ID !== id)
        setData(Newdata)
    }    
    return (
        <>
        <div id="bdaydiv"></div>
        <main id="birthday">
            <h1>Remember Their Birthday</h1>
            <form onSubmit={submit}>
                <div id="fields">
                    <div id="field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Johnny Test" name="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div id="field">
                        <label htmlFor="bday">Birthday:</label>
                        <input type="date" id="bday" name="Birthday" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                </div>
                <button type="submit">ADD</button>
            </form>
            <section>
                <article>
                    <ul>
                    {data.map(({Name,Birthday,ID})=>{
                        return(
                            <li key={ID}>
                                <h2>{Name}</h2>
                                <p>{Birthday.toString().slice(4,10)}, {Birthday.toString().slice(11,15)} | Age: {new Date().getFullYear() - Birthday.getFullYear()}</p>
                                <button onClick={()=>remove(ID)}>Remove</button>
                            </li>
                            )
                        })}
                        </ul>
                </article>
                {data.length!==0&&<button id="clear" onClick={()=>setData([])}>Clear All</button>}
            </section>
        </main>
        </>
    )
};

export default App;