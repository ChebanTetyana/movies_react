function Footer() {
    return <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">"Through hardship to the stars."</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Git Repository</a>
            </div>
          </div>
        </footer>
}

export default Footer;