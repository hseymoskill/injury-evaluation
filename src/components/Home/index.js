import { Button, Form } from "react-bootstrap";
import Header from "../Page/Header";

function Home() {
  return (
    <div className="homeContainer">
      <Header title="Home Page" />
      <div className="pageContainer">
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="formBasicBodyPart">
            <Form.Label>What body part would you like to evaluate?</Form.Label>
            <Form.Control
              as="select"
              name="bodyPart"
              // defaultValue={this.props.inputValues.state}
              // onChange={this.props.handleChange}
            >
              <option value="ankle">Ankle</option>
              <option value="knee">Knee</option>
              <option value="hip">Hip</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary">Next</Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;
