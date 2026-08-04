# Release Notes - v1.1.0
**Author:** Quentin Perez · **Period:** July – August 2026

---

## Overview

This period saw the introduction of a self-service FAQ section, a substantial hardening of the content-management infrastructure underpinning editorial workflows, improvements to newsletter navigation, and the addition of a contact page. Each change was driven by a concrete operational need rather than speculative enhancement, as detailed below.

---

## What's New

A summary of what changed for site visitors and editors, compared to the state of the site before July 2026.

| Area | Before July 2026 | Now |
|---|---|---|
| **FAQ** | No dedicated FAQ page; answers to common questions were scattered or absent. | A `/faq` page with an accordion of editor-managed questions and answers. |
| **CMS login** | CMS authentication depended on a third-party OAuth proxy operated by an unaffiliated individual outside the project's control. | Authentication runs through a Cloudflare Worker owned and deployed by the project itself. |
| **Publishing content** | Any CMS edit went straight to `main` and triggered an immediate production rebuild, with no review step. | Edits move through a Draft → In Review → Ready workflow before they go live. |
| **Newsletters** | Sections had no direct links, and issues were dated day-by-day (e.g. "12 July 2026"). | Each section has a shareable, copy-to-clipboard anchor link, and issues are dated by month (e.g. "July 2026"). |
| **Contact** | No contact page; visitors had no structured way to reach out through the site. | A `/contact` page with a form that opens a pre-filled email in the visitor's mail client, with a copy-to-clipboard fallback if none is configured. Linked from the footer. |

---

## 1. FAQ Section (CMS-driven)

A new `/faq` page was introduced, rendering entries from a dedicated content collection via an accordion component, with editor-controlled ordering.

**Motivation:** Prior to this change, adding or amending frequently-asked-question content required a developer to modify source files directly. This change delegates that responsibility to non-technical editors through the CMS admin interface, reducing turnaround time for content updates and removing an unnecessary developer dependency from routine editorial work.

## 2. Self-Hosted OAuth Proxy for Decap CMS

The GitHub OAuth proxy required for CMS authentication — previously a third-party worker operated by an external individual — has been replaced with a Cloudflare Worker deployed and owned under the project's own infrastructure.

**Motivation:** GitHub Pages, being purely static, cannot securely hold the OAuth client secret required to complete a login handshake; this necessitates a small proxy service. Depending on infrastructure controlled by an unaffiliated third party constituted an unacceptable operational risk — its availability, security posture, and continuity were entirely outside the project's control. Migrating this component in-house eliminates that single point of external dependency.

## 3. Editorial Workflow for Content Publishing

Decap CMS has been configured with an editorial workflow mode, introducing a formal Draft → In Review → Ready progression prior to publication.

**Motivation:** Under the previous configuration, any content edit was published directly to `main` and immediately triggered a production rebuild, leaving no opportunity to catch errors before they went live. The editorial workflow introduces a deliberate review gate, aligning content publishing with standard editorial governance practice.

## 4. Newsletter Navigation Enhancements

Individual newsletter sections now expose copy-to-clipboard anchor links, and the displayed publication date format has been revised to a "Month Year" representation.

**Motivation:** The anchor links enable precise, shareable references to specific sections of a newsletter issue — a capability previously absent. The coarser date format better reflects the periodical, rather than daily, cadence of newsletter publication, improving readability.

## 5. Contact Page (mailto-based)

A `/contact` page has been introduced, featuring a form (name, affiliation, email, subject, message) that composes a pre-filled email and hands it to the visitor's own mail client via a `mailto:` link, together with a bot-deterring honeypot field and a copy-to-clipboard fallback for visitors without a configured mail client. The footer now links to this page.

**Motivation:** As a statically-hosted site, the project has no server-side component capable of receiving form submissions and dispatching email directly; providing that capability would require standing up a backend service and a paid, domain-verified transactional email provider — a non-trivial and ongoing infrastructural commitment. The `mailto:` approach discharges message delivery to the visitor's own client under their own identity, at zero infrastructural or financial cost. The copy-to-clipboard fallback exists specifically to mitigate this approach's principal limitation: visitors without a configured mail client would otherwise be left with no means of sending their message.
