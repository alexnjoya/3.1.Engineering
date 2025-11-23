import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | 3.1ST Engineering",
  description: "Terms of Service for 3.1ST Engineering Ltd. Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Terms of Service
          </h1>
          <p className="text-sm text-foreground/70 mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement to Terms</h2>
              <p>
                By accessing or using the website of 3.1ST Engineering Ltd ("Company", "We", "Us", or "Our") at 31stengineering.co.uk ("Website", "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on 3.1ST Engineering Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                <li>attempt to reverse engineer any software contained on 3.1ST Engineering Ltd's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by 3.1ST Engineering Ltd at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Disclaimer</h2>
              <p className="mb-4">
                The materials on 3.1ST Engineering Ltd's website are provided on an 'as is' basis. 3.1ST Engineering Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, 3.1ST Engineering Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitations</h2>
              <p>
                In no event shall 3.1ST Engineering Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 3.1ST Engineering Ltd's website, even if 3.1ST Engineering Ltd or a 3.1ST Engineering Ltd authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Accuracy of Materials</h2>
              <p>
                The materials appearing on 3.1ST Engineering Ltd's website could include technical, typographical, or photographic errors. 3.1ST Engineering Ltd does not warrant that any of the materials on its website are accurate, complete, or current. 3.1ST Engineering Ltd may make changes to the materials contained on its website at any time without notice. However, 3.1ST Engineering Ltd does not make any commitment to update the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Links</h2>
              <p>
                3.1ST Engineering Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by 3.1ST Engineering Ltd of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Modifications</h2>
              <p>
                3.1ST Engineering Ltd may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Availability</h2>
              <p>
                We reserve the right to withdraw or amend our Service, and any service or material we provide on the Service, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Service, or the entire Service, to users, including registered users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p>
                You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Prohibited Uses</h2>
              <p className="mb-4">You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property Rights</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of 3.1ST Engineering Ltd and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li>
                  <strong>By email:</strong> hello@31stengineering.co.uk
                </li>
                <li>
                  <strong>By phone:</strong> 07300805194
                </li>
                <li>
                  <strong>By visiting this page on our website:</strong> 31stengineering.co.uk/terms
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

