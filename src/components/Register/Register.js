import './Register.css';
const Register = () => {
    return (
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
        </div>
    )
}
export default Register;

