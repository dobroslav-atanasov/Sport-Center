import React from 'react';

class Login extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3333/get')
            .then((response) => response.json())
            .then((myJson) => console.log(myJson))

    }


    render() {
        return (
            <h1>
                Login
            </h1>
        )
    }
}
// const Login = () => {
//     return(
//         <h1>
//             Login
//         </h1>
//     )
// };

export default Login;