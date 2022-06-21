import SignInForm from '../components/signInForm'

export default function SignIn() {
    function handleSubmit(e,userName, password) {
        e.preventDefault()
        console.log(userName, password)
    }
    return (
        <div id='sign-in-container'>
            <style>
                {`
                #sign-in-container{
                    width: 60%;
                    margin: auto;
                    padding: 4rem;
                    text-align: center;
                }
                `}
            </style>
            <h1>Sign In</h1>
            <SignInForm {...{  handleSubmit }} />
        </div>
    )
}