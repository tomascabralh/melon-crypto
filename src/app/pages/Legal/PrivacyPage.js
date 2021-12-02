import { Box, ListItem, OrderedList, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";

const PrivacyPage = () => {
  return (
    <Box>
      <Heading m={10} textAlign="center">
        Privacy Policy
      </Heading>
      <Box px={500}>
        <Box align="center" textAlign="justify">
          <Text my={5}>
            At MelonCrypto, we’re committed to protecting and respecting your
            privacy. This Privacy and Cookie Policy (“Privacy Policy”) govern
            your access to and use of this Website, meloncrypto.com (the
            “Website”), and associated content, software, and mobile
            applications (collectively, the “Service”). This Privacy Policy also
            includes our Terms of Use which is located at
            https://meloncrypto.com/terms.
          </Text>
          <Text my={5}>
            This Privacy Policy explains when and why we collect personal
            information about people who visit our Website or use our Services
            and how we use the personal information, the conditions under which
            we may disclose your personal information to others, and how we keep
            personal information secure. This Privacy Policy also explains how
            we use cookies and similar technology on our Website and in
            connection with our Services.
          </Text>
          <Text my={5}>
            We may change this Privacy Policy from time to time so please check
            this page occasionally to ensure that you are happy with any
            changes. By using our Website or our Services, you are agreeing to
            be bound by this Privacy Policy.
          </Text>
        </Box>
        <Box align="center" justify="center">
          <Heading my={10} textAlign="left" size="md">
            What Information Do We Collect?
          </Heading>
          <Box align="center" textAlign="justify">
            <Text my={5}>
              MelonCrypto (“MelonCrypto”, “we” or “us”) collects (a) the e-mail
              addresses of those who communicate with us via e-mail; (b)
              aggregate information concerning what pages users access or visit;
              (c) information volunteered by the user (such as survey
              information and/or site registrations); (d) financial information
              provided by the user for user syncing and information purposes
              only; and (e) information related to your use of the Website
              and/or the mobile application, including IP address, geographic
              location, and date and time of your request.
            </Text>
          </Box>
        </Box>
        <Box align="center" justify="center">
          <Heading my={10} textAlign="left" size="md">
            How Do We Use the Information?
          </Heading>
          <Box align="center" textAlign="justify">
            <Text my={5}>
              MelonCrypto uses collected information for the following purposes:
            </Text>
            <OrderedList pl={10}>
              <ListItem my={5}>
                To fulfill a contract or take steps linked to a contract such as
                processing your registration on our Website or sending you
                information about changes to our terms or policies;
              </ListItem>
              <ListItem my={5}>
                Where it is necessary for purposes which are in MelonCrypto’s or
                third parties’ legitimate interests such as (a) to provide the
                information or content you have requested; (b) to contact you
                about our programs, products, features or services; (c) for
                internal business purposes such as identification and
                authentication or customer service, portfolio tracking and user
                preference syncing between devices; (d) to ensure the security
                of our Website, by trying to prevent unauthorized or malicious
                activities; (e) to enforce compliance with our Terms of Use and
                other policies; (f) to help other organizations (such as
                copyright owners) to enforce their rights; and (g) to tailor
                content, advertisements, and offers for you or for other
                purposes disclosed at the time of collection. If you do not wish
                to receive marketing information about our programs, products,
                features or services, you may send an email to us at
                legal@meloncrypto.com.
              </ListItem>
              <ListItem my={5}>
                Where you give us consent, such as (a) where you ask us to send
                marketing information to you via a medium where we need your
                consent, including alerts via mobile push notifications; (b)
                where you give us consent to place cookies and to use similar
                technologies; and (c) on other occasions where we ask you for
                consent, for a purpose which we explain at that time.
              </ListItem>
              <ListItem my={5}>
                Where we are legally required to do so. We may also provide
                access to your personally identifiable information when legally
                required to do so, to cooperate with police investigations or
                other legal proceedings, to protect against misuse or
                unauthorized use of our Website, to limit our legal liability
                and protect our rights, or to protect the rights, property or
                safety of visitors of the Website or the public. In those
                instances, the information is provided only for that purpose.
              </ListItem>
            </OrderedList>
          </Box>
        </Box>
        <Box align="center" justify="center">
          <Heading my={10} textAlign="left" size="md">
            Security
          </Heading>
          <Box align="center" textAlign="justify">
            <Text my={5}>
              We take precautions to ensure the security of your personal
              information. However, we cannot guarantee that hackers or
              unauthorized personnel may gain access to your personal
              information despite our efforts. You should note that in using the
              MelonCrypto service, your information will travel over the
              Internet and through third-party infrastructures and mobile
              networks, which are not under our control.
            </Text>
            <Text my={5}>
              We cannot protect, nor does this Privacy Policy apply to, any
              information that you transmit to other users. You should never
              transmit personal or identifying information to other users.
            </Text>
          </Box>
        </Box>
        <Box align="center" justify="center">
          <Heading my={10} textAlign="left" size="md">
            Retention of Your Personal Information
          </Heading>
          <Box align="center" textAlign="justify">
            <Text my={5}>
              We retain information as long as it is necessary to provide the
              Services requested by you and others, subject to any legal
              obligations to further retain such information. Information
              associated with your account will generally be kept until it is no
              longer necessary to provide the Services or until you ask us to
              delete it or your account is deleted, whichever comes first.
              Additionally, we may retain information from deleted accounts to
              comply with the law, prevent fraud, resolve disputes, troubleshoot
              problems, assist with investigations, enforce the Terms of Use,
              and take other actions permitted by law. The information we retain
              will be handled in accordance with this Privacy Policy.
            </Text>
            <Text my={5}>
              Information about you that is no longer necessary and relevant to
              provide our Services may be de-identified and aggregated with
              other non-personal data to provide insights which are commercially
              valuable to MelonCrypto, such as statistics related to the use of
              MelonCrypto’s Website and application.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyPage;
