# CatalystAI 2025 — Official Build  
**Engineered, Developed, and Designed by [Neksha DeSilva](https://www.github.com/nekshadesilva)**  
**Licensed under Apache-2.0 Contributor's License**

---

CatalystAI 2025 is a cutting-edge AI-assisted academic reasoning framework, purpose-built to analyze, interpret, and generate deep, context-aware engagement with uploaded documents. Leveraging the power of **Gemini Pro**, **LangChain**, and **AstraDB**, it operates as an intelligent assistant, educator, and evaluator — delivering comprehensive academic analysis through both **textual and voice-driven interactions**.

This framework is not a chatbot. It is an **autonomous academic engine** capable of cross-referencing documents, scoring understanding, generating expert-level questioning, and producing structured session archives for revision, research, and model training.
#Demo
<br>
<a href="https://drive.google.com/file/d/1nT4wa5c28xp8QVmRN8GQs-ZuFF2jhZgP/view?usp=sharing">Features: Query oriented answers, Document  Completiton Score</a><br>
<a href="https://drive.google.com/file/d/1HPPhWvQlRaYS4zNnUIXwesBgZ_qaoUJ_/view?usp=sharing">Features: Accuracy Score</a><br>
<a href="https://drive.google.com/file/d/1AVIsoWPNTmakMTqOevCPqzipOhaFjRuD/view?usp=sharing">Features: Deep search feature, Expert Mode</a><br>
<a href="https://drive.google.com/file/d/1NuXdFt5Yl9K6VeAQXoWD8eE_0Tbn12yZ/view?usp=sharing">Features: Web search, Document search override</a><br>
<a href="https://drive.google.com/file/d/1ZmCEBsfmSXqTUi-FMdoxYkm1P1GLItBy/view?usp=sharing">Features: Web search, JSON Exporting, Chat Exporting ability</a><br>

---

## Feature Set Overview

### 1. Document Completion Engine
CatalystAI performs real-time tracking of how much of the uploaded document has been meaningfully addressed.  
Powered by:
- Full-text indexing and tokenization of PDF content.
- Semantic overlap detection between AI-user conversation and original text.
- A refined completion logic model which tracks both coverage and contextual relevance.

The result is a **Completion Score** (in %) representing actual engagement with the source material — not just surface-level mentions.

---

### 2. Accuracy Scoring + Deep Semantic Search
CatalystAI uses **large language model alignment algorithms** to evaluate the fidelity of each AI-generated answer.  
The Accuracy Score is derived from:
- Vector-based similarity between the generated answer and the document source.
- Cross-section validation across multiple portions of the PDF.
- Gemini Pro’s semantic matching engine for higher-order reasoning validation.

Additionally, the **Deep Search Mode** dynamically activates when context requires wide-range understanding across chapters, sections, or disconnected mentions, creating an intelligent context window before responding.

---

### 3. Expert Mode – Interactive Auto-Assessment
Expert Mode transforms CatalystAI into a self-interrogating academic entity:
- Automatically generates a bank of intelligent, context-relevant questions from the document.
- Immediately provides model answers to those questions.
- Simulates expert-level comprehension and tutoring behaviors.

Use cases include exam preparation, rapid revision, research validation, and peer simulation. This mode supports **multiple levels of depth**, including surface, interpretive, and critical evaluation questioning.

---

### 4. Dual Interaction Modes
CatalystAI offers two primary working paradigms:

**Power Assistant-GPT Mode**  
General-purpose reasoning and interaction using Gemini Pro — excels in synthesis, summarization, and freeform academic support.

**Document Answering Mode**  
Bound to uploaded PDF context only. All responses are strictly generated with respect to the document, favoring integrity and precision over speculation.

Mode toggling is instant and session-aware.

---

### 5. Speech Recognition & Microphone Input
CatalystAI includes full **voice interaction capability**, allowing:
- Voice-to-text conversion via microphone.
- Natural language understanding from spoken prompts.
- Spoken question parsing and intelligent document referencing.

Ideal for accessibility, mobile learning, and users seeking a more fluid input experience.  
Powered by **Web Speech API** with domain-specific tuning.

---

### 6. Structured Chat Export (JSON Format)
Sessions are exportable as clean, structured `.json` files containing:
- User questions
- AI responses
- Expert mode questions + answers
- Completion and accuracy scores
- Session metadata (timestamps, document title, document hashes)

These exports are designed for:
- Academic review
- Research traceability
- LLM fine-tuning
- Institutional training feedback

---

### 7. Persistent Chat History Storage
Each session is saved in structured format with versioning support. Benefits include:
- Full playback of academic thought process
- Time-based learning progress tracking
- Re-assessment from any conversation point
- Cross-session performance analytics (planned)

Chat history is stored in both human-readable markdown and machine-parseable JSON formats for flexibility.

---

## Example Workflow

> A postgraduate student uploads a 6000-word dissertation on neural cryptography.  
CatalystAI:
1. Performs full document parsing and token indexing.
2. Calculates a **Document Completion Score of 82%** after several exchanges.
3. Measures an **Accuracy Score of 94%** based on aligned source content.
4. Activates **Expert Mode**, auto-generating 12 conceptual questions from the methodology section, and providing answers with references to exact document lines.
5. The session is exported as a `.json` file for supervisor review and future fine-tuning.

---

## Technology Stack

| Component | Purpose |
|----------|---------|
| **Gemini Pro (via LangChain)** | LLM for NLU, semantic validation, and generative tasks |
| **LangChain PromptTemplate** | Structured prompt building and contextual memory handling |
| **AstraDB** | Vectorized document storage, indexing, and metadata control |
| **JavaScript + HTML/CSS** | Frontend interaction, interface logic, voice input handling |
| **JSON Exporter** | Clean archival and machine-readable export generation |
| **Web Speech API** | Voice input integration (transcription and intent parsing) |

---

## Roadmap & Future Vision

CatalystAI will evolve into a **research-centric co-pilot** with the following capabilities:

- **Local LLM fallback** for offline inference and air-gapped academic use.
- **Citation Mode** that attaches exact page + line number to AI outputs.
- **Collaborative Learning Mode** allowing multiple students to engage in a co-session with synchronized threads.
- **Domain Plugins** such as equation solvers, code review interpreters, and multilingual translators.
- **Dynamic Curriculum Engine** that builds personalized learning goals from documents.

---
<a href="https://ibb.co/39kL00T9" style ="width:100%"><img src="https://i.ibb.co/39kL00T9/Screenshot-2025-05-01-085907.png" alt="screenshot" border="0"></a>

## License  
**Apache-2.0 — Contributor’s License Edition**  
You are free to fork, build, and deploy CatalystAI for non-commercial or research purposes. For redistribution or monetization, a contributor citation and license retention is required.

---

## Written by
**Neksha DeSilva**  
<a href="https://www.linkedin.com/in/neksha">LinkedIn Profile</a> | CEO, Founder @ [Indexx Inc.](https://github.com/nekshadesilva)  
Colombo, Sri Lanka

---

CatalystAI is not just a document assistant.  
It is a **scalable academic intelligence engine — capable of learning, reasoning, and teaching**.
