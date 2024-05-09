import React, { useState } from 'react';

const Donate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <section className='donate'>
      <form>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>

        <div>
          <label>Show your love for poor</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Donation Amount ($USD)' />
          <input type="text" value={name} placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
          <input type="email" value={email} placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
          <input type='text' value={message} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} />
          <button className='btn' type='submit'>Donate</button>
        </div>
      </form>
    </section>
  );
};

export default Donate;