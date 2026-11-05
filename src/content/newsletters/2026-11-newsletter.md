---
title: "From Framework to Foundations: The AIM-PRO Foundational Framework Is Here"
date: 2026-10-30T10:00:00.000+01:00
coverImage: /images/uploads/aim-pro-newsletter3-cover.png
linkedinPosts: []
---
# Welcome to the third issue of the AIM-PRO newsletter! 

Issue #3 marks Milestone 1 (D2.1, M8) and shows how the Foundational Framework is already feeding the open OER database (WP3) and the pedagogical requirements (WP5), and how it was presented to the research community at MODELS 2026.

## Updates from UDA

### The AIM-PRO Foundational Framework: Milestone 1 Reached

AIM-PRO has delivered its first major result: **the Foundational Framework**, the technical core of the project, completed as **Milestone 1** and confirmed on schedule at the Rennes meeting. What makes the Framework distinctive is its starting point: rather than beginning from technology, the consortium started from pedagogy and then formalised it. The Framework consists of two tightly connected components. The first is a **Competency Framework metamodel**, a catalogue of 104 AI literacy competencies harmonised from international reference frameworks such as *DigComp, GreenComp, EntreComp* and the *EU AI Act*. The second is a **Learning Scenario metamodel,** grounded in the evidence-based **iSQD pedagogical model**, which captures learner profiles, competency goals, assessment and instructional strategies in a structured, machine-processable form. Both are engineered in the **Jjodel modelling platform**, which lets pedagogues and language engineers work on their own viewpoint over a single shared model. The Framework was presented to the international research community in the paper “*A Pedagogy-Aware Model-Driven Engineering Approach for AI Literacy*” at the **MODELS 2026 Educators Symposium** in Málaga, co-authored by partners from across the consortium and available open-access at [https://doi.org/10.1145/3837062.3838920](https://doi.org/10.1145/3837062.3838920). It now provides the shared foundation on which the project’s Open Educational Resources, training pathways and the Digital Twin for Educators and Learners in AI Literacy will be built. 

### How We Validated It

The meta-model was validated by translating real learning scenarios (like the Elena Scenario described in the paper) into the new language. In this example we have Elena, an HR manager with low confidence and cautious attitude in AI usage. His goal is exploring AI to support candidate screening and may need to train her team, composed by Antonio and Anita. The scenario (first image) follows a **train-the-trainer-first approach**: it is composed of two distinct modules: the first module (*IndividualTrainingModule*) is an individual training for Elena on Responsible AI usage, while in the second module (*TeamWorkshopModule*) Elena becomes the trainer for her employees on shared activities. Each module as its own goal and each goal is mapped to a set of AI Literacy competencies (second image) from the AIM-PRO catalogue.

![](/images/uploads/issue3image1.png)

![](/images/uploads/issue3image2.png)

## Updates from Université de Rennes (REN)

### Green, Assessable, Personal: The Missing Views of AI Literacy

Earlier issues showed how WP2 turns AI literacy into structured learning scenarios. Three further views complete the picture. The green view records the energy, CO2, and hardware each AI activity uses, and how reliable each figure is. The assessment view links competencies to the evidence that proves them. The learner profile captures each person's attitude to and confidence with AI, so the scenario offers the phases that suit them. 
**The same learning scenario can be read from a technical, a pedagogical, and an environmental angle at once.**

![Figure 3: Elena’s learning path read from three angles: what she learns, what runs it, and what it costs.](/images/uploads/issue3image3.png "Figure 3: Elena’s learning path read from three angles: what she learns, what runs it, and what it costs.")

*Figure 3: Elena’s learning path read from three angles: what she learns, what runs it, and what it costs.*

Take Elena, whom we met in issue #2, whose SME team is moving to AI-supported candidate screening. Her profile says she is cautious and not yet confident, so her path starts with a module just for her, built on scaffolded exploration. In the second module, she leads Antonio and Anita in co-creating and iteratively refining prompts for screening. 

With the green view applied, every prompting session gets a footprint, and the same session costs several times more carbon on a fossil-heavy grid than on a low-carbon one. The scenario carries a carbon budget: if it is exceeded, the team can be warned or switched to a lighter model. Iterative prompting becomes an exercise in getting good results with fewer, better prompts, and the closing reflective discussion covers environmental cost alongside fairness and accuracy. What the team writes there also serves as evidence for their assessment. 

Elena's learning goal does not change. Her team now also learns what their AI use costs.

## Updates from the University of Salamanca (USAL) & University of Regensburg (REG)

### Building the AIM-PRO Open Database for OERs

As part of Work Package 3, AIM-PRO is developing an open database to make AI learning resources easier to find, organise and reuse. The platform is already operational, collecting openly licensed materials from Zenodo, arXiv and GitHub, checking their licensing conditions and organising them through standardised metadata compatible with Dublin Core and IEEE LOM. The first collection covers 26 Digital competencies from the AIM-PRO catalogue of 104, with the remaining areas to follow once their search terms have been reviewed by project partners. A dedicated review interface has also been developed to support the next phase: evaluating resource quality, suitability for different educational contexts and contributions to specific competencies. These evaluations will provide the basis for automated classification and help identify gaps in available learning materials. Building on this work, the project will explore LLM-based prompting to enhance existing OERs and create new resources, with partner validation ensuring their educational relevance and quality.

![](/images/uploads/issue3image4.png)

### Prompting for Better Learning Resources

Open Educational Resources (OERs) are central to AIM-PRO, but a resource written for “everyone” rarely fits anyone perfectly. We are therefore designing a first set of prompt families: reusable instructions that ask a generative AI model to enrich an existing OER. Examples include simplifying its language, adding examples from the learner’s own sector, or generating reflection questions. All families share common principles of inclusion, accessibility and diversity, such as plain language, explained jargon and varied, non-stereotypical examples. In the long run, these prompts will draw automatically on each learner’s profile in the AIM-PRO digital twin, so resources can meet learners where they are. 

Lets demonstrate a couple of prompts from the perspective of "Elena, the sceptical HR director" from the previous newsletter: 

I. Adding examples from the learner’s sector 

Prompt: Explain “algorithmic bias” in two sentences, using an example from recruitment in a small company. 
Output: Algorithmic bias happens when an AI tool treats some groups unfairly because of patterns in its data. If past hires were mostly men, a screening tool might quietly rank women’s CVs lower. 

II. Generating reflection questions 

Prompt: Write two questions an HR director can discuss with her team before using an AI tool to screen CVs. 
Output: Which decisions should always stay with a person? How will we notice if the tool treats some candidates unfairly? 

III. Simplifying language 

Prompt: Rewrite this sentence in plain language for an HR director with little AI experience: “Machine learning models learn patterns from historical training data.” 
Output: An AI tool learns by looking at lots of past examples, like your company’s previous hiring decisions, and copying the patterns it finds. 

## Updates from Vrije Universiteit Brussel (VUB)

### From Personas to Pedagogical Requirements

In our last newsletter, we introduced personas, imagined profiles of typical users such as Dr. Clara, a lecturer who is curious about AI but worried about its reliability. To test them, we created six example scenarios for the first version of the AIM-PRO tool, two each for small businesses, universities and vocational schools. Each starts with a problem in the user’s own words, such as “An apprentice followed AI maintenance instructions that looked convincing but were wrong.” Instead of a general rule like “always check AI output,” the tool might suggest that mentors and teachers test AI on real workplace tasks and sort them into three groups: where AI can help, where its output must be checked first, and where people should not use it.

## Updates from EITCI

### From Learning to Evidence: Attesting AI Competences

EITCI is developing AIM-PRO’s Certification Framework around a simple principle: **certify objectively demonstrated competences, not attendance or completion of a particular learning path**. Its contribution connects the shared AI competency catalogue to 12 proposed certification clusters and to *assessment blueprints*, constituting clear specifications of what is tested, which evidence counts and how the results are judged.  

For Dr. Clara, this could mean demonstrating that she can recognise unreliable AI output and select appropriate checks, rather than simply completing a lesson. Learners in universities, vocational education, or small businesses could follow different scenarios while earning a certified recognition against equivalent assessment criteria. 

The approach builds on EITCI’s European IT Certification (EITC) framework developed under EU funding since 2008, aiming at lowering access barriers to professional IT skills certification, including remote examinations, identity verification and online certificate validation. Planned AIM-PRO implementations include an AI-assisted live proctoring system with human review and privacy safeguards, alongside third-party certificate verification through QR codes or secure validation tokens. Open Badges will complement formal certificates, making assessed achievements easier to share while linking back to the authoritative verification record. 

![EITCI’s proposed AIM-PRO certification model connects competencies, assessment rules and learner evidence to verifiable certificates and complementary Open Badges.](/images/uploads/issue3image5.png "EITCI’s proposed AIM-PRO certification model connects competencies, assessment rules and learner evidence to verifiable certificates and complementary Open Badges.")

*EITCI’s proposed AIM-PRO certification model connects competencies, assessment rules and learner evidence to verifiable certificates and complementary Open Badges.*

The currently planned next step is to pilot-implement the first certification clusters in the AIM-PRO certification platform, review their competency mappings and test the complete certification process, from the assessment and evidence collection to certificate issuance and verification, without restricting the flexibility of AIM-PRO’s learning scenarios. 

## AIM-PRO in the Research Community

Big news from the last week of September-early October: AIM-PRO was present at the ACM/IEEE 29th International Conference on MODELS in Málaga, Spain (October 4-9), one of the premier events of the Model-Driven Engineering community. 

### What happened

At the Educators Symposium and the Poster Session, Antonio Bucchiarone and Riccardo Belliato presented our latest paper: 

#### A Pedagogy-Aware Model-Driven Engineering Approach for AI Literacy

In a nutshell: we model the AI Literacy domain, learning scenarios, competencies, assessments, with meta-models and link them together to generate tailored learning paths for different stakeholders and contexts. And the best part: with **Jjodel** (the meta-modeling platform from UDA) and its **AI assistant Jjodie**, even non-MDE experts can build these models.  

#### Who went

A strong AIM-PRO delegation attended the conference: 

* Riccardo Belliato (FBK) 
* Antonio Bucchiarone, Juri di Rocco (UDA) 
* Judith Michaels, Jakob Steffens, Michael Mittermaier (UREG) 
* Antonio Cicchetti (MDU) 

The team also presented a poster on October 7 and used the conference as a chance to exchange feedback and gather ideas from the MDE and Digital Twins communities for the project's next steps. 

![](/images/uploads/issue3image6.jpg)

## Consortium Life

Second Project Meeting in Rennes

![](/images/uploads/issue3image7.png)

On 20–21 October 2026, the AIM-PRO consortium gathered in Rennes, France, for its second project meeting, hosted by IRISA. The two days gave partners the chance to take stock of the project’s first months and set the course for the next phase. A review of the work packages confirmed that **Milestone 1 has been reached** on schedule, with the first results on the **AI literacy competence framework** and the **Open Educational Resources approach** presented and discussed. The heart of the meeting was a hands-on session on the Digital Twin for Educators and Learners in AI Literacy, one of the project’s most innovative outcomes: working in groups, partners defined **user stories for the three AIM-PRO target contexts** (Higher Education, VET and SMEs) and sketched the learner and educator journeys the Digital Twin will support, including how AI agents will personalise learning paths. This **co-design work** will feed directly into the technical specification and the first prototype. The meeting closed with sessions on project management, quality assurance and dissemination, where partners agreed on responsibilities and next steps for the coming months.  

Read the full story at [https://aim-pro.eu/blog/2026-10-28-aim-pro-partners-meet-in-rennes-milestone-1-reached-digital-twin-work-begins/](https://aim-pro.eu/blog/2026-10-28-aim-pro-partners-meet-in-rennes-milestone-1-reached-digital-twin-work-begins/)

## Closing

That’s it for the third issue of our newsletter. Stay updated on our progress, results and upcoming events by visiting our website, subscribing to our quarterly newsletter, and following us on LinkedIn, YouTube and Zenodo. 

We’ll be back in January 2027 with the next updates and stories. 
