// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.png'

<<<<<<< HEAD
// Fuction to show month date year
=======
// Function to show month date year
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
=======
    super(props);
    this.props = props;
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{showDate(date)}</small>
        </div>
      </header>
    )
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
=======
    super(props);
    this.props = props;
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
=======
    super(props);
    this.props = props;
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
=======
    super(props);
    this.props = props;
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    count: 0,
<<<<<<< HEAD
    backgroundColor: '',
    color: '',
=======
    styles: {
      backgroundColor: '',
      color: '',
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
<<<<<<< HEAD
    alert(showDate(new Date()))
=======
    alert(this.showDate(new Date()))
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
<<<<<<< HEAD
  changeBackground = () => {
    this.setState({backgroundColor: '' ? '#ff0000' : ''});
  }
  render() {
    const date = new Date()
=======
  changeBackground = () => {}
  render() {
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
<<<<<<< HEAD
      date: date,
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
=======
      date: new Date(),
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={date} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
<<<<<<< HEAD
ReactDOM.render(<App />, rootElement)
=======
ReactDOM.render(<App />, rootElement)// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import asabenehImage from './images/asabeneh.png'

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }

// // Header component
// class Header extends React.Component {
//   constructor (props) {
//     super(props);
//     this.props = props;
//   }

//   render () {
//     const {
//       data: {
//         welcome,
//         title,
//         subtitle,
//         author: {firstName, lastName},
//         date
//       }
//     } = this.props;
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>{firstName} {lastName}</p>
//           <small>{showDate(date)}</small>
//         </div>
//       </header>
//     )
//   }
// }



// // Parent Component, App
// class App extends React.Component {
//   constructor (props) {
//     super(props);
//   }
//   render () {
//     const data = {
//       welcome: 'Welcome to 30 days of React',
//       title: 'Getting started with React',
//       subtitle: 'JavaScript Library',
//       author: {
//         firstName: 'Asabeneh',
//         lastName: 'Yetayeh'
//       },
//       date: new Date()
//     }


//     return (
//       <Header data={data}/>
//       // <Main/>
//       // <Footer/>
//     )
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App/>, rootElement);
>>>>>>> 9b39cc94cd2bb27ee082fe38c7c615acbecb28ae
