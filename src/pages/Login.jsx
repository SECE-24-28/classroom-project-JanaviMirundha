import React from 'react';

const Login = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#e0f2f1', // full background color
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '400px',
                    padding: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                }}
            >
                <h1 style={{ fontSize: '32px', marginBottom: '30px', color: '#1b5e20' }}>
                    Login
                </h1>
                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        width: '100%',
                        padding: '12px',
                        marginBottom: '15px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={{
                        width: '100%',
                        padding: '12px',
                        marginBottom: '20px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
                <button
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#388e3c',
                        color: '#fff',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={e => (e.target.style.backgroundColor = '#2e7d32')}
                    onMouseOut={e => (e.target.style.backgroundColor = '#388e3c')}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
