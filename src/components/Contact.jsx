import React, {useState} from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMesaage = (e) => {
    e.preventDefault();
  };

  return (
    <section className='contact'>
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSendMesaage}>
            <h2>CONTACT US</h2>
            <div>
              <input type="text" value={name} placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
              <input type="email" value={email} placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
              <input type="number" value={phone} placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
            </div>
            <textarea rows="10" value={message} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} />
            <button className='btn' type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;