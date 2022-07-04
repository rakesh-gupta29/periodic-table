

import { useState } from "react"
import data from "./data"
import {DesModal,Element } from "./components"
const Table = () =>{

    const [ isModalOpen ,setModalOpen ] = useState ( false )
    const [ modalData , setModalData] = useState ({})

    const createElements =(start,end) =>{
        let array_of_elements = [];
        for(let i = start; i<=end ; i++){
            const target = data[i];
            const { name , number ,symbol,category} = target 
            array_of_elements.push( <Element 
                key={i} 
                handleClick = {handleElemClick} 
                id={i} 
                category={category} 
                name={name} 
                number ={number } 
                symbol ={ symbol}  />)
        }
        return array_of_elements;
    }
    const modalViewHandler = () => setModalOpen  ( !isModalOpen)
    const modalDataHandler = id  =>setModalData (data[id])
    const handleElemClick= id  => {
        setModalOpen( true )
        modalDataHandler( id % 119)
    }
    const navigateData = ( isNext , id ) =>{
        console.log ( id )
        if ( isNext)   modalDataHandler( id == 120 ? 1:id    ) 
        else   modalDataHandler(   id == 0 ? 119:id  ) 
    }

    return(
        <>
            <DesModal  isOpen ={ isModalOpen} data={ modalData } openHandler = {modalViewHandler }navigateData = { navigateData} />
            <div className="table-wrapper">
                {createElements(1,1)}
                {createElements(2,4)}
                {createElements(5,56)}
                {createElements(72, 88)}
                {createElements(104, 119)}
                {createElements(57, 71)}
                {createElements(89, 103)}
            </div>
        </>
    )
}
export default Table 