import styled from "styled-components";

const FormControlContainer = styled.div``;

const FormLabel = styled.label`
  font-size: 1.4rem;
  display: block;
  padding: 8px 0;
`;

const FormInput = styled.input`
  width: 100%;
  background-color: var(--background-color);
  border: 1px solid var(--text-color);
  padding: 8px;
  font-size: 1.3rem;
  border-radius: 4px;
  color: var(--text-color);
  }
`;

export { FormControlContainer, FormLabel, FormInput };
