import styled from "styled-components";

import Textarea from "carbon-react/lib/__experimental__/components/textarea";
import Button from "carbon-react/lib/components/button";
import { useState } from "react";

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
`;

const Form = styled.form`
  display: block;
  margin-top: 2rem;
`;

function NewComment({ onSubmit, onCancel }) {
  const [message, setMessage] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(message.trim());
    setMessage("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        label="Add a comment"
        required
        rows={2}
        value={message}
        onChange={(ev) => setMessage(ev.target.value)}
      />
      <Actions>
        <Button buttonType="primary" ml={2} type="submit">
          Send
        </Button>
        <Button buttonType="secondary" type="reset" onClick={onCancel}>
          Cancel
        </Button>
      </Actions>
    </Form>
  );
}

export default NewComment;
