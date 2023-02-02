import laptopImg from '../../assets/laptop.png'

export default function DemoApp() {
  return (
    <>
      <div className="demoapp-wrapper">
        <div className="laptop">
          <img src={laptopImg} alt="laptop mockup" />
        </div>
        <div className="bg-blue">
          <div className="demoapp-info wrapper">
            <h1>Here is the full demo of the App</h1>
            <p>
              It is comes with Admin panel Admin panel connected to colleges
              Only activated and authenticated machines can use this application
              It can Show list of students
            </p>
          </div>
          <div className="contact-info wrapper">
            <h3>
              If you want this service or other CWBEdu services to your
              institution
            </h3>
            <button className="btn-contact">Contact Us</button>
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
