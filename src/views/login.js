import React from 'react';
import CardContent from '../components/card-content'
import CardAction from '../components/card-action'
import InputField from '../components/input-field';

class Login extends React.Component{

    state = {
        email: '',
        senha: ''
    }

    entrar = () =>{
        console.log(`Email: ${this.state.email}; Senha: ${this.state.senha}`)
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                        <CardContent title="Login">
                            <form className="col s12">
                                <div className="row">
                                    <InputField label="Email" htmlFor="email">
                                        <input className="validate" id="email" type="text" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
                                    </InputField>
                                    <InputField htmlFor="senha" label="Senha">
                                        <input className="validade" id="senha" type="text" placeholder="Senha" value={this.state.senha} onChange={e => this.setState({senha: e.target.value})} />
                                    </InputField>
                                </div>
                            </form>
                            <button onClick={this.entrar} className="btn-flat waves-effect waves-light teal-text text-lighten-2">Entrar</button>
                        </CardContent>
                   </div>
                </div>
        )
    }
}

export default Login