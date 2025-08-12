import React from "react";

const PreviewModal = ({ isOpen, onClose, fileUrl, title }) => {
  if (!isOpen) return null;

  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(fileUrl);
  const isPDF = /\.pdf$/i.test(fileUrl);

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      boxSizing: "border-box",
      zIndex: 2000
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "65vw",
        maxHeight: "90vh",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxSizing: "border-box",
      }}>
        <h2 style={{ margin: 0 }}>{title}</h2>

        <div style={{ flex: 1}}>
          {isPDF && (
            <iframe
              src={fileUrl}
              title={title}
              style={{ border: "none", width: "100%", height: "100%", borderRadius: "8px" }}
            />
          )}

          {isImage && (
            <img
              src={fileUrl}
              alt={title}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px" }}
            />
          )}

          {!isImage && !isPDF && (
            <p>No hay vista previa disponible para este tipo de archivo.</p>
          )}
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          <a
            href={fileUrl}
            download
            style={{
              flex: 1,
              padding: "0.6rem",
              backgroundColor: "#198754",
              color: "white",
              borderRadius: "6px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Descargar
          </a>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "0.6rem",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
