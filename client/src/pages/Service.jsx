import { useAuth } from "../store/auth"
export const Service=()=>{
    const {services}=useAuth();
    console.log(services);
    return (
        <>
        <section className="service-section">
            <div className="service-container">
                <h1 className="contact-heading">Services</h1>
                <br />
                <div className="card-container">
                    {services.map((curElem,index)=>{
                        const {price,description,provider,service}=curElem;
                        return (
                            <div className="card" key={index}>
                        <div className="card-image">
                            <img src="../images/design.jpeg" alt="Not found" />
                        </div>
                        <div className="card-details">
                            <div className="provide-price">
                                <p>{provider}</p>
                                <p>{price}</p>
                            </div>
                            <div className="service-description">
                                <h2>{service}</h2>
                                <p>{description}</p>
                            </div>
                        </div>

                    </div>
                        )
                    })}
                    

                </div>
            </div>
        </section>
        </>
    )
}