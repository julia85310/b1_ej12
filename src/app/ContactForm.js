import {useState} from 'react';
export default function ContactForm(){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function comprobacion(){
    if (name && phone && email) {
        alert('Formulario enviado con éxito!');
    } else {
        alert('Por favor, rellene todos los campos.');
    }
  }
  

  return <div>
      <form onSubmit={comprobacion}>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ingresa tu teléfono"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
}