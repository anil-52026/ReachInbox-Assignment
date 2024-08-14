import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
import { Link} from "react-router-dom"; 

function SignIn() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <form onSubmit={handleSignIn} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
          <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
          <button type="submit" style={styles.signInButton}>
            <Link to="/login" className="text-[#C1C2C5]">
                Sign In
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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
  },
  togglePassword: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#aaa',
  },
  forgotPassword: {
    display: 'block',
    margin: '10px 0',
    color: '#fff',
    textDecoration: 'none',
  },
  signInButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#4461f2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  signUpText: {
    color: '#aaa',
    marginTop: '20px',
  },
};

export default SignIn;
