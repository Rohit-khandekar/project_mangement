import React, { useState } from 'react';
import { Box, Button, Card, Flex, FormControl, FormLabel, Input, Select, SimpleGrid, Text } from '@chakra-ui/react';
import { Client, Databases, ID } from 'appwrite';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        Startdate: "11-11-2023",
        Enddate: "12-12-2023",
        Reason: "For Business",
        Type: "internal",
        Division: "Filters",
        Category: "Quality A",
        Priority: "High",
        Department: "Strategy",
        Location: "Pune",
        ProjectName: "", 
    });

    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputStartDateChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputEndDateChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async () => {
        console.log(formData);
        try {
            const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('651525be318d3396ab36');
            
            const databases = new Databases(client);

            const response = await databases.createDocument(
                '651986d9524fd55c4ce1', // Replace with your Appwrite database ID
                '65198713b0e1840cce11', // Replace with your Appwrite collection ID
                ID.unique(),
                formData
            );
       
            console.log(response);
            setMessage("Project created successfully!");
        } catch (error) {
            console.error(error);
            setMessage("Failed to create project. Please try again later.");
        }
    };

    return (
        <Card
            w={{ base: "90%", md: "97%", lg: "97%" }}
            m="auto"
            ml="20px"
            borderRadius="lg"
            p="6"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            mb={"50px"}
        >
            <Flex flexDirection={{ base: "column", lg: "row" }}>
                <Box spacing="4" w={{ base: "100%", lg: "98%" }} mb={5} >
                    <Box >
                        <Input
                            align="start"
                            w={{ base: "100%", lg: "70%" }}
                            borderWidth="1px"
                            borderColor="black"
                            h="70px"
                            p="5"
                            placeholder="Enter Project Theme"
                            name="ProjectName"
                            type="ProjectName"
                            onChange={handleInputChange}
                        />
                        {formData.ProjectName === "" && (
                            <Text mt={2} color="red.500" textAlign="left">
                                Project theme is required!
                            </Text>
                        )}
                    </Box>

                    <SimpleGrid columns={[1, 2, 3]} gap={{ base: "3", lg: "8" }}>
                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Reason
                            </FormLabel>
                            <Select
                                h="50px"
                                border="1px solid black"
                                onChange={handleInputChange}
                                name="Reason"
                                type="Reason"
                                value={formData.Reason}
                            >
                                <option value="For Business">For Business</option>
                                <option value="Dealership">Dealership</option>
                                <option value="Transport">Transport</option>
                            </Select>

                        </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Type
                            </FormLabel>
                            <Select
                                h="50px"
                                border="1px solid black"
                                onChange={handleInputChange}
                                name="Type"
                                type="Type"
                                value={formData.Type}
                            >
                                <option value="Internal">Internal</option>
                                <option value="External">External</option>
                                <option value="Vendor">Vendor</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Division
                            </FormLabel>
                            <Select
                                h="50px"
                                border="1px solid black"
                                onChange={handleInputChange}
                                name="Division"
                                type="Division"
                                value={formData.Division}
                            >
                                <option value="Filters">Filters</option>
                                <option value="Compressor">Compressor</option>
                                <option value="Pumps">Pumps</option>
                                <option value="Glass">Glass</option>
                                <option value="Water Heater">Water Heater</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Category
                            </FormLabel>
                            <Select
                                h="50px"
                                border="1px solid black"
                                onChange={handleInputChange}
                                name="Category"
                                type="Category"
                                value={formData.Category}
                            >
                                <option value="Quality A">Quality A</option>
                                <option value="Quality B">Quality B</option>
                                <option value="Quality C">Quality C</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Priority
                            </FormLabel>
                            <Select
                                h="50px"
                                border="1px solid black"
                                onChange={handleInputChange}
                                name="Priority"
                                type="Priority"
                                value={formData.Priority}
                            >
                                <option value="High">High</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Department
                            </FormLabel>
                            <Select
                                h="50px"
                                border="1px solid black"
                                onChange={handleInputChange}
                                name="Department"
                                type="Department"
                                value={formData.Department}
                            >
                                <option value="Strategy">Strategy</option>
                                <option value="Finance">Finance</option>
                                <option value="Quality">Quality</option>
                                <option value="Stores">Stores</option>
                                <option value="Maintenance">Maintenance</option>
                            </Select>
                        </FormControl>

            <FormControl>
                <FormLabel fontWeight={400} color="gray">
                    Start Date as per Project Plan
                </FormLabel>
                <Box>
                    <Input
                        h="50px"
                        type="date"
                        onChange={handleInputStartDateChange}
                        border="1px solid black"
                    />
                    {!formData.Startdate && (
                        <Text mt={2} color="red.500" textAlign="left">
                            Start Date is required!
                        </Text>
                    )}
                </Box>
            </FormControl>

            <FormControl>
                <FormLabel fontWeight={400} color="gray">
                    End Date as per Project Plan
                </FormLabel>
                <Box>
                    <Input
                        h="50px"
                        type="date"
                        onChange={handleInputEndDateChange}
                        border="1px solid black"
                    />
                    {!formData.Enddate && (
                        <Text mt={2} color="red.500" textAlign="left">
                            End Date is required!
                        </Text>
                    )}
                </Box>
            </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={400} color="gray">
                                Location
                            </FormLabel>
                            <Select
                                border="1px solid black"
                                h="50px"
                                onChange={handleInputChange}
                                name="Location"
                                type="Location"
                                value={formData.Location}
                            >
                                <option value="Pune">Pune</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Bangluru">Bangluru</option>
                            </Select>
                        </FormControl>
                    </SimpleGrid>
                    <Flex
                        justifyContent={{ base: "start", md: "end", lg: "end" }}
                        mr={{ lg: "21%" }}
                        mt="20px"
                    >
                        <Text color="gray">Status:</Text>
                        <Text fontWeight={600}> Registered </Text>
                    </Flex>
                </Box>

                <Box>
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        borderRadius="20px"
                        colorScheme="blue"
                        p="5"
                        w="180px"
                    >
                        Save Project
                    </Button>
                </Box>
            </Flex>
            {message && <Text mt={2} color="red.500" textAlign="left">
                {message}
            </Text>}
        </Card>
    );
};

export default ProjectForm;
