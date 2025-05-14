import React from 'react';

function ResumeButton() {
  return (
    <section className="my-5 text-center">
      <a href="/assets/resume.pdf" download>
        <button className="btn btn-dark">Download Resume</button>
      </a>
    </section>
  );
}

export default ResumeButton;
