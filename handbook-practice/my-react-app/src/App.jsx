// TEMPLATE EXAMPLE OF REACT functionality
/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/


import { useState } from 'react';

export default function App() { 
// EXAMPLE 1 - Represent JS powered HTML (JSX)
  // const main = 'This is Main heading'
  // const sub = 'This is sub-heading'
  // return (
  //   <>
  //   <h1>{main}</h1> 
  //   <h2>{sub}</h2>
  //   </>
  // );


// EXAMPLE 2 - RENDER LIST, CONDITIONAL RENDERING
  // const employees =  [
  //   { id: 1, name: 'Rama Prabha', role: 'Web Developer' },
  //   { id: 2, name: 'Suridu', role: 'Web Designer' },
  //   { id: 3, name: 'Jhansi Rani', role: 'Team Leader' },
  // ];
  // return(
  //   <>
  //   <h1>Welcome Employees of React-abad!</h1>
  //   <p>Employees of the Months : </p>
  //   <ul>
  //   {
  //     employees.map((employee) => {
  //       if(employee.name =='Suridu'){
  //       // 'index' only as last resort for key
  //         return (
  //           <li key={employee.id}>{employee.name} in the role of a {employee.role}</li>
  //         )
  //       }
  //       return <h3>This is not Suridu! So it is okay.</h3>
  //     })
  //   }
  //   </ul>
  //   </>
  // );


// EXAMPLE 3 - PASSING STATE from PARENT to CHILD
  //   const [surprise, setSurprise] = useState('MEOW!!');

  //   return <ButtonComponent surprise={surprise} setSurprise = {setSurprise}/>;
  // }

  // function ButtonComponent(props){
  //   return (
  //   <>
  //   <h1>Surprise!! {props.surprise}</h1>
  //   <button onClick={() => props.setSurprise('HISSS!!')}>Check another surprise!</button>
  //   </>
  //   );


// EXAMPLE 4 - INLINE CONDITIONAL RENDERING (inside {}), PASSING DOWN STATE & PROPS
  //   const newMails = 4;
  //   const [count, setCount] = useState(newMails);
    
  //   const handleRefresh = (count) => {
  //     setCount(newMails);
  //   }

  //   const handleClick = () => {
  //     setCount((count) => count - 1);
  //   }

  //   return(
  //     <>
  //     <h1>Hey there! Let's see if you got any mails...</h1>
  //     <h2>You have {count} mails left to check!</h2>
  //     {
  //       (newMails > 0) &&
  //       <CheckMailButton count={count} handleClick={() => handleClick()} handleRefresh={() => handleRefresh()}/>
  //     }
  //     </>
  //   );
  // }

  // function CheckMailButton({count, handleClick, handleRefresh}){
  //   return (
  //   <>
  //   {/* {
  //     (props.count != 0) &&
  //     <button onClick={() => props.setCount((count) => count - 1)}>Check your Mail</button>
  //   } */}
  //   {/* { props.count == 0 ? <h3>You are all clear!</h3> : 
  //     <button onClick={() => props.setCount((count) => count - 1)}>Check your Mail</button> } */}
  //   { 
  //     count == 0 ? <h3>You are all clear!</h3> : <button onClick={handleClick}>Check your Mail</button>
  //   }
  //   <button onClick={handleRefresh} disabled={count > 0}>Refresh Mailbox</button>
  //   </>
  //   );


  // EXAMPLE 5 - Build, Validate FORM
  return (
    <>
    <PageTitle />
    <CustomForm />
    </>
);
}

function CustomForm() {
  const [username, setUsername] = useState();
  const [usernameError, setUsernameError] = useState(); // boolean value to simplify without Error message
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (usernameError){
      alert(`Unable to accept submission. Change input as suggested.`);
    }
    else{
      alert(`Hello there, ${username}!`);
    }
  };
  const handleUsername = (event) => {
    const value = event.target.value;
    setUsername(value.toUpperCase());

    if(value.length < 3){
      setUsernameError('Username is empty or less than 3 characters. Try harder!');
    }
    else{
      setUsernameError();
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      Enter name :
      <input autoFocus type='text' value={username} onChange={handleUsername} />
      <p>{usernameError}</p>
      <button>Submit</button>
    </form>
  );
}

import { useEffect } from 'react';
// EXAMPLE 6 - useEffect HOOK for Network Requests
function PageTitle() {
  const [quote, setQuote] = useState('');
  
  useEffect(() => {
    getQuoteOfTheDay();
  }, []); // Empty array means this effect runs once on mount and not on subsequent re-renders

  const getQuoteOfTheDay = async() => {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    let idx = Math.floor(Math.random() * data.length);
    console.log(data[idx]);
    const quoteOfTheDay = `${data[idx].text} by ${data[idx].author}`;
    setQuote(quoteOfTheDay);
  }
  
  return <h2>{ quote }</h2>
}