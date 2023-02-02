export default function SolutionSection() {
  const solutions = [
    {
      img: '/public/main-snap.jpg',
      header: 'Home Screen of the application form',
      data: [
        'Enter candidate name and mobile number',
        'It will fetch candidate data from database',
        'If candidate data does not exist then it will proceed',
        'Get form will give stored students form',
      ],
    },
    {
      img: '/public/form-snap.jpg',
      header: 'Main Application Form Filling',
      data: [
        'Detailed entry of user info with photo upload',
        'Entry of correct information is required',
        'Dynamic Required Fields',
        'New Form button to start new',
      ],
    },
    {
      img: '/public/pdf-snap.jpg',
      header: 'Generated PDF of the Application Form',
      data: [
        'Check entered info before finalize',
        'PDF will generate consent form dynamically',
        'After finalization form will be stored in college DB',
      ],
    },
  ]

  return (
    <div className="problem-solution wrapper">
      <div className="solution-topbar">
        <h3 className="header">Problem Solution</h3>
        <h1>
          Digitized Application <span className="blue">filling</span> and Data{' '}
          <span className="red">collection</span> process.
        </h1>
      </div>
      {solutions.map((solution, i) => (
        <div key={i} className="snap-wrapper">
          <div className="snap-img">
            <img src={solution.img} alt={solution.header} />
          </div>
          <div className="snap-info">
            <h2>{solution.header}</h2>
            <ul>
              {solution.data.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
