import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image'
import flattenJSON from "../utilities/flatten";

function Cat({props}) {
  const flattenedProps = flattenJSON(props);
  //console.log(flattenedProps);
  const openNewPage = (newPageUrl) => {
   window.open(newPageUrl, "_blank") //to open new page
}

  return (
    <Card className="cats__item">
      <Card.Img className="cats__image"
        variant="top"
        src={flattenedProps.image_url}
        alt='Image missing'
      />
      <Card.Body onClick={() => openNewPage(flattenedProps.vetstreet_url)}>
        <Card.Title>{flattenedProps.name}</Card.Title>
        <Card.Text>{flattenedProps.origin}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cat;
