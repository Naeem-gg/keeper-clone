const year = new Date().getFullYear();
const Footer = ()=>{
    return(
        <footer className="footer">
        
    <p>Copyright @ {year}</p>
        </footer>
    );
}

export default Footer;