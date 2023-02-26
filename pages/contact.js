import DefaultLayout from "@/features/Layouts/DefaultLayout";
import {Box, Grid, GridItem, Text} from "@chakra-ui/react";
import TextContentBox from "@/features/common/modules/TextContentBox";
import ContactForm from "@/features/common/modules/ContactForm";

const ContactPage = () => {
    return (
        <DefaultLayout>
            <Box backgroundColor='#f7f8f9' paddingY='3rem'>
                <Grid
                    templateColumns='repeat(6, 1fr)'
                    gap='5'
                    maxWidth='1280px'
                    margin='0 auto'
                >
                    <GridItem colSpan={{base: 6, sm: 4}}>
                        <TextContentBox title='Contact Us'>
                            <ContactForm />
                        </TextContentBox>
                    </GridItem>
                    <GridItem colSpan={{base: 6, sm: 2}}>
                        <TextContentBox title='For Inquiries Contact'>
                            <Text fontWeight='light' color='gray.600' fontSize='1rem' marginBottom='1rem'>
                                Sandra Milly <br/>
                                Public Relation Manager <br/>
                                235 Holland Park, London <br/>
                                NW1 8SU
                            </Text>
                            <Text fontWeight='light' color='gray.600' fontSize='1rem'>
                                Max Henry <br/>
                                Public Relation Manager <br/>
                                235 Holland Park, London <br/>
                                NW1 8SU
                            </Text>
                        </TextContentBox>
                    </GridItem>
                </Grid>
            </Box>
        </DefaultLayout>
    )
}

export default ContactPage