

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About/Skills Section */}
            <div>
                <h6 className="footer-title text-lg font-bold">About Me</h6>
                <p className="text-sm mb-4">
                   Student | Problem Solver | Web Developer.
                </p>
                <a href="mailto:arsohan101@gmail.com" className="link link-hover">arsohan101@gmail.com</a>
            </div>
    
            {/* Navigation Links */}
            <nav>
                <h6 className="footer-title text-lg font-bold">Links</h6>
                <div className="flex space-x-4 mb-4">
                    <a href="https://md-arif-shahriar-portfolio.netlify.app/work" className="link link-hover">Projects</a>
                    <a href="https://md-arif-shahriar-portfolio.netlify.app/skill" className="link link-hover">Skills</a>
                    <a href="mailto:arsohan101@gmail.com" className="link link-hover">Contact</a>
                </div>
            </nav>
    
            {/* Social Media & Legal */}
            <nav>
                <h6 className="footer-title text-lg font-bold">Connect</h6>
                <div className="flex space-x-4 mb-4">
                    <a href="https://www.linkedin.com/in/md-arif-shahriar-sohan-4080321b2/" target="_blank" className="link link-hover">LinkedIn</a>
                    <a href="https://github.com/ar-sohan" target="_blank" className="link link-hover">GitHub</a>
                    <a href="https://www.facebook.com/arif.sohan.77/" target="_blank" className="link link-hover">Facebook</a>
                </div>
                <a href="/terms" className="link link-hover">Terms of Use</a>
            </nav>
        </div>
    
        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-neutral-content/20 pt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Md Arif Shahriar. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;