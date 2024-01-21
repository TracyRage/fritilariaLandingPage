import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';


interface FritilariaUserFarewellEmailProps {
    email: string;
    date: string
}

const url = 'https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/friti_logo_dark_theme.png?t=2023-12-30T11%3A17%3A03.390Z';
const redditURL = 'https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/Reddit_Icon_1Color_Silhouette.png?t=2023-12-30T17%3A16%3A48.761Z'
const xURL = 'https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/x_logo_white_fritilaria.png?t=2023-12-30T11%3A17%3A31.549Z'
const threadsURL = 'https://fortiqrsbyglyzsgzcim.supabase.co/storage/v1/object/public/logo/threads_logo_white_fritilaria.png?t=2023-12-30T11%3A17%3A51.074Z'

export const FritilariaUserFarewellEmail = ({ email, date
}: FritilariaUserFarewellEmailProps) => (
    <Html>
        <Head />
        <Preview>
            Sad to see you go. Fritilaria
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`${url}`}
                    width="100"
                    height="132"
                    alt="fritilaria"
                    style={logo}
                />
                <Text style={paragraph}>Hello, <Link style={{color: '#ffb2bc'}}>{email}</Link> </Text>
                <Text style={paragraph2}>
                    Your account and all the associated data will be deleted. <br/>
                    For more details, visit our <Link href='' style={{ color: '#ffb2bc' }}>Privacy policy</Link>.
                </Text>
                <Text style={paragraph3}>
                    Best,
                    <br />
                    Fritilaria team
                </Text>
                <Hr style={hr} />
                <Section style={footerLogos}>
                    <Row>
                        <Column align="center">
                            <Link href="/">
                                <Img
                                    src={`${threadsURL}`}
                                    width="30"
                                    height="30"
                                    alt="Slack"
                                    style={socialMediaIcon}
                                />
                            </Link>
                        </Column>
                        <Column align="center">
                            <Link href="/">
                                <Img
                                    src={`${xURL}`}
                                    width="30"
                                    height="30"
                                    alt="Slack"
                                    style={socialMediaIcon}
                                />
                            </Link>
                        </Column>
                        <Column align="center">
                            <Link href="/">
                                <Img
                                    src={`${redditURL}`}
                                    width="35"
                                    height="35"
                                    alt="Slack"
                                    style={socialMediaIcon}
                                />
                            </Link>
                        </Column>
                    </Row>
                    <Row style={{textAlign: 'center'}}>
                        <Text style={footer}>
                            © 2024 Aremti Statistica. All Rights Reserved. <br />
                            Bușteni 4, Cluj-Napoca, CJ, 470000 - Romania
                        </Text>

                    </Row>
                    <Row>
                        <Text style={footerLinksWrapper}>
                            <Link href="" style={{ color: '#ffb2bc' }}>
                                Privacy policy{' '}
                            </Link>{' '}
                            •{' '}
                            <Link href="" style={{ color: '#ffb2bc' }}>
                                Terms & Conditions{' '}
                            </Link>
                        </Text>
                    </Row>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default FritilariaUserFarewellEmail;

const main = {
    // backgroundColor: '#201a1b',
    paddingTop: '12px',
    paddingBottom: '12px',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    backgroundColor: '#201a1b',
    padding: '24px',
    border: '5px solid #7d293b',
    borderRadius: "25px"
};

const logo = {
    margin: '0 auto',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '16px',
    color: '#ece0e0',
    paddingBottom: '16px'

};

const paragraph2 = {
    fontSize: '16px',
    lineHeight: '30px',
    color: '#ece0e0',
    paddingBottom: '8px'

};

const paragraph3 = {
    fontSize: '16px',
    lineHeight: '30px',
    color: '#ece0e0',

};



const btnContainer = {
    textAlign: 'center' as const,
};


const button = {
    backgroundColor: 'transparent', // Set the background color to transparent
    border: '3px solid #ffb2bc', // Add a solid border with the button color
    borderRadius: '25px',
    color: '#ece0e0', // Set the text color to the button color
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block', // Change display to inline-block for a more inline appearance
    padding: '10px 20px', // Add padding for better spacing
};

const hr = {
    borderColor: '#E1CBCE',
    margin: '20px 0',
};

const footer = {
    color: '#706a7b',
    fontSize: '10px',
};

const footerLogos = {
    width: '220px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'

};

const socialMediaIcon = {
    display: 'flex',
    paddingBottom: '6px',
    paddingTop: '6px'
};

const footerLinksWrapper = {
    textAlign: 'center' as const,
    fontSize: '12px',
    color: '#ece0e0',
};