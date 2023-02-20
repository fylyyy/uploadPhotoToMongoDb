import { Container, Image } from "react-bootstrap";

const ImageContainer = (props) => {
  return (
    <Container className="mt-5 w-50 h-50">
      <Image key={props.fileUrl} fluid src={props.fileUrl}></Image>
    </Container>
  )
}
export default ImageContainer;
