import '../styles/feature.cards.sass'
import feature1 from '../img/feature1.jpg'
import feature2 from '../img/feature2.jpg'
import feature3 from '../img/feature3.jpg'


export default function FeatureCards(){
    return(
        <div>
            <div className="container-fluid features">
                <div className="row">
                <h1>Features</h1>
                    <div className="col-12 area-features">
                        <div className="col-3"><img className='img-fluid' src={feature1} alt="" />
                        <h2>Feature 1 </h2>
                        <p>Morbi leo risus, porta ac <br />consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue</p>
                        <a className='link-featurecards' href="">Learn More</a>
                        </div>

                        <div className="col-3"><img className='img-fluid' src={feature2} alt="" />
                        <h2>Feature 2 </h2>
                        <p>Morbi leo risus, porta ac <br />consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue</p>
                        <a className='link-featurecards' href="">Learn More</a>
                        </div>

                        <div className="col-3"><img className='img-fluid' src={feature3} alt="" />
                        <h2>Feature 3 </h2>
                        <p>Morbi leo risus, porta ac <br />consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue</p>
                        <a className='link-featurecards' href="">Learn More</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}