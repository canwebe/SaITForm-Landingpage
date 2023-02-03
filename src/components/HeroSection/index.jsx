export default function HeroSection({ targetRef }) {
  return (
    <div className="wrapper hero">
      <h4 className="hero-subheader">SaITForm is for SaIT College Students</h4>
      <h1 className="hero-header">An Online Student Application Form</h1>
      <p className="hero-para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam fugit
        repudiandae placeat ex numquam nam voluptas, est cupiditate vel atque
        vitae iusto quo at aut similique magnam odio ipsam eum, fugiat iure
        officiis provident? Hic unde consequatur voluptatem nisi vero! Aut, hic
        perspiciatis. Animi, voluptatem! Minus accusantium consequuntur
        architecto quod libero laudantium aperiam iste fugiat.
      </p>
      <div className="hero-btndiv">
        <button
          onClick={() => targetRef.current.scrollIntoView()}
          className="btn-knowmore"
        >
          Know More
        </button>
        <a
          href="https://www.canwebe.tech/form/contact"
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
