import React, { useEffect, useState } from 'react';
 // Import useNavigate
import { Link, useNavigate } from "react-router-dom"; 

function SignUp() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <form onSubmit={handleSignUp} style={styles.form}>
          <div style={styles.nameContainer}>
            <div style={{ ...styles.inputWrapper, marginRight: '10px' }}>
              <label style={styles.label}>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                style={styles.input}
                required
              />
            </div>
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create Password"
                style={styles.input}
                required
              />
              <span
                style={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <button type="submit" style={styles.signUpButton}>
              <Link to="login" className="text-[#C1C2C5]">
                SIGN UP
              </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#181818',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  inputWrapper: {
    flex: 1,
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#fff',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
    marginBottom: '10px',
  },
  passwordContainer: {
    position: 'relative',
  },
  togglePassword: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#aaa',
  },
  signUpButton: {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#4461f2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    width: '100%',
  },
};

export default SignUp;
