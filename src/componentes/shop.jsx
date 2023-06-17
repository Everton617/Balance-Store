import '../styles/shop.sass'
import Item1 from '../img/item1.jpg'
import Item2 from '../img/item2.jpg'
import Item3 from '../img/item3.jpg'
import Item4 from '../img/item4.jpg'
import Item5 from '../img/item5.jpg'
import Item6 from '../img/item6.jpg'
import Item7 from '../img/item7.jpg'
import Item8 from '../img/item8.jpg'

export default function Shop(){
    return(
        <div>
            <hr className='hr' />
            <div className="container Shop-content ">
            <h1>New in Shop</h1>
                <div className="row area-products">
                    <div className="col-sm cards-item">
                        <img className='img-fluid' src={Item1} alt="" />
                        <p>Bowery Chest Slash Sweatshirt</p>
                        <span>$50.00 - $75.00</span>
                        <a href="">Select options</a>
                    </div>
                    <div className="col-sm cards-item">
                        <img className='img-fluid' src={Item2} alt="" />
                        <p>Greg Back Pack</p>
                        <span>$75.00</span>
                        <a href="">Select options</a>
                    </div>
                    <div  className="col-sm cards-item">
                        <img className='img-fluid' src={Item3} alt="" />
                        <p>BRK Bottle - Kitsch</p>
                        <span>$29.00</span>
                        <a href="">Add to cart</a>
                    </div>
                    <div className="col-sm cards-item">
                        <img  className='img-fluid'src={Item4} alt="" />
                        <p>Ali Leather Shoes</p>
                        <span>$200.00</span>
                        <a href="">Select options</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm cards-item ">
                        <img className='img-fluid' src={Item5} alt="" />
                        <p>Ditch Hooded Sweartshirt</p>
                        <span>$80.00</span>
                        <a href="">Select options</a>
                    </div>
                    <div className="col-sm cards-item">
                        <img className='img-fluid' src={Item6} alt="" />
                        <p>Mike High Top</p>
                        <span>$57.00</span>
                        <a href="">Select options</a>
                    </div>
                    <div className="col-sm cards-item">
                        <img className='img-fluid' src={Item7} alt="" />
                        <p>Vass Process Slip-on Sneakers</p>
                        <span>$150.00</span>
                        <a href="">Select options</a>
                    </div>
                    <div className="col-sm cards-item">
                        <img className='img-fluid' src={Item8} alt="" />
                        <p>Cash Half Zip Wallet</p>
                        <span>$100.00</span>
                        <a href="">Select options</a>
                    </div>
                </div>
            </div>
        </div>
    )
}