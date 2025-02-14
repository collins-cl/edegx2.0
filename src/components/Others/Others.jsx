/* eslint-disable react/prop-types */
import {
  MdBookmark,
  MdOutlineChatBubble,
  MdSupportAgent,
} from "react-icons/md";
import "../Others/Others.scss";
import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaTrash } from "react-icons/fa6";
import { BsPatchQuestion } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
} from "@mui/material";

const Others = () => {
  const [support, setSupport] = useState(false);
  const [faq, setFaq] = useState(false);
  const [about, setAbout] = useState(false);
  const [logout, setLogOut] = useState(false);
  const [reset, setDelete] = useState(false);

  return (
    <div className="others">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="others-title">Others</div>

            <div className="security-container">
              <div className="card-1">
                <div className="box" onClick={() => setSupport(true)}>
                  <div className="flex-1">
                    <div className="avatar">
                      <MdSupportAgent className="icon" />
                    </div>
                    <div className="info">
                      <h3>Help and Support</h3>

                      <p>24hours provision of support and assistance</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box" onClick={() => setAbout(true)}>
                  <div className="flex-1">
                    <div className="avatar">
                      <BsPatchQuestion className="icon" />
                    </div>
                    <div className="info">
                      <h3>About Jagaban</h3>

                      <p>Understand the fire behind the motivation</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box" onClick={() => setLogOut(true)}>
                  <div className="flex-1">
                    <div className="avatar">
                      <HiOutlineArrowRight className="icon" />
                    </div>
                    <div className="info">
                      <h3>Log Out</h3>

                      <p>Sign out of Jagaban App</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box delete" onClick={() => setDelete(true)}>
                  <div className="flex-1">
                    <div className="avatar">
                      <FaTrash className="icon" />
                    </div>
                    <div className="info">
                      <h3>Delete Account</h3>

                      <p>This action will completely erase your account</p>
                    </div>
                  </div>

                  <div className="flex-2">
                    <FaAngleRight className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={support}
          onClose={() => setSupport(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="support-modal">
            <div className="quit-btn" onClick={() => setSupport(false)}>
              <h3>Help and Support</h3>

              <LiaTimesSolid className="icon" />
            </div>

            <div className="options">
              <div className="box">
                <div className="flex-1">
                  <MdOutlineChatBubble className="icon" />
                  <div className="title">Chat with support staff</div>
                </div>

                <div className="flex-2">
                  <FaAngleRight className="icon" />
                </div>
              </div>

              <div className="box" onClick={() => setFaq(true)}>
                <div className="flex-1">
                  <MdBookmark className="icon" />
                  <div className="title">View Knowledge base (FAQs Topics)</div>
                </div>

                <div className="flex-2">
                  <FaAngleRight className="icon" />
                </div>
              </div>
            </div>
            <FAQ faq={faq} setFaq={setFaq} />
          </div>
        </Modal>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={about}
          onClose={() => setAbout(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="about-modal">
            <div className="section">
              <div className="info">
                <p> Hello, </p>
                <p>
                  The future of digital finance rests on the shoulders of
                  cryptocurrencies. Now, you can send, receive, and transact
                  crypto and gift cards fast, seamlessly, and efficiently.
                </p>
                <p>
                  Whether you are new to crypto or already part of the
                  community, Jagaban is the leading crypto platform that aims at
                  improving crypto adoption across Africa, while leveraging on
                  innovation and exciting technology.
                </p>
                <p>
                  Our platform is built to ensure your overall user experience
                  is positive, and your cross border transactions are possible.
                </p>
                <p> Do More with Crypto!</p>
              </div>

              <div className="btns">
                <div className="terms">Terms and Conditions</div>
                <div className="terms policy">Privacy Policy</div>
              </div>

              <div className="copy">(c) Jagaban Technologies 2025</div>
            </div>
            <div className="section empty-img"></div>
          </div>
        </Modal>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={logout}
          onClose={() => setLogOut(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="logout-modal">
            <div className="quit-btn" onClick={() => setLogOut(false)}>
              <LiaTimesSolid className="icon" />
            </div>

            <div className="title">Log Out</div>

            <p>Are you sure you want to log out of your Jagaban account?</p>

            <div className="actions">
              <div className="yes">Yes, Logout</div>
              <div className="yes cancel" onClick={() => setLogOut(false)}>
                Cancel
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <div className="modal">
        <Modal
          disableAutoFocus
          open={reset}
          onClose={() => setDelete(false)}
          sx={{ background: "rgba(114, 113, 113, 0.58)" }}
        >
          <div className="logout-modal">
            <div className="quit-btn" onClick={() => setDelete(false)}>
              <LiaTimesSolid className="icon" />
            </div>

            <div className="title">Delete Jagaban Account</div>

            <p>
              Your account will be permanently deleted in 30days. Please ensure
              your wallets are emptied and savings plans stopped before then.
              Your account will be accessible within the 30 days period.
            </p>

            <div className="actions">
              <div className="yes">Yes, Delete</div>
              <div className="yes cancel" onClick={() => setDelete(false)}>
                Cancel
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const FAQ = ({ faq, setFaq }) => {
  return (
    <Modal
      disableAutoFocus
      open={faq}
      onClose={() => setFaq(false)}
      sx={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="faq-pop">
        <div className="quit-btn" onClick={() => setFaq(false)}>
          <h3>FAQs</h3>

          <LiaTimesSolid className="icon" />
        </div>

        <div className="accordion">
          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaba App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion-body">
            <AccordionSummary expandIcon={<FaAngleDown />} className="summary">
              How do I download the Jagaban App?
            </AccordionSummary>
            <AccordionDetails className="details">
              To get the App, Use the IOS or Android store links to download it.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Modal>
  );
};

export default Others;
