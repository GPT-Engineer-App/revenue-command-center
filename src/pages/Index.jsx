import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton } from "@chakra-ui/react";
import { FaPhone, FaClock, FaSmile, FaUserCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <HStack spacing={8} width="100%" justifyContent="space-around">
          <StatBox icon={FaPhone} label="Calls Answered" value="1,500" change="+10%" />
          <StatBox icon={FaClock} label="Avg Handling Time" value="5 mins" change="-2%" />
          <StatBox icon={FaSmile} label="Customer Satisfaction" value="85%" change="+5%" />
          <StatBox icon={FaUserCheck} label="Agent Availability" value="90%" change="+3%" />
        </HStack>

        <Box width="100%" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="2xl" mb={4}>
            Sales Overview
          </Text>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxNTY5MDgyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" />
        </Box>
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, value, change }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="200px" textAlign="center">
    <IconButton aria-label={label} icon={React.createElement(icon)} size="lg" isRound mb={4} />
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>
        <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} />
        {change}
      </StatHelpText>
    </Stat>
  </Box>
);

export default Index;
