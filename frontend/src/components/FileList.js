import { Container } from "react-bootstrap";
import ImageContainer from "./ImageContainer";

const FileList = (props) => {
  return (
    <Container>
      {props.fileUrls.map((image) => (
        <ImageContainer fileUrl={image} />
      ))}
    </Container>
  );
};

export default FileList;
