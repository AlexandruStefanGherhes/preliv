export const Popular = () =>{
    return(
        <div className="popular">
            <>
            <h1>Căteva dintre <span>produsele</span> noastre</h1>
            <div className="popular-list">
                <div className="popular-one">
                    <img src="./public/assets/flansa.jpg" alt="flansa" />
                    <h4>Flanșe</h4>
                </div>
                <div className="popular-one">
                    <img src="./public/assets/conic.jpg" alt="conic" />
                    <h4>Roți Conice</h4>
                </div>
                <div className="popular-one">
                    <img src="./public/assets/lant.png" alt="lant" />
                    <h4>Roți de lanț</h4>
                </div>
                <div className="popular-one">
                    <img src="./public/assets/coroana.jpg" alt="coroana" />
                    <h4>Coroane</h4>
                </div>
            </div>
            </>
            <div className="more-info">
                <div className="information">
                    <h1>Pentru mai multe informații</h1>
                    <h1>contactează-ne: 0743088966</h1>
                </div>
                {/* <div className="information-image">
                    <img src="./src/assets/informatii.jpg" alt="" />
                </div> */}
            </div>
        </div>
    )
}