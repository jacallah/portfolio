import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT Security Operations Intern <span>May 2021 - August 2021 </span></h2>
                        <p>
                            • Initiated and completed a corporate wide change - blocked legacy authentication
                            <br></br>• Implemented regex email rules to block blackmail scams
                            <br></br>• Securely analyzed over 100 potentially malicious phishing tickets
                            <br></br>• Tools: Rapid7, Azure Active Directory, Proofpoint, Cherwell, etc.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT Service Analyst Intern <span>May 2019 - August 2019</span></h2>
                        <p>
                          • Provided tier two hardware and software tech support for over 1000 systems within the environment
                          <br></br>• Personally imaged and deployed over 100 new Windows 10 computers to users
                          <br></br>• Worked heavily with ticket system, PDQ Deploy, Windows Admin Tools, VMWare, DUO, and Microsoft 365
                          <br></br>• Instructed and taught end-users how to use new and updated software and troubleshoot issues.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Team Lead <span>September 2019 - May 2022</span></h2>
                        <p>
                          • <b>2021 - 2022:</b> Develop a U-Net convolutional neural network to segment cell adhesions using Python Keras and Tensorflow
                          <br></br>• <b>2020 - 2021:</b> Develop machine learning software that implements sentiment analysis to convert emojis into languages. Sponsored by the Department of Defense
                          <br></br>   • Organize timeline and delegate/collaborate with team
                          <br></br>• <b>2019 - 2020:</b> Oversee Web Development and Internal Application Development
                          <br></br>   • Team worked on creating and implementing a new application for Little Brothers non-profit to improve vehicle tracking - use GitLab/GitHub
                          <br></br>   • Penetration testing (with Burp/Hashcat etc.) and Ticket system in Jira/Confluence</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
