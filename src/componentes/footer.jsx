import "../css/footer.css";
import Links from "./links.jsx";



export default function Footer() {
  return (
      <footer className="footer" role="contentinfo" >
          <div class="row1-owner">
            <a href="/">© 2025 Nicolas Mafone</a>
          </div>
            <div class="row2-footer-links">
              <Links></Links>
            </div>
          <div className="row3-return-to-top">
            <a class="top" href="#top">Volver arriba</a>
          </div>

      </footer>
);
}