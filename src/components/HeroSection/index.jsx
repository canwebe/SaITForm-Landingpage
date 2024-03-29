export default function HeroSection({ targetRef }) {
  return (
    <div className="wrapper hero">
      <h4 className="hero-subheader">SaITForm is for SaIT College Students</h4>
      <h1 className="hero-header">Digitized student's admission form</h1>
      <p className="hero-para">
        This is one of the services of CWBEdu. This is basically an admissions
        form made for SaIT College. SaITForm completely digitizes the
        application form filling process and also stores the student data in the
        college's database. The admin panel makes it easy to manage and search
        data.
      </p>
      <div className="hero-btndiv">
        <button
          onClick={() => targetRef.current.scrollIntoView()}
          className="btn-knowmore"
        >
          Know More
        </button>
        <a
          href="https://www.canwebe.in/form/contact?refer=https://cwbeduform.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contact"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
