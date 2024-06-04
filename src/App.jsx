import QRCode from "qrcode";
import { useState } from "react";
const App = () => {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQrCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };
  return (
    <section className="app">
      <h1>Qr Code Generator</h1>
      <input
        type="text"
        placeholder="paste you link"
        value={url}
        onChange={(evt) => {
          setUrl(evt.target.value);
        }}
      />
      <button onClick={GenerateQrCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt="Generated QR Code" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </section>
  );
};

export default App;
