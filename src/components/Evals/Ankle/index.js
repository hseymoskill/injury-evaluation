import {
  Button,
  Form,
  Col,
  Row,
  Collapse,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Header from "../../Page/Header";
import "./style.css";
import { useState } from "react";

function Ankle() {
  const [funcOpen, setFuncOpen] = useState(false);
  const [myoOpen, setMyoOpen] = useState(false);
  const [dermOpen, setDermOpen] = useState(false);
  const [specialOpen, setSpecialOpen] = useState(false);
  const [mmtOpen, setMmtOpen] = useState(false);
  const [romOpen, setRomOpen] = useState(false);
  const [palpOpen, setPalpOpen] = useState(false);
  const [inspectOpen, setInspectOpen] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to expand
    </Tooltip>
  );

  var strengthOptions = [
    "",
    "5",
    "4+",
    "4",
    "4-",
    "3+",
    "3",
    "3-",
    "2+",
    "2",
    "2-",
    "1+",
    "1",
    "1-",
    "0",
  ];

  return (
    <div className="ankleContainer">
      <Header title="Ankle Evaluation" />
      <div className="pageContainer">
        <Form className="">
          <Row>
            <Col id="leftSide" l={6} m={12}>
              <div id="patientDiv" className="formDiv">
                <h3>Patient Information</h3>
                <Form.Group className="mb-3" controlId="text">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter patient's name"
                  />
                  <Form.Text className="text-muted col-6">
                    Please enter patient's full name.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="dob">
                  <Form.Label>Patient DOB</Form.Label>
                  <Form.Control type="date" placeholder="DOB" />
                  <Form.Text className="text-muted">
                    Please enter patient's date of birth.
                  </Form.Text>
                </Form.Group>
              </div>

              <div id="hpiDiv" className="formDiv">
                <h3>History</h3>
                <Form.Group className="mb-3" controlId="laterality">
                  <Form.Label>Laterality</Form.Label>
                  <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                      inline
                      label="Left"
                      name="lateralityGroup"
                      type="radio"
                      id={`inline-radio-left`}
                    />
                    <Form.Check
                      inline
                      label="Right"
                      name="lateralityGroup"
                      type="radio"
                      id={`inline-radio-right`}
                    />
                    <Form.Check
                      inline
                      label="Bilateral"
                      name="lateralityGroup"
                      type="radio"
                      id={`inline-radio-bilateral`}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="doi">
                  <Form.Label>When did the injury occur?</Form.Label>
                  <Form.Control type="date" placeholder="DOI" />
                </Form.Group>
              </div>
            </Col>

            <Col id="rightSide" l={6} m={12}>
              <div id="inspectionDiv" className=" formDiv">
              <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setInspectOpen(!inspectOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={inspectOpen}
                  >
                    Inspection
                  </h3>
                </OverlayTrigger>
                <Collapse in={inspectOpen}>
                <div>
                <Form.Group className="mb-3" controlId="inspectionCheck">
                  <Form.Label>Check Applicable Boxes:</Form.Label>
                  <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                      inline
                      label="Deformity"
                      name="inspectionGroup"
                      type="checkbox"
                      id={`inline-checkbox-deformity`}
                    />
                    <Form.Check
                      inline
                      label="Swelling"
                      name="inspectionGroup"
                      type="checkbox"
                      id={`inline-checkbox-swelling`}
                    />
                    <Form.Check
                      inline
                      label="Discoloration"
                      name="inspectionGroup"
                      type="checkbox"
                      id={`inline-checkbox-discoloration`}
                    />
                    <Form.Check
                      inline
                      label="Scars"
                      name="inspectionGroup"
                      type="checkbox"
                      id={`inline-checkbox-scars`}
                    />
                    <Form.Check
                      inline
                      label="Deformity"
                      name="inspectionGroup"
                      type="checkbox"
                      id={`inline-checkbox-deformity`}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="inspectionNotes">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </div>
                </Collapse>
              </div>

              <div id="palpationDiv" className=" formDiv">
              <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setPalpOpen(!palpOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={palpOpen}
                  >
                    Palpation
                  </h3>
                </OverlayTrigger>
                <Collapse in={palpOpen}>
                <div>
                <Form.Group className="mb-3" controlId="palpationCheck">
                  <Form.Label>Check Applicable Boxes:</Form.Label>
                  <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                      inline
                      label="Abnormal Temp"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-abTemp`}
                    />
                    <Form.Check
                      inline
                      label="Swelling"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-swelling`}
                    />
                    <Form.Check
                      inline
                      label="Point Tenderness"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-pointTender`}
                    />
                    <Form.Check
                      inline
                      label="Crepitus"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-crepitus`}
                    />
                    <Form.Check
                      inline
                      label="Deformity"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-deformity`}
                    />
                    <Form.Check
                      inline
                      label="Muscle Spasm"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-spasm`}
                    />
                    <Form.Check
                      inline
                      label="Abnormal Pulse"
                      name="palpationGroup"
                      type="checkbox"
                      id={`inline-checkbox-abPulse`}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="palpationNotes">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </div>
                </Collapse>
              </div>

              <div id="romDiv" className=" formDiv">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setRomOpen(!romOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={romOpen}
                  >
                    ROM
                  </h3>
                </OverlayTrigger>
                <Collapse in={romOpen}>
                  <div>
                    <h4>Passive</h4>
                    <h4>Active</h4>
                  </div>
                </Collapse>
              </div>

              <div id="mmtDiv" className=" formDiv">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setMmtOpen(!mmtOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={mmtOpen}
                  >
                    MMT
                  </h3>
                </OverlayTrigger>
                <Collapse in={mmtOpen}>
                  <div>
                    <Row>
                      <Form.Label as={Col} xs={6}></Form.Label>
                      <Form.Label as={Col} xs={2}>
                        Left
                      </Form.Label>
                      <Form.Label as={Col} xs={2}>
                        Right
                      </Form.Label>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Dorsiflexion
                      </Form.Label>
                      <Form.Group as={Col} xs={3} controlId="dorsiLeftStrength">
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="dorsiRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Plantarflexion
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="plantarLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="plantarRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Inversion
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="inversionLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="inversionRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Eversion
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="eversionLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="eversionRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Great Toe Flexion
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="greatToeFlexLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="greatToeFlexRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Great Toe Extension
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="greatToeExtensionLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="greatToeExtensionRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Toes 2-5 Flexion
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="smallToesFlexLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="smallToesFlexRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label as={Col} xs={6}>
                        Toes 2-5 Extension
                      </Form.Label>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="smallToesExtensionLeftStrength"
                      >
                        <Form.Control as="select" name="leftStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        xs={3}
                        controlId="smallToesExtensionRightStrength"
                      >
                        <Form.Control as="select" name="rightStrength">
                          {strengthOptions.map((val) => (
                            <option value={val}>{val}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Row>
                  </div>
                </Collapse>
              </div>

              <div id="specialTestsDiv" className=" formDiv">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setSpecialOpen(!specialOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={specialOpen}
                  >
                    Special Tests
                  </h3>
                </OverlayTrigger>
                <Collapse in={specialOpen}>
                  <p>Expanded</p>
                </Collapse>
              </div>

              <div id="dermDiv" className=" formDiv">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setDermOpen(!dermOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={dermOpen}
                  >
                    Dermatomes
                  </h3>
                </OverlayTrigger>
                <Collapse in={dermOpen}>
                  <Form.Group className="mb-3" controlId="dermotomeNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Collapse>
              </div>

              <div id="myoDiv" className=" formDiv">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setMyoOpen(!myoOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={myoOpen}
                  >
                    Myotomes
                  </h3>
                </OverlayTrigger>
                <Collapse in={myoOpen}>
                  <Form.Group className="mb-3" controlId="myotomeNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Collapse>
              </div>

              <div id="functionalDiv" className="formDiv">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <h3
                    onClick={() => setFuncOpen(!funcOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={funcOpen}
                  >
                    Functional Testing
                  </h3>
                </OverlayTrigger>

                <Collapse in={funcOpen}>
                  <Form.Group className="mb-3" controlId="functionalNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Collapse>
              </div>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Ankle;
