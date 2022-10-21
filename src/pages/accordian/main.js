import React, {useState} from "react"
import data from "./data"
import "./main.css"

function Accordian() {
    return (
        <>
        <div id="accBack"></div>
        <main id="accordian">
            <h1>Questions and Answers About Login</h1>
            <dl>
                {data.map((listItem)=>{
                    return <Article key={listItem.id} {...listItem} />
                })}
            </dl>
        </main>
        </>
    )
}

function Article({id,question,answer}) {
    const [show,setShow] = useState(false)
    return (
        <article key={id}>
            <header>
            <dt>{question}</dt>
            <button onClick={()=>setShow(!show)}>{show?"-":"+"}</button>
            </header>
            {show&&<dd>{answer}</dd>}
        </article>
    )
}


export default Accordian;