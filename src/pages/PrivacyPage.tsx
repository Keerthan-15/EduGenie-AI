export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-indigo max-w-none text-gray-600 space-y-6">
            <p>Last updated: March 25, 2026</p>
            <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
            <p>Welcome to Capabl AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: name, username or similar identifier.</li>
              <li>Contact Data: email address and telephone numbers.</li>
              <li>Technical Data: IP address, browser type and version, time zone setting and location.</li>
              <li>Usage Data: information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To register you as a new customer.</li>
              <li>To provide and improve our AI-powered educational services.</li>
              <li>To manage our relationship with you.</li>
              <li>To enable you to partake in a prize draw, competition or complete a survey.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">4. AI and Data Processing</h2>
            <p>Capabl AI uses artificial intelligence to personalize your learning experience. Your learning progress and interactions with the AI Tutor are processed to provide better recommendations and explanations. This data is anonymized where possible and used strictly for educational improvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
