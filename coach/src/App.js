import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to the Home section</p>
      </section>

    
      <section id="services">
      <h1 className="section-title">Services</h1>
      <div className="services-content">
        <div className="cards-container">
            <div className="card">
              <h3 className='card-title'>Personalized Interview Coaching</h3>
              <br></br>
              <p>Receive one-on-one coaching sessions with our AI-driven platform, 
                tailored to your industry and job level. Our system learns from your 
                responses to provide customized advice and strategies.</p>
            </div>
            <div className="card">
              <h3 className='card-title'>Mock Interviews – Feedback Analysis</h3>
              <br></br>
              <p>Practice with our AI interviewer, simulating a wide range of real-world scenarios. 
                Get instant feedback on your performance, including body language, speech patterns, 
                and content.</p>
              <button>Contact</button>
            </div>
            <div className="card">
              <h3 className='card-title'>Micro-expression Analysis</h3>
              <br></br>
              <p>Utilize our advanced feature to understand and improve your non-verbal communication. 
                Our AI provides detailed analysis of your microexpressions, helping you convey confidence 
                and sincerity.</p>
            </div>
          </div>
      </div>
      </section>
    </div>
  );
}

export default App;
