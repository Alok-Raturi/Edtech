import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const TermsAndConditions = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black', paddingHorizontal: 10}}>
      <ScrollView>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          Terms and Conditions
        </Text>
        <Text style={{marginTop: 10}}>
          Welcome to our EdTech application, an online learning platform that
          offers a variety of educational courses to students worldwide. Before
          using our application, please read the following terms and conditions
          carefully. By accessing or using our application, you agree to these
          terms and conditions. If you do not agree to these terms and
          conditions, you may not use our application.
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>1. User Account</Text>
        <Text style={{marginTop: 5}}>
          1.1 To use our application, you must create an account by providing
          your email address, username, and password. You are responsible for
          maintaining the confidentiality of your account and password, and you
          agree to accept responsibility for all activities that occur under
          your account or password. We reserve the right to refuse service,
          terminate accounts, remove or edit content, or cancel orders in our
          sole discretion.
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>2. Content</Text>
        <Text style={{marginTop: 5}}>
          2.1 Our application provides educational courses and related materials
          to our users. All content provided on our application, including but
          not limited to text, graphics, images, logos, button icons, software,
          and audio clips, is the property of our application or its content
          suppliers and protected by international copyright laws.
        </Text>
        <Text style={{marginTop: 5}}>
          2.2 You may not reproduce, distribute, display, transmit, publish, or
          sell any content provided on our application without our prior written
          consent. You may print or download content from our application solely
          for your personal, non-commercial use.
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>3. User Conduct</Text>
        <Text style={{marginTop: 5}}>
          3.1 You agree to use our application for lawful purposes only and not
          to use our application for any illegal or unauthorized purpose,
          including but not limited to violating any intellectual property
          rights, distributing viruses or malware, or interfering with the
          performance of our application.
        </Text>
        <Text style={{marginTop: 5}}>
          3.2 You agree not to use our application to harass, abuse, or harm
          other users, or to post or transmit any content that is defamatory,
          obscene, or otherwise objectionable.
        </Text>
        <Text style={{marginTop: 5}}>
          3.3 We reserve the right to remove or modify any content posted by
          users on our application that violates these terms and conditions.
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          4. Disclaimer of Warranties
        </Text>
        <Text style={{marginTop: 5}}>
          4.1 Our application and all content provided on our application are
          provided on an "as is" and "as available" basis without warranties of
          any kind, either express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose,
          non-infringement, or availability of our application or its content.
        </Text>
        <Text style={{marginTop: 5}}>
          4.2 We do not warrant that our application or its content will be
          error-free, uninterrupted, or free of viruses or other harmful
          components.
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          5. Limitation of Liability
        </Text>
        <Text style={{marginTop: 5}}>
          5.1 In no event shall our application, its directors, officers,
          employees, or agents be liable for any direct, indirect, incidental,
          special, or consequential damages arising out of or in connection with
          the use or inability to use our application or its content, including
          but not limited to damages for loss of profits, goodwill, use, data,
          or other intangible losses.
        </Text>

        <Text style={{marginTop: 5}}>
          4.2 We do not warrant that our application or its content will be
          error-free, uninterrupted, or free of viruses or other harmful
          components.
        </Text>
      </ScrollView>
    </View>
  );
};
export default TermsAndConditions;
