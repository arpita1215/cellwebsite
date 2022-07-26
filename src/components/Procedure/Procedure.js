import Navsm from "../Navbar/Navsm";
import step1 from "../../images/image@procedure/step1.png";
import step2 from "../../images/image@procedure/step2.png";
import step3 from "../../images/image@procedure/step3.png";
import step4 from "../../images/image@procedure/step4.png";
import step5 from "../../images/image@procedure/step5.png";
import Footer from "../utils/Footer";

const Procedure = () => {
  return (
    <>
      <Navsm />
      <div className="container-procedure ">
        <div className="Heading-procedure ">
          Placement Procedure
          <div className="procedure-border"></div>
        </div>
        <div className="procedures">
          <div className="procedure">
            <img src={step1} alt="step1" />
            <span>
              Interested recruiters mail us the JD at &nbsp;
              <a href="mailto:tnp@mmmut.ac.in">tnp@mmmut.ac.in</a> (including
              CTC, Job Role, Eligible Streams and other relevant details)
            </span>
          </div>
          <div className="procedure">
            <img src={step2} alt="step2" />
            <span>
              We share it among the eligible and interested candidates through
              Superset Platform/Notice & GForm.
            </span>
          </div>
          <div className="procedure">
            <img src={step3} alt="step3" />
            <span>
              Within a few working days, we share the excel containing list of
              interested & eligible candidates to the recruiter.
            </span>
          </div>
          <div className="procedure">
            <img src={step4} alt="step4" />
            <span>
              Recruiter can inform about the dates required for process to us
              and we coordinate accordingly till the successful completion.
            </span>
          </div>
          <div className="procedure">
            <img src={step5} alt="step5" />
            <span>
              The company rolls out the offer letter either to T&P or to the
              candidates, and we coordinate accordingly.
            </span>
          </div>
        </div>
        <div className="button-text">
          <div>Interested in Recruitment?</div>
        </div>
        <div className="button-procedure">
          <button className="mail-procedure-button">
            <strong>Mail To:</strong> tnp@mmmut.ac.in
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Procedure;
