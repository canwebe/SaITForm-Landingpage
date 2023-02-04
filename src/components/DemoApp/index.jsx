import laptopImg from '../../assets/laptop.png'

export default function DemoApp() {
  return (
    <>
      <div className="demoapp-wrapper">
        <div className="laptop">
          <img src={laptopImg} alt="laptop mockup" />
          <iframe
            src="https://www.youtube.com/embed/UyRXxt3sYwo?start=79"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="bg-blue">
          <div className="demoapp-info wrapper">
            <h1>Here is the full demo of the App</h1>
            <p>
              It comes with Admin which is connected to college DataBase. Admin
              panel can only be access by authenticated and activated system
              only. Admin panel comes with getting list of students, additional
              info, edit info, generated pdf, searching , sorting etc.
            </p>
          </div>
          <div className="contact-info wrapper">
            <h3>
              If you want this service or other CWBEdu services to your
              institution
            </h3>
            <a
              href="https://www.canwebe.tech/form/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact"
            >
              Contact Us
            </a>
            <p>
              Designed and Developed By{' '}
              <a
                href="https://canwebe.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                CanWeBe!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
