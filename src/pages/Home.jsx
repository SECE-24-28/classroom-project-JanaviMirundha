import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#e8f5e9",
            }}
        >
            <div style={{ maxWidth: "600px" }}>
                <h1
                    style={{
                        fontSize: "48px",
                        color: "#1b5e20",
                        marginBottom: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Invoice Generator
                </h1>

                <p style={{ fontSize: "20px", color: "#2e7d32", marginBottom: "40px" }}>
                    Create, manage and download invoices easily!
                </p>

                <Link to="/create-invoice">
                    <button
                        style={{
                            width: "250px",
                            padding: "14px",
                            backgroundColor: "#388e3c",
                            color: "#fff",
                            fontSize: "18px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "15px",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={e => (e.target.style.backgroundColor = "#2e7d32")}
                        onMouseOut={e => (e.target.style.backgroundColor = "#388e3c")}
                    >
                        Create Invoice
                    </button>
                </Link>
                <br />

                <Link to="/view-invoices">
                    <button
                        style={{
                            width: "250px",
                            padding: "14px",
                            backgroundColor: "#4caf50",
                            color: "#fff",
                            fontSize: "18px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            marginBottom: "15px",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={e => (e.target.style.backgroundColor = "#45a049")}
                        onMouseOut={e => (e.target.style.backgroundColor = "#4caf50")}
                    >
                        View Invoices
                    </button>
                </Link>
                <br />

                <Link to="/login">
                    <button
                        style={{
                            width: "250px",
                            padding: "14px",
                            backgroundColor: "#00695c",
                            color: "#fff",
                            fontSize: "18px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                        }}
                        onMouseOver={e => (e.target.style.backgroundColor = "#004d40")}
                        onMouseOut={e => (e.target.style.backgroundColor = "#00695c")}
                    >
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
