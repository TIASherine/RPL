import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FiUser, FiLock } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const focusBorder = (e) => {
    e.currentTarget.parentElement.style.borderColor = "#2e7d32";
  };

  const blurBorder = (e) => {
    e.currentTarget.parentElement.style.borderColor = "#d1d5db";
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        body{
          font-family:'Nunito',sans-serif;
        }

        input::placeholder{
          color:#9ca3af;
        }

        @keyframes spin{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }
      `}</style>

      {/* CARD */}
      <div
        style={{
          ...styles.card,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        {/* LEFT */}
        {!isMobile && (
          <div style={styles.left}>
            <div style={styles.welcomeBox}>
              <h1 style={styles.welcomeText}>
                Selamat Datang Warga!
              </h1>
            </div>

            <img
              src="/images/login-image.png"
              alt="Recycle"
              style={styles.leftImg}
            />
          </div>
        )}

        {/* RIGHT */}
        <div
          style={{
            ...styles.right,
            padding: isMobile ? "40px 24px" : "60px 70px",
          }}
        >
          <div style={styles.formWrap}>
            {/* LOGO */}
            <div style={styles.logoArea}>
              <img
                src="/images/logo.png"
                alt="Logo"
                style={styles.logoImg}
              />

              <h1 style={styles.appTitle}>
                Sistem Daur Ulang
                <br />
                Sampah Perumahan
              </h1>

              <p style={styles.subtitle}>
                Masuk ke akun Anda
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div style={styles.errorBox}>
                <BsFillExclamationDiamondFill
                  style={{
                    marginRight: 10,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                />
                {error}
              </div>
            )}

            {/* LOADING */}
            {loading && (
              <div style={styles.loadingBox}>
                <ImSpinner2
                  style={{
                    marginRight: 10,
                    fontSize: 18,
                    animation: "spin 1s linear infinite",
                  }}
                />
                Mohon Tunggu...
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {/* USERNAME */}
              <div style={{ marginBottom: 20 }}>
                <div style={styles.inputWrap}>
                  <FiUser style={styles.inputIcon} />

                  <input
                    type="text"
                    name="email"
                    placeholder="Username"
                    onChange={handleChange}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div style={{ marginBottom: 20 }}>
                <div style={styles.inputWrap}>
                  <FiLock style={styles.inputIcon} />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* REMEMBER */}
              <div style={styles.rememberRow}>
                <label style={styles.rememberLabel}>
                  <input
                    type="checkbox"
                    style={{
                      width: 17,
                      height: 17,
                      accentColor: "#2e7d32",
                    }}
                  />
                  Ingat saya
                </label>

                <button
                  type="button"
                  style={styles.forgotBtn}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration =
                      "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration =
                      "none")
                  }
                >
                  Lupa Password ?
                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                style={styles.submitBtn}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#086422")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "#0d7a2d")
                }
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "'Nunito', sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "1300px",
    minHeight: "750px",
    backgroundColor: "#ffffff",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 10px 60px rgba(0,0,0,0.14)",
    display: "grid",
  },

  left: {
    backgroundColor: "#d8e7d2",
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },

  welcomeBox: {
    position: "absolute",
    top: 35,
    left: 35,
    backgroundColor: "#b7d3ad",
    border: "3px solid #2e7d32",
    borderRadius: "35px",
    padding: "18px 42px",
    zIndex: 10,
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  },

  welcomeText: {
    fontSize: 34,
    fontWeight: 900,
    color: "#184d2f",
    lineHeight: 1.3,
    whiteSpace: "nowrap",
    fontFamily: "'Nunito', sans-serif",
  },

  leftImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  formWrap: {
    width: "100%",
    maxWidth: "470px",
  },

  logoArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 36,
  },

  logoImg: {
    width: 100,
    height: 100,
    objectFit: "contain",
    marginBottom: 18,
  },

  appTitle: {
    fontSize: 38,
    fontWeight: 900,
    textAlign: "center",
    lineHeight: 1.3,
    color: "#111111",
    fontFamily: "'Nunito', sans-serif",
  },

  subtitle: {
    marginTop: 12,
    fontSize: 21,
    color: "#555555",
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "'Nunito', sans-serif",
  },

  errorBox: {
    backgroundColor: "#fee2e2",
    border: "1px solid #fca5a5",
    borderRadius: 14,
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    color: "#b91c1c",
    fontSize: 15,
    marginBottom: 18,
  },

  loadingBox: {
    backgroundColor: "#f3f4f6",
    border: "1px solid #d1d5db",
    borderRadius: 14,
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    fontSize: 15,
    marginBottom: 18,
  },

  inputWrap: {
    display: "flex",
    alignItems: "center",
    border: "2px solid #d1d5db",
    borderRadius: "50px",
    padding: "18px 24px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    backgroundColor: "#fff",
    transition: "border-color 0.2s",
  },

  inputIcon: {
    fontSize: 26,
    color: "#6b7280",
    marginRight: 14,
    flexShrink: 0,
  },

  input: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: 18,
    fontFamily: "'Nunito', sans-serif",
    color: "#374151",
    backgroundColor: "transparent",
  },

  rememberRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  rememberLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    color: "#374151",
    cursor: "pointer",
    gap: 8,
    fontFamily: "'Nunito', sans-serif",
  },

  forgotBtn: {
    background: "none",
    border: "none",
    color: "#6db86a",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },

  submitBtn: {
    width: "100%",
    backgroundColor: "#0d7a2d",
    color: "#ffffff",
    fontWeight: 800,
    fontSize: 20,
    padding: "18px",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    boxShadow: "0 6px 20px rgba(13,122,45,0.3)",
    transition: "background-color 0.2s",
    letterSpacing: "0.3px",
  },
};