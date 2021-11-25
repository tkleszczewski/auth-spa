import { Heading2, Heading3 } from "../../../components/reusable/Heading";
import { ListItem } from "../../../components/reusable/ListItem";
import { Paragraph } from "../../../components/reusable/Paragraph";
import { UnorderedList } from "../../../components/reusable/UnorderedList";

const Home: React.FC = () => {
  return (
    <div>
      <Heading2>JWT auth app</Heading2>
      <Paragraph>
        MERN stack application with JWT authentication/authorization
      </Paragraph>
      <Heading3>Technologies used in this project:</Heading3>
      <UnorderedList>
        <ListItem>React</ListItem>
        <ListItem>Typescript</ListItem>
        <ListItem>NodeJS (expressjs)</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Redux toolkit</ListItem>
        <ListItem>HTML5</ListItem>
        <ListItem>CSS3</ListItem>
        <ListItem>Styled components</ListItem>
      </UnorderedList>
    </div>
  );
};

export default Home;
