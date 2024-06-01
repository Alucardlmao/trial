'use client';
import React, { useRef, useState } from 'react';
import Navbar from '../../components/header/Header';
import './../../styles/staticText.css';
import Footer from '@/components/footer/Footer';

export default function PrivacyPolicy() {
    const bannerRef = useRef();
    const [isScrolled, setIsScrolled] = useState(true);

    return (
        <>
            <Navbar
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
                bannerRef={bannerRef}
            />
            <div className="static-text lg:px-[95px] pb-10 md:pb-10">
                <div className="container mx-auto pt-20 md:pt-32">
                    <h1 className="text-[#33496F] text-center font-extrabold text-4xl md:text-[52px] leading-[70px] md:mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[#305839] text-center font-bold text-lg md:text-2xl">
                        Last Updated September 13th, 2023
                    </p>
                </div>
                <div class="px-6 sm:px-6 md:px-6 content mt-5 md:mt-5 pt-2">
                    <p>
                        In order to receive information about your Personal
                        Data, the purposes and the parties the Data is shared
                        with, contact the Owner.
                    </p>
                    <p>
                        For more information and to understand your rights, you
                        can also view the complete version of this privacy
                        policy, by clicking the link at the bottom right of this
                        page.
                    </p>
                    <h2>Owner and Data Controller</h2>
                    <p>
                        Sustainology Climate Solutions LLC Mezzanine Floor, The
                        Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates
                    </p>
                    <p>
                        Owner contact
                        <strong>
                            <a href="mailto:legal@sustainology.world">
                                email: legal@sustainology.world
                            </a>
                        </strong>
                    </p>
                    <h2>Types of Data collected</h2>
                    <p>
                        The owner does not provide a list of Personal Data types
                        collected.
                    </p>
                    <p>
                        Complete details on each type of Personal Data collected
                        are provided in the dedicated sections of this privacy
                        policy or by specific explanation texts displayed prior
                        to the Data collection.
                    </p>
                    <p>
                        Personal Data may be freely provided by the User, or, in
                        case of Usage Data, collected automatically when using
                        this Website. Unless specified otherwise, all Data
                        requested by this Website is mandatory and failure to
                        provide this Data may make it impossible for this
                        Website to provide its services. In cases where this
                        Website specifically states that some Data is not
                        mandatory, Users are free not to communicate this Data
                        without consequences to the availability or the
                        functioning of the Service. Users who are uncertain
                        about which Personal Data is mandatory are welcome to
                        contact the Owner. Any use of Cookies – or of other
                        tracking tools — by this Website or by the owners of
                        third-party services used by this Website serves the
                        purpose of providing the Service required by the User,
                        in addition to any other purposes described in the
                        present document and in the Cookie Policy.
                    </p>
                    <p>
                        Users are responsible for any third-party Personal Data
                        obtained, published or shared through this Website.
                    </p>
                    <h2>Mode and place of processing the Data</h2>
                    <h4>Methods of processing</h4>
                    <p>
                        The Owner takes appropriate security measures to prevent
                        unauthorized access, disclosure, modification, or
                        unauthorized destruction of the Data. The Data
                        processing is carried out using computers and/or IT
                        enabled tools, following organizational procedures and
                        modes strictly related to the purposes indicated. In
                        addition to the Owner, in some cases, the Data may be
                        accessible to certain types of persons in charge,
                        involved with the operation of this Website
                        (administration, sales, marketing, legal, system
                        administration) or external parties (such as third-party
                        technical service providers, mail carriers, hosting
                        providers, IT companies, communications agencies)
                        appointed, if necessary, as Data Processors by the
                        Owner. The updated list of these parties may be
                        requested from the Owner at any time.
                    </p>
                    <h4>Place</h4>
                    <p>
                        The Data is processed at the Owner&rsquo;s operating
                        offices and in any other places where the parties
                        involved in the processing are located.
                    </p>
                    <p>
                        Depending on the User&rsquo;s location, data transfers
                        may involve transferring the User&rsquo;s Data to a
                        country other than their own. To find out more about the
                        place of processing of such transferred Data, Users can
                        check the section containing details about the
                        processing of Personal Data.
                    </p>
                    <h4>Retention time</h4>
                    <p>
                        Unless specified otherwise in this document, Personal
                        Data shall be processed and stored for as long as
                        required by the purpose they have been collected for and
                        may be retained for longer due to applicable legal
                        obligation or based on the Users’ consent.
                    </p>
                    <h2>Cookie Policy</h2>
                    <p>
                        This Website uses Trackers. To learn more, Users may
                        consult the <a href="/cookie-policy">Cookie Policy</a>.
                    </p>
                    <h2>Further Information for Users</h2>
                    <h4>Legal basis of processing</h4>
                    <p>
                        The Owner may process Personal Data relating to Users if
                        one of the following applies:
                    </p>
                    <ul>
                        <li>
                            Users have given their consent for one or more
                            specific purposes.
                        </li>
                        <li>
                            provision of Data is necessary for the performance
                            of an agreement with the User and/or for any pre
                            contractual obligations thereof;
                        </li>
                        <li>
                            processing is necessary for compliance with a legal
                            obligation to which the Owner is subject;
                        </li>
                        <li>
                            processing is related to a task that is carried out
                            in the public interest or in the exercise of
                            official authority vested in the Owner;
                        </li>
                        <li>
                            processing is necessary for the purposes of the
                            legitimate interests pursued by the Owner or by a
                            third party.
                        </li>
                    </ul>
                    <p>
                        In any case, the Owner will gladly help to clarify the
                        specific legal basis that applies to the processing, and
                        in particular whether the provision of Personal Data is
                        a statutory or contractual requirement, or a requirement
                        necessary to enter into a contract.
                    </p>
                    <h2>Further information about retention time</h2>
                    <p>
                        Unless specified otherwise in this document, Personal
                        Data shall be processed and stored for as long as
                        required by the purpose they have been collected for and
                        may be retained for longer due to applicable legal
                        obligation or based on the Users’ consent.
                    </p>
                    <p>Therefore:</p>
                    <ul>
                        <li>
                            Personal Data collected for purposes related to the
                            performance of a contract between the Owner and the
                            User shall be retained until such contract has been
                            fully performed.
                        </li>
                        <li>
                            Personal Data collected for the purposes of the
                            Owner’s legitimate interests shall be retained as
                            long as needed to fulfill such purposes. Users may
                            find specific information regarding the legitimate
                            interests pursued by the Owner within the relevant
                            sections of this document or by contacting the
                            Owner.
                        </li>
                    </ul>
                    <p>
                        The Owner may be allowed to retain Personal Data for a
                        longer period whenever the User has given consent to
                        such processing, as long as such consent is not
                        withdrawn. Furthermore, the Owner may be obliged to
                        retain Personal Data for a longer period whenever
                        required to fulfil a legal obligation or upon order of
                        an authority.
                    </p>
                    <p>
                        Once the retention period expires, Personal Data shall
                        be deleted. Therefore, the right of access, the right to
                        erasure, the right to rectification and the right to
                        data portability cannot be enforced after expiration of
                        the retention period.
                    </p>
                    <h2>
                        The rights of Users based on the General Data Protection
                        Regulation (GDPR)
                    </h2>
                    <p>
                        Users may exercise certain rights regarding their Data
                        processed by the Owner.
                    </p>
                    <p>
                        In particular, Users have the right to do the following,
                        to the extent permitted by law:
                    </p>
                    <ul>
                        <li>
                            Withdraw their consent at any time. Users have the
                            right to withdraw consent where they have previously
                            given their consent to the processing of their
                            Personal Data.
                        </li>
                        <li>
                            Object to processing of their Data. Users have the
                            right to object to the processing of their Data if
                            the processing is carried out on a legal basis other
                            than consent.
                        </li>
                        <li>
                            Access their Data. Users have the right to learn if
                            Data is being processed by the Owner, obtain
                            disclosure regarding certain aspects of the
                            processing and obtain a copy of the Data undergoing
                            processing.
                        </li>
                        <li>
                            Verify and seek rectification. Users have the right
                            to verify the accuracy of their Data and ask for it
                            to be updated or corrected.
                        </li>
                        <li>
                            Restrict the processing of their Data. Users have
                            the right to restrict the processing of their Data.
                            In this case, the Owner will not process their Data
                            for any purpose other than storing it.
                        </li>
                        <li>
                            Have their Personal Data deleted or otherwise
                            removed. Users have the right to obtain the erasure
                            of their Data from the Owner.
                        </li>
                        <li>
                            Receive their Data and have it transferred to
                            another controller. Users have the right to receive
                            their Data in a structured, commonly used and
                            machine readable format and, if technically
                            feasible, to have it transmitted to another
                            controller without any hindrance.
                        </li>
                        <li>
                            Lodge a complaint. Users have the right to bring a
                            claim before their competent data protection
                            authority.
                        </li>
                    </ul>
                    <p>
                        Users are also entitled to learn about the legal basis
                        for Data transfers abroad including to any international
                        organization governed by public international law or set
                        up by two or more countries, such as the UN, and about
                        the security measures taken by the Owner to safeguard
                        their Data.
                    </p>
                    <h4>Details about the right to object to processing</h4>
                    <p>
                        Where Personal Data is processed for a public interest,
                        in the exercise of an official authority vested in the
                        Owner or for the purposes of the legitimate interests
                        pursued by the Owner, Users may object to such
                        processing by providing a ground related to their
                        particular situation to justify the objection.
                    </p>
                    <p>
                        Users must know that, however, should their Personal
                        Data be processed for direct marketing purposes, they
                        can object to that processing at any time, free of
                        charge and without providing any justification. Where
                        the User objects to processing for direct marketing
                        purposes, the Personal Data will no longer be processed
                        for such purposes. To learn whether the Owner is
                        processing Personal Data for direct marketing purposes,
                        Users may refer to the relevant sections of this
                        document.
                    </p>
                    <h4>How to exercise these rights</h4>
                    <p>
                        Any requests to exercise User rights can be directed to
                        the Owner through the contact details provided in this
                        document. Such requests are free of charge and will be
                        answered by the Owner as early as possible and always
                        within one month, providing Users with the information
                        required by law. Any rectification or erasure of
                        Personal Data or restriction of processing will be
                        communicated by the Owner to each recipient, if any, to
                        whom the Personal Data has been disclosed unless this
                        proves impossible or involves disproportionate effort.
                        At the Users’ request, the Owner will inform them about
                        those recipients.
                    </p>
                    <h2>
                        Additional information about Data collection and
                        processing
                    </h2>
                    <h4>Legal action</h4>
                    <p>
                        The User&rsquo;s Personal Data may be used for legal
                        purposes by the Owner in Court or in the stages leading
                        to possible legal action arising from improper use of
                        this Website or the related Services. The User declares
                        to be aware that the Owner may be required to reveal
                        personal data upon request of public authorities.
                    </p>
                    <h4>
                        Additional information about User&rsquo;s Personal Data
                    </h4>
                    <p>
                        In addition to the information contained in this privacy
                        policy, this Website may provide the User with
                        additional and contextual information concerning
                        particular Services or the collection and processing of
                        Personal Data upon request.
                    </p>
                    <h4>System logs and maintenance</h4>
                    <p>
                        For operation and maintenance purposes, this Website and
                        any third-party services may collect files that record
                        interaction with this Website (System logs) or use other
                        Personal Data (such as the IP Address) for this purpose.
                    </p>
                    <h4>Information not contained in this policy</h4>
                    <p>
                        More details concerning the collection or processing of
                        Personal Data may be requested from the Owner at any
                        time. Please see the contact information at the
                        beginning of this document.
                    </p>
                    <h4>Changes to this privacy policy</h4>
                    <p>
                        The Owner reserves the right to make changes to this
                        privacy policy at any time by notifying its Users on
                        this page and possibly within this Website and/or - as
                        far as technically and legally feasible - sending a
                        notice to Users via any contact information available to
                        the Owner. It is strongly recommended to check this page
                        often, referring to the date of the last modification
                        listed at the bottom.
                    </p>
                    <p>
                        Should the changes affect processing activities
                        performed on the basis of the User’s consent, the Owner
                        shall collect new consent from the User, where required.
                    </p>
                    <h2>Definitions and legal references</h2>
                    <h4>Personal Data (or Data)</h4>
                    <p>
                        Any information that directly, indirectly, or in
                        connection with other information — including a personal
                        identification number — allows for the identification or
                        identifiability of a natural person.
                    </p>
                    <h4>Usage Data</h4>
                    <p>
                        Information collected automatically through this Website
                        (or third-party services employed in this Website),
                        which can include: the IP addresses or domain names of
                        the computers utilized by the Users who use this
                        Website, the URI addresses (Uniform Resource
                        Identifier), the time of the request, the method
                        utilized to submit the request to the server, the size
                        of the file received in response, the numerical code
                        indicating the status of the server&rsquo;s answer
                        (successful outcome, error, etc.), the country of
                        origin, the features of the browser and the operating
                        system utilized by the User, the various time details
                        per visit (e.g., the time spent on each page within the
                        Application) and the details about the path followed
                        within the Application with special reference to the
                        sequence of pages visited, and other parameters about
                        the device operating system and/or the User&rsquo;s IT
                        environment.
                    </p>
                    <h4>User</h4>
                    <p>
                        The individual using this Website who, unless otherwise
                        specified, coincides with the Data Subject.
                    </p>
                    <h4>Data Subject</h4>
                    <p>The natural person to whom the Personal Data refers.</p>
                    <h4>Data Processor (or Processor)</h4>
                    <p>
                        The natural or legal person, public authority, agency or
                        other body which processes Personal Data on behalf of
                        the Controller, as described in this privacy policy.
                    </p>
                    <h4>Data Controller (or Owner)</h4>
                    <p>
                        The natural or legal person, public authority, agency or
                        other body which, alone or jointly with others,
                        determines the purposes and means of the processing of
                        Personal Data, including the security measures
                        concerning the operation and use of this Website. The
                        Data Controller, unless otherwise specified, is the
                        Owner of this Website.
                    </p>
                    <h4>This Website (or this Application)</h4>
                    <p>
                        The means by which the Personal Data of the User is
                        collected and processed.
                    </p>
                    <h4>Service</h4>
                    <p>
                        The service provided by this Website as described in the
                        relative terms (if available) and on this
                        site/application.
                    </p>
                    <h4>European Union (or EU)</h4>
                    <p>
                        Unless otherwise specified, all references made within
                        this document to the European Union include all current
                        member states to the European Union and the European
                        Economic Area.
                    </p>
                    <h4>Legal information</h4>
                    <p>
                        This privacy policy relates solely to this Website, if
                        not stated otherwise within this document. Latest
                        update: September 12, 2023
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
