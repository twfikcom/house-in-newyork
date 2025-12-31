
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-navy mb-10 border-b-2 border-gold pb-4">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-navy mb-4">1. Information Collection</h2>
            <p>
              Houseinnewyork.com collects information from you when you subscribe to our newsletter, respond to a survey or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address or phone number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-navy mb-4">2. Use of Information</h2>
            <p>
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
              <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
              <li>To improve customer service</li>
              <li>To send periodic emails regarding NYC real estate trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-navy mb-4">3. Data Protection</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We utilize high-level encryption and secure server infrastructure to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-navy mb-4">4. Cookies</h2>
            <p>
              We use cookies to help us remember and process the items in your browsing history and understand and save your preferences for future visits. Cookies are also used to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-navy mb-4">5. SEO & Third Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="bg-navy p-8 text-white rounded">
            <h2 className="text-gold font-serif text-xl mb-4">Contacting Us</h2>
            <p className="text-sm text-slate mb-4">
              If there are any questions regarding this privacy policy you may contact us using the information below.
            </p>
            <p className="font-bold">Houseinnewyork.com</p>
            <p>Email: webseoar@gmail.com</p>
            <p>WhatsApp: +201010373331</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
