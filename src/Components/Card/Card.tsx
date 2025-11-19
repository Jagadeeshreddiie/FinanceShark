import "./Card.css";

interface Props {
    companyName?: string;
    ticker?: string;
    price?: number; 
}

const Card = ({companyName,ticker,price}: Props) => {
    return (
        <div className="Card">
            <div>
                <img src="https://cdn.britannica.com/32/4732-050-AE887B9C/Model-ship-Phoenician-The-Philadelphia-Civic-Center.jpg" 
                alt="Ship" />
            </div>  
            <div className="Details">
                <h2>{companyName} : {ticker}</h2>
                <h3 >
                    {price}
                </h3>
            </div>
            <div className="Info">            
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, libero!</p>
            </div>

        </div>
    )
}

export default Card;