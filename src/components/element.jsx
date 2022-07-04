
import "./styles/element.css"

const Element = ( { name, number , symbol,category, handleClick  ,id}) =>{
    return(
        <>
        <div onClick={ () => handleClick(id )} className={`box box-${number} ${category}`}>
            <small className="atomicNumber">{number}</small>
            <span  className="atomicSymbol">{symbol}</span>
            <span className="atomicName">{name}</span>
        </div>
        </>
    )
}

export default Element