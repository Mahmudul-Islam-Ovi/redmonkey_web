// import React from "react";

// export default function PrivacyPage() {
//   return (
//     <div className="container mx-auto px-4 py-16 max-w-4xl">
//       <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">Privacy Policy</h1>
//       <p className="text-gray-400 mb-12">Last updated: December 3, 2025</p>

//       <div className="space-y-12 text-gray-300 leading-relaxed">
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
//           <p>
//             Welcome to RedMonkey. We respect your privacy and are committed to protecting your personal data.
//             This privacy policy will inform you as to how we look after your personal data when you visit our website
//             and tell you about your privacy rights and how the law protects you.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
//           <p className="mb-4">
//             We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
//           </p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li><strong className="text-white">Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
//             <li><strong className="text-white">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
//             <li><strong className="text-white">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
//             <li><strong className="text-white">Usage Data</strong> includes information about how you use our website, products and services.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
//           <p className="mb-4">
//             We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
//           </p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
//             <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
//             <li>Where we need to comply with a legal or regulatory obligation.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
//           <p>
//             We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Us</h2>
//           <p>
//             If you have any questions about this privacy policy or our privacy practices, please contact us at:
//           </p>
//           <div className="mt-4 p-6 bg-gray-900 rounded-lg border border-gray-800">
//             <p className="text-orange-500 font-semibold">RedMonkey Support</p>
//             <p>Email: support@redmonkey.com</p>
//             <p>Address: 123 Monkey Business Way, Jungle City, JC 12345</p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }



import React from 'react';

// Define types for components
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-red-700 mt-8 mb-4 border-b-2 border-red-100 pb-2">
    {children}
  </h2>
);

const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
    {children}
  </h3>
);

const SubSubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">
    {children}
  </h4>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="mb-2 pl-2 text-gray-700 leading-relaxed before:content-['•'] before:text-red-500 before:mr-3">
    {children}
  </li>
);

// Main Application Component
const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex justify-center items-start font-inter">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden ring-1 ring-gray-100">

        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-red-700 text-white p-6 rounded-t-2xl shadow-lg">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-red-200 mt-1">
            Studio Redmonkey
          </p>
          <div className="text-sm mt-2 font-medium">
            <p>Last Updated: Dec 5, 2025</p>

          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-6">

          <SubHeader>Introduction</SubHeader>
          <p className="text-lg text-gray-700 border-b border-gray-200 pb-4">
            Studio Redmonkey (“we”, “our”, “us”) is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, share, and protect your information when you access our website, purchase products, or interact with our services.
          </p>
          <p className="text-lg text-gray-700">
            By using our website or services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our services immediately.
          </p>

          {/* Section 1: Information We Collect */}
          <SectionTitle>1. Information We Collect</SectionTitle>
          <p className="text-gray-700">
            We collect information to provide, improve, and secure our services. The information we collect falls into two categories:
          </p>

          <SubHeader>1.1 Personal Information (Information You Provide)</SubHeader>
          <p className="text-gray-700">
            We collect personal information when you:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Contact us through forms or email</ListItem>
            <ListItem>Subscribe to newsletters or updates</ListItem>
            <ListItem>Make a purchase</ListItem>
            <ListItem>Create an account (if applicable)</ListItem>
            <ListItem>Participate in contests, surveys, or community activities</ListItem>
          </ul>
          <p className="text-gray-700 mt-4">
            Personal information may include:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Full name</ListItem>
            <ListItem>Email address</ListItem>
            <ListItem>Phone number</ListItem>
            <ListItem>Billing/payment information (processed securely through trusted third-party providers)</ListItem>
            <ListItem>Shipping address</ListItem>
            <ListItem>Username & password (for accounts)</ListItem>
            <ListItem>Age or date of birth (for age verification)</ListItem>
            <ListItem>Any other data you voluntarily provide</ListItem>
          </ul>
          <SubSubHeader>Payment Security:</SubSubHeader>
          <p className="text-gray-700 italic">
            We do not store credit card or sensitive financial information. All payments are processed securely through third-party gateways.
          </p>

          <SubHeader>1.2 Non-Personal Information (Automatically Collected)</SubHeader>
          <p className="text-gray-700">
            When browsing our site, we automatically collect:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Device information (OS, device type, resolution)</ListItem>
            <ListItem>Browser type & version</ListItem>
            <ListItem>IP address & approximate location</ListItem>
            <ListItem>Usage data (pages visited, time on page, clicks)</ListItem>
            <ListItem>Cookies & tracking data (see Section 7)</ListItem>
          </ul>
          <p className="text-gray-700 mt-4">
            This helps us improve performance, security, and user experience.
          </p>

          {/* Section 2: How We Use Your Information */}
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <p className="text-gray-700">
            We use your information for legitimate business purposes.
          </p>

          <SubHeader>Service Delivery</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Processing orders & payments</ListItem>
            <ListItem>Delivering digital or physical content</ListItem>
            <ListItem>Managing accounts & providing support</ListItem>
          </ul>

          <SubHeader>Communication</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Order confirmations & updates</ListItem>
            <ListItem>Responding to inquiries</ListItem>
            <ListItem>Sending newsletters or promotions (only if you opt-in)</ListItem>
            <ListItem>Sharing important policy or service updates</ListItem>
          </ul>

          <SubHeader>Business Operations & Improvement</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Enhancing website performance</ListItem>
            <ListItem>Conducting analytics & research</ListItem>
            <ListItem>Preventing fraud and ensuring security</ListItem>
            <ListItem>Enforcing our Terms & Conditions</ListItem>
          </ul>

          <SubHeader>Legal Compliance</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Complying with applicable laws</ListItem>
            <ListItem>Responding to official legal requests</ListItem>
            <ListItem>Protecting rights and resolving disputes</ListItem>
          </ul>

          <SubSubHeader>We Do NOT:</SubSubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Sell or rent your data</ListItem>
            <ListItem>Use your data for harmful automated profiling</ListItem>
            <ListItem>Send marketing without consent</ListItem>
          </ul>

          {/* Section 3: Legal Basis for Processing */}
          <SectionTitle>3. Legal Basis for Processing</SectionTitle>
          <p className="text-gray-700">
            Depending on your location, we process your data based on:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Consent (e.g., newsletter signup)</ListItem>
            <ListItem>Contract necessity (fulfilling an order)</ListItem>
            <ListItem>Legitimate interests (service improvement, analytics, fraud prevention)</ListItem>
            <ListItem>Legal obligations (tax, accounting, regulatory requirements)</ListItem>
          </ul>
          <p className="text-gray-700 mt-4 font-medium">
            You may withdraw consent anytime.
          </p>

          {/* Section 4: How We Protect Your Information */}
          <SectionTitle>4. How We Protect Your Information</SectionTitle>
          <p className="text-gray-700">
            We use industry-standard security practices:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>SSL/TLS encrypted payment processing</ListItem>
            <ListItem>Secure servers & controlled access</ListItem>
            <ListItem>Strong authentication & authorization</ListItem>
            <ListItem>Regular security monitoring</ListItem>
            <ListItem>Encrypted data transmission via HTTPS</ListItem>
          </ul>
          <p className="text-gray-700 mt-4 italic">
            Note: No method of transmission is 100% secure, but we continually improve our safeguards.
          </p>

          {/* Section 5: Data Breach Notification */}
          <SectionTitle>5. Data Breach Notification</SectionTitle>
          <p className="text-gray-700">
            If a data breach occurs:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>We will promptly investigate</ListItem>
            <ListItem>Notify affected users & authorities as required</ListItem>
            <ListItem>Take steps to prevent future incidents</ListItem>
          </ul>

          {/* Section 6: Sharing & Disclosure of Information */}
          <SectionTitle>6. Sharing & Disclosure of Information</SectionTitle>
          <p className="text-gray-700">
            We do not sell your data. We share information only in these cases:
          </p>

          <SubHeader>6.1 Trusted Service Providers</SubHeader>
          <p className="text-gray-700">
            These may include:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Payment processors (bKash, Nagad, Stripe, SSLCommerz, PayPal, etc.)</ListItem>
            <ListItem>Delivery/shipping partners</ListItem>
            <ListItem>Cloud hosting companies</ListItem>
            <ListItem>Email service providers</ListItem>
            <ListItem>Analytics tools (Google Analytics)</ListItem>
            <ListItem>Content delivery networks (CDNs)</ListItem>
          </ul>
          <SubSubHeader>All partners are contractually required to:</SubSubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Use data only for assigned tasks</ListItem>
            <ListItem>Protect your information</ListItem>
            <ListItem>Avoid unauthorized disclosure</ListItem>
          </ul>

          <SubHeader>6.2 Legal Requirements</SubHeader>
          <p className="text-gray-700">
            We may share data when:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Required by law, legal process, or authorities</ListItem>
            <ListItem>Necessary to enforce our Terms</ListItem>
            <ListItem>Necessary to prevent fraud or protect users</ListItem>
          </ul>

          <SubHeader>6.3 Business Transfers</SubHeader>
          <p className="text-gray-700">
            In case of a merger, acquisition, or restructuring, your data may be transferred. You will be notified of any major changes.
          </p>

          {/* Section 7: Cookies & Tracking Technologies */}
          <SectionTitle>7. Cookies & Tracking Technologies</SectionTitle>
          <p className="text-gray-700">
            We use cookies to:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Enable essential site functions</ListItem>
            <ListItem>Enhance user experience</ListItem>
            <ListItem>Perform analytics</ListItem>
            <ListItem>Remember preferences</ListItem>
            <ListItem>Support marketing or personalization</ListItem>
          </ul>

          <SubHeader>Types of cookies we use:</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Session cookies</ListItem>
            <ListItem>Persistent cookies</ListItem>
            <ListItem>First-party cookies</ListItem>
            <ListItem>Third-party cookies (e.g., Google Analytics)</ListItem>
          </ul>

          <SubHeader>Cookie Consent</SubHeader>
          <p className="text-gray-700">
            A banner allows you to:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Accept all cookies</ListItem>
            <ListItem>Reject non-essential cookies</ListItem>
            <ListItem>Customize preferences</ListItem>
          </ul>

          <SubHeader>Your Choices</SubHeader>
          <p className="text-gray-700 font-medium">
            You can disable cookies in your browser settings, but some features may not function properly.
          </p>

          {/* Section 8: Your Privacy Rights */}
          <SectionTitle>8. Your Privacy Rights</SectionTitle>
          <p className="text-gray-700">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Access your data</ListItem>
            <ListItem>Correct inaccurate data</ListItem>
            <ListItem>Request deletion</ListItem>
            <ListItem>Restrict or object to processing</ListItem>
            <ListItem>Withdraw consent</ListItem>
            <ListItem>Opt-out of marketing</ListItem>
            <ListItem>Request data portability</ListItem>
          </ul>
          <p className="text-gray-700 mt-4">
            Contact: <a href="mailto:hello.studioredmonkey@gmail.com" className="text-red-600 hover:underline font-medium">hello.studioredmonkey@gmail.com</a>
          </p>
          <p className="text-gray-700">
            We respond within 30 days.
          </p>

          {/* Section 9: Data Retention */}
          <SectionTitle>9. Data Retention</SectionTitle>
          <p className="text-gray-700">
            We retain data based on:
          </p>

          <SubHeader>Retention Periods</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Account data: while account is active</ListItem>
            <ListItem>Purchase records: 6 years (legal compliance)</ListItem>
            <ListItem>Marketing data: until you unsubscribe</ListItem>
            <ListItem>Analytics data: up to 26 months</ListItem>
          </ul>
          <p className="text-gray-700 mt-4">
            If you delete your account, we remove personal data within 60 days unless retention is legally required.
          </p>

          {/* Section 10: Children’s Privacy */}
          <SectionTitle>10. Children’s Privacy</SectionTitle>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>We do not knowingly collect data from children under 13</ListItem>
            <ListItem>If discovered, we delete such data promptly</ListItem>
            <ListItem>Parents may contact us for removal requests</ListItem>
          </ul>

          {/* Section 11: Third-Party Links */}
          <SectionTitle>11. Third-Party Links</SectionTitle>
          <p className="text-gray-700">
            We link to external sites (e.g., YouTube, Facebook, Instagram).
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>We are not responsible for their content or privacy practices.</ListItem>
          </ul>
          <p className="text-gray-700 mt-4 font-medium">
            We encourage you to review their privacy policies.
          </p>

          {/* Section 12: International Data Transfers */}
          <SectionTitle>12. International Data Transfers</SectionTitle>
          <p className="text-gray-700">
            If you access our site from outside Bangladesh:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Your data may be transferred to Bangladesh or other countries</ListItem>
            <ListItem>Safeguards such as Standard Contractual Clauses are used when required</ListItem>
            <ListItem>All transfers comply with this Privacy Policy</ListItem>
          </ul>

          {/* Section 13: Changes to This Privacy Policy */}
          <SectionTitle>13. Changes to This Privacy Policy</SectionTitle>
          <p className="text-gray-700">
            We may update this policy to reflect:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Legal requirements</ListItem>
            <ListItem>Service changes</ListItem>
            <ListItem>Internal improvements</ListItem>
          </ul>
          <p className="text-gray-700 mt-4">
            Updates take effect immediately upon posting.
          </p>
          <p className="text-gray-700 font-medium">
            The “Last Updated” date will be revised accordingly.
          </p>

          {/* Section 14: Contact Information & Data Protection Officer */}
          <SectionTitle>14. Contact Information & Data Protection Officer</SectionTitle>
          <p className="text-gray-700 font-medium">
            For questions or rights requests:
          </p>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200 space-y-2">
            <p className="text-gray-800">
              <span className="font-semibold w-24 inline-block">Studio:</span> Studio Redmonkey
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-24 inline-block">📧 Privacy Email:</span> <a href="mailto:hello.studioredmonkey@gmail.com" className="text-red-600 hover:underline">hello.studioredmonkey@gmail.com</a>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-24 inline-block">📧 General Email:</span> <a href="mailto:info.studioredmonkey@gmail.com" className="text-red-600 hover:underline">info.studioredmonkey@gmail.com</a>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-24 inline-block">🌐 Website:</span> <a href="http://www.studioredmonkey.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">www.studioredmonkey.com</a>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-24 inline-block">📍 Address:</span> 3/4A, Borobag, Mirpur-2, Dhaka- 1216.
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-24 inline-block">📞 Phone:</span> +8801712782838
            </p>
            <p className="text-sm pt-2 text-gray-600">
              Response time: 7–14 business days (30 days for formal requests).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;