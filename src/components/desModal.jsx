
import "./styles/desModal.css"

const DesModal = ({ data ,openHandler,isOpen,navigateData}) =>{
    const { number , name , id, boil ,melt ,symbol, molar_heat ,phase ,atomic_mass, density , color ,summary ,  category , appearance,named_by,source  } = data 
    return(
        <>
        <section className={` ${isOpen?"":"modal-hidden"} des-modal modal-wrapper `}>
            <div className="action-wrapper">
                <div className="inc-des-wrapper">
                    <button onClick={() =>navigateData( false , data.number - 1 )}>Previous</button>
                    <button  onClick={()=> navigateData ( true , data.number +1  )} >Next</button>
                </div>
                <div className="close-wrapper ">
                    <button onClick={openHandler}>
                        close {"[ X ]"}
                    </button>
                </div>
            </div>
            <div className="elem-view">
                <div className="view-top">
                    <span>{number}</span>
                    <span>{atomic_mass}</span>
                </div>
                <div className="view-main">
                    {symbol}
                </div>
                <div className="view-name">
                    {name}
                </div>
            </div>
            <div className="info-wrapper">
                    <span className="elem-name ">{name}</span>
                    <span>{summary}</span>
                    <span >
                        Appearance : 
                        <span>{appearance}</span>
                    </span>
                    <span >
                        Named By :
                        <span>{named_by || ""}</span>
                    </span>
                    <span >
                        Boiling Point  : 
                        <span>{boil} K</span>
                    </span>
                    <span >
                        Melting  Point  : 
                        <span>{melt || "Not  Applicable"} K</span>
                    </span>
                    <span >
                        Molar Heat  : 
                        <span>{molar_heat}</span>
                    </span>
                    <span >
                        Density : 
                        <span>{density} g/cm3</span>
                    </span>
                    <span >
                        Phase : 
                        <span>{phase}</span>
                    </span>
                    <span >
                        Color : 
                        <span>{color || "Colorless"}</span>
                    </span>
                    <span >
                    Category : 
                        <span>{category || ""}</span>
                    </span>
                    <span>
                        for further info 
                        <a className="modalLink" href={source}  target="_blank">click here</a>
                    </span>
            </div>
        </section>
        </>

    )
}

export default DesModal

