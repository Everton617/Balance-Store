import '../styles/features-item.sass'
import product1img from '../img/bag.jpg'
import product2img from '../img/manstyle.jpg'


export default function App(){
    return(
        <div>
            <div className='container-fluid col-12'>
                <div className='row'>
                    <div className="col-12 title-item">
                        <h1>Balance is a Premium Theme for WordPress</h1>
                        <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available.</p>
                    </div>
                </div>
            </div>

            <div className=" col-12  conteiner-item ">
                <div className="row ">
                    <div className="col-12  area-img">
                        
                        <div className='container-fluid conteiner-title1'>
                            <div className='row ' >
                                <div className='col-12 title'>
                                    <p>Bags & accessories</p>
                                    <a href="">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    
                
                        <div className='container-fluid conteiner-title2'>
                            <div className='row '>
                            <div className='col-12 title'>
                                    <p>Men Style</p>
                                    <a href="">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}