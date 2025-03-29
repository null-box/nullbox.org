import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service',
  description: "Null Box Ltd's terms of service governing the use of our website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg font-medium mb-4">Terms of Service</h1>
        <p className="text-xs text-muted-foreground mb-6">Last updated: March 23, 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-sm font-medium mb-3">1. Introduction</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  Welcome to Null Box Ltd ("Company", "we", "our", "us"). These Terms of Service
                  ("Terms", "Terms of Service") govern your use of our website located at
                  nullbox.org (the "Service") operated by Null Box Ltd.
                </p>
                <p className="mb-4 text-xs">
                  Our Privacy Policy also governs your use of our Service and explains how we
                  collect, safeguard and disclose information that results from your use of our web
                  pages. Please read it here:{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p className="mb-4 text-xs">
                  Your agreement with us includes these Terms and our Privacy Policy ("Agreements").
                  You acknowledge that you have read and understood the Agreements, and agree to be
                  bound by them.
                </p>
                <p className="text-xs">
                  If you do not agree with the Agreements, you must not use the Service. Please
                  contact us if you have any questions regarding the Agreements.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">2. Communications</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  By using our Service, you agree to subscribe to newsletters, marketing or
                  promotional materials and other information we may send. However, you may opt out
                  of receiving any, or all, of these communications from us by following the
                  unsubscribe link or by emailing contact@nullbox.org.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">3. Purchases</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  If you wish to purchase any product or service made available through the Service
                  ("Purchase"), you may be asked to supply certain information relevant to your
                  Purchase including your name, email, phone number, credit card information,
                  billing address, and shipping information.
                </p>
                <p className="mb-4 text-xs">
                  You represent and warrant that: (i) you have the legal right to use any credit
                  card(s) or other payment method(s) in connection with any Purchase; and that (ii)
                  the information you supply to us is true, correct and complete.
                </p>
                <p className="text-xs">
                  We reserve the right to refuse or cancel your order at any time for reasons
                  including but not limited to: product or service availability, errors in the
                  description or price of the product or service, error in your order or other
                  reasons.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">4. Contests, Sweepstakes and Promotions</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  Any contests, sweepstakes or other promotions (collectively, "Promotions") made
                  available through the Service may be governed by rules that are separate from
                  these Terms of Service. If you participate in any Promotions, please review the
                  applicable rules as well as our Privacy Policy.
                </p>
                <p className="text-xs">
                  If the rules for a Promotion conflict with these Terms of Service, the Promotion
                  rules will apply.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">5. Intellectual Property</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  The Service and its original content (excluding content provided by users),
                  features and functionality are and will remain the exclusive property of Null Box
                  Ltd and its licensors. The Service is protected by copyright, trademark, and other
                  laws of both the United Kingdom and foreign countries.
                </p>
                <p className="mb-4 text-xs">
                  Our trademarks and trade dress may not be used in connection with any product or
                  service without the prior written consent of Null Box Ltd.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">6. Content and User Contributions</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  Our Service allows you to post, link, store, share and otherwise make available
                  certain information, text, graphics, videos, or other material ("Content"). You
                  are responsible for the Content that you post on or through the Service, including
                  its legality, reliability, and appropriateness.
                </p>
                <p className="mb-4 text-xs">
                  By posting Content on or through the Service, You represent and warrant that: (i)
                  the Content is yours (you own it) and/or you have the right to use it and the
                  right to grant us the rights and license as provided in these Terms, and (ii) that
                  the posting of your Content on or through the Service does not violate the privacy
                  rights, publicity rights, copyrights, contract rights or any other rights of any
                  person or entity.
                </p>
                <p className="text-xs">
                  We reserve the right to terminate the account of anyone found to be infringing on
                  a copyright.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">7. Prohibited Uses</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  You may use the Service only for lawful purposes and in accordance with the Terms.
                  You agree not to use the Service:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-xs">
                  <li>
                    In any way that violates any applicable national or international law or
                    regulation.
                  </li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to exploit or harm minors
                    in any way by exposing them to inappropriate content, asking for personally
                    identifiable information, or otherwise.
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or promotional material,
                    including any "junk mail", "chain letter," "spam," or any other similar
                    solicitation.
                  </li>
                  <li>
                    To impersonate or attempt to impersonate the Company, a Company employee,
                    another user, or any other person or entity.
                  </li>
                  <li>
                    In any way that infringes upon the rights of others, or in any way is illegal,
                    threatening, fraudulent, or harmful, or in connection with any unlawful,
                    illegal, fraudulent, or harmful purpose or activity.
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits anyone's use or
                    enjoyment of the Service, or which, as determined by us, may harm or offend the
                    Company or users of the Service or expose them to liability.
                  </li>
                </ul>
                <p className="text-xs">Additionally, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-xs">
                  <li>
                    Use the Service in any manner that could disable, overburden, damage, or impair
                    the Service or interfere with any other party's use of the Service.
                  </li>
                  <li>
                    Use any robot, spider, or other automatic device, process, or means to access
                    the Service for any purpose, including monitoring or copying any of the material
                    on the Service.
                  </li>
                  <li>
                    Use any manual process to monitor or copy any of the material on the Service or
                    for any other unauthorized purpose without our prior written consent.
                  </li>
                  <li>
                    Use any device, software, or routine that interferes with the proper working of
                    the Service.
                  </li>
                  <li>
                    Introduce any viruses, trojan horses, worms, logic bombs, or other material
                    which is malicious or technologically harmful.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with, damage, or disrupt any
                    parts of the Service, the server on which the Service is stored, or any server,
                    computer, or database connected to the Service.
                  </li>
                  <li>
                    Attack the Service via a denial-of-service attack or a distributed
                    denial-of-service attack.
                  </li>
                  <li>Otherwise attempt to interfere with the proper working of the Service.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">8. Disclaimer of Warranty</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  These services are provided by the Company on an "as is" and "as available" basis.
                  The Company makes no representations or warranties of any kind, express or
                  implied, as to the operation of their services, or the information, content or
                  materials included therein.
                </p>
                <p className="mb-4 text-xs">
                  To the fullest extent permitted by applicable law, the Company expressly disclaims
                  all warranties, express or implied, including but not limited to implied
                  warranties of merchantability and fitness for a particular purpose. The Company
                  will not be liable for any damages of any kind arising from the use of this
                  service, including, but not limited to direct, indirect, incidental, punitive, and
                  consequential damages.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">9. Limitation of Liability</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  To the maximum extent permitted by applicable law, in no event shall the Company,
                  its directors, employees, partners, agents, suppliers, or affiliates, be liable
                  for any indirect, incidental, special, consequential or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other
                  intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-xs">
                  <li>Your access to or use of or inability to access or use the Service;</li>
                  <li>Any conduct or content of any third party on the Service;</li>
                  <li>Any content obtained from the Service; and</li>
                  <li>
                    Unauthorized access, use or alteration of your transmissions or content, whether
                    based on warranty, contract, tort (including negligence) or any other legal
                    theory, whether or not we have been informed of the possibility of such damage,
                    and even if a remedy set forth herein is found to have failed of its essential
                    purpose.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">10. Indemnification</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  You agree to defend, indemnify, and hold harmless the Company, its licensors and
                  service providers, and its and their respective officers, directors, employees,
                  contractors, agents, licensors, suppliers, successors, and assigns from and
                  against any claims, liabilities, damages, judgments, awards, losses, costs,
                  expenses, or fees (including reasonable attorneys' fees) arising out of or
                  relating to your violation of these Terms of Service or your use of the Service,
                  including, but not limited to, your User Contributions, any use of the Service's
                  content, services, and products other than as expressly authorized in these Terms
                  of Service, or your use of any information obtained from the Service.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">11. Governing Law</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  These Terms shall be governed and construed in accordance with the laws of the
                  United Kingdom, without regard to its conflict of law provisions.
                </p>
                <p className="mb-4 text-xs">
                  Our failure to enforce any right or provision of these Terms will not be
                  considered a waiver of those rights. If any provision of these Terms is held to be
                  invalid or unenforceable by a court, the remaining provisions of these Terms will
                  remain in effect.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">12. Changes to Terms</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at
                  any time. If a revision is material, we will provide at least 30 days' notice
                  prior to any new terms taking effect. What constitutes a material change will be
                  determined at our sole discretion.
                </p>
                <p className="mb-4 text-xs">
                  By continuing to access or use our Service after any revisions become effective,
                  you agree to be bound by the revised terms. If you do not agree to the new terms,
                  you are no longer authorized to use the Service.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-3">13. Contact Us</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs">
                  If you have any questions about these Terms, please contact us:
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
          <p className="text-muted-foreground text-xs">
            By accessing or using our Service, you agree to be bound by these{' '}
            <span className="font-medium">Terms of Service</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
