import React from 'react';
import "./modal.css";
import products from "./sub-menus/Products";
import solutions from "./sub-menus/Solutions";
import developers from "./sub-menus/Developers";
import resources from "./sub-menus/Resources";
import { ReactComponent as Arrow } from "./right-arrow.svg";

function Modal({mod}) {

  return (
    <section className={"stripeModal"}>
      <Products change={mod}/>
      <Solutions change={mod}/>
      <Developers change={mod}/>
      <Resources change={mod}/>
    </section>
  )
}


function Products({change}) {

  function changePos(index){
    const selectorPos = document.querySelector(":root")
    selectorPos.style.setProperty("--pos",(index===0?"0rem":index===1?"6.7rem":"13.75rem"));
    selectorPos.style.setProperty("--pos2",(index===0?"1.3rem":index===1?"-3.3rem":"-7.3rem"));
    selectorPos.style.setProperty("--opacity1",index===0?"1":"0");
    selectorPos.style.setProperty("--opacity2",index===1?"1":"0");
    selectorPos.style.setProperty("--opacity3",index===2?"1":"0");
    selectorPos.style.setProperty("--index1",index===0?"100":"1");
    selectorPos.style.setProperty("--index2",index===1?"100":"1");
    selectorPos.style.setProperty("--index3",index===2?"100":"1");
  }

  return (
    <article modalname={`products-${change}`}>
      <div className='products-left'>
        <div className='productSelector'>
          <div arrow='middle'><Arrow arrow='down'/><Arrow arrow='up'/></div>
        </div>
        <div className='productOptions'>{products.map(({section,disc}, index) => {
          return(
            <div key={index} className='products-left-sec' onMouseOver={() => changePos(index)}>
              <h4 className='optionTitle'>{section}</h4>
              <p className='optionSubTitle'>{disc}</p>
            </div>)})}
        </div>
      </div>
        <section className='products-right'>{products.map(({options}, index) => {
          return (
          <div key={index} psl={`sec${index}`}>
            {options.map(({svg,option,disc},indo) => {
              return (
                <div key={indo} className='stripeNavOption'>
                  {svg}
                  <div>
                    <h4 className='optionTitle'>{option}<span><Arrow/></span></h4>
                    <p className='optionSubTitle'>{disc}</p>
                  </div>
                </div>)})}
          </div>)})}
        </section>
  </article>);
}


function Solutions({change}) {
  return (
  <article modalname={`solutions-${change}`}>{solutions.map(({section,options},index)=>{
    return (
      <section key={index} className={`solution-sec ${index === 0 ? "gray" : ""}`}>
        <div className='solution-header'><h3 className='optionHeader'>{section}</h3></div>
        <div className='solution-grid'>{options.map(({svg,option},key) => {
          return <div key={key} className='stripeNavOption'>{svg}<h4 className='optionTitle'>{option}</h4></div>})}
        </div>
      </section>)})}
  </article>);
}

function Developers({change}) {
  return (
    <article modalname={`developers-${change}`}>
      {developers.map(({svg,section,disc,options},index)=>{return(
        <div key={index}>{section!==""?(
          <div className='products-left-sec dev gray'>
            <div className='stripeNavOption'>
              {svg}
              <div>
                  <h4 className='optionTitle'>{section}<span><Arrow/></span></h4>
                <p className='optionSubTitle'>{disc}</p>
              </div>
            </div>
          </div>):(
          <div className={`solution-grid dev ${index===1?"gray":null}`}>
            {options.map(({section,options,svg},indie)=>{
              return(
                index===2?(
                  <div key={indie} className='stripeNavOption ignore'>
                    {svg}
                    <h4 className='optionTitle dev'>
                      {options}
                    </h4>
                  </div>):
                  (<section key={indie}>
                    <h3 className='optionHeader dev'>{section}</h3>
                    {options.map((lemta,indos)=>{return(<p key={indos} className='optionSubTitle dev'>{lemta}</p>)})}
                  </section>
                ))})}
          </div>)}
        </div>)})}
    </article>);
}

function Resources({change}) {
  return (
  <article modalname={`resources-${change}`}>
    {resources.map(({options},index)=>{
      return(
        <div key={index} className={`solution-sec ${index === 0 ? "gray" : ""}`}>
          <section className='solution-grid'>
            {options.map(({svg,option},indie)=>{
              return(
                <div key={indie} className='stripeNavOption resources'>
                  {svg}
                  <h4 className='optionTitle'>{option}</h4>
                </div>
              )})}
          </section>
        </div>
      )})}
  </article>);
}

export default Modal