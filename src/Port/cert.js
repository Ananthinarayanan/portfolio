import { useNavigate } from "react-router-dom";

export default function Cert() {
  const navigate = useNavigate();

  const openCertificate = () => {
    navigate("/certificate");
  };

  return (
    <div className="certificate-section">
      {/* <h2 className="cert-title">Certificates</h2> */}

      <img
        src="/java certificate.png"
        alt="Java Certificate"
        style={{ height:"650px",width: "900px" ,position:"relative",left:"400px",bottom:"20px"}}
      />

      
    </div>
  );
}