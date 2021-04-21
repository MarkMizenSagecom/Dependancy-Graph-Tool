import styled from "styled-components";

import Textarea from "carbon-react/lib/__experimental__/components/textarea";
import Button from "carbon-react/lib/components/button";
import { useState } from "react";

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form`
  display: block;
  margin-top: 2rem;
`;

function NewComment({ onSubmit, onCancel }) {
  const [message, setMessage] = useState("");
  return (
    <Form onSubmit={() => onSubmit(message)}>
      <Textarea
        label="Add a comment"
        required
        rows={2}
        value={message}
        onChange={(ev) => setMessage(ev.target.value)}
      />
      <Actions>
        <Button buttonType="secondary" type="reset" onClick={onCancel}>
          Cancel
        </Button>
        <Button buttonType="primary" ml={2} type="submit">
          Send
        </Button>
      </Actions>
    </Form>
  );
}

export default NewComment;
