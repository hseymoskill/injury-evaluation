import { Button, Form, Col, Row } from "react-bootstrap";
import Header from "../../Page/Header";

function Ankle() {
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
          <div id="patientDiv">
            <h3>Patient Information</h3>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="name" placeholder="Enter patient's name" />
              <Form.Text className="text-muted col-6">
                Please enter patient's full name.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Patient DOB</Form.Label>
              <Form.Control type="date" placeholder="DOB" />
              <Form.Text className="text-muted">
                Please enter patient's date of birth.
              </Form.Text>
            </Form.Group>
          </div>

          <div id="lateralityDiv">
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
          </div>

          <div id="inspectionDiv">
            <h3>Inspection</h3>

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

          <div id="palpationDiv">
            <h3>Palpation</h3>
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

          <div id="romDiv">
            <h3>ROM</h3>
            <h4>Passive</h4>
            <h4>Active</h4>
          </div>

          <div id="mmtDiv">
            <h3>MMT</h3>

            <Row>
              <Form.Label as={Col}></Form.Label>
              <Form.Label as={Col}>Left</Form.Label>
              <Form.Label as={Col}>Right</Form.Label>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Dorsiflexion</Form.Label>
              <Form.Group as={Col} controlId="dorsiLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="dorsiRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Plantarflexion</Form.Label>
              <Form.Group as={Col} controlId="plantarLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="plantarRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Inversion</Form.Label>
              <Form.Group as={Col} controlId="inversionLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="inversionRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Eversion</Form.Label>
              <Form.Group as={Col} controlId="eversionLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="eversionRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Great Toe Flexion</Form.Label>
              <Form.Group as={Col} controlId="greatToeFlexLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="greatToeFlexRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Great Toe Extension</Form.Label>
              <Form.Group as={Col} controlId="greatToeExtensionLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="greatToeExtensionRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Toes 2-5 Flexion</Form.Label>
              <Form.Group as={Col} controlId="smallToesFlexLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="smallToesFlexRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label as={Col}>Toes 2-5 Extension</Form.Label>
              <Form.Group as={Col} controlId="smallToesExtensionLeftStrength">
                <Form.Control as="select" name="leftStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="smallToesExtensionRightStrength">
                <Form.Control as="select" name="rightStrength">
                  {strengthOptions.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>
          </div>

          <div id="specialTestsDiv">
            <h3>Special Tests</h3>
          </div>

          <div id="dermDiv">
            <h3>Dermatomes</h3>
          </div>

          <div id="myoDiv">
            <h3>Myotomes</h3>
          </div>

          <div id="functionalDiv">
            <h3>Functional Testing</h3>
            <Form.Group className="mb-3" controlId="functionalNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Ankle;
