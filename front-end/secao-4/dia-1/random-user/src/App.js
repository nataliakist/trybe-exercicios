import React, { Component } from 'react';

class App extends Component {
  state = {
    loading: true,
    user: undefined,
  }

  async fetchUser() {
    this.setState({loading: true}, 
    async () => {
      const request = await fetch('https://api.randomuser.me/');
      const requestReturn = await request.json();
      this.setState({
        loading: false,
        user: requestReturn.results[0],
      })
    })
  }

  componentDidMount() {
    this.fetchUser();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value[0],
    })
    this.fetchUser()
  }

  getUserElements = (user) => {
    const { name, email, dob, picture } = user;
    const fullName = `${name.first} ${name.last}`
    return (
      <div>
        <img src={ picture.medium } alt={ fullName } />
        <p>{ fullName }</p>
        <p>{ email }</p>
        <p>{ dob.age }</p>
        <button type="button" onClick={ this.handleChange }>Randomizar</button>
      </div>
    )
  }

  render() {
    const { user, loading } = this.state;
    const loadingElement = <p>Loading...</p>;
    return (
      <div>
        { loading ? loadingElement : this.getUserElements(user) }
      </div>
    );
  }
}

export default App;
