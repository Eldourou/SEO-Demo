## Τεχνικές HTML-Based SEO

Οδηγός βέλτιστων πρακτικών για τη βελτιστοποίηση ιστοσελίδων σε επίπεδο κώδικα HTML:

- [ ] **Ονοματοδοσία Αρχείου**
  - Αποφυγή γενικών ονομάτων (π.χ. `page1.html`, `test.html`, `index2.html`).
  - Χρήση περιγραφικών ονομάτων με λατινικούς χαρακτήρες (English) και παύλες (kebab-case, π.χ. `web-design-services.html`).

- [ ] **Title Tag (`<title>`)**
  - Μοναδικός τίτλος σε κάθε σελίδα.
  - Ακριβής περιγραφή του περιεχομένου με ενσωμάτωση κύριων λέξεων-κλειδιών (στόχος: 50–60 χαρακτήρες).

- [ ] **Meta Description**
  - Προσθήκη `<meta name="description" content="...">` με σαφή περίληψη του περιεχομένου και call-to-action (στόχος: 150–160 χαρακτήρες).

- [ ] **Responsive Σχεδίαση (Mobile-Friendly)**
  - Δήλωση του viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
  - Πλήρης προσαρμογή του layout σε οθόνες κινητών συσκευών.

- [ ] **Ιεραρχία Επικεφαλίδων (Headings)**
  - Αυστηρά ένα μοναδικό `<h1>` ανά σελίδα.
  - Λογική σειρά χρήσης `<h2>` και `<h3>` (αποφυγή εμφάνισης `<h3>` πριν από `<h2>`).

- [ ] **Semantic HTML**
  - Αντικατάσταση γενικών `<div>` με σημασιολογικά tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.

- [ ] **Προσβασιμότητα Εικόνων (Alt Text)**
  - Κάθε `<img>` πρέπει να περιέχει ουσιαστικό `alt="..."` attribute που περιγράφει την εικόνα για μηχανές αναζήτησης και screen readers.

- [ ] **Καθαρά URLs (Clean/SEO-Friendly URLs)**
  - Σημείωση σε σχόλιο στην αρχή του HTML για τη βέλτιστη μορφή του URL (π.χ. `<!-- Canonical URL: https://example.com/services/web-design -->`).

- [ ] **Γλώσσα & Κωδικοποίηση Χαρακτήρων**
  - Δήλωση charset: `<meta charset="UTF-8">`.
  - Δήλωση γλώσσας στο ριζικό στοιχείο: `<html lang="el">` (ή `lang="en"` αντίστοιχα).

- [ ] **Canonical Tag**
  - Αποφυγή προβλημάτων duplicate content: `<link rel="canonical" href="https://www.example.gr/page-url" />`.

- [ ] **Αρχείο Sitemap (`sitemap.xml`)**
  - Δημιουργία και σύνδεση έγκυρου XML sitemap για την καθοδήγηση των crawlers στη σωστή ευρετηρίαση.
