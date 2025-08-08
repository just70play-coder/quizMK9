// Libreria di domande (può essere ampliata facilmente)
const questions = [
{ 
  question: "Cos'è l'identità digitale?",
  answers: [
    { text: "L'insieme delle informazioni che ci rappresentano online", correct: true },
    { text: "Un documento cartaceo di riconoscimento", correct: false },
    { text: "Un software per navigare su internet", correct: false },
    { text: "Un social network dedicato", correct: false }
  ]
},
{ 
  question: "Qual è il quadro europeo di riferimento per le competenze digitali dei cittadini?",
  answers: [
    { text: "DigComp 2.2", correct: true },
    { text: "SPID", correct: false },
    { text: "eIDAS", correct: false },
    { text: "CIE", correct: false }
  ]
},
{ 
  question: "Quale strumento di identificazione digitale consente l’accesso ai portali governativi e scolastici?",
  answers: [
    { text: "SPID", correct: true },
    { text: "CIE", correct: false },
    { text: "CNS", correct: false },
    { text: "MFA", correct: false }
  ]
},
{ 
  question: "Quale tra questi è un metodo per garantire la sicurezza dell'identità digitale?",
  answers: [
    { text: "Autenticazione a più fattori (MFA)", correct: true },
    { text: "Utilizzo di password semplici", correct: false },
    { text: "Condivisione delle password con colleghi", correct: false },
    { text: "Usare sempre lo stesso dispositivo senza aggiornamenti", correct: false }
  ]
},
{ 
  question: "Qual è una buona pratica per custodire l’identità digitale secondo l’area degli assistenti amministrativi (1^ posizione)?",
  answers: [
    { text: "Usare password complesse e diverse per ogni servizio", correct: true },
    { text: "Scrivere le password su un foglio di carta", correct: false },
    { text: "Utilizzare la stessa password per tutti i servizi", correct: false },
    { text: "Non cambiare mai le password", correct: false }
  ]
},
{ 
  question: "Perché è importante fare backup regolari e conservarli in ambienti sicuri?",
  answers: [
    { text: "Per proteggere i dati importanti e assicurarne il recupero", correct: true },
    { text: "Per occupare più spazio di archiviazione", correct: false },
    { text: "Per evitare di usare i server scolastici", correct: false },
    { text: "Per evitare aggiornamenti del software", correct: false }
  ]
},
{ 
  question: "Quale pratica è consigliata per gli assistenti tecnici per proteggere l'identità digitale?",
  answers: [
    { text: "Configurare account con permessi limitati", correct: true },
    { text: "Usare sempre l’account amministratore per tutto", correct: false },
    { text: "Disabilitare l’antivirus", correct: false },
    { text: "Non bloccare mai lo schermo del computer", correct: false }
  ]
},
{ 
  question: "Quale normativa italiana regola l'uso dei sistemi informatici nella Pubblica Amministrazione?",
  answers: [
    { text: "Codice dell'Amministrazione Digitale (CAD)", correct: true },
    { text: "DigComp 2.2", correct: false },
    { text: "Regolamento GDPR", correct: false },
    { text: "Decreto Legislativo 231", correct: false }
  ]
},
{ 
  question: "Quale tra queste piattaforme è utilizzata nella scuola per la gestione amministrativa digitale?",
  answers: [
    { text: "SIDI", correct: true },
    { text: "Facebook", correct: false },
    { text: "Instagram", correct: false },
    { text: "Spotify", correct: false }
  ]
},
{ 
  question: "Qual è uno dei principali benefici della digitalizzazione nella scuola?",
  answers: [
    { text: "Automazione e semplificazione delle procedure", correct: true },
    { text: "Aumento del carico burocratico", correct: false },
    { text: "Maggiore uso di carta", correct: false },
    { text: "Isolamento degli studenti", correct: false }
  ]
},
{ 
  question: "Cosa significa passare dalla cultura dell’adempimento a quella del risultato?",
  answers: [
    { text: "Focalizzarsi sull'impatto reale e la qualità dei servizi offerti", correct: true },
    { text: "Produrre più documentazione ufficiale possibile", correct: false },
    { text: "Ignorare le normative", correct: false },
    { text: "Evitare il monitoraggio dell'efficienza", correct: false }
  ]
},
{ 
  question: "Quale tra queste azioni aiuta il personale scolastico ad adottare la cultura del risultato?",
  answers: [
    { text: "Formazione continua", correct: true },
    { text: "Evitare il monitoraggio dei servizi", correct: false },
    { text: "Mantenere le procedure manuali", correct: false },
    { text: "Ignorare l'automazione", correct: false }
  ]
},
//nuovo blocco di domande
{
  question: "Chi può ricevere la prima posizione economica secondo il C.C.N.L.?",
  answers: [
    { text: "Solo gli assistenti tecnici", correct: false },
    { text: "Tutto il personale inquadrato nelle Aree Collaboratori, Operatori e Assistenti", correct: true },
    { text: "Solo il personale docente", correct: false },
    { text: "Solo il personale con contratto a tempo determinato", correct: false }
  ]
},
{
  question: "Quale articolo del decreto legislativo definisce la scuola come comunità educante?",
  answers: [
    { text: "Art. 3 del decreto legislativo 16 aprile 1994, n. 297", correct: true },
    { text: "Art. 5 del decreto legislativo 2010", correct: false },
    { text: "Art. 1 della Costituzione italiana", correct: false },
    { text: "Art. 10 della Convenzione ONU sui diritti dell’infanzia", correct: false }
  ]
},
{
  question: "Quali valori caratterizzano la comunità educante?",
  answers: [
    { text: "Valori democratici e crescita della persona in tutte le sue dimensioni", correct: true },
    { text: "Solo la formazione professionale degli insegnanti", correct: false },
    { text: "L’efficienza amministrativa della scuola", correct: false },
    { text: "La gestione economica della scuola", correct: false }
  ]
},
{
  question: "Chi fa parte della comunità educante secondo il decreto legislativo n. 297/1994?",
  answers: [
    { text: "Dirigente scolastico, personale docente ed educativo, DSGA, personale ATA, famiglie, alunni e studenti", correct: true },
    { text: "Solo il personale docente", correct: false },
    { text: "Solo gli studenti e le famiglie", correct: false },
    { text: "Solo il dirigente scolastico e il personale amministrativo", correct: false }
  ]
},
{
  question: "Qual è lo strumento principale con cui la comunità educante definisce la progettazione educativa e didattica?",
  answers: [
    { text: "Il piano triennale dell’offerta formativa", correct: true },
    { text: "Il regolamento scolastico interno", correct: false },
    { text: "Il calendario scolastico", correct: false },
    { text: "Il bilancio annuale della scuola", correct: false }
  ]
},
{
  question: "Cosa implica la competenza digitale secondo DigComp 2.2?",
  answers: [
    { text: "L’uso sicuro, critico e responsabile delle tecnologie digitali nell’apprendimento, lavoro e società", correct: true },
    { text: "Solo la capacità di usare programmi di scrittura", correct: false },
    { text: "Solo la capacità di navigare su internet", correct: false },
    { text: "L’installazione di software antivirus", correct: false }
  ]
},
{
  question: "Quali sono alcune delle competenze incluse in DigComp 2.2?",
  answers: [
    { text: "Alfabetizzazione all’informazione e ai dati, comunicazione, collaborazione, sicurezza, pensiero critico", correct: true },
    { text: "Solo programmazione", correct: false },
    { text: "Solo uso di social media", correct: false },
    { text: "Solo creazione di contenuti artistici", correct: false }
  ]
},
{
  question: "Che cos’è il Piano Nazionale della Scuola Digitale (PNSD)?",
  answers: [
    { text: "Il principale strumento di programmazione per la trasformazione digitale della scuola italiana", correct: true },
    { text: "Un programma per le attività sportive scolastiche", correct: false },
    { text: "Un piano per la gestione del personale docente", correct: false },
    { text: "Un progetto per la ristrutturazione degli edifici scolastici", correct: false }
  ]
},
{
  question: "Quale legge ha introdotto il Piano Nazionale della Scuola Digitale?",
  answers: [
    { text: "Legge 13 luglio 2015, n. 107", correct: true },
    { text: "Decreto legislativo 297/1994", correct: false },
    { text: "Costituzione italiana", correct: false },
    { text: "Legge di bilancio 2016", correct: false }
  ]
},
{
  question: "Quali misure sono state promosse per l’infrastrutturazione digitale nelle scuole?",
  answers: [
    { text: "Potenziamento della connettività, ambienti di apprendimento innovativi, dotazioni per didattica digitale", correct: true },
    { text: "Solo acquisto di libri cartacei", correct: false },
    { text: "Aumento del numero di docenti", correct: false },
    { text: "Organizzazione di eventi sportivi", correct: false }
  ]
},
{
  question: "Cosa rappresentano PON, PNRR e PN nel contesto della scuola digitale?",
  answers: [
    { text: "Programmi e risorse per la transizione digitale e il sostegno economico", correct: true },
    { text: "Tipologie di contratti di lavoro", correct: false },
    { text: "Strumenti di valutazione degli studenti", correct: false },
    { text: "Manuali per l’uso del computer", correct: false }
  ]
},
{
  question: "Che cos’è il SIDI?",
  answers: [
    { text: "Un sistema informativo riservato per la gestione dei dati amministrativi scolastici", correct: true },
    { text: "Una piattaforma per l’insegnamento a distanza", correct: false },
    { text: "Un programma di formazione per docenti", correct: false },
    { text: "Un tipo di contratto per il personale ATA", correct: false }
  ]
},
{
  question: "Quali servizi sono disponibili attraverso il SIDI?",
  answers: [
    { text: "Anagrafe nazionale studenti, iscrizioni online, plico telematico, fatturazione elettronica, firma digitale", correct: true },
    { text: "Solo iscrizioni manuali degli studenti", correct: false },
    { text: "Solo gestione delle assenze", correct: false },
    { text: "Solo piattaforme di social media per studenti", correct: false }
  ]
  },
  {
  question: "Che cos’è il SIDI?",
  answers: [
    { text: "Un sistema informativo riservato per la gestione dei dati amministrativi scolastici", correct: true },
    { text: "Una piattaforma per l’insegnamento a distanza", correct: false },
    { text: "Un programma di formazione per docenti", correct: false },
    { text: "Un tipo di contratto per il personale ATA", correct: false }
  ]
},
 //nuove domande DigComp 2.2.
  {
  question: "Quali sono le due tipologie di posizioni economiche previste dal CCNL per il personale ATA?",
  answers: [
    { text: "Prima posizione economica e seconda posizione economica", correct: true },
    { text: "Posizione economica base e posizione economica avanzata", correct: false },
    { text: "Solo prima posizione economica", correct: false },
    { text: "Posizione economica per assistenti tecnici e per collaboratori", correct: false }
  ]
},
{
  question: "A quali profili professionali può essere corrisposta la prima o la seconda posizione economica in via alternativa?",
  answers: [
    { text: "Assistente amministrativo o Assistente tecnico", correct: true },
    { text: "Solo Assistenti tecnici", correct: false },
    { text: "Collaboratori scolastici", correct: false },
    { text: "Operatori", correct: false }
  ]
},
{
  question: "Secondo il d.lgs. n. 297/1994 che cos’è il principio della Comunità Educante?",
  answers: [
    { text: "Una comunità di dialogo, ricerca e esperienza sociale improntata ai valori democratici", correct: true },
    { text: "Un insieme di regole per la sicurezza digitale", correct: false },
    { text: "Un piano di formazione per il personale ATA", correct: false },
    { text: "Un documento di programmazione economica", correct: false }
  ]
},
{
  question: "Chi appartiene alla comunità educante?",
  answers: [
    { text: "Dirigente scolastico, personale docente, DSGA, personale ATA, famiglie, alunni e studenti", correct: true },
    { text: "Solo il personale docente e il dirigente scolastico", correct: false },
    { text: "Solo gli alunni e gli studenti", correct: false },
    { text: "Il personale tecnico e amministrativo", correct: false }
  ]
},
{
  question: "Come è articolato il sistema di classificazione del personale tecnico e amministrativo?",
  answers: [
    { text: "In quattro Aree professionali: Operatori, Assistenti, Funzionari, Elevate Qualificazioni", correct: true },
    { text: "In tre livelli: base, intermedio, avanzato", correct: false },
    { text: "In due settori: amministrativo e tecnico", correct: false },
    { text: "Solo in base alle mansioni quotidiane", correct: false }
  ]
},
{
  question: "Quali competenze sono richieste per l’Area degli Assistenti?",
  answers: [
    { text: "Compiti complessi con conoscenza di procedure e uso di attrezzature elettroniche", correct: true },
    { text: "Solo mansioni manuali e di supporto", correct: false },
    { text: "Responsabilità esclusiva di coordinamento", correct: false },
    { text: "Solo attività di pulizia e manutenzione", correct: false }
  ]
},
{
  question: "Quali sono le specifiche professionali comuni degli Assistenti?",
  answers: [
    { text: "Diploma di istruzione secondaria superiore e capacità applicative", correct: true },
    { text: "Nessun requisito formativo specifico", correct: false },
    { text: "Laurea specialistica in ambito tecnico", correct: false },
    { text: "Solo esperienza pratica senza titoli", correct: false }
  ]
},
{
  question: "Quali compiti svolge l’Assistente amministrativo?",
  answers: [
    { text: "Gestione contabilità, archivio, protocollo e magazzino", correct: true },
    { text: "Solo attività di assistenza agli alunni", correct: false },
    { text: "Organizzazione viaggi di istruzione", correct: false },
    { text: "Coordinamento del personale docente", correct: false }
  ]
},
{
  question: "Come si applica la classificazione dei profili ATA nelle attività quotidiane?",
  answers: [
    { text: "Attraverso il piano delle attività proposto dal DSGA e adottato dal Dirigente scolastico", correct: true },
    { text: "Solo tramite disposizioni del Ministero dell’Istruzione", correct: false },
    { text: "Attraverso incontri sindacali trimestrali", correct: false },
    { text: "Attraverso decisioni dei rappresentanti degli studenti", correct: false }
  ]
},
{
  question: "A quali commissioni può partecipare il personale ATA?",
  answers: [
    { text: "Visite e viaggi di istruzione, assistenza agli alunni con disabilità, sicurezza, elaborazione PEI", correct: true },
    { text: "Solo commissioni per la sicurezza", correct: false },
    { text: "Commissioni per la programmazione economica", correct: false },
    { text: "Commissioni sindacali e politiche", correct: false }
  ]
},
{
  question: "Cos'è l'accesso sicuro?",
  answers: [
    { text: "Modalità di accesso che garantisce la protezione dei dati e dell’identità dell’utente, spesso tramite SPID o CIE.", correct: true },
    { text: "Accesso senza bisogno di credenziali.", correct: false },
    { text: "Accesso che consente solo di leggere i dati, ma non modificarli.", correct: false },
    { text: "Accesso solo tramite password semplice.", correct: false }
  ]
},
{
  question: "Cosa significa accesso profilato?",
  answers: [
    { text: "Accesso a una piattaforma con credenziali che determinano i permessi e le funzioni disponibili per l’utente.", correct: true },
    { text: "Accesso che richiede solo una password.", correct: false },
    { text: "Accesso tramite link pubblico senza autenticazione.", correct: false },
    { text: "Accesso anonimo e senza controllo.", correct: false }
  ]
},
{
  question: "Cos'è l'autenticazione a due fattori (2FA)?",
  answers: [
    { text: "Metodo di sicurezza che richiede due elementi per accedere a un servizio (es. password + codice OTP).", correct: true },
    { text: "Accesso che utilizza solo una password.", correct: false },
    { text: "Accesso con un solo dispositivo riconosciuto.", correct: false },
    { text: "Accesso automatico senza verifica.", correct: false }
  ]
},
{
  question: "Cos'è il CAD (Codice dell'Amministrazione Digitale)?",
  answers: [
    { text: "Normativa che regolamenta l'uso dei sistemi informatici nelle pubbliche amministrazioni italiane.", correct: true },
    { text: "Un software per la gestione della PA.", correct: false },
    { text: "Un sistema di autenticazione biometrica.", correct: false },
    { text: "Una piattaforma per i pagamenti online.", correct: false }
  ]
},
{
  question: "Cos'è la CIE (Carta d’Identità Elettronica)?",
  answers: [
    { text: "Documento d’identità in formato elettronico utilizzabile anche per accedere ai servizi online della PA.", correct: true },
    { text: "Carta bancomat per pagamenti digitali.", correct: false },
    { text: "Dispositivo USB per archiviazione dati.", correct: false },
    { text: "Applicazione per smartphone per autenticarsi.", correct: false }
  ]
},
{
  question: "Cos'è la CNS (Carta Nazionale dei Servizi)?",
  answers: [
    { text: "Dispositivo (smart card o chiavetta USB) che consente l’autenticazione ai servizi digitali e la firma elettronica.", correct: true },
    { text: "Una password complessa.", correct: false },
    { text: "Un tipo di browser per accedere ai servizi PA.", correct: false },
    { text: "Un software antivirus.", correct: false }
  ]
},
{
  question: "Cosa si intende per credenziali?",
  answers: [
    { text: "Insieme di dati (username, password, PIN, ecc.) utilizzati per accedere in modo sicuro a un sistema informatico.", correct: true },
    { text: "Una carta di credito.", correct: false },
    { text: "Un tipo di virus informatico.", correct: false },
    { text: "Un software di sicurezza.", correct: false }
  ]
},
{
  question: "Cos'è DigComp 2.2?",
  answers: [
    { text: "Quadro europeo di riferimento per le competenze digitali dei cittadini, sviluppato dalla Commissione Europea.", correct: true },
    { text: "Un software di editing digitale.", correct: false },
    { text: "Un tipo di hardware per PC.", correct: false },
    { text: "Un protocollo di rete.", correct: false }
  ]
},
{
  question: "Cos'è Eidas?",
  answers: [
    { text: "Regolamento europeo che stabilisce standard per l'identificazione elettronica e i servizi fiduciari.", correct: true },
    { text: "Un sistema operativo per smartphone.", correct: false },
    { text: "Un'applicazione per la gestione delle email.", correct: false },
    { text: "Un software antivirus europeo.", correct: false }
  ]
},
{
  question: "Cos'è la firma digitale?",
  answers: [
    { text: "Strumento che consente di firmare documenti informatici con valore legale, garantendo autenticità, integrità e non ripudio.", correct: true },
    { text: "Una scansione della firma autografa.", correct: false },
    { text: "Una password per accedere ai documenti.", correct: false },
    { text: "Un file PDF protetto.", correct: false }
  ]
},
{
  question: "Cosa stabilisce il GDPR?",
  answers: [
    { text: "Normativa europea sulla protezione dei dati personali.", correct: true },
    { text: "Regole per la pubblicità online.", correct: false },
    { text: "Un protocollo di comunicazione.", correct: false },
    { text: "Un software di gestione dati.", correct: false }
  ]
},
{
  question: "Cos'è NOIPA?",
  answers: [
    { text: "Portale del MEF per la gestione degli stipendi e dei compensi del personale della PA.", correct: true },
    { text: "Un software di posta elettronica.", correct: false },
    { text: "Un sistema di archiviazione documenti.", correct: false },
    { text: "Una piattaforma per l’istruzione online.", correct: false }
  ]
},
{
  question: "Cos'è il phishing?",
  answers: [
    { text: "Tentativo fraudolento di ottenere dati sensibili tramite email o siti web falsi.", correct: true },
    { text: "Un sistema di sicurezza informatica.", correct: false },
    { text: "Un software antivirus.", correct: false },
    { text: "Un protocollo di rete.", correct: false }
  ]
},
{
  question: "Chi è il responsabile del trattamento?",
  answers: [
    { text: "Figura che gestisce i dati personali all’interno della scuola, nel rispetto del GDPR.", correct: true },
    { text: "Utente che usa il computer.", correct: false },
    { text: "Tecnico informatico della scuola.", correct: false },
    { text: "Responsabile della sicurezza antincendio.", correct: false }
  ]
},
{
  question: "Cos'è SIDI?",
  answers: [
    { text: "Portale del Ministero dell’Istruzione per la gestione amministrativa e didattica delle scuole.", correct: true },
    { text: "Un software di editing video.", correct: false },
    { text: "Un sistema operativo per PC.", correct: false },
    { text: "Un'app per smartphone.", correct: false }
  ]
},
{
  question: "Cos'è SPID?",
  answers: [
    { text: "Sistema che consente l’accesso ai servizi online della PA e dei privati aderenti con un’unica coppia di credenziali.", correct: true },
    { text: "Un sistema di pagamento online.", correct: false },
    { text: "Un software antivirus.", correct: false },
    { text: "Un motore di ricerca.", correct: false }
  ]
},
{
  question: "Cosa si intende per tracciabilità?",
  answers: [
    { text: "Capacità di registrare e monitorare le operazioni effettuate da un utente su una piattaforma digitale.", correct: true },
    { text: "Sistema di crittografia dei dati.", correct: false },
    { text: "Backup automatico dei dati.", correct: false },
    { text: "Un programma per modificare dati.", correct: false }
  ]
       },
       {
  question: "Quale piattaforma usa l’assistente per la rendicontazione delle attività progettuali?",
  answers: [
    { text: "NOIPA", correct: false },
    { text: "FUTURA", correct: true },
    { text: "SIOPE+", correct: false },
    { text: "Entratel", correct: false }
  ]
},
{
  question: "Con quale sistema l’assistente accede a piattaforme come PIMER o SIF2127?",
  answers: [
    { text: "Chiave OTP", correct: false },
    { text: "Autenticazione tramite desktop telematico", correct: false },
    { text: "SPID o CNS", correct: true },
    { text: "PIN dispositivo", correct: false }
  ]
},
{
  question: "A cosa serve l’accesso al sistema B.I.S.?",
  answers: [
    { text: "Per inviare la CU all’Agenzia delle Entrate", correct: false },
    { text: "Per conservare documenti cartacei", correct: false },
    { text: "Per inserire dati contabili e classificare le voci di bilancio", correct: true },
    { text: "Per autenticare il F24EP", correct: false }
  ]
},
{
  question: "Quale tra i seguenti strumenti è richiesto per accedere a B.I.S.?",
  answers: [
    { text: "Solo password personale", correct: false },
    { text: "Chiave OTP", correct: false },
    { text: "SPID, CIE o CNS", correct: true },
    { text: "Token bancario", correct: false }
  ]
},
{
  question: "Quale principio deve essere rispettato nella produzione e conservazione dei documenti digitali?",
  answers: [
    { text: "Il codice dei contratti pubblici", correct: false },
    { text: "Le norme INAIL", correct: false },
    { text: "Il GDPR", correct: true },
    { text: "La normativa CNIPA", correct: false }
  ]
},
{
  question: "Perché l’assistente partecipa a formazioni sulla sicurezza digitale?",
  answers: [
    { text: "Per imparare a usare software grafici", correct: false },
    { text: "Per gestire in sicurezza le credenziali di accesso", correct: true },
    { text: "Per elaborare le CU", correct: false },
    { text: "Per compilare modelli F24", correct: false }
  ]
},
{
  question: "Come si calcola il compenso?",
  answers: [
    { text: "Confrontando ore svolte e costo unitario per progetto", correct: false },
    { text: "Usando un importo medio prestabilito", correct: false },
    { text: "Confrontando ore dichiarate e tariffa oraria della nomina", correct: true },
    { text: "A forfait secondo il CCNL", correct: false }
  ]
},
{
  question: "Cosa contiene la griglia Excel riassuntiva dei compensi?",
  answers: [
    { text: "Solo le ore svolte", correct: false },
    { text: "Ore, compenso orario e importo lordo", correct: true },
    { text: "I codici fiscali dei partecipanti", correct: false },
    { text: "I mandati di pagamento", correct: false }
  ]
},
{
  question: "Quale attività **non** rientra nelle funzioni di prima posizione economica?",
  answers: [
    { text: "Compilazione e invio F24EP", correct: true },
    { text: "Inserimento impegni di spesa in B.I.S.", correct: false },
    { text: "Produzione documenti nel rispetto GDPR", correct: false },
    { text: "Inserimento dati contabili", correct: false }
  ]
},
{
  question: "Cosa si intende per 'lordo Stato' nel calcolo del compenso?",
  answers: [
    { text: "Solo il netto pagato al dipendente", correct: false },
    { text: "L’importo al netto delle sole imposte", correct: false },
    { text: "L'importo comprensivo di trattenute del dipendente e del datore", correct: true },
    { text: "Solo gli oneri a carico del datore", correct: false }
  ]
},
{
  question: "Quale sistema viene usato per l'invio della Distinta di trasmissione nella seconda posizione?",
  answers: [
    { text: "NOIPA", correct: false },
    { text: "PIMER", correct: false },
    { text: "SIOPE+", correct: true },
    { text: "FUTURA", correct: false }
  ]
},
{
  question: "Il modello F24EP serve per:",
  answers: [
    { text: "L’accredito dei fondi PON", correct: false },
    { text: "Il pagamento delle ritenute erariali e previdenziali", correct: true },
    { text: "La registrazione delle ore lavorate", correct: false },
    { text: "L'inserimento dei compensi in NOIPA", correct: false }
  ]
},
{
  question: "Come si effettua l’invio del modello F24EP?",
  answers: [
    { text: "Via email certificata (PEC)", correct: false },
    { text: "Attraverso la piattaforma NOIPA", correct: false },
    { text: "Con l'applicativo Entratel", correct: true },
    { text: "Mediante SIOPE+", correct: false }
  ]
},
{
  question: "Cosa permette la funzione 'Gestione F24EP' di B.I.S.?",
  answers: [
    { text: "Compilazione e gestione del modello F24EP", correct: true },
    { text: "Creazione di CU", correct: false },
    { text: "Gestione delle password", correct: false },
    { text: "Registrazione dei mandati", correct: false }
  ]
},
{
  question: "A cosa serve l’accesso al Desktop Telematico?",
  answers: [
    { text: "Alla gestione accessorie", correct: false },
    { text: "Al controllo formale dei modelli F24EP", correct: true },
    { text: "Alla rendicontazione dei progetti", correct: false },
    { text: "Alla firma digitale dei mandati", correct: false }
  ]
},
{
  question: "Cosa garantisce l’autenticazione degli F24EP?",
  answers: [
    { text: "L’accesso a SIOPE+", correct: false },
    { text: "La chiave crittografata di sicurezza", correct: true },
    { text: "Il codice fiscale", correct: false },
    { text: "Una password temporanea", correct: false }
  ]
},
{
  question: "Dove si inseriscono i compensi per l’aggiornamento previdenziale e fiscale?",
  answers: [
    { text: "Nella piattaforma FUTURA", correct: false },
    { text: "Nel sistema B.I.S.", correct: false },
    { text: "Nella piattaforma NOIPA", correct: true },
    { text: "Nel software Entratel", correct: false }
  ]
},
{
  question: "Quale percorso permette l'inserimento dei compensi accessori in NOIPA?",
  answers: [
    { text: "Area Fiscale → Gestione Redditi", correct: false },
    { text: "Area di Lavoro → Gestione Accessorie → Attività Uffici → Accessorie fuori sistema", correct: true },
    { text: "Dashboard → CU → Compensi", correct: false },
    { text: "Area Bilanci → Compensi Netti", correct: false }
  ]
},
{
  question: "Con quali credenziali si accede a Entratel?",
  answers: [
    { text: "PIN dell’ufficio", correct: false },
    { text: "SPID", correct: true },
    { text: "Numero di protocollo", correct: false },
    { text: "Codice CUP", correct: false }
  ]
},
{
  question: "Quali dichiarazioni fiscali vengono elaborate e inviate nella seconda posizione economica?",
  answers: [
    { text: "Solo IRAP", correct: false },
    { text: "CU, 730, IMU", correct: false },
    { text: "CU, 770, IRAP", correct: true },
    { text: "CU, ISEE, 770", correct: false }
  ]
  },
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
    question: "Quale documento attesta la regolarità contributiva di un fornitore?",
    answers: [
      { text: "Durc", correct: true },
      { text: "CIG", correct: false },
      { text: "CUP", correct: false },
      { text: "Fattura", correct: false }
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
    question: "Il CIG serve per:",
    answers: [
      { text: "Identificare un appalto pubblico", correct: true },
      { text: "Pagare le tasse", correct: false },
      { text: "Registrare i dipendenti", correct: false },
      { text: "Gestire la contabilità", correct: false }
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
    question: "L'Assistente Amministrativo collabora con:",
    answers: [
      { text: "Dirigente Scolastico", correct: true },
      { text: "Personale ATA", correct: false },
      { text: "Docenti", correct: false },
      { text: "Genitori", correct: false }
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
  },
  {
    question: "Cosa si indica per 'Lordo Stato'?",
    answers: [
      { text: "Il compenso netto percepito dal dipendente", correct: false },
      { text: "Il totale delle imposte IRPEF", correct: false },
      { text: "Il compenso totale comprensivo di tutte le trattenute a carico del dipendente e del datore di lavoro", correct: true },
      { text: "Solo i contributi previdenziali a carico del datore di lavoro", correct: false }
    ]
  },
  {
    question: "Quale tra i seguenti è un onere a carico del dipendente?",
    answers: [
      { text: "Ritenute per il TFR", correct: false },
      { text: "Contributi INPDAP al 100%", correct: true },
      { text: "Contributi per il fondo pensioni complementare del datore di lavoro", correct: false },
      { text: "Contributi INAIL", correct: false }
    ]
  },
  {
    question: "Quale voce è considerata un onere a carico del datore di lavoro?",
    answers: [
      { text: "IRPEF", correct: false },
      { text: "Fondo di Garanzia", correct: false },
      { text: "Contributi previdenziali a carico del datore di lavoro", correct: true },
      { text: "Addizionale regionale", correct: false }
    ]
  },
  {
    question: "Il compenso netto è:",
    answers: [
      { text: "La somma delle trattenute previdenziali e fiscali", correct: false },
      { text: "L'importo ricevuto al lordo di tutte le trattenute", correct: false },
      { text: "L'importo effettivamente ricevuto dal dipendente dopo le trattenute", correct: true },
      { text: "L'importo versato dal datore di lavoro allo Stato", correct: false }
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
