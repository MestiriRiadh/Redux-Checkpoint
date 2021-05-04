import "./App.css";
import ListTask from "./Componment/ListTask";
import { Container, Flex } from "@chakra-ui/react";
import Addtask from "./Componment/Addtask";
import Filter from "./Componment/Filter";
import { useState } from "react";
function App() {
  const [statue, setStatue] = useState("all");
  return (
    <Container>
      <Flex direction="column" justify="center" h="100vh">
        <Addtask />
        <Filter setStatue={setStatue} />
        <ListTask statue={statue} />
      </Flex>
    </Container>
  );
}

export default App;
