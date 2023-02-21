import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageContainer = (props) => {
  return (
      <LazyLoadImage className="w-50 mt-5" key={props.fileUrl}  src={props.fileUrl}></LazyLoadImage>
  )
}
export default ImageContainer;
