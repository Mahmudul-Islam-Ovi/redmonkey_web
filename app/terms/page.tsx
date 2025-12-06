import React from 'react';

// Define types for components if necessary, but here, standard React.FC is sufficient for App.

// Reusable component for Section Title
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-red-700 mt-8 mb-4 border-b-2 border-red-100 pb-2">
    {children}
  </h2>
);

// Reusable component for Subtitle/List Header
const SubHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
    {children}
  </h3>
);

// Reusable List Item
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
            Terms & Conditions
          </h1>
          <p className="text-red-200 mt-1">
            Studio Redmonkey
          </p>
          <p className="text-sm mt-2 font-medium">
            Last Updated: 5/12/2025
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-6">

          <p className="text-lg text-gray-700 border-b border-gray-200 pb-4">
            Welcome to Studio Redmonkey. By accessing or using our website, services, or content, you agree to be bound by these Terms & Conditions (“Terms”). If you do not agree with these Terms, please discontinue use of our services immediately.
          </p>

          {/* Section 1 */}
          <SectionTitle>1. About Studio Redmonkey</SectionTitle>
          <p className="text-gray-700">
            Studio Redmonkey is a Bangladesh-based creative studio that produces and distributes original Bangla animation, comics, and digital entertainment content.
          </p>
          <p className="text-gray-700 italic">
            All artwork, characters, videos, stories, and related materials featured on this website are the exclusive intellectual property of Studio Redmonkey unless explicitly stated otherwise.
          </p>

          {/* Section 2 */}
          <SectionTitle>2. Acceptance of Terms</SectionTitle>
          <p className="text-gray-700">
            By using our website or services, you confirm that:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>You are at least 13 years old, or using the website with parental/guardian consent</ListItem>
            <ListItem>You have read and understood these Terms</ListItem>
            <ListItem>You agree to comply with all applicable laws in Bangladesh and your jurisdiction</ListItem>
          </ul>

          {/* Section 3 */}
          <SectionTitle>3. Permitted Use of Our Website</SectionTitle>
          <p className="text-gray-700">
            You may access and browse our website for personal, non-commercial purposes.
          </p>
          <SubHeader>You agree NOT to:</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Copy, download, redistribute, or publicly display our videos, comics, or artwork without written permission</ListItem>
            <ListItem>Modify, reproduce, or create derivative works based on our content</ListItem>
            <ListItem>Use bots, scrapers, or automated tools to extract data</ListItem>
            <ListItem>Reverse-engineer or attempt to access the website’s underlying code</ListItem>
            <ListItem>Interfere with website performance or security</ListItem>
            <ListItem>Impersonate Studio Redmonkey or misrepresent your affiliation</ListItem>
            <ListItem>Use the website for any illegal, harmful, or fraudulent activities</ListItem>
          </ul>

          {/* Section 4 */}
          <SectionTitle>4. Intellectual Property Rights</SectionTitle>
          <p className="text-gray-700">
            All content on this website—including but not limited to:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Characters (Hojja, Ramu, Kadu, Fazlu, etc.)</ListItem>
            <ListItem>Animations, videos, and motion graphics</ListItem>
            <ListItem>Comics, illustrations, and artwork</ListItem>
            <ListItem>Logos, branding, and trademarks</ListItem>
            <ListItem>Scripts, stories, and narratives</ListItem>
            <ListItem>Music, sound effects, and audio</ListItem>
          </ul>
          <p className="text-gray-700">
            - is protected by Bangladesh copyright law and international copyright treaties.
          </p>

          <SubHeader>Prohibited Uses:</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem><span className="font-semibold">Unauthorized Use:</span> Do not claim ownership or create merchandise featuring our characters</ListItem>
            <ListItem><span className="font-semibold">Re-uploading:</span> Do not upload our videos to other platforms without written permission</ListItem>
            <ListItem><span className="font-semibold">Commercial Use:</span> Selling, licensing, or monetizing our content requires a formal licensing agreement</ListItem>
          </ul>

          <SubHeader>Allowed:</SubHeader>
          <p className="text-gray-700">
            You may share links to our official content or use short clips (under 30 seconds) for non-commercial commentary or review, provided proper credit is given.
          </p>
          <p className="text-gray-700">
            For licensing inquiries, contact: <a href="mailto:info.studioredmonkey@gmail.com" className="text-red-600 hover:text-red-800 font-medium">info.studioredmonkey@gmail.com</a>
          </p>

          {/* Section 5 */}
          <SectionTitle>5. User Submissions & Community Content</SectionTitle>
          <p className="text-gray-700">
            If you submit ideas, artwork, scripts, or suggestions:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>You grant Studio Redmonkey a non-exclusive, royalty-free, worldwide license to use or modify your submission</ListItem>
            <ListItem>We are not obligated to review, respond to, or compensate for submissions</ListItem>
            <ListItem>You confirm your submission is original and does not infringe third-party rights</ListItem>
            <ListItem>Do not submit confidential or proprietary information unless a separate agreement exists</ListItem>
          </ul>

          {/* Section 6 */}
          <SectionTitle>6. Purchases, Payments & Refunds</SectionTitle>
          <SubHeader>Pricing & Payment</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>All prices are listed in Bangladeshi Taka (BDT) unless stated otherwise</ListItem>
            <ListItem>Payment must be completed before delivery</ListItem>
            <ListItem>Accepted payment methods: Bank and Mobile Banking</ListItem>
          </ul>
          <SubHeader>Digital Products</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Digital content is non-refundable once accessed or downloaded</ListItem>
            <ListItem>Access may be revoked if Terms are violated</ListItem>
          </ul>
          <SubHeader>Physical Products</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Items may be returned/exchanged within 7–14 days if unopened and in original condition</ListItem>
            <ListItem>Shipping fees are non-refundable</ListItem>
            <ListItem>Damaged or defective items will be replaced at no additional cost</ListItem>
          </ul>
          <SubHeader>Order Cancellation</SubHeader>
          <p className="text-gray-700">
            Orders may be canceled within 24 hours if they have not been accessed or shipped.
          </p>

          {/* Section 7 */}
          <SectionTitle>7. Streaming & Digital Content Access</SectionTitle>
          <p className="text-gray-700">
            When accessing digital content:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>You receive a viewing license, not ownership</ListItem>
            <ListItem>Downloading, screen recording, or redistribution is strictly prohibited</ListItem>
            <ListItem>Content may be updated, removed, or changed without notice</ListItem>
            <ListItem>Some content may have regional viewing restrictions</ListItem>
          </ul>
          <p className="text-gray-700 font-medium pt-2">
            Violation may result in termination of access without refund.
          </p>

          {/* Section 8 */}
          <SectionTitle>8. Account Registration (If Applicable)</SectionTitle>
          <p className="text-gray-700">
            If you create an account:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Provide accurate and current information</ListItem>
            <ListItem>You are responsible for password confidentiality</ListItem>
            <ListItem>Do not share login details with others</ListItem>
            <ListItem>Accounts violating Terms may be suspended or terminated</ListItem>
          </ul>

          {/* Section 9 */}
          <SectionTitle>9. Third-Party Links</SectionTitle>
          <p className="text-gray-700">
            Our website may link to external sites. Studio Redmonkey is not responsible for:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>The accuracy or content of third-party websites</ListItem>
            <ListItem>Their privacy or security practices</ListItem>
            <ListItem>Any transactions made on external platforms</ListItem>
          </ul>
          <p className="text-gray-700 font-medium pt-2">
            Use external links at your own risk.
          </p>

          {/* Section 10 */}
          <SectionTitle>10. Privacy & Data Protection</SectionTitle>
          <p className="text-gray-700">
            Your use of our website is governed by our Privacy Policy.
          </p>
          <SubHeader>Data We May Collect:</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Name & email (contact forms, orders, newsletters)</ListItem>
            <ListItem>Secure payment data (processed by third-party providers)</ListItem>
            <ListItem>Analytics (page visits, device type, location, etc.)</ListItem>
          </ul>
          <SubHeader>Your Rights:</SubHeader>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>We do not sell your personal data</ListItem>
            <ListItem>You may request correction or deletion of your data</ListItem>
            <ListItem>We comply with Bangladesh data protection laws</ListItem>
          </ul>

          {/* Section 11 */}
          <SectionTitle>11. Disclaimer of Warranties</SectionTitle>
          <p className="text-gray-700">
            Studio Redmonkey provides its website and services “as is” and “as available”, without warranties of any kind regarding:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Accuracy or reliability</ListItem>
            <ListItem>Continuous, error-free operation</ListItem>
            <ListItem>Absence of viruses or harmful components</ListItem>
          </ul>
          <p className="text-gray-700 font-medium pt-2">
            Use the website at your own risk.
          </p>

          {/* Section 12 */}
          <SectionTitle>12. Limitation of Liability</SectionTitle>
          <p className="text-gray-700">
            To the fullest extent permitted by law, Studio Redmonkey is not liable for:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Website downtime or technical failures</ListItem>
            <ListItem>Loss of data or revenue</ListItem>
            <ListItem>Indirect, incidental, or consequential damages</ListItem>
            <ListItem>Unauthorized access or third-party interference</ListItem>
          </ul>

          {/* Section 13 */}
          <SectionTitle>13. Indemnification</SectionTitle>
          <p className="text-gray-700">
            You agree to indemnify and hold harmless Studio Redmonkey, its owners, employees, and affiliates from any claims arising from:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Violation of these Terms</ListItem>
            <ListItem>Misuse of our content or services</ListItem>
            <ListItem>Infringement of third-party rights</ListItem>
          </ul>

          {/* Section 14 */}
          <SectionTitle>14. Governing Law & Dispute Resolution</SectionTitle>
          <p className="text-gray-700">
            These Terms are governed by the laws of Bangladesh.
          </p>
          <SubHeader>Disputes will be resolved through:</SubHeader>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li className="text-gray-700">Informal discussion</li>
            <li className="text-gray-700">Mediation/arbitration (if applicable)</li>
            <li className="text-gray-700">Courts of Dhaka, Bangladesh as final jurisdiction</li>
          </ol>

          {/* Section 15 */}
          <SectionTitle>15. Termination</SectionTitle>
          <p className="text-gray-700">
            We may suspend or terminate your access at any time for:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <ListItem>Violating these Terms</ListItem>
            <ListItem>Fraudulent or abusive behavior</ListItem>
            <ListItem>Misuse of our intellectual property</ListItem>
          </ul>

          {/* Section 16 */}
          <SectionTitle>16. Changes to Terms</SectionTitle>
          <p className="text-gray-700">
            We may update these Terms at any time.
          </p>
          <p className="text-gray-700">
            The updated version becomes effective immediately upon posting.
          </p>
          <p className="text-gray-700 font-medium">
            Your continued use of the website indicates acceptance of the revised Terms.
          </p>

          {/* Section 17 */}
          <SectionTitle>17. Severability</SectionTitle>
          <p className="text-gray-700">
            If any provision of these Terms is ruled invalid, the remaining provisions continue in full force.
          </p>

          {/* Section 18 */}
          <SectionTitle>18. Contact Information</SectionTitle>
          <p className="text-gray-700 font-medium">
            For questions or concerns:
          </p>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200 space-y-2">
            <p className="text-gray-800">
              <span className="font-semibold w-16 inline-block">Studio:</span> Studio Redmonkey
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-16 inline-block">📧 Email:</span> <a href="mailto:info.studioredmonkey@gmail.com" className="text-red-600 hover:underline">info.studioredmonkey@gmail.com</a>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-16 inline-block">🌐 Website:</span> <a href="http://www.studioredmonkey.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">www.studioredmonkey.com</a>
            </p>
            <p className="text-gray-800">
              <span className="font-semibold w-16 inline-block">📍 Address:</span> 3/4A, Borobag, Mirpur-2, Dhaka- 1216.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;