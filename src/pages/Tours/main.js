import React ,{useState, useContext , createContext} from "react";
import "./tours.css";
import hardCode from "./data"

const Prov = createContext()

function App(){
    const [data, setData] = useState(hardCode)
    
    function remove(id){
        setData(data.filter((tour)=> tour.id !== id))
    }

    return (
        <Prov.Provider value={remove}>
        <main id="tours">
            <header><h1>{data.length>0?"OUR TOURS":"NO TOURS"}</h1></header>
            <section>
                {data.map((tour)=>(
                    <Tour key={tour.id} {...tour}></Tour>
                ))}
            </section>
            {data.length>0?"":<button id="refresh" onClick={()=>setData(hardCode)}>REFRESH?</button>}
        </main>
        <div id="tourback"></div>
        </Prov.Provider>
    )
}

function Tour({id,img,title,cost,details}){

    const [isLong , toggleLong] = useState(false)
    const del = useContext(Prov)

    return (
    <article key={id}>
        <div>
        {<img src={img} alt={title}/>}
        <strong>{cost}</strong>
        </div>
        <footer id="tours-footer">
            <h2>{title}</h2>
            <p>{isLong?details:details.slice(0,200)+"..."}<button onClick={()=>toggleLong(!isLong)}>{isLong?"<<SHOW LESS":"READ MORE>>"}</button></p>
        </footer>
        <button className="notInterested" onClick={()=>del(id)}>NOT INTERESTED </button>
    </article>
)
}
export default App;