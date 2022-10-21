import React, {useState, useEffect} from 'react'
import data from "./data.js"
import "./reviews.css"
function App() {
    const [isLoading,toggleLoading] = useState(true)
    const [index,setIndex] = useState(0)
    const lastIndex = data.length - 1

    useEffect(
        ()=> {
            if (index<0) {setIndex(lastIndex)}
            if (index>lastIndex) {setIndex(0)}
        } , [index,lastIndex]
    )

    useEffect(()=>{
        const interval = setInterval(()=>setIndex(index-1),6000)
        return ()=> clearInterval(interval)

    })

    if (isLoading){
        setTimeout(() => {
            toggleLoading(false)
        } , 1)
        return (
            <h1 id="revLoad">LOADING...</h1>
            )
        }
 
    return(
        <main id="reviews">
            <button onClick={()=>setIndex(index+1)} >{"<"}</button>
            <section>{
                data.map((review,ind)=>{
                    let pos = "reviews-next"
                    if (ind===index-1||(index===0&&ind===lastIndex)) {pos="reviews-previous"}
                    if (ind===index) {pos="reviews-current"}
                    return (
                    <article id={pos} key={review.id} >
                        <Reviews {...review}/>
                    </article>
                    )})}
                </section>
            <button onClick={()=>setIndex(index-1)}>{">"}</button>
        </main>
    )
    }

function Reviews({name,img,skill,review}){
    return (
    <>
        <img src={img} alt={name} />
        <h2>{name}<span>{skill}</span></h2> 
        <p>{review}</p>
    </>
    )
}

export default App