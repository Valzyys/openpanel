'use client';

import Image from 'next/image';

export default function DpaDownloadPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Print button - hidden when printing */}
      <div className="sticky top-0 z-10 flex justify-end gap-3 border-gray-200 border-b bg-white px-8 py-3 print:hidden">
        <button
          className="rounded bg-black px-4 py-2 font-medium text-sm text-white hover:bg-gray-800"
          onClick={() => window.print()}
          type="button"
        >
          Download / Print PDF
        </button>
      </div>

      <div className="mx-auto max-w-3xl px-8 py-12 print:py-0">
        {/* Header */}
        <div className="mb-10 border-gray-300 border-b pb-8">
          <p className="mb-1 text-gray-500 text-xs uppercase tracking-widest">
            JKT48Connect
          </p>
          <h1 className="mb-2 font-bold text-3xl">Data Processing Agreement</h1>
          <p className="text-gray-500 text-sm">
            Version 1.0 &middot; Last updated: March 3, 2026
          </p>
        </div>

        <p className="mb-8 text-gray-700 text-sm leading-relaxed">
          This Data Processing Agreement ("DPA") is entered into between
          JKT48Connect ("JKT48Connect", "Processor") and the customer identified
          in the signature block below ("Controller"). It applies where
          JKT48Connect processes personal data on behalf of the Controller as
          part of the JKT48Connect API service, and forms part of the
          JKT48Connect Terms of Service.
        </p>

        <Section number="1" title="Definitions">
          <ul className="list-none space-y-2 text-gray-700 text-sm">
            <li>
              <strong>Applicable Data Protection Law</strong> means any
              applicable privacy or data protection legislation, including but
              not limited to UU PDP (Indonesia) and GDPR where applicable.
            </li>
            <li>
              <strong>Controller</strong> means the customer, who determines the
              purposes and means of processing.
            </li>
            <li>
              <strong>Processor</strong> means JKT48Connect, who processes data
              on the Controller's behalf.
            </li>
            <li>
              <strong>Personal Data</strong>, <strong>Processing</strong>,{' '}
              <strong>Data Subject</strong>, and{' '}
              <strong>Supervisory Authority</strong> have the meanings given
              under applicable data protection law.
            </li>
            <li>
              <strong>Sub-processor</strong> means any third party engaged by
              JKT48Connect to process Personal Data in connection with the
              service.
            </li>
          </ul>
        </Section>

        <Section number="2" title="Our approach to privacy">
          <p className="mb-3 text-gray-700 text-sm leading-relaxed">
            JKT48Connect is built to minimize personal data collection by
            design. The API does not collect end-user cookies or persistent
            browser identifiers. API usage data (request logs, IP addresses of
            API callers) is collected solely for security, abuse prevention, and
            rate limiting purposes and is not retained beyond 30 days.
          </p>
          <p className="mb-2 text-gray-700 text-sm">
            The data we store per API request is:
          </p>
          <ul className="mb-3 list-disc space-y-1 pl-5 text-gray-700 text-sm">
            <li>API key identifier (anonymized reference, not the key itself)</li>
            <li>Endpoint called and HTTP method</li>
            <li>Response status code and latency</li>
            <li>Timestamp of the request</li>
            <li>Hashed IP address for abuse detection (discarded after 30 days)</li>
          </ul>
          <p className="text-gray-700 text-sm">
            JKT48 member data served through the API (profiles, schedules, live
            stream data) is sourced from publicly available information and does
            not constitute personal data processed on behalf of the Controller's
            end users. We provide this DPA for Controllers who require it for
            their own compliance documentation.
          </p>
        </Section>

        <Section number="3" title="Scope and roles">
          <p className="text-gray-700 text-sm leading-relaxed">
            JKT48Connect acts as a Processor when processing data on behalf of
            the Controller. The Controller is responsible for how they use data
            retrieved from the JKT48Connect API within their own applications
            and for ensuring their end users are appropriately informed.
          </p>
        </Section>

        <Section number="4" title="Processor obligations">
          <p className="mb-2 text-gray-700 text-sm">
            JKT48Connect commits to the following:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700 text-sm">
            <li>
              Process Personal Data only on the Controller's documented
              instructions and for no other purpose.
            </li>
            <li>
              Ensure that all personnel with access to Personal Data are bound
              by appropriate confidentiality obligations.
            </li>
            <li>
              Implement and maintain technical and organizational measures in
              accordance with Section 7 of this DPA.
            </li>
            <li>
              Not engage a Sub-processor without prior general or specific
              written authorization and flow down equivalent data protection
              obligations to any Sub-processor.
            </li>
            <li>
              Assist the Controller, where reasonably possible, in responding to
              Data Subject requests to exercise their rights under applicable law.
            </li>
            <li>
              Notify the Controller without undue delay (and no later than 48
              hours) upon becoming aware of a Personal Data breach.
            </li>
            <li>
              Make available all information necessary to demonstrate compliance
              with this DPA and cooperate with audits conducted by the
              Controller or their designated auditor, subject to reasonable
              notice and confidentiality obligations.
            </li>
            <li>
              At the Controller's choice, delete or return all Personal Data
              upon termination of the service.
            </li>
          </ul>
        </Section>

        <Section number="5" title="Controller obligations">
          <p className="mb-2 text-gray-700 text-sm">
            The Controller confirms that:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-gray-700 text-sm">
            <li>
              They have a lawful basis for the processing described in this DPA.
            </li>
            <li>
              They have provided appropriate privacy notices to their end users.
            </li>
            <li>
              They are responsible for the accuracy and lawfulness of the data
              they instruct JKT48Connect to process.
            </li>
            <li>
              They will not use the JKT48Connect API to collect, store, or
              process special categories of personal data without appropriate
              safeguards.
            </li>
          </ul>
        </Section>

        <Section number="6" title="Sub-processors">
          <p className="mb-3 text-gray-700 text-sm">
            JKT48Connect uses the following sub-processors to deliver the
            service:
          </p>
          <table className="mb-3 w-full border-collapse text-sm">
            <thead>
              <tr className="border border-gray-300 bg-gray-50">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Sub-processor
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Purpose
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Vercel Inc.
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  API hosting and edge infrastructure
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Global (Singapore region primary)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Cloudflare Inc.
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  CDN, DDoS protection, and DNS
                </td>
                <td className="border border-gray-300 px-3 py-2">Global</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Supabase Inc.
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Database and authentication
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Singapore
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-700 text-sm">
            JKT48Connect will inform the Controller of any intended changes to
            this list with reasonable notice, giving the Controller the
            opportunity to object.
          </p>
        </Section>

        <Section number="7" title="Technical and organizational measures">
          <div className="space-y-4 text-gray-700 text-sm">
            <div>
              <p className="mb-1 font-semibold">
                Data minimization and anonymization
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  IP addresses of API callers are hashed immediately on ingestion
                  and discarded in raw form. Hashed values are retained for no
                  more than 30 days.
                </li>
                <li>
                  API keys are stored as salted hashes. The raw key is only
                  shown to the user once at creation and never stored in
                  plaintext.
                </li>
                <li>
                  No end-user cookies or persistent cross-device identifiers are
                  set by JKT48Connect.
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold">Access control</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Dashboard and API management access is protected by
                  authentication and role-based access control.
                </li>
                <li>
                  Production systems are accessible only to authorized
                  personnel.
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold">
                Encryption and transport security
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>All data is transmitted over HTTPS (TLS 1.2+).</li>
                <li>Data at rest is encrypted using AES-256.</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold">
                Infrastructure and availability
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Primary infrastructure is hosted in the Singapore region to
                  minimize latency for Indonesian and Southeast Asian users.
                </li>
                <li>Regular automated backups are performed daily.</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold">Incident response</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  We maintain procedures for detecting, reporting, and
                  investigating Personal Data breaches.
                </li>
                <li>
                  In the event of a breach affecting the Controller's data, we
                  will notify them within 48 hours of becoming aware.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section number="8" title="International data transfers">
          <p className="text-gray-700 text-sm leading-relaxed">
            JKT48Connect's primary infrastructure is located in Singapore.
            Controllers based in Indonesia should note that data may be processed
            outside Indonesia. JKT48Connect ensures appropriate safeguards are
            in place for any such transfers in accordance with applicable data
            protection law.
          </p>
        </Section>

        <Section number="9" title="Data retention and deletion">
          <ul className="list-disc space-y-1 pl-5 text-gray-700 text-sm">
            <li>
              <strong>API request logs</strong> are retained for 30 days and
              then permanently deleted.
            </li>
            <li>
              <strong>Account data</strong> (email, API key hashes, usage
              statistics) is retained for the duration of the active account.
            </li>
            <li>
              The Controller can delete their account and all associated data at
              any time from within the dashboard. Upon account termination,
              JKT48Connect will delete the Controller's data within 30 days
              unless required by law to retain it longer.
            </li>
          </ul>
        </Section>

        <Section number="10" title="Governing law">
          <p className="text-gray-700 text-sm leading-relaxed">
            This DPA is governed by the laws of the Republic of Indonesia and is
            interpreted in accordance with applicable Indonesian data protection
            legislation, including UU No. 27 Tahun 2022 tentang Pelindungan Data
            Pribadi (UU PDP).
          </p>
        </Section>

        {/* Exhibit A */}
        <div className="mb-8 border-black border-t-2 pt-8">
          <p className="mb-1 text-gray-500 text-xs uppercase tracking-widest">
            Annex
          </p>
          <h2 className="mb-4 font-bold text-xl">
            Exhibit A: Description of Processing
          </h2>
          <table className="w-full border-collapse text-sm">
            <tbody>
              <Row
                label="Nature of processing"
                value="Collection and storage of API request logs (endpoint, status, latency, hashed IP) for security and rate limiting purposes. Provision of JKT48 member, theater, live stream, and event data via REST API endpoints."
              />
              <Row
                label="Purpose of processing"
                value="To provide the Controller with access to JKT48 data through the JKT48Connect API for use in their applications. API request logs are processed for security monitoring, abuse prevention, and usage analytics."
              />
              <Row
                label="Duration of processing"
                value="API request logs: 30 days, then permanently deleted. Account data: retained for the duration of the active account. All data deleted within 30 days of account termination."
              />
              <Row
                label="Categories of data subjects"
                value="Developers and organizations using the JKT48Connect API (Controllers). End users of the Controller's applications are not directly processed by JKT48Connect."
              />
              <Row
                label="Categories of personal data"
                value="API key identifiers (hashed), email address (for account), hashed IP addresses of API callers (for abuse detection, retained max 30 days), API usage statistics (endpoint, status, latency, timestamp). No end-user personal data is collected from the Controller's application users."
              />
              <Row
                label="Special categories of data"
                value="None. The Controller is responsible for ensuring no special category data is transmitted via API request parameters."
              />
              <Row
                label="Sub-processors"
                value="Vercel Inc. (Singapore) — API hosting; Cloudflare Inc. (Global) — CDN and DDoS protection; Supabase Inc. (Singapore) — database and authentication"
              />
            </tbody>
          </table>
        </div>

        {/* Signatures */}
        <div className="border-black border-t-2 pt-8">
          <p className="mb-1 text-gray-500 text-xs uppercase tracking-widest">
            Execution
          </p>
          <h2 className="mb-6 font-bold text-xl">Signatures</h2>

          <div className="grid grid-cols-2 gap-12">
            {/* Processor - pre-signed */}
            <div>
              <div className="col h-32 gap-2">
                <p className="font-semibold text-gray-500 text-xs uppercase tracking-widest">
                  Processor
                </p>
                <p className="font-semibold text-sm">JKT48Connect</p>
                <p className="text-gray-500 text-xs">
                  Indonesia
                </p>
              </div>
              <SignatureLine
                label="Signature"
                value={
                  <Image
                    alt="Valzy Nathaniel signature"
                    className="relative top-4 h-16 w-auto object-contain object-left"
                    height={64}
                    src="/signature.png"
                    width={200}
                  />
                }
              />
              <SignatureLine label="Name" value="Valzy Nathaniel" />
              <SignatureLine label="Title" value="Founder" />
              <SignatureLine label="Date" value="March 3, 2026" />
            </div>

            {/* Controller - blank */}
            <div>
              <div className="flex flex-col h-32 gap-2">
                <p className="font-semibold text-gray-500 text-xs uppercase tracking-widest">
                  Controller
                </p>
              </div>
              <SignatureLine label="Company" value="" />
              <SignatureLine label="Signature" value="" />
              <SignatureLine label="Name" value="" />
              <SignatureLine label="Title" value="" />
              <SignatureLine label="Date" value="" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-gray-200 border-t pt-6 text-center text-gray-400 text-xs print:mt-4">
          JKT48Connect &middot; priority@jkt48connect.com &middot; jkt48connect.com/dpa
        </div>
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-3 font-bold text-base">
        {number}. {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border border-gray-300">
      <td className="w-48 border border-gray-300 bg-gray-50 px-3 py-2 align-top font-semibold text-xs">
        {label}
      </td>
      <td className="border border-gray-300 px-3 py-2 text-xs leading-relaxed">
        {value}
      </td>
    </tr>
  );
}

function SignatureLine({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <p className="text-gray-500 text-xs">{label}</p>
      <div className="mt-1 flex h-7 items-end border-gray-400 border-b font-mono">
        {value}
      </div>
    </div>
  );
}
