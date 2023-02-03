import React from 'react';
import coolkids from '../img/coolkid.png';
import family from '../img/family.png';
import people from '../img/people.png'
import games from '../img/gam.png'
import zambia from '../img/rect1.png'
import drums from '../img/rect2.png'
import world from '../img/rect3.png'
class Home extends React.Component {
    render() {
	return (
            <div>
		<div class="wrapper">
		    <div class="header">
			<div class="title">
			    <h1 class="title-text">
				bemblin
			    </h1>

			    <div class="menu">
				
				<li>Translations</li>
				
				<li>Course</li>
				
				<li>About us</li>
				
				<li>Cultures</li>

			    </div>

			</div>
			<div class="signup">
			    
			</div>
			
			<div class="login">
			    
			    
			</div>
		    </div>
		    
		    <div class="big-image">
			<div class="overlay">
			    <h1 class="main-title">TOGETHERNESS</h1>
			    <p>Learn the Bemba language and more.</p>
			</div>
		    </div>
		    
		    <p class="quote">"African languages have long been undocumented in their writing.One of the goals<br></br>
			of bemblin is to help people get on the journey of learning an African language through<br></br>
		    gamification and documenting the different languages.."</p>
		    
		    
		    
		    <div class="row">

			<img class="img-family" src={family} alt="family">
                        </img>
			
			<img class="img-cookid" src={coolkids} alt="coolkids">
                        </img>
			<img class="img-people" src={people} alt="People">

                        </img>
		    </div>
		    <span class="title3">
			Have you been struggling to learn an African Language?
		    </span>

		    <div class="section3">
			<div class="sub-title3">
			    <h3>Gamification poured into every lesson.</h3>
			    

			    
			    <p class="sub-text3"> Bemblin lessons adapt to your learning style.<br></br>
				Exercises are tailored to help you learn and review vocabulary
			    effectively.</p>
			</div>

			<img class="game" src={games} alt=" Gamification">

                        </img>

		    </div>
		    <span class="title3">
			Why Learn African Languages?
			
		    </span>


		    <div class="section4">
			“If you talk to a man in a language he understands, that goes to his head.<br>
												  </br>
			If you talk to him in his language, that goes to his heart” <br></br>(Nelson Mandela)
		    </div>

		    <div class="reasons">
			<ul>
			    <li>(Family and friends) It will give you a better understanding of the culture and way of thinking.</li>
			    <li>(Religion) Missionaries and other religious types learn languages in order to spread their message.</li>  
			    <li>(Work) If your work involves regular contact with locals being able to talk to them in their own languages will help
			    you to</li>
			    <li>Communicate with them. It may also help you to make sales and to negotiate and secure contracts.(As a means of
			    acceptance)</li>
			</ul>

		    </div>

		    <div class="section5">

			<img class="map" src={zambia} alt="Zambia" >
                        </img>
					<img class="drum" src={drums} alt="Drums">
                        </img>
			<img class="globe" src={world} alt="World">

                        </img>
		    </div>
		    <br></br><br></br><br></br>

		    <div>
			<div class="footer-content">
                            <img class="logo" src="./img/Frame 31.png" alt="Logo">
                            </img>

			    <p>Copyright © 2019 bemblin. All rights reserved.</p>
			    <p>
				bemblin is a website that aims to help people learn African languages.
				</p>

			    <p>Copyright © 2021 bemblin. All rights reserved.</p>
			    <p>
				bemblin is a Web App that aims to help people learn African languages.

			    </p>
			    <div class="contact">
				<span><i class="fas fa-phone"></i>&nbsp;&nbsp;+234 816-816-8161</span>

			    </div>                     
			</div>
			



			
                    </div>
		</div>
            </div>
	);
    }
}
export default Home;
