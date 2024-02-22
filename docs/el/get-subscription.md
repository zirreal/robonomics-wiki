---
title: Πώς να αγοράσετε μια συνδρομή

contributors: [LoSk-p, PaTara43]
tools:   
  - Robonomics 2.4.0
    https://github.com/airalab/robonomics
---

**Η πληρωμή προμήθειας για συναλλαγές στο blockchain είναι ενοχλητική. Φανταστείτε μια συσκευή IoT που στέλνει τηλεμετρία κάθε 5-10 λεπτά. Αυτό θα σας κοστίσι αρκετά πολύ κατά τη διάρκεια του μήνα. Ένα από τα κύρια χαρακτηριστικά του δικτύου Robonomics είναι η συνδρομή RWS - Robonomics Web Service. Πληρώστε μηνιαίως και ξεχάστε το κόστος συναλλαγής! Για θεωρητική βάση ανατρέξτε στο [άρθρο αυτό](https://blog.aira.life/rws-overview-part-2-heterogeneous-tokenomics-afc209cc855).**

<robo-wiki-note type="warning" title="Parachain">

  Προσέξτε ότι αυτός ο οδηγός δείχνει πώς να αγοράσετε μια συνδρομή στο Robonomics Kusama parachain. Μπορείτε επίσης να εκτελέσετε όλα τα ίδια βήματα στον [τοπικό κόμβο](/docs/run-dev-node) σας.

  Ένα ακόμα πράγμα πριν ξεκινήσετε. Αυτός είναι ένας "δύσκολος" τρόπος αγοράς μιας συνδρομής. Υπάρχει και ένας συμβατικός τρόπος να το κάνετε αυτό μέσω του [Robonomics DApp](https://dapp.robonomics.network/#/).

</robo-wiki-note>

## Προσφέρετε σε μια Δημοπρασία

Οι συνδρομές στο Robonomics πωλούνται με ένα μοντέλο δημοπρασίας. Για να αποκτήσετε μια, πρπει να προσφέρετε σε μια δημοπρασία και να την κερδίσετε (μην ανησυχείτε, είναι γρήγορο).

Στο `Developer/Chain state` μπορείτε να δείτε τις διαθέσιμες δημοπρασίες. 
Επιλέξτε `rws` και `auctionQueue` και πατήστε το κουμπί `+`, θα δείτε τα αναγνωριστικά των διαθέσιμων δημοπρασιών:

![queue](../images/rws/queue.png)

Μπορείτε να δείτε πληροφορίες για οποιαδήποτε συνδρομή με την `rws` `auction` και το αναγνωριστικό της δημοπρασίας (το αναγνωριστικό της δημοπρασίας στην εικόνα είναι 79):

![auction](../images/rws/auction.png)

Στις πληροφορίες για τη δημοπρασία μπορείτε να δείτε το πεδίο `winner`, αυτή τη στιγμή είναι `null` οπότε κανείς δεν έχει αυτή τη συνδρομή και μπορείτε να την αποκτήσετε. Για να το κάνετε αυτό, πηγαίνετε στο `Developer/Extrinsic`, επιλέξτε τον λογαριασμό σας και `rws -> bid`. Ορίστε επίσης το αναγνωριτικό της δημοπρασίας (79) και το ποσό των μονάδων που θέλετε να προσφέρετε (περισσότερο από 1000000000 Wn):

![bid](../images/rws/bid.png)

Υποβάλετε τη συναλλαγή και ελέγξτε τις πληροφορίες για τη δημοπρασία με αναγνωριστικό 79 (στην `Chain state` επιλέξτε `rws -> auction` και αναγνωριστικό 79):

![win](../images/rws/auc_win.png)

Τώρα στο πεδίο `winner` θα δείτε τη διεύθυνση του λογαριασμού σας, αυτό σημαίνει ότι αυτός ο λογαριασμός έχει τη συνδρομή 79. Μια δημοπρασία ξεκινά με την πρώτη προσφορά και διαρκεί μερικά μπλοκ, οπότε αν κάποιος προσφέρει περισσότερα tokens από εσάς στα επόμενα μερικά μπλοκ, αυτός θα είναι ο νικητής και θα αποκτήσει τη συνδρομή.

Τώρα μπορείτε να προσθέσετε συσκευές. Οι συσκευές είναι λογαριασμοί που μπορούν να χρησιμοποιήσουν αυτήν τη συνδρομή και να υποβάλουν εξωτερικές συναλλαγές χωρίς χρέωση.
Για να το δοκιμάσετε, δημιουργήστε έναν νέο λογαριασμό χωρίς διακριτικά και προσθέστε τον σε συσκευές.

Για να προσθέσετε συσκευές, επιλέξτε `rws -> setDevices` στο `Developer/Extrinsic`. Στη συνέχεια, πατήστε το κουμπί `Add Item` και επιλέξτε τον πρόσφατα δημιουργημένο λογαριασμό χωρίς τοκετά:

![set_devices](../images/rws/set_devices.png)

Υποβάλετε τη συναλλαγή. Τώρα μπορείτε να ελέγξετε τη λίστα των συσκευών στην  `Chain state` με το `rws -> devices`. Εκεί θα δείτε τη διεύθυνση του λογαριασμού σας χωρίς τοκετά. Επιλέξτε τον λογαριασμό που αγόρασε τη συνδρομή και πατήστε `+`:

![devices](../images/rws/devices.png)

Τώρα μπορείτε να δοκιμάσετε να [στείλετε εξωτερική εντολή εκκίνησης](/docs/subscription-launch) χρησιμοποιώντας τη συνδρομή.