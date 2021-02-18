import React from "react";
import countries from '../data/countries'

export default class App extends React.Component {

constructor() {
  super()

  this.state = {
    username: '',
    password: '',
    repeatpassword: '',
    country: '',
    gender: "male",
    agree: true,
    avatar: "",
    age: 0,
    errors: {
      age: ''
      // username: '',
      // password: '',
      // repeatpassword: ''
    }
  }
}

  onSubmit = e => {
    e.preventDefault()

    const errors = {}

    if(this.state.username.length < 5) {
      errors.username = "Must be 5 characters or more"
    }

    if(this.state.password.length < 3) {
      errors.password = 'Must be 3 characters or more'
    }

    if(this.state.password !== this.state.repeatpassword) {
      errors.repeatpassword = 'Must be equal password'
    }

    if(Object.keys(errors).length > 0) {
      this.setState({
        // errors: errors
        errors
      })
    } else {
      this.setState({
        errors: {}
      })
      console.log('submit', this.state)
    }

    // console.log(this)
    // console.log(this.username.value, this.password.value)
  }


  onChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeAgree = (e) => {
    console.log(e.target.checked)
    this.setState({
      [e.target.name]: e.target.checked
      // [e.target.name]: !e.target.value    не работает
      // [e.target.name]: e.target.value == "true" ? false : true
    })
  }

  onChangeAvatar = (e) => {
    const reader = new FileReader()
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      })
      console.log(e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
    // console.log(e.target.files[0])
  }

  // onChangePassword = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // onChangeRepeatpassword = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>{item.name}</option>
    ))
  }


  decrementAge = () => {
    this.setState({
      age: this.state.age - 1
    })
  }

  incrementAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {

    // const getOptionsCountries = countries.map(country => (
    //   <option key={country.id} value={country.id}>{country.name}</option>
    // ))

    console.log(this.username)
    console.log(this)
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={node => (this.username = node)}
              onChange={this.onChange}
              value={this.state.username}
              name="username"
            />
            { this.state.errors.username ? <div className="invalid-feedback">{this.state.errors.username}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className="form-control"
              placeholder="Enter password"
              ref={node => (this.password = node)}
              value={this.state.password}
              onChange={this.onChange}
              name="password"
            />
            { this.state.errors.password ? <div className="invalid-feedback">{this.state.errors.password}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="repeatpassword">Repeat password</label>
            <input
              id="repeatpassword"
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              ref={node => (this.repeatpassword = node)}
              value={this.state.repeatpassword}
              onChange={this.onChange}
              name="repeatpassword"
            />
            { this.state.errors.repeatpassword ? <div className="invalid-feedback">{this.state.errors.repeatpassword}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="country">Countries</label>
            <select
              className="form-control"
              id="country"
              value={this.state.country}
              name="country"
              onChange={this.onChange}
              ref={node => (this.country = node)}
            >

              {this.getOptionsItems(countries)}

              {/* {getOptionsCountries} */}

              {/* {countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))} */}
              {/* <option value={1}>1</option>
              <option value={2}>2</option>
              <option>3</option>
              <option>4</option> */}
            </select>
          </div>
          {/* filedset */}

          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              value={this.state.agree}
              onChange={this.onChangeAgree}
              checked={this.state.agree}
            />
            <label
              className="form-check-label"
              htmlFor="agree"
            >
              Agree
            </label>
          </div>

          <div className="form-group">
            <div>
              <label>Age</label>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this.decrementAge}
              >-</button>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
              value={this.state.age}
              onChange={this.onChange}
            />
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.incrementAge}
            >+</button>
            {this.state.errors.age ? <div className="invalid-feedback">{this.state.errors.age}</div> : null}
          </div>




          <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input
                type="file"
                className="from-control-file"
                name="avatar"
                id="avatar"
                onChange={this.onChangeAvatar}
              />
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}



// 16
// имеем доступ this.refs но в 17 версии
// ref="username"

// новый способ записи dom узлу
// вызывается коллбэк
