export default function ProblemSection() {
  const problems = [
    'Traditional forms are usually handwritten and can be easily lost or destroyed',
    'Digitizing application forms ensures verification of details without manual entry',
    'The data can easily managed and search, sorting procedures can also be performed',
    'The data can be generated in any modern formats like pdf, csv, excel',
  ]
  return (
    <div className="wrapper problem-wrapper">
      <div className="problem-left">
        <h2 className="header">Problems we faced</h2>
      </div>
      <div className="problem-right">
        {problems.map((problem, i) => (
          <div key={i} className="problem-box">
            <div className="problem-box-content">
              <div className="number">{i + 1}</div>
              <p>{problem}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
