import React, { Component } from 'react'

class MyForm extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: 'Male',
        skills: [],
        agree: true,
        submit: 'Save'
    }
    inputHandler = e => {
        console.clear()
        console.log(this.state)
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }
    skillsHandler = e => {
        console.clear()

        console.log(e.target.checked)
        if (e.target.checked) {
            this.setState({ skills: [...this.state.skills, e.target.value] })
        } else {
            const skills = this.state.skills.filter(skill => skill != e.target.value)
            this.setState({ skills })
        }
    }
    agreeHandler = e => {
        if (e.target.checked) {
            this.setState({ agree: true })
        } else {
            this.setState({ agree: false })
        }
    }
    // static getDerivedStateFromProps(props, state){		
    // 	console.log(state)		
    // }
    submitHandler = e => {
        console.clear()
        console.log(this.state)
    }
    componentDidMount() {
        console.clear()
    }
    render() {
        const { name, country, bio, birthday, submit, gender, skills } = this.state
        return (
            <div className="block">
				<h2>{this.props.title}</h2>

				<input type="text" name="name"  value={name} onChange={this.inputHandler}  />
				<select name="country" onChange={this.inputHandler}>					
					<option value="" selected={country.length == 0} >Select Country</option>
					<option value="bd" selected={country.includes('bd')} >Bangladesh</option>
					<option value="pk" selected={country.includes('pk')} >Pakistan</option>
					<option value="in" selected={country.includes('in')} >India</option>
				</select>
				<textarea name="bio" onChange={this.inputHandler} value={bio} />
				<input type="date" name="birthday" onChange={this.inputHandler} />
				<div>
					<label><input type="radio" name="gender" value="Male" onChange={this.inputHandler}  checked={gender.includes('Male')} /> Male</label>
					<label><input type="radio" name="gender" value="Female" onChange={this.inputHandler}  checked={gender.includes('Female')} /> Female</label>
					<label><input type="radio" name="gender" value="Other" onChange={this.inputHandler}  checked={gender.includes('Other')} /> Other</label>
				</div>
				<div>
					<label><input type="checkbox" name="skills" value="Php" onChange={this.skillsHandler} checked={skills.includes('Php')} /> Php</label>
					<label><input type="checkbox" name="skills" value="Javascript" onChange={this.skillsHandler}  checked={skills.includes('Javascript')} /> Javascript</label>
					<label><input type="checkbox" name="skills" value="React" onChange={this.skillsHandler}  checked={skills.includes('React')} /> React</label>
					<label><input type="checkbox" name="skills" value="Sql" onChange={this.skillsHandler}  checked={skills.includes('Sql')} /> SQL</label>
				</div>
				<div>
					<label><input type="checkbox" checked={this.state.agree} onChange={this.agreeHandler} /> I agree with the terms and conditions</label>
				</div>
				<input type="submit" value={submit} onClick={this.submitHandler}/>
			</div>
        )

    }
}
export default MyForm