import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description:
    "Null Box Ltd's privacy policy regarding the collection and use of personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg font-medium mb-4">Privacy Policy</h1>
        <p className="text-xs text-muted-foreground mb-6">Last updated: March 23, 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-sm font-medium mb-3">Introduction</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  Null Box Ltd ("we," "our," or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website nullbox.org (the "Site") or engage with our
                  services.
                </p>
                <p className="text-xs">
                  Please read this privacy policy carefully. If you do not agree with the terms of
                  this privacy policy, please do not access the site. We reserve the right to make
                  changes to this Privacy Policy at any time and for any reason. We will alert you
                  about any changes by updating the "Last updated" date of this Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Information We Collect</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-xs font-medium">Personal Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-xs">
                  We may collect personal identification information from you in a variety of ways,
                  including, but not limited to, when you visit our site, register on the site, fill
                  out a form, and in connection with other activities, services, features, or
                  resources we make available on our Site. You may be asked for, as appropriate:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-xs">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Job title</li>
                </ul>
                <p className="text-xs">
                  You may, however, visit our Site anonymously. We will collect personal
                  identification information from you only if you voluntarily submit such
                  information to us. You can always refuse to supply personal identification
                  information, except that it may prevent you from engaging in certain Site-related
                  activities.
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xs font-medium">Non-Personal Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs">
                    We may collect non-personal identification information about you whenever you
                    interact with our Site. Non-personal identification information may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs">
                    <li>Browser name</li>
                    <li>Type of computer or device</li>
                    <li>
                      Technical information about your means of connection to our Site, such as
                      operating system and Internet service provider
                    </li>
                    <li>IP address</li>
                    <li>Usage patterns and preferences</li>
                    <li>Other similar information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">How We Use Your Information</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  We may use the information we collect from you in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs">
                  <li>
                    To personalize your experience and to deliver content and product offerings
                    relevant to your interests
                  </li>
                  <li>To improve our website in order to better serve you</li>
                  <li>
                    To allow us to better service you in responding to your customer service
                    requests
                  </li>
                  <li>To administer a contest, promotion, survey, or other site feature</li>
                  <li>To quickly process your transactions</li>
                  <li>
                    To send periodic emails regarding your order or other products and services
                  </li>
                  <li>To follow up with you after correspondence (email or phone inquiries)</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Cookies and Tracking Technologies</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies
                  on the Site to help customize the Site and improve your experience. When you
                  access the Site, your personal information is not collected through the use of
                  tracking technology. Most browsers are set to accept cookies by default. You can
                  remove or reject cookies, but be aware that such action could affect the
                  availability and functionality of the Site.
                </p>
                <p className="text-xs">
                  You should be aware that getting a new computer, installing a new browser,
                  upgrading an existing browser, or erasing or otherwise altering your browser's
                  cookies files may also clear certain opt-out cookies, plug-ins, or settings.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Third-Party Websites</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  The Site may contain links to third-party websites and applications of interest,
                  including advertisements and external services, that are not affiliated with us.
                  Once you have used these links to leave the Site, any information you provide to
                  these third parties is not covered by this Privacy Policy, and we cannot guarantee
                  the safety and privacy of your information. Before visiting and providing any
                  information to any third-party websites, you should inform yourself of the privacy
                  policies and practices (if any) of the third party responsible for that website,
                  and should take those steps necessary to, in your discretion, protect the privacy
                  of your information.
                </p>
                <p className="text-xs">
                  We are not responsible for the content or privacy and security practices and
                  policies of any third parties, including other sites, services or applications
                  that may be linked to or from the Site.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Security of Your Information</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  We use administrative, technical, and physical security measures to help protect
                  your personal information. While we have taken reasonable steps to secure the
                  personal information you provide to us, please be aware that despite our efforts,
                  no security measures are perfect or impenetrable, and no method of data
                  transmission can be guaranteed against any interception or other type of misuse.
                </p>
                <p className="text-xs">
                  Any information disclosed online is vulnerable to interception and misuse by
                  unauthorized parties. Therefore, we cannot guarantee complete security if you
                  provide personal information.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Your Data Protection Rights</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  Depending on your location, you may have certain rights regarding your personal
                  information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-xs">
                  <li>
                    <strong>The right to access</strong> – You have the right to request copies of
                    your personal data.
                  </li>
                  <li>
                    <strong>The right to rectification</strong> – You have the right to request that
                    we correct any information you believe is inaccurate or complete information you
                    believe is incomplete.
                  </li>
                  <li>
                    <strong>The right to erasure</strong> – You have the right to request that we
                    erase your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to restrict processing</strong> – You have the right to
                    request that we restrict the processing of your personal data, under certain
                    conditions.
                  </li>
                  <li>
                    <strong>The right to object to processing</strong> – You have the right to
                    object to our processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to data portability</strong> – You have the right to request
                    that we transfer the data that we have collected to another organization, or
                    directly to you, under certain conditions.
                  </li>
                </ul>
                <p className="text-xs">
                  If you make a request, we have one month to respond to you. If you would like to
                  exercise any of these rights, please contact us using the information provided
                  below.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Children's Information</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  The Site is not directed to children under the age of 13, and we do not knowingly
                  collect personal information from children under 13. If we learn we have collected
                  or received personal information from a child under 13 without verification of
                  parental consent, we will delete that information.
                </p>
                <p className="text-xs">
                  If you believe we might have any information from or about a child under 13,
                  please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Changes to This Privacy Policy</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last
                  updated" date at the top of this Privacy Policy.
                </p>
                <p className="text-xs">
                  You are advised to review this Privacy Policy periodically for any changes.
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">Contact Us</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xs">
                  <li>
                    By email:{' '}
                    <a href="mailto:contact@nullbox.org" className="text-primary hover:underline">
                      contact@nullbox.org
                    </a>
                  </li>
                  <li>
                    By visiting the{' '}
                    <Link href="/contact" className="text-primary hover:underline">
                      contact page
                    </Link>{' '}
                    on our website
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            By using our website, you consent to our{' '}
            <span className="font-medium">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
