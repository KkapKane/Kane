import "../styles/title.scss"

export default function Title() {
  return (
    <div className='title'>
        <div className="intro">
      <div id='line-1'> HI I'M KANE,</div>
      <div id='line-2'>A WEB <span id="dev">DEV</span></div>

        </div>
      <div id="description"> I'VE BEEN PROGRAMMING FOR 4 YEARS WITH 1 YEAR IN WEB DEV. LETS CONNECT</div>
      <div className="button-container">
      <span id="project-btn">projects</span>
      <span id="connect-btn">connect</span>
      </div>

    </div>

  );
}
