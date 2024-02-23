
import React from "react"

const Loading  = () => {


    return (
        <div style={styles.container}>
          <div style={styles.loader}></div>
          <p style={styles.text}>Yükleniyor...</p>
        </div>
      );
    };
    
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
      loader: {
        border: "8px solid #f3f3f3",
        borderTop: "8px solid #3498db",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        animation: "spin 1s linear infinite",
      },
      text: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "bold",
      },
      "@keyframes spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    };


export default Loading