# Release Notes — v1.2.0
**Author:** Quentin Perez · **Period:** August 2026

---

## Overview

This period adds a self-service newsletter unsubscription flow, closing the last gap in the newsletter lifecycle introduced in v1 (subscribe) and hardened in v1.1 (anchor links, date format).

---

## What's New

| Area | Before v1.2.0 | Now |
|---|---|---|
| **Newsletter unsubscription** | No self-service way to leave the newsletter list; removal required a manual request and a manual deletion in Baserow. | A `/unsubscribe` page where a visitor enters their email to remove themselves from the Baserow list, with a link to it in the newsletter email footer. |

---

## 1. Newsletter Unsubscription

A `/unsubscribe` page was added (not linked from the main navigation, reachable only via direct link) with a form that looks up the visitor's email in the Baserow subscriber table and deletes the matching row on confirmation. The page also accepts the email pre-filled via a `?email=` query parameter. The unsubscribe link was added to the footer template actually pasted into outgoing newsletter emails (`newsletters_email_assets/aim-pro-footer-newsletter.html`), not to the on-site newsletter page.

**Motivation:** Subscribers had no way to remove themselves without contacting the team directly, which is both poor practice for a mailing list and a GDPR expectation (the right to withdraw consent as easily as it was given). A self-service unsubscribe link in every newsletter email closes that gap.

**Note:** This first version reuses the same client-side Baserow API token already embedded in the subscription form (`NewsletterForm.vue`) — a pre-existing exposure, not one introduced by this feature. As a consequence, the unsubscribe action isn't identity-verified: anyone who knows or guesses a subscriber's email can remove that address via the `/unsubscribe` page. Moving the token behind a small server-side relay (as already done for CMS authentication) would close this gap and is a candidate for a future release.
