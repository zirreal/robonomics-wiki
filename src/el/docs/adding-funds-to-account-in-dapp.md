---
title: Προσθήκη κεφαλαίων στον λογαριασμό σας στο Πύλη Robonomics

contributors: [Houman]
tools:
  - Robonomics 2.4.0
    https://github.com/airalab/robonomics
---

**Αφού δημιουργήσετε με επιτυχία τους λογαριασμούς σας στην πύλη Robonomics, είναι καιρός να προσθέσετε κεφάλαια σε αυτούς, ώστε να μπορείτε να ξεκινήσετε συναλλαγές.**

{% roboWikiNote {title: 'Κόμβος Dev', type: "warning"} %}Παρακαλούμε να προσέξετε ότι αυτά και τα επόμενα εγχειρίδια παρουσιάζονται σε τοπική εκδοχή του Κόμβου Robonomics. Δημιουργήστε τον δικό σας ακολουθώντας [αυτές τις οδηγίες](/docs/run-dev-node).
{% endroboWikiNote %}

## 1. Πλοήγηση στην ενότητα Λογαριασμοί στην πύλη Robonomics

{% roboWikiPicture {src:"docs/creating-an-account/portal-top-left.jpg", alt:"λογαριασμοί"} %}{% endroboWikiPicture %}

## 2. Επιλέξτε τον λογαριασμό από τον οποίο θέλετε να μεταφέρετε κεφάλαια

Στη λειτουργία ανάπτυξης, υπάρχουν αρκετοί λογαριασμοί, με 10000 μονάδες αξίας κεφαλαίων η καθένας, που μπορούν να χρησιμοποιηθούν για τη μεταφορά κεφαλαίων σε άλλους λογαριασμούς που δημιουργήθηκαν στο δίκτυο ανάπτυξης. Αυτοί οι λογαριασμοί εμφανίζονται με σύμβολα κλειδιού <img src="/assets/images/docs/adding-funds/wrench.png" alt="σύμβολο κλειδιού" width="20"/> δίπλα σε αυτούς.

{% roboWikiPicture {src:"docs/adding-funds/accounts-for-sending.svg", alt:"Λογαριασμοί-για-αποστολή", caption: "Λογαριασμοί-για-αποστολή"} %}{% endroboWikiPicture %}

- Κάντε κλικ στο κουμπί "αποστολή" του λογαριασμού από τον οποίο θέλετε να μεταφέρετε κεφάλαια, για παράδειγμα τον BOB

## 3. Επιλέξτε τον λογαριασμό στον οποίο θέλετε να μεταφέρετε κεφάλαια
Μετά το κλικ στο κουμπί "αποστολή", θα εμφανιστεί το "παράθυρο αποστολής κεφαλαίων". Στο παράθυρο που εμφανίζεται:

- Από τη λίστα των διαθέσιμων λογαριασμών, επιλέξτε τον λογαριασμό στον οποίο θέλετε να μεταφέρετε κεφάλαια.
- Εισάγετε τον αριθμό των μονάδων που θέλετε να μεταφέρετε.
- Πατήστε "κάντε μεταφορά"

{% roboWikiPicture {src:"docs/adding-funds/send-funds.png", alt:"Μεταφορά-Κεφαλαίων", caption: "Μεταφορά-Κεφαλαίων"} %}{% endroboWikiPicture %}


## 4. Εξουσιοδοτήστε τη συναλλαγή

Μετά το πάτημα του "κάντε μεταφορά" στο προηγούμενο στάδιο, θα εμφανιστεί το "παράθυρο εξουσιοδότησης συναλλαγής".<br/>
Ελέγξτε τις λεπτομέρειες της συναλλαγής και τέλος κάντε κλικ στο κουμπί "υπογράψτε και υποβάλετε".

{% roboWikiPicture {src:"docs/adding-funds/sign-transaction.png", alt:"υπογράψτε-συναλλαγή", caption: "υπογράψτε-συναλλαγή"} %}{% endroboWikiPicture %}

Σε αυτό το παράδειγμα, μεταφέραμε 500 μονάδες κεφαλαίων από τον "BOB" στον "ΕΡΓΟΔΟΤΗ". Μπορείτε να δείτε ότι ο λογαριασμός του ΕΡΓΟΔΟΤΗ, που αρχικά δεν είχε καθόλου κεφάλαια, έχει τώρα 500 μονάδες κεφαλαίων.

{% roboWikiPicture {src:"docs/adding-funds/funds-added.svg", alt:"κεφάλαια-προστέθηκαν", caption: "κεφάλαια-προστέθηκαν"} %}{% endroboWikiPicture %}

**Βεβαιωθείτε ότι έχετε αρκετά κεφάλαια στους λογαριασμούς που θέλετε να χρησιμοποιήσετε στο περιβάλλον παιχνιδιού.**