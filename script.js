// Libreria di domande (può essere ampliata facilmente)
const questions = [
 
  {
    question: "In Microsoft Word, cosa consente di applicare la stessa formattazione a più parti di testo?",
    answers: [
{ text: "Copia/Incolla", correct: false },
{ text: "Stili", correct: true },
{ text: "Interlinea", correct: false },
{ text: "Paragrafo automatico", correct: false }
]
  },
  {    question: "Quale funzione di Excel consente di sommare automaticamente un intervallo di celle?",
    answers: [
{ text: "SOMMA", correct: true },
{ text: "MEDIA", correct: false },
{ text: "CONTA", correct: false },
{ text: "CERCA.VERT", correct: false }
  ]
  },
  {    question: "In un documento amministrativo, cosa rappresenta la 'segnatura di protocollo'?",
    answers: [
{ text: "Il numero progressivo del registro", correct: true },
{ text: "Il codice fiscale del mittente", correct: false },
{ text: "La marca temporale", correct: false },
{ text: "Il tipo di documento", correct: false }
    ]
  },
  { question: "Qual è il significato del termine 'workflow documentale' nella PA?",
    answers: [
{ text: "L'organizzazione dei fascicoli", correct: false },
{ text: "Il flusso di lavoro tra utenti nella gestione documentale", correct: true },
{ text: "L'invio automatico di email", correct: false },
{ text: "L'archiviazione cartacea dei documenti", correct: false }
]
  },
  {
    question: "In ambito GDPR, cosa si intende per 'dato personale sensibile'?",
    answers: [
{ text: "Il numero di telefono", correct: false },
{ text: "L'indirizzo IP", correct: false },
{ text: "L'appartenenza sindacale", correct: true },
{ text: "Il titolo di studio", correct: false }
  ]
  },
  {
    question: "Il registro di protocollo viene chiuso:",
    answers: [
{ text: "Alla fine dell'anno scolastico", correct: false },
{ text: "Ogni 5 anni", correct: false },
{ text: "Alla fine dell'anno solare", correct: true },
{ text: "Ogni volta che cambia il dirigente", correct: false }
  ]
  },
  {
    question: "Che cos'è la PEC?",
    answers: [
{ text: "Un servizio email criptato interno", correct: false },
{ text: "Un protocollo di rete", correct: false },
{ text: "Un sistema di posta elettronica con valore legale", correct: true },
{ text: "Un software per l'archiviazione", correct: false }
  ]
  },
  {
    question: "In una tabella Excel, cosa indica il simbolo '$' in una formula?",
    answers: [
{ text: "Valuta", correct: false },
{ text: "Formattazione", correct: false },
{ text: "Riferimento assoluto", correct: true },
{ text: "Errore di formula", correct: false }
  ]
  },
  {
    question: "In un file PDF firmato digitalmente, quale elemento garantisce autenticità e integrità?",
    answers: [
{ text: "Il timbro della scuola", correct: false },
{ text: "Il codice fiscale", correct: false },
{ text: "Il certificato digitale del firmatario", correct: true },
{ text: "La data di creazione", correct: false }
  ]
  },
  {
    question: "Quale tra i seguenti è un registro digitale obbligatorio nella segreteria?",
    answers: [
{ text: "Registro dei visitatori", correct: false },
{ text: "Registro elettronico delle presenze ATA", correct: false },
{ text: "Registro protocollo informatico", correct: true },
{ text: "Registro delle lezioni", correct: false }
  ]
  },
  {
    question: "Quale programma si usa per gestire fogli di calcolo?",
    answers: [
{ text: "Word", correct: false },
{ text: "Excel", correct: true },
{ text: "PowerPoint", correct: false },
{ text: "Access", correct: false }
  ]
  },
  {
    question: "Quale formato file è tipico per documenti di testo?",
    answers: [
{ text: ".exe", correct: false },
{ text: ".jpg", correct: false },
{ text: ".docx", correct: true },
{ text: ".mp3", correct: false }
  ]
  },
  {
    question: "Cosa indica l'acronimo 'PDF'?",
    answers: [
{ text: "Portable Document Format", correct: true },
{ text: "Private Data File", correct: false },
{ text: "Personal Document Folder", correct: false },
{ text: "Public Data Format", correct: false }
  ]
  },
  {
    question: "Qual è la funzione principale del protocollo informatico?",
    answers: [
{ text: "Inviare email", correct: false },
{ text: "Gestire la registrazione e tracciabilità dei documenti", correct: true },
{ text: "Archiviare immagini", correct: false },
{ text: "Modificare testi", correct: false }
     ]
  },
  {
    question: "Qual è la durata tipica della conservazione sostitutiva digitale?",
    answers: [
{ text: "5 anni", correct: false },
{ text: "10 anni", correct: false },
{ text: "15 anni", correct: false },
{ text: "50 anni", correct: true }
     ]
  },
  {
    question: "Quale software è usato per creare presentazioni?",
    answers: [
{ text: "Excel", correct: false },
{ text: "PowerPoint", correct: true },
{ text: "Word", correct: false },
{ text: "Outlook", correct: false }
     ]
  },
  {
    question: "Cosa serve per autenticare un documento digitale?",
    answers: [
{ text: "Firma digitale", correct: true },
{ text: "Password", correct: false },
{ text: "Email", correct: false },
{ text: "Timbro cartaceo", correct: false }
      ]
  },
  {
    question: "Cos'è un backup?",
    answers: [
{ text: "Una copia di sicurezza dei dati", correct: true },
{ text: "Un virus informatico", correct: false },
{ text: "Un tipo di file", correct: false },
{ text: "Un programma di scrittura", correct: false }
  ]
  },
  {
    question: "Cosa significa 'archiviazione digitale'?",
    answers: [
{ text: "Stampare documenti", correct: false },
{ text: "Salvare dati in formato elettronico", correct: true },
{ text: "Inviare fax", correct: false },
{ text: "Fotocopiare documenti", correct: false }
]
  },
  {
    question: "Quale tra questi è un sistema operativo?",
    answers: [
{ text: "Windows", correct: true },
{ text: "HTML", correct: false },
{ text: "Excel", correct: false },
{ text: "Firefox", correct: false }
    ]
  },
  {
    question: "Cosa si intende per \"accesso sicuro\" a un servizio online?",
    answers: [
      { text: "L'accesso senza password", correct: false },
      { text: "L'accesso tramite rete Wi-Fi pubblica", correct: false },
      { text: "L'accesso che garantisce la protezione dei dati, es. tramite SPID o CIE", correct: true },
      { text: "L'accesso condiviso con altri utenti", correct: false }
    ]
  },
  {
    question: "Cos'è un accesso profilato?",
    answers: [
      { text: "L'accesso tramite reti VPN", correct: false },
      { text: "L'accesso con permessi specifici legati alle credenziali dell'utente", correct: true },
      { text: "L'accesso riservato ai dirigenti", correct: false },
      { text: "L'accesso con autenticazione anonima", correct: false }
]
  },
  {
    question: "Qual è la funzione della Carta Nazionale dei Servizi (CNS)?",
    answers: [
      { text: "Autenticazione ai social media", correct: false },
      { text: "Gestione dei dati bancari", correct: false },
      { text: "Autenticazione ai servizi digitali e firma elettronica", correct: true },
      { text: "Emissione del codice fiscale", correct: false }
  ]
  },
  {
    question: "Cosa significa l'acronimo CAD in ambito digitale?",
    answers: [
      { text: "Codice Amministrativo Digitale", correct: false },
      { text: "Codice dell'Amministrazione Digitale", correct: true },
      { text: "Codice per l'Accesso ai Dati", correct: false },
      { text: "Catalogo degli Archivi Digitali", correct: false }
]
  },
  {
    question: "A cosa serve la firma digitale?",
    answers: [
      { text: "A inviare email criptate", correct: false },
      { text: "A garantire l'autenticità, l'integrità e il non ripudio dei documenti", correct: true },
      { text: "A creare file PDF", correct: false },
      { text: "A registrare l'ora di accesso", correct: false }
]
  },
  {
    question: "Cos'è il NOIPA?",
    answers: [
      { text: "Il sistema di protocollo elettronico scolastico", correct: false },
      { text: "Il portale per le presenze degli studenti", correct: false },
      { text: "Il portale per la gestione di stipendi e compensi nella PA", correct: true },
      { text: "Il sistema di archiviazione dei documenti scolastici", correct: false }
]
  },
  {
    question: "Cos'è il phishing?",
    answers: [
      { text: "Un attacco informatico tramite virus", correct: false },
      { text: "L'accesso non autorizzato tramite SPID", correct: false },
      { text: "Un tentativo fraudolento di ottenere dati sensibili", correct: true },
      { text: "Una tecnica per migliorare la sicurezza dei dati", correct: false }
]
  },
  {
    question: "Chi è il responsabile del trattamento dei dati nella scuola?",
    answers: [
      { text: "Il collaboratore scolastico", correct: false },
      { text: "Il DSGA", correct: false },
      { text: "La figura che gestisce i dati personali nel rispetto del GDPR", correct: true },
      { text: "Il consulente esterno", correct: false }
    ]
  },
  {
    question: "A cosa serve il portale SIDI?",
    answers: [
      { text: "Alla gestione delle assenze dei docenti", correct: false },
      { text: "Alla gestione amministrativa e didattica delle scuole", correct: true },
      { text: "All'invio delle pagelle", correct: false },
      { text: "Alla registrazione delle fatture elettroniche", correct: false }
]
  },
  {
    question: "Cosa si intende per tracciabilità in un sistema digitale?",
    answers: [
      { text: "Il blocco automatico dello schermo", correct: false },
      { text: "La protezione dai virus", correct: false },
      { text: "La possibilità di registrare e monitorare le operazioni di un utente", correct: true },
      { text: "Il backup dei dati su cloud", correct: false },
    ]
  },
   {
    question: "Quale di queste è una funzione tipica dell'Assistente Amministrativo?",
    answers: [
      { text: "Gestire la contabilità", correct: false },
      { text: "Organizzare l'attività scolastica", correct: true },
      { text: "Fare le lezioni", correct: false },
      { text: "Progettare il piano didattico", correct: false }
    ]
  },
  {
    question: "Quale documento attesta la regolarità contributiva di un fornitore?",
    answers: [
      { text: "Durc", correct: true },
      { text: "CIG", correct: false },
      { text: "CUP", correct: false },
      { text: "Fattura", correct: false }
    ]
  },
  {
    question: "Il CIG serve per:",
    answers: [
      { text: "Identificare un appalto pubblico", correct: true },
      { text: "Pagare le tasse", correct: false },
      { text: "Registrare i dipendenti", correct: false },
      { text: "Gestire la contabilità", correct: false }
    ]
  },
  {
    question: "Quale è il codice identificativo dell'Istituto scolastico?",
    answers: [
      { text: "Codice meccanografico", correct: true },
      { text: "Codice fiscale", correct: false },
      { text: "Partita IVA", correct: false },
      { text: "Codice univoco", correct: false }
    ]
  },
  {
    question: "La PEC serve per:",
    answers: [
      { text: "Inviare email certificata", correct: true },
      { text: "Telefonare", correct: false },
      { text: "Stampare documenti", correct: false },
      { text: "Archiviare documenti", correct: false }
    ]
  },
  {
    question: "Il budget di un istituto scolastico è:",
    answers: [
      { text: "Il bilancio preventivo", correct: true },
      { text: "Il bilancio consuntivo", correct: false },
      { text: "Il piano didattico", correct: false },
      { text: "La relazione finale", correct: false }
    ]
  },
  {
    question: "Cos'è il PON?",
    answers: [
      { text: "Programma Operativo Nazionale", correct: true },
      { text: "Piano Organizzativo Nazionale", correct: false },
      { text: "Progetto Operativo Nazionale", correct: false },
      { text: "Programma Organizzativo Nazionale", correct: false }
    ]
  },
  {
    question: "Qual è la durata del mandato del Dirigente Scolastico?",
    answers: [
      { text: "4 anni", correct: false },
      { text: "5 anni", correct: true },
      { text: "3 anni", correct: false },
      { text: "6 anni", correct: false }
    ]
  },
  {
    question: "La funzione dell'Assistente Amministrativo è anche:",
    answers: [
      { text: "Gestire la biblioteca", correct: true },
      { text: "Insegnare le materie", correct: false },
      { text: "Coordinare le lezioni", correct: false },
      { text: "Fare pulizie", correct: false }
    ]
  },
  {
    question: "Il C.F. dell'Istituto è:",
    answers: [
      { text: "Codice Fiscale", correct: true },
      { text: "Codice Identificativo", correct: false },
      { text: "Codice Univoco", correct: false },
      { text: "Codice Meccanografico", correct: false }
    ]
  },
  {
    question: "L'Assistente Amministrativo si occupa di:",
    answers: [
      { text: "Gestione personale ATA", correct: true },
      { text: "Organizzazione del corso", correct: false },
      { text: "Docenza", correct: false },
      { text: "Pianificazione orari", correct: false }
    ]
  },
  {
    question: "Quale codice è obbligatorio nelle fatture verso la Pubblica Amministrazione?",
    answers: [
      { text: "Codice Univoco", correct: true },
      { text: "Codice Fiscale", correct: false },
      { text: "CIG", correct: false },
      { text: "CUP", correct: false }
    ]
  },
  {
    question: "La CUP serve per:",
    answers: [
      { text: "Codice Unico di Progetto", correct: true },
      { text: "Codice Identificativo", correct: false },
      { text: "Codice Fiscale", correct: false },
      { text: "Codice Univoco", correct: false }
    ]
  },
  {
    question: "La delibera del Consiglio d'Istituto è adottata da?",
    answers: [
      { text: "Dirigente Scolastico", correct: false },
      { text: "Consiglio d'Istituto", correct: true },
      { text: "Collegio dei Docenti", correct: false },
      { text: "Personale ATA", correct: false }
    ]
  },
  {
    question: "Che cosa significa DURC?",
    answers: [
      { text: "Documento Unico di Regolarità Contributiva", correct: true },
      { text: "Documento Unico di Regolarità Contabile", correct: false },
      { text: "Documento Unico di Regolarità Certificata", correct: false },
      { text: "Documento Unico di Registro Contributi", correct: false }
    ]
  },
  {
    question: "Quale di questi è un codice identificativo?",
    answers: [
      { text: "CIG", correct: true },
      { text: "PEC", correct: false },
      { text: "DURC", correct: false },
      { text: "C.F.", correct: false }
    ]
  },
  {
    question: "Cos'è il PON FSE?",
    answers: [
      { text: "Fondo Sociale Europeo", correct: true },
      { text: "Fondo Scuola Europea", correct: false },
      { text: "Fondo Scolastico Europeo", correct: false },
      { text: "Fondo Sociale Nazionale", correct: false }
    ]
  },
  {
    question: "Che cos'è il bilancio consuntivo?",
    answers: [
      { text: "Bilancio che mostra i risultati economici effettivi", correct: true },
      { text: "Bilancio preventivo", correct: false },
      { text: "Piano finanziario", correct: false },
      { text: "Bilancio di esercizio", correct: false }
    ]
  },
  {
    question: "Il DSGA è:",
    answers: [
      { text: "Direttore dei Servizi Generali e Amministrativi", correct: true },
      { text: "Direttore dei Servizi Generali e Artistici", correct: false },
      { text: "Dirigente Scolastico", correct: false },
      { text: "Assistente Amministrativo", correct: false }
    ]
  },
  {
    question: "Quale di queste è una funzione tipica dell’Assistente Amministrativo?",
    answers: [
      { text: "Gestire la contabilità", correct: false },
      { text: "Organizzare l'attività scolastica", correct: true },
      { text: "Fare le lezioni", correct: false },
      { text: "Progettare il piano didattico", correct: false }
    ]
  },
  {
    question: "Quale è il codice identificativo dell'Istituto scolastico?",
    answers: [
      { text: "Codice meccanografico", correct: true },
      { text: "Codice fiscale", correct: false },
      { text: "Partita IVA", correct: false },
      { text: "Codice univoco", correct: false }
    ]
  },
  {
    question: "La PEC serve per:",
    answers: [
      { text: "Inviare email certificata", correct: true },
      { text: "Telefonare", correct: false },
      { text: "Stampare documenti", correct: false },
      { text: "Archiviare documenti", correct: false }
    ]
  },
  {
    question: "Il budget di un istituto scolastico è:",
    answers: [
      { text: "Il bilancio preventivo", correct: true },
      { text: "Il bilancio consuntivo", correct: false },
      { text: "Il piano didattico", correct: false },
      { text: "La relazione finale", correct: false }
    ]
  },
  {
    question: "Cos'è il PON?",
    answers: [
      { text: "Programma Operativo Nazionale", correct: true },
      { text: "Piano Organizzativo Nazionale", correct: false },
      { text: "Progetto Operativo Nazionale", correct: false },
      { text: "Programma Organizzativo Nazionale", correct: false }
    ]
  },
  {
    question: "Qual è la durata del mandato del Dirigente Scolastico?",
    answers: [
      { text: "4 anni", correct: false },
      { text: "5 anni", correct: true },
      { text: "3 anni", correct: false },
      { text: "6 anni", correct: false }
    ]
  },
  {
    question: "La funzione dell'Assistente Amministrativo è anche:",
    answers: [
      { text: "Gestire la biblioteca", correct: true },
      { text: "Insegnare le materie", correct: false },
      { text: "Coordinare le lezioni", correct: false },
      { text: "Fare pulizie", correct: false }
    ]
  },
  {
    question: "Il C.F. dell'Istituto è:",
    answers: [
      { text: "Codice Fiscale", correct: true },
      { text: "Codice Identificativo", correct: false },
      { text: "Codice Univoco", correct: false },
      { text: "Codice Meccanografico", correct: false }
    ]
  },
  {
    question: "L'Assistente Amministrativo si occupa di:",
    answers: [
      { text: "Gestione personale ATA", correct: true },
      { text: "Organizzazione del corso", correct: false },
      { text: "Docenza", correct: false },
      { text: "Pianificazione orari", correct: false }
    ]
  },
  {
    question: "Quale codice è obbligatorio nelle fatture verso la Pubblica Amministrazione?",
    answers: [
      { text: "Codice Univoco", correct: true },
      { text: "Codice Fiscale", correct: false },
      { text: "CIG", correct: false },
      { text: "CUP", correct: false }
    ]
  },
  {
    question: "La CUP serve per:",
    answers: [
      { text: "Codice Unico di Progetto", correct: true },
      { text: "Codice Identificativo", correct: false },
      { text: "Codice Fiscale", correct: false },
      { text: "Codice Univoco", correct: false }
    ]
  },
  {
    question: "La delibera del Consiglio d'Istituto è adottata d text: ",
    answers: [
      { text: "Dirigente Scolastico", correct: false },
      { text: "Consiglio d'Istituto", correct: true },
      { text: "Collegio dei Docenti", correct: false },
      { text: "Personale ATA", correct: false }
    ]
  },
  {
    question: "Che cosa significa DURC?",
    answers: [
      { text: "Documento Unico di Regolarità Contributiva", correct: true },
      { text: "Documento Unico di Regolarità Contabile", correct: false },
      { text: "Documento Unico di Regolarità Certificata", correct: false },
      { text: "Documento Unico di Registro Contributi", correct: false }
    ]
  },
  {
    question: "Quale di questi è un codice identificativo?",
    answers: [
      { text: "CIG", correct: true },
      { text: "PEC", correct: false },
      { text: "DURC", correct: false },
      { text: "C.F.", correct: false }
    ]
  },
  {
    question: "Cos'è il PON FSE?",
    answers: [
      { text: "Fondo Sociale Europeo", correct: true },
      { text: "Fondo Scuola Europea", correct: false },
      { text: "Fondo Scolastico Europeo", correct: false },
      { text: "Fondo Sociale Nazionale", correct: false }
    ]
  },
  {
    question: "Che cos'è il bilancio consuntivo?",
    answers: [
      { text: "Bilancio che mostra i risultati economici effettivi", correct: true },
      { text: "Bilancio preventivo", correct: false },
      { text: "Piano finanziario", correct: false },
      { text: "Bilancio di esercizio", correct: false }
    ]
  },
  {
    question: "Il DSGA è:",
    answers: [
      { text: "Direttore dei Servizi Generali e Amministrativi", correct: true },
      { text: "Direttore dei Servizi Generali e Artistici", correct: false },
      { text: "Dirigente Scolastico", correct: false },
      { text: "Assistente Amministrativo", correct: false }
    ]
  },
  { 
    question: "Quale di queste è una funzione tipica dell’Assistente Amministrativo?",
    answers: [
      { text: "Gestire la contabilità", correct: false },
      { text: "Organizzare l'attività scolastica", correct: true },
      { text: "Fare le lezioni", correct: false },
      { text: "Progettare il piano didattico", correct: false }
    ]
  },
  {
    question: "Quale documento attesta la regolarità contributiva di un fornitore?",
    answers: [
      { text: "Durc", correct: true },
      { text: "CIG", correct: false },
      { text: "CUP", correct: false },
      { text: "Fattura", correct: false }
    ]
  },
  {
    question: "Il CIG serve per:",
    answers: [
      { text: "Identificare un appalto pubblico", correct: true },
      { text: "Pagare le tasse", correct: false },
      { text: "Registrare i dipendenti", correct: false },
      { text: "Gestire la contabilità", correct: false }
    ]
  },
  {
    question: "Il C.F. dell'Istituto è:",
    answers: [
      { text: "Codice Fiscale", correct: true },
      { text: "Codice Identificativo", correct: false },
      { text: "Codice Univoco", correct: false },
      { text: "Codice Meccanografico", correct: false }
    ]
  },
  {
    question: "L'Assistente Amministrativo si occupa di:",
    answers: [
      { text: "Gestione personale ATA", correct: true },
      { text: "Organizzazione del corso", correct: false },
      { text: "Docenza", correct: false },
      { text: "Pianificazione orari", correct: false }
    ]
  },
  {
    question: "Quale codice è obbligatorio nelle fatture verso la Pubblica Amministrazione?",
    answers: [
      { text: "Codice Univoco", correct: true },
      { text: "Codice Fiscale", correct: false },
      { text: "CIG", correct: false },
      { text: "CUP", correct: false }
    ]
  },
  {
    question: "Con l'acronimo CUP si intende il?",
    answers: [
      { text: "Codice Unico di Progetto", correct: true },
      { text: "Codice Identificativo", correct: false },
      { text: "Codice Fiscale", correct: false },
      { text: "Codice Univoco", correct: false }
    ]
  },
  {
    question: "La delibera del Consiglio d'Istituto è adottata da:",
    answers: [
      { text: "Dirigente Scolastico", correct: false },
      { text: "Consiglio d'Istituto", correct: true },
      { text: "Collegio dei Docenti", correct: false },
      { text: "Personale ATA", correct: false }
    ]
  },
  {
    question: "Con l'acronimo DURC si intende il?",
    answers: [
      { text: "Documento Unico di Regolarità Contributiva", correct: true },
      { text: "Documento Unico di Regolarità Contabile", correct: false },
      { text: "Documento Unico di Regolarità Certificata", correct: false },
      { text: "Documento Unico di Registro Contributi", correct: false }
    ]
  },
  {
    question: "Quale di questi è un codice identificativo?",
    answers: [
      { text: "CIG", correct: true },
      { text: "PEC", correct: false },
      { text: "DURC", correct: false },
      { text: "C.F.", correct: false }
    ]
  },
  {
    question: "L'Assistente Amministrativo collabora con:",
    answers: [
      { text: "Dirigente Scolastico", correct: true },
      { text: "Personale ATA", correct: false },
      { text: "Docenti", correct: false },
      { text: "Genitori", correct: false }
    ]
  },
  {
    question: "Che cos'è il bilancio consuntivo?",
    answers: [
      { text: "Bilancio che mostra i risultati economici effettivi", correct: true },
      { text: "Bilancio preventivo", correct: false },
      { text: "Piano finanziario", correct: false },
      { text: "Bilancio di esercizio", correct: false }
    ]
  },
  {
    question: "FSE indica?",
    answers: [
      { text: "Fondo Sociale Europeo", correct: true },
      { text: "Fondo Scuola Europea", correct: false },
      { text: "Fondo Scolastico Europeo", correct: false },
      { text: "Fondo Sociale Nazionale", correct: false }
    ]
  },
  {
    question: "Il D.S.G.A è il?",
    answers: [
      { text: "Direttore dei Servizi Generali e Amministrativi", correct: true },
      { text: "Direttore dei Servizi Generali e Artistici", correct: false },
      { text: "Dirigente Scolastico", correct: false },
      { text: "Assistente Amministrativo", correct: false }
    ]
  },
  {
    question: "Cosa significa C.M. in ambito scolastico?",
    answers: [
      { text: "Codice Meccanografico", correct: true },
      { text: "Comando Ministeriale", correct: false },
      { text: "Centro Matematico", correct: false },
      { text: "Controllo Mensile", correct: false }
    ]
  },
  {
    question: "Qual è l'orario massimo per presentare una domanda al protocollo?",
    answers: [
      { text: "Entro le 14:00", correct: true },
      { text: "Entro le 16:00", correct: false },
      { text: "Entro le 12:00", correct: false },
      { text: "Entro le 18:00", correct: false }
    ]
  },
  {
    question: "Qual è il compito principale dell'Assistente Amministrativo nella scuola?",
    answers: [
      { text: "Gestire le pratiche amministrative e contabili", correct: true },
      { text: "Insegnare materie curricolari", correct: false },
      { text: "Organizzare attività sportive", correct: false },
      { text: "Supervisionare le pulizie", correct: false }
    ]
  },
  {
    question: "Qual è la durata massima di un contratto a tempo determinato nella pubblica amministrazione?",
    answers: [
      { text: "36 mesi", correct: true },
      { text: "12 mesi", correct: false },
      { text: "24 mesi", correct: false },
      { text: "48 mesi", correct: false }
    ]
  },
  {
    question: "Cosa indica il termine C.I.G. in ambito pubblico?",
    answers: [
      { text: "Codice Identificativo Gara", correct: true },
      { text: "Codice Interno Gestione", correct: false },
      { text: "Codice Identificativo Gestione", correct: false },
      { text: "Codice Internazionale Gara", correct: false }
    ]
  },
  {
    question: "Quale strumento è utilizzato per gestire le assenze del personale ATA?",
    answers: [
      { text: "Il sistema SIDI", correct: true },
      { text: "Il registro elettronico", correct: false },
      { text: "La bacheca scolastica", correct: false },
      { text: "Il libro delle firme", correct: false }
    ]
  },
  {
    question: "In quale documento si trovano le procedure di sicurezza nelle scuole?",
    answers: [
      { text: "Il Documento di Valutazione dei Rischi (DVR)", correct: true },
      { text: "Il Piano Triennale dell'Offerta Formativa", correct: false },
      { text: "Il Registro degli Infortuni", correct: false },
      { text: "Il Piano Annuale delle Attività", correct: false }
    ]
  },
  {
    question: "Qual è il ruolo del DSGA (Direttore dei Servizi Generali e Amministrativi)?",
    answers: [
      { text: "Coordina e supervisiona le attività amministrative e tecniche", correct: true },
      { text: "Insegna discipline tecniche", correct: false },
      { text: "Gestisce le attività sportive", correct: false },
      { text: "Sostituisce il Dirigente Scolastico in tutte le funzioni", correct: false }
    ]
  },
  {
    question: "Quale normativa regola il trattamento dei dati personali nella scuola?",
    answers: [
      { text: "Il GDPR (Regolamento UE 2016/679)", correct: true },
      { text: "Il Codice Civile", correct: false },
      { text: "Il Testo Unico sulla Sicurezza", correct: false },
      { text: "La Costituzione Italiana", correct: false }
    ]
  },
  {
    question: "Quale documento certifica la presenza del personale scolastico?",
    answers: [
      { text: "Il registro delle presenze", correct: true },
      { text: "Il libro delle giustificazioni", correct: false },
      { text: "Il piano delle attività", correct: false },
      { text: "Il verbale del collegio docenti", correct: false }
    ]
  },
  {
    question: "Come si chiama il sistema informativo per la gestione del personale scolastico?",
    answers: [
      { text: "SIDI", correct: true },
      { text: "SPID", correct: false },
      { text: "ANPR", correct: false },
      { text: "INPS", correct: false }
    ]
  },
  {
    question: "Qual è il termine per la presentazione delle giustificazioni delle assenze?",
    answers: [
      { text: "5 giorni", correct: true },
      { text: "1 giorno", correct: false },
      { text: "10 giorni", correct: false },
      { text: "30 giorni", correct: false }
    ]
  },
  {
   question: "Quale competenza del DigComp 2.2 riguarda la gestione sicura e tracciabile dell'identità digitale da parte degli Assistenti Amministrativi?",
   answers: [
    { text: "La competenza 2.6", correct: true },
    { text: "La competenza 1.1", correct: false },
    { text: "La competenza 5.3", correct: false },
    { text: "La competenza 3.2", correct: false }
    ]
  },
  {
   question: "Qual è uno strumento utilizzato per accedere in sicurezza alle piattaforme digitali scolastiche?",
   answers: [
    { text: "SPID", correct: true },
    { text: "PEC scolastica", correct: false },
    { text: "Registro elettronico", correct: false },
    { text: "CMS scolastico", correct: false }
     ]
   },
   {
   question: "Cosa rappresenta il 'Lordo Dipendente'?",
   answers: [
    { text: "Il compenso totale comprensivo solo delle ritenute a carico del dipendente", correct: true },
    { text: "Il compenso netto", correct: false },
    { text: "Il compenso complessivo a carico dello Stato", correct: false },
    { text: "Il compenso comprensivo di IRAP", correct: false }
  ]
},
{
  question: "Quale piattaforma viene utilizzata per compilare e inviare il modello F24EP?",
  answers: [
    { text: "Desktop Telematico", correct: true },
    { text: "NOIPA", correct: false },
    { text: "SIDI", correct: false },
    { text: "SIOPE+", correct: false }
  ]
},
{
  question: "Quale tra le seguenti attività rientra nella Seconda posizione economica dell'Assistente Amministrativo?",
  answers: [
    { text: "Compilazione e invio del modello F24EP con firma digitale", correct: true },
    { text: "Predisposizione dei format di selezione del personale", correct: false },
    { text: "Pubblicazione degli incarichi sul CMS scolastico", correct: false },
    { text: "Creazione di graduatorie su fogli elettronici", correct: false }
  ]
}

];

let selectedQuestions = [];
let timerInterval;

function startQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const info = document.getElementById("info");
  const results = document.getElementById("results");
  results.innerHTML = "";

  // Seleziona 20 domande (o meno, se la libreria è piccola)
  const numQuestions = Math.min(20, questions.length);
  selectedQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, numQuestions);

  // Mostra le domande
  quizContainer.innerHTML = selectedQuestions.map((q, i) => `
    <div class="question-block">
      <p><strong>${i + 1}. ${q.question}</strong></p>
      ${q.answers.map((a, j) => `
        <label>
          <input type="radio" name="question${i}" value="${j}">
          ${a.text}
        </label>
      `).join("")}
    </div>
  `).join("");

  // Info iniziali
  info.innerHTML = `
    Domande in libreria: ${questions.length}<br>
    Tempo rimanente: <span id="timer">30:00</span><br>
    Punteggio: +1 punto per risposta corretta, -1.5 punti per risposta errata, 0 punti per risposta non data.
  `;

  // Avvia timer
  let timeLeft = 30 * 60;
  const timerDisplay = document.getElementById("timer");
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function resetQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quiz-container").innerHTML = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("info").innerHTML = "";
}

function submitQuiz() {
  clearInterval(timerInterval);
  const questionBlocks = document.querySelectorAll(".question-block");
  let score = 0;
  let answered = 0;

  selectedQuestions.forEach((q, index) => {
    const radios = document.getElementsByName(`question${index}`);
    const questionBlock = questionBlocks[index];
    let selected = -1;

    radios.forEach((radio, i) => {
      if (radio.checked) selected = i;
    });

    radios.forEach((radio, i) => {
      const label = radio.parentElement;
      const isCorrect = q.answers[i].correct;

      // Mostra sempre la risposta corretta in verde
      if (isCorrect) {
        label.style.backgroundColor = "#c8e6c9"; // verde
        label.style.fontWeight = "bold";
      }

      // Se l'utente ha selezionato una risposta sbagliata
      if (i === selected && !isCorrect) {
        label.style.backgroundColor = "#ffcdd2"; // rosso
      }
    });

    if (selected === -1) {
      questionBlock.classList.add("unanswered");
    } else {
      answered++;
      if (q.answers[selected].correct) {
        score += 1;
        questionBlock.classList.add("correct");
      } else {
        score -= 1.5;
        questionBlock.classList.add("wrong");
      }
    }
  });

  document.getElementById("results").innerHTML = `
    <p>Hai risposto a <strong>${answered}</strong> su <strong>${selectedQuestions.length}</strong> domande.</p>
    <p>Punteggio finale: <strong>${score.toFixed(2)}</strong> punti.</p>
  `;
}
