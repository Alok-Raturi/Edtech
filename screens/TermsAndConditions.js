import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Welcome to our EdTech application, an online learning platform that
          offers a variety of educational courses to students worldwide. Before
          using our application, please read the following terms and conditions
          carefully. By accessing or using our application, you agree to these
          terms and conditions. If you do not agree to these terms and
          conditions, you may not use our application.
        </Text>
        <Text style={styles.sectionTitle}>1. User Account</Text>
        <Text style={styles.text}>
          1.1 To use our application, you must create an account by providing
          your email address, username, and password. You are responsible for
          maintaining the confidentiality of your account and password, and you
          agree to accept responsibility for all activities that occur under
          your account or password. We reserve the right to refuse service,
          terminate accounts, remove or edit content, or cancel orders in our
          sole discretion.
        </Text>
        <Text style={styles.sectionTitle}>2. Content</Text>
        <Text style={styles.text}>
          2.1 Our application provides educational courses and related materials
          to our users. All content provided on our application, including but
          not limited to text, graphics, images, logos, button icons, software,
          and audio clips, is the property of our application or its content
          suppliers and protected by international copyright laws.
        </Text>
        <Text style={styles.sectionTitle}>3. User Conduct</Text>
        <Text style={styles.text}>
          3.1 You agree to use our application for lawful purposes only and not
          to use our application for any illegal or unauthorized purpose,
          including but not limited to violating any intellectual property
          rights, distributing viruses or malware, or interfering with the
          performance of our application.
        </Text>
        <Text style={styles.text}>
          3.2 You agree not to use our application to harass, abuse, or harm
          other users, or to post or transmit any content that is defamatory,
          obscene, or otherwise objectionable.
        </Text>
        <Text style={styles.text}>
          3.3 We reserve the right to remove or modify any content posted by
          users on our application that violates these terms and conditions.
        </Text>
        <Text style={styles.sectionTitle}>4. Disclaimer of Warranties</Text>
        <Text style={styles.text}>
          4.1 Our application and all content provided on our application are
          provided on an "as is" and "as available" basis without warranties of
          any kind, either express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose,
          non-infringement, or availability of our application or its content.
        </Text>
        <Text style={styles.text}>
          4.2 We do not warrant that our application or its content will be
          error-free, uninterrupted, or free of viruses or other harmful
          components.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  text: {
    marginTop: 10,
    color: 'black',
  },
  sectionTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TermsAndConditions;
