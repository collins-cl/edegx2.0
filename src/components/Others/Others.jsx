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

  return (
    <div className="others">
      <div className="wrapper">
        <div className="container">
          <div className="border">
            <div className="others-title">others</div>

            <div className="security-container">
              <div className="card-1">
                <div className="box">
                  <div className="flex-1">
                    <div className="avatar">
                      <MdSupportAgent className="icon" />
                    </div>
                    <div className="info">
                      <h3>Help and Support</h3>

                      <p>24hours provision of support and assistance</p>
                    </div>
                  </div>

                  <div className="flex-2" onClick={() => setSupport(true)}>
                    <FaAngleRight className="icon" />
                  </div>
                </div>

                <div className="box">
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

                <div className="box">
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

                <div className="box delete">
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
      <div className="addaccount-pop">
        <div className="title">
          <h3>FAQs</h3>

          <div className="quit-btn" onClick={() => setFaq(false)}>
            <LiaTimesSolid className="icon" />
          </div>
        </div>

        <div className="accordion">
          <Accordion>
            <AccordionSummary expandIcon={<FaAngleDown />}>
              jhihih
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Modal>
  );
};

export default Others;
