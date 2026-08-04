# Release Notes - v1.0.0
**Author:** Quentin Perez, Olivier Barais · **Period:** February – May 2026

---

## Overview

This period covers the initial build-out of the AIM-PRO project website: the founding static-site structure and CMS, and the first wave of content sections — blog & news, publications, newsletters, partners, and the legal pages required to operate them responsibly. Where v1.1 hardened and extended an existing site, v1 established it.

---

## What's New

| Area | Before (no site) | v1 |
|---|---|---|
| **Site** | No public project website. | A static site (Astro + Vue) with a homepage, navigation, and automated build/deploy via GitHub Actions. |
| **News** | No channel for project updates. | A CMS-driven Blog & News section, editable by non-technical editors. |
| **Publications** | No listing of project outputs. | A `/publications` page, later linked to Zenodo for automatic reference syncing. |
| **Newsletters** | No recurring communication. | A newsletter archive plus an on-site subscription form. |
| **Partners** | No public record of consortium partners. | A `/partners` section listing each partner with logo, role, and country. |
| **Legal & compliance** | No privacy documentation; subscriber emails held in a Google Sheet. | A published privacy policy, GDPR-compliant subscriber storage in Baserow, and Matomo analytics in place of third-party trackers. |

---

## 1. Site Launch & CMS Foundation

The project website was stood up as a static Astro site with a Vue-based navbar, homepage, and a CI/CD pipeline (GitHub Actions) for automated builds and deployment. Decap CMS was wired in from the outset so that content could be managed through an admin interface rather than direct source edits.

**Motivation:** The project needed a public presence from day one, and a CMS-backed static site keeps hosting costs at zero (GitHub Pages) while still letting non-developers own day-to-day content.

## 2. Blog & News Section

A CMS-driven Blog & News section was introduced for project updates, announcements, and press mentions (e.g. award notices, conference participation), with support for responsive images and, later, MDX content.

**Motivation:** The consortium needed a straightforward way to publish timely updates — talks, awards, media coverage — without waiting on a developer for every post.

## 3. Publications Section

A `/publications` page was added to list project research outputs, later integrated with Zenodo so publications could be kept in sync with the project's archival record.

**Motivation:** Funded research projects are expected to make their outputs discoverable; a dedicated, linkable publications listing satisfies that expectation without manual duplication of the Zenodo record.

## 4. Newsletter System & Subscription

A newsletter archive was introduced alongside an on-site subscription form. Subscriber emails were initially collected into a Google Sheet, then migrated to Baserow.io in April for GDPR compliance.

**Motivation:** Recurring newsletters are the project's primary channel for reaching a wider audience beyond the site's direct visitors. The move off Google Sheets was driven specifically by GDPR: a general-purpose spreadsheet is not an appropriate system of record for personal data collected from EU residents.

## 5. Partners Section

A `/partners` section was added, listing each consortium partner with logo, full name, role, and country, with clickable logos linking to partner websites.

**Motivation:** As a multi-partner EU-funded project, publicly crediting and linking every consortium member is both a funding-body expectation and a matter of transparency.

## 6. Privacy Policy & Compliance

A privacy policy page was published, covering data collected via the newsletter form and Matomo analytics was added in place of a third-party tracking script.

**Motivation:** Collecting subscriber emails and visit data without a published privacy policy is a GDPR compliance gap for a project handling EU residents' data. Matomo was chosen over third-party analytics (e.g. Google Analytics) so visitor data stays under the project's own control rather than a foreign ad-tech platform's.
