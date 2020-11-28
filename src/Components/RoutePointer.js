import styled from "styled-components";

const RoutePointer = styled.a.attrs((props) => ({
  id: props.id,
}))`
  visibility: hidden;
`;

export default RoutePointer;
