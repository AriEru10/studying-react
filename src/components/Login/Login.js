import './Login.css';
import robot from '../assets/robot.gif';
const Login = () => {
    return (
        <body>
        
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                    <h1> Create Account  </h1>
                    
                    <input type="text"  placeholder="Name" />
                    <input type="email"  placeholder="Email" />
                    <input type="password"  placeholder="Your Password" />
                    <button> Sign up </button>
                    </form>
                </div>
                
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1> Sign In </h1>

                        <input type="email"  placeholder="Email" />
                        <input type="password"  placeholder="Your Password" />
                        <a href="#"> Forgot Your Password ? </a>
                        <button> Sign In </button>
                                    
                    </form>
                </div> 
                
                <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    
                    <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    
                    <div class="overlay-panel overlay-right">
                        <div>
                        <img class="gif" src = {robot} alt = "" />
                        </div>
                    <p> Enter your personal detail and start journey with us </p>
                    <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                                
                </div>
                </div>
            </div>
        </body>

    )
}
export default Login;
