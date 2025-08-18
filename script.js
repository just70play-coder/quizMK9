// Libreria di domande
//nuovo blocco 
const questions = [

			//nuovo blocco A_A3_Gestire_caso-rev

{question: "Qual è un compito dell’Assistente Amministrativo in prima posizione economica riguardo i fascicoli digitali dei dipendenti?", 
 answers: [
  { text: "Strutturare i fascicoli digitali, impostare la nomenclatura archivistica, redigere note di trasmissione e report", correct: true }, 
  { text: "Archiviare solo documenti cartacei", correct: false },
  { text: "Gestire esclusivamente i registri studenti", correct: false },
  { text: "Creare bilanci economici della scuola", correct: false }
 ]},

{question: "Cosa controlla l’Assistente Amministrativo in prima posizione economica tra SIDI e INPS?", 
 answers: [
  { text: "Le incoerenze tra le banche dati e collabora con il consulente previdenziale per la correzione", correct: true }, 
  { text: "La corrispondenza dei registri di classe", correct: false },
  { text: "L’allineamento dei libri contabili", correct: false },
  { text: "La gestione delle presenze giornaliere", correct: false }
 ]},

{question: "Che tipo di relazioni prepara l’Assistente Amministrativo in prima posizione economica?", 
 answers: [
  { text: "Relazioni riepilogative per il DSGA", correct: true }, 
  { text: "Relazioni sugli scrutini degli studenti", correct: false },
  { text: "Report di bilancio preventivo", correct: false },
  { text: "Circolari interne al personale docente", correct: false }
 ]},

{question: "Qual è la prima fase di attività dell’Assistente Amministrativo in seconda posizione economica?", 
 answers: [
  { text: "Analisi iniziale del fabbisogno informativo insieme a DSGA e responsabili di area, definendo obiettivi, priorità e criticità", correct: true }, 
  { text: "Progettazione del bilancio scolastico", correct: false },
  { text: "Archiviazione dei registri cartacei", correct: false },
  { text: "Supervisione delle presenze dei docenti", correct: false }
 ]},

{question: "Cosa prevede la fase di progettazione dell’archivio digitale per l’Assistente Amministrativo in seconda posizione economica?", 
 answers: [
  { text: "Impostare la struttura di archiviazione, definire metadati obbligatori e facoltativi per ogni tipo documentale", correct: true }, 
  { text: "Creare semplici cartelle sul desktop senza regole", correct: false },
  { text: "Archiviare documenti cartacei non classificati", correct: false },
  { text: "Redigere circolari interne per i docenti", correct: false }
 ]},

{question: "Come supporta i colleghi l’Assistente Amministrativo in seconda posizione economica?", 
 answers: [
  { text: "Redige guide pratiche e organizza micro-formazioni su SIDI, Passweb e conservazione documentale", correct: true }, 
  { text: "Svolge compiti dei docenti in aula", correct: false },
  { text: "Gestisce esclusivamente il registro elettronico degli studenti", correct: false },
  { text: "Archivia documenti senza fornire istruzioni", correct: false }
 ]},

{question: "Come monitora e aggiorna le pratiche l’Assistente Amministrativo in seconda posizione economica?", 
 answers: [
  { text: "Crea cruscotti Excel con formule e filtri, segnala anomalie e propone aggiornamenti procedurali", correct: true }, 
  { text: "Archivia solo documenti cartacei", correct: false },
  { text: "Aggiorna solo le graduatorie degli studenti", correct: false },
  { text: "Redige esclusivamente circolari interne", correct: false }
 ]},

{question: "Qual è il ruolo dell’Assistente Amministrativo in seconda posizione economica nella collaborazione interistituzionale?", 
 answers: [
  { text: "Dialogare con INPS, USR o Comune per verificare standard tecnici e aggiornamenti normativi/documentali", correct: true }, 
  { text: "Redigere esclusivamente bilanci della scuola", correct: false },
  { text: "Gestire solo registri cartacei interni", correct: false },
  { text: "Organizzare attività didattiche per gli studenti", correct: false }
 ]},
{question: "Qual è un compito dell’assistente amministrativo in prima posizione economica riguardo i fascicoli dei dipendenti?", 
 answers: [
  { text: "Comporre fascicoli digitali completi da trasmettere all’INPS", correct: true }, 
  { text: "Conservare esclusivamente fascicoli cartacei", correct: false },
  { text: "Gestire i fascicoli solo per gli studenti", correct: false },
  { text: "Redigere fascicoli finanziari della scuola", correct: false }
 ]},
{question: "Quale strumento utilizza l’assistente amministrativo in prima posizione economica per monitorare le pratiche?", 
 answers: [
  { text: "Tabelle Excel", correct: true }, 
  { text: "Moduli cartacei", correct: false },
  { text: "PEC", correct: false },
  { text: "Registro elettronico", correct: false }
 ]},
{question: "Quali documenti redige l’assistente amministrativo in prima posizione economica con file Word standardizzati?", 
 answers: [
  { text: "Modelli di servizio, relazioni di carriera e report di bonifica", correct: true }, 
  { text: "Circolari interne ai docenti", correct: false },
  { text: "Schede di valutazione degli studenti", correct: false },
  { text: "Bilanci preventivi e consuntivi", correct: false }
 ]},
{question: "Cosa deve verificare l’assistente amministrativo in prima posizione economica tra SIDI e Passweb?", 
 answers: [
  { text: "L’allineamento dei dati", correct: true }, 
  { text: "La gestione dei registri elettronici", correct: false },
  { text: "La compatibilità con il bilancio", correct: false },
  { text: "L’aggiornamento delle presenze", correct: false }
 ]},
{question: "Quali metadati deve gestire l’assistente amministrativo in prima posizione economica secondo il sistema documentale d’Istituto?", 
 answers: [
  { text: "Data, oggetto e classificazione", correct: true }, 
  { text: "Codice fiscale, IBAN e firma digitale", correct: false },
  { text: "Indirizzo e-mail e numero di telefono", correct: false },
  { text: "Numero di registro elettronico", correct: false }
 ]},
{question: "Qual è un compito dell’assistente amministrativo in seconda posizione economica riguardo i fabbisogni informativi?", 
 answers: [
  { text: "Valutare i fabbisogni informativi interni e contribuire alla progettazione di sistemi documentali interoperabili", correct: true }, 
  { text: "Elaborare i bilanci scolastici", correct: false },
  { text: "Gestire esclusivamente protocolli cartacei", correct: false },
  { text: "Supervisionare le presenze giornaliere", correct: false }
 ]},
{question: "Cosa deve elaborare l’assistente amministrativo in seconda posizione economica per la gestione dei fascicoli digitali?", 
 answers: [
  { text: "Modelli di archiviazione strutturata con metadati coerenti", correct: true }, 
  { text: "Semplici cartelle personali sul desktop", correct: false },
  { text: "Registri cartacei non classificati", correct: false },
  { text: "Schede di valutazione degli studenti", correct: false }
 ]},
{question: "Cosa fa l’assistente amministrativo in seconda posizione economica riguardo i flussi documentali?", 
 answers: [
  { text: "Mappa procedure (Passweb, ricostruzioni, cessazioni), individua criticità e propone soluzioni digitali", correct: true }, 
  { text: "Archivia esclusivamente documenti cartacei", correct: false },
  { text: "Registra solo le presenze del personale", correct: false },
  { text: "Autorizza ferie e permessi", correct: false }
 ]},
{question: "Come supporta i colleghi l’assistente amministrativo in seconda posizione economica?", 
 answers: [
  { text: "Redigendo linee guida operative o tutorial per ambienti complessi come SIDI, Passweb e conservazione digitale", correct: true }, 
  { text: "Svolgendo le mansioni dei docenti in classe", correct: false },
  { text: "Predisponendo circolari sugli orari scolastici", correct: false },
  { text: "Gestendo il registro elettronico degli studenti", correct: false }
 ]},
{question: "Quali strumenti avanzati utilizza l’assistente amministrativo in seconda posizione economica?", 
 answers: [
  { text: "Drive condivisi gerarchici, versioning, cruscotti Excel/Power BI, piattaforme di gestione flussi", correct: true }, 
  { text: "Solo fogli cartacei timbrati", correct: false },
  { text: "Unicamente email e PEC", correct: false },
  { text: "Registro cartaceo delle supplenze", correct: false }
 ]},
{question: "Qual è un ulteriore compito dell’assistente amministrativo in seconda posizione economica rispetto alla normativa?", 
 answers: [
  { text: "Mantenere aggiornata la documentazione su AgID, INPS e GDPR, adeguando le procedure", correct: true }, 
  { text: "Aggiornare solo le graduatorie degli studenti", correct: false },
  { text: "Supervisionare gli scrutini finali", correct: false },
  { text: "Redigere i bilanci della scuola", correct: false }
 ]},
{question: "Da quali fonti il personale amministrativo deve raccogliere i dati di carriera e i contratti?", 
   answers: [
    { text: "Dal SIDI e dai fascicoli cartacei", correct: true }, 
    { text: "Esclusivamente dal sito dell’INPS", correct: false },
    { text: "Solo dalle autocertificazioni dei dipendenti", correct: false },
    { text: "Unicamente dai registri di presenza", correct: false }
   ]},
{question: "Come devono essere denominati i dossier digitali relativi alla posizione assicurativa?", 
   answers: [
    { text: "POSIZIONE_ASSICURATIVA_NOMECOGNOME", correct: true }, 
    { text: "DOSSIER_DIPENDENTE_PROGRESSIVO", correct: false },
    { text: "ARCHIVIO_DATI_PERSONALI", correct: false },
    { text: "CONTRATTI_E_DOCUMENTI", correct: false }
   ]},
{question: "Quali attività specifiche svolge l’assistente amministrativo?", 
   answers: [
    { text: "Inserire dati in Passweb, compilare schede Word/Excel, protocollare documenti e archiviare informazioni nelle cartelle condivise", correct: true }, 
    { text: "Redigere contratti di lavoro e autorizzare ferie", correct: false },
    { text: "Controllare la presenza giornaliera del personale docente", correct: false },
    { text: "Gestire esclusivamente la corrispondenza con INPS e MEF", correct: false }
   ]},
{question: "Qual è il compito dell’assistente amministrativo in raccordo con DSGA e consulente INPS?", 
   answers: [
    { text: "Predisporre flussi ordinati, coesi e archiviabili digitalmente secondo standard", correct: true }, 
    { text: "Redigere esclusivamente i contratti di lavoro dei dipendenti", correct: false },
    { text: "Gestire soltanto la protocollazione cartacea dei documenti", correct: false },
    { text: "Supervisionare le presenze giornaliere dei dipendenti", correct: false }
   ]},
{question: "A quale Area del DigComp PA appartiene la problematica della digitalizzazione dei flussi documentali?", 
   answers: [
    { text: "Area 3 - Creazione di contenuti digitali", correct: true }, 
    { text: "Area 1 - Alfabetizzazione su informazioni e dati", correct: false },
    { text: "Area 2 - Comunicazione e collaborazione", correct: false },
    { text: "Area 5 - Risoluzione dei problemi", correct: false }
   ]},
{question: "Qual è la conseguenza della mancata digitalizzazione secondo standard dei flussi documentali?", 
   answers: [
    { text: "Si producono scarti informativi e richieste di rettifica", correct: true }, 
    { text: "Si garantisce automaticamente l’integrità dei dati", correct: false },
    { text: "Si riduce il carico di lavoro amministrativo", correct: false },
    { text: "Si velocizza il processo di protocollazione cartacea", correct: false }
   ]},
{question: "Qual è il compito delle scuole in relazione agli stati matricolari digitali?", 
   answers: [
    { text: "Recuperare e ordinare informazioni da contratti, decreti e comunicazioni SIDI rispettando le regole di fascicolazione, registrazione e versamento", correct: true }, 
    { text: "Gestire solo la corrispondenza cartacea con l’INPS", correct: false },
    { text: "Redigere autonomamente i contratti senza riferimento al SIDI", correct: false },
    { text: "Archiviare documenti senza criteri di registrazione e fascicolazione", correct: false }
   ]},
{question: "Qual è il compito dell’assistente amministrativo dell’area personale nell’utilizzo di Passweb?", 
   answers: [
    { text: "Gestire le informazioni sulla posizione assicurativa dei dipendenti garantendo autenticità, integrità e tracciabilità dei documenti", correct: true }, 
    { text: "Redigere manualmente le buste paga dei dipendenti", correct: false },
    { text: "Controllare le presenze giornaliere e autorizzare i permessi", correct: false },
    { text: "Gestire esclusivamente la corrispondenza con l’INPS senza archiviare documenti", correct: false }
   ]},

				//nuovo blocco A_A3_Gestire_slide

{question: "A cosa serve il formato JSON?", answers: [
{ text: "Per lo scambio di dati tra applicazioni web in modo leggibile da macchina", correct: true },
{ text: "Per creare documenti di testo", correct: false },
{ text: "Per gestire basi di dati relazionali", correct: false },
{ text: "Per comprimere file multimediali", correct: false }
]},
{question: "Quali sono le caratteristiche principali di JSON?", answers: [
{ text: "Leggero, flessibile e molto usato nelle API", correct: true },
{ text: "Gerarchico, complesso e poco usato", correct: false },
{ text: "Solo testuale, non leggibile da macchine", correct: false },
{ text: "Standard per la crittografia dei dati", correct: false }
]},
{question: "Qual è un esempio di utilizzo di JSON nella PA?", answers: [
{ text: "Risposta automatica di un servizio digitale come verifica codice fiscale o stato fascicolo SIDI", correct: true },
{ text: "Pubblicazione di bandi su carta", correct: false },
{ text: "Gestione manuale dell’albo pretorio", correct: false },
{ text: "Creazione di documenti PDF", correct: false }
]},
{question: "A cosa serve il formato RDF?", answers: [
{ text: "Per descrivere risorse e relazioni tra dati nel web semantico", correct: true },
{ text: "Per creare fogli di calcolo", correct: false },
{ text: "Per inviare email sicure", correct: false },
{ text: "Per comprimere file multimediali", correct: false }
]},
{question: "Quali sono le caratteristiche principali di RDF?", answers: [
{ text: "Supporta la rappresentazione di significato (metadati) ed è usato nei dati aperti della PA", correct: true },
{ text: "Formato testuale semplice senza metadati", correct: false },
{ text: "Solo per uso interno, non aperto", correct: false },
{ text: "Leggero e adatto a scambio dati tra API", correct: false }
]},
{question: "Qual è un esempio di utilizzo di RDF nella PA?", answers: [
{ text: "Pubblicazione dei metadati relativi all’albo pretorio o a bandi pubblici", correct: true },
{ text: "Risposta automatica di un servizio digitale", correct: false },
{ text: "Creazione di PDF per circolari", correct: false },
{ text: "Invio di email interne", correct: false }
]},
{question: "Che cos'è Atom?", answers: [
{ text: "Un formato basato su XML per la distribuzione di contenuti aggiornabili", correct: true },
{ text: "Un linguaggio di programmazione", correct: false },
{ text: "Un database relazionale", correct: false },
{ text: "Un software per l'archiviazione dei documenti", correct: false }
]},
{question: "A cosa serve il formato Atom?", answers: [
{ text: "Per distribuire feed aggiornabili come articoli, circolari o notizie", correct: true },
{ text: "Per creare fogli di calcolo", correct: false },
{ text: "Per comprimere immagini digitali", correct: false },
{ text: "Per crittografare email", correct: false }
]},
{question: "Qual è la differenza principale tra Atom e RSS?", answers: [
{ text: "Atom è più moderno e standardizzato rispetto a RSS", correct: true },
{ text: "RSS è basato su XML, Atom no", correct: false },
{ text: "Atom non può distribuire notizie, RSS sì", correct: false },
{ text: "RSS supporta solo immagini, Atom solo testo", correct: false }
]},
{question: "Cosa significa ATOM nell'acronimo Atom Syndication Format?", answers: [
{ text: "È il nome dello standard definito dalla RFC 4287", correct: true },
{ text: "È un software di gestione dati", correct: false },
{ text: "È un tipo di database", correct: false },
{ text: "È un linguaggio di markup proprietario", correct: false }
]},
{question: "Qual è la caratteristica principale del formato XML?", answers: [
{ text: "È aperto, strutturato, gerarchico e leggibile da umani e macchine", correct: true },
{ text: "Memorizza dati tabellari separati da virgole", correct: false },
{ text: "È un formato chiuso e proprietario", correct: false },
{ text: "Serve solo per documenti di testo", correct: false }
]},
{question: "Per quali servizi digitali pubblici è fondamentale il formato XML?", answers: [
{ text: "SIDI e PagoPA", correct: true },
{ text: "Excel e Word", correct: false },
{ text: "PDF e JPEG", correct: false },
{ text: "Google Docs e Drive", correct: false }
]},
{question: "Qual è la caratteristica principale del formato CSV?", answers: [
{ text: "Memorizza dati tabellari separati da virgole o punto e virgola", correct: true },
{ text: "È strutturato e gerarchico come XML", correct: false },
{ text: "Non può essere letto da fogli di calcolo", correct: false },
{ text: "È usato solo per immagini", correct: false }
]},
{question: "Perché il CSV è adatto alla pubblicazione di open data?", answers: [
{ text: "Perché è leggibile da qualsiasi editor di testo o foglio di calcolo", correct: true },
{ text: "Perché è un formato proprietario", correct: false },
{ text: "Perché è gerarchico e complesso", correct: false },
{ text: "Perché richiede software specializzati per leggerlo", correct: false }
]},
{question: "Qual è lo scopo principale delle linee guida sulla gestione dei documenti informatici?", answers: [
{ text: "Aggiornare le regole tecniche e unificare le norme in materia", correct: true },
{ text: "Creare documenti cartacei per l’archivio scolastico", correct: false },
{ text: "Limitare l’accesso ai documenti digitali agli amministratori", correct: false },
{ text: "Stampare tutti i dati del registro elettronico", correct: false }
]},
{question: "Quale articolo del CAD viene citato nelle linee guida?", answers: [
{ text: "Art. 71", correct: true },
{ text: "Art. 21", correct: false },
{ text: "Art. 15", correct: false },
{ text: "Art. 50", correct: false }
]},
{question: "Quali vantaggi portano le linee guida alla scuola o alla PA?", answers: [
{ text: "Trasparenza, interoperabilità, automazione e accessibilità", correct: true },
{ text: "Solo la stampa dei documenti", correct: false },
{ text: "Accesso limitato ai documenti digitali", correct: false },
{ text: "Creazione di documenti cartacei standard", correct: false }
]},
{question: "Cosa si intende per interoperabilità secondo le linee guida?", answers: [
{ text: "Compatibilità con altri sistemi informatici", correct: true },
{ text: "Accesso manuale obbligatorio ai dati", correct: false },
{ text: "Pubblicazione esclusiva in formato PDF", correct: false },
{ text: "Sottoscrizione di feed solo dagli amministratori", correct: false }
]},
{question: "Cosa sono i metadati?", answers: [
{ text: "Dati che descrivono altri dati", correct: true },
{ text: "Dati grezzi senza contesto", correct: false },
{ text: "Informazioni riservate agli amministratori", correct: false },
{ text: "Documenti cartacei archiviati in segreteria", correct: false }
]},
{question: "Qual è la funzione principale dei metadati?", answers: [
{ text: "Contestualizzare, comprendere, cercare e riutilizzare i dati", correct: true },
{ text: "Proteggere i dati da accessi esterni", correct: false },
{ text: "Stampare documenti", correct: false },
{ text: "Archiviare dati senza indicazioni", correct: false }
]},
{question: "Quali informazioni rispondono alle domande principali dei metadati?", answers: [
{ text: "Cosa contiene, chi l’ha prodotto, quando, con quale formato", correct: true },
{ text: "Solo il formato del file", correct: false },
{ text: "Solo l’autore del documento", correct: false },
{ text: "Solo la data di aggiornamento", correct: false }
]},
{question: "Quale di questi è un esempio di metadati per un dataset scolastico?", answers: [
{ text: "Titolo: 'Iscrizioni scolastiche 2024', Autore: MIUR, Data aggiornamento: 01/07/2024, Formato: CSV, Licenza: CC-BY 4.0", correct: true },
{ text: "Elenco degli studenti iscritti senza altre informazioni", correct: false },
{ text: "Verbale cartaceo del consiglio di istituto", correct: false },
{ text: "Orario delle lezioni stampato in bacheca", correct: false }
]},
{question: "Cosa sono gli open data?", answers: [
{ text: "Informazioni accessibili a tutti, liberamente utilizzabili e riutilizzabili senza restrizioni di copyright", correct: true },
{ text: "Dati riservati alle amministrazioni pubbliche", correct: false },
{ text: "Documenti cartacei archiviati in segreteria", correct: false },
{ text: "Informazioni disponibili solo dietro richiesta ufficiale", correct: false }
]},
{question: "Qual è una caratteristica principale degli open data?", answers: [
{ text: "Accessibilità senza bisogno di autorizzazioni", correct: true },
{ text: "Sono sempre in formato PDF non modificabile", correct: false },
{ text: "Non hanno licenza chiara", correct: false },
{ text: "Non possono essere riutilizzati", correct: false }
]},
{question: "Quali formati sono considerati aperti per gli open data?", answers: [
{ text: "CSV, JSON, RDF", correct: true },
{ text: "DOCX e JPG", correct: false },
{ text: "PDF proprietari e ZIP criptati", correct: false },
{ text: "Solo formati cartacei digitalizzati", correct: false }
]},
{question: "A cosa servono gli open data?", answers: [
{ text: "Trasparenza, supporto alle decisioni, innovazione e controllo civico", correct: true },
{ text: "Solo alla stampa di documenti", correct: false },
{ text: "Solo per archiviazione interna della PA", correct: false },
{ text: "Per restringere l’accesso ai dati agli esperti", correct: false }
]},
{question: "Qual è un esempio di riutilizzo degli open data in ambito scolastico?", answers: [
{ text: "Sviluppare app, visualizzazioni, studi e progetti educativi", correct: true },
{ text: "Stampare liste di iscritti su carta", correct: false },
{ text: "Archiviarli senza condivisione", correct: false },
{ text: "Bloccare l’accesso ai genitori", correct: false }
]},
{question: "Cosa è un dato?", answers: [
{ text: "Rappresentazione originaria di un fenomeno, evento o fatto", correct: true },
{ text: "Messaggio che aumenta di valore quando correlato ad altri elementi", correct: false },
{ text: "Informazione elaborata e memorizzata", correct: false },
{ text: "Sintesi di più informazioni", correct: false }
]},
{question: "Cosa distingue un'informazione da un dato?", answers: [
{ text: "L'informazione può essere misurata, memorizzata e resa disponibile nel tempo", correct: true },
{ text: "Il dato è sempre numerico", correct: false },
{ text: "Il dato è già correlato con altri elementi per aumentare il valore", correct: false },
{ text: "L'informazione non può essere condivisa", correct: false }
]},
{question: "Cosa aumenta il valore di un'informazione?", answers: [
{ text: "Quando viene correlata ad altri elementi che la arricchiscono", correct: true },
{ text: "Quando è isolata dal contesto", correct: false },
{ text: "Quando non è memorizzata", correct: false },
{ text: "Quando è solo numerica o testuale", correct: false }
]},
{question: "Quale affermazione sui dati è corretta?", answers: [
{ text: "Senza contesto un dato non è interpretabile", correct: true },
{ text: "Un dato è sempre un messaggio completo e disponibile", correct: false },
{ text: "I dati non possono essere numerici o testuali", correct: false },
{ text: "I dati aumentano automaticamente di valore", correct: false }
]},
{question: "Quali tipi di dati possono esistere?", answers: [
{ text: "Testuali, numerici, immagini, suoni", correct: true },
{ text: "Solo numerici", correct: false },
{ text: "Solo testuali e numerici", correct: false },
{ text: "Solo immagini e suoni", correct: false }
]},

{question: "Cosa fa un Assistente Amministrativo in ambito digitale scolastico?", answers: [
{ text: "Recupera e archivia dati seguendo procedure standard tramite protocollo o software gestionali", correct: true },
{ text: "Valuta i fabbisogni informativi dell’ufficio", correct: false },
{ text: "Supporta i colleghi nella ricerca documentale e filtra informazioni", correct: false },
{ text: "Personalizza strategie di raccolta dei dati", correct: false }
]},
{question: "Qual è il compito principale di chi è in Prima Posizione Economica?", answers: [
{ text: "Supporta colleghi nella ricerca documentale, filtra informazioni per fabbisogni specifici e utilizza modelli per organizzarle", correct: true },
{ text: "Recupera e archivia dati tramite procedure standard", correct: false },
{ text: "Valuta i fabbisogni informativi e guida colleghi nell’accesso a banche dati interne", correct: false },
{ text: "Gestisce esclusivamente il protocollo cartaceo", correct: false }
]},
{question: "Cosa distingue chi è in Seconda Posizione Economica nel contesto scolastico digitale?", answers: [
{ text: "Valuta i fabbisogni informativi dell’ufficio, personalizza strategie di raccolta e guida colleghi nell’uso di banche dati interne", correct: true },
{ text: "Recupera dati seguendo procedure standard", correct: false },
{ text: "Filtra informazioni per fabbisogni specifici senza guidare colleghi", correct: false },
{ text: "Gestisce solo attività cartacee", correct: false }
]},
{question: "Quale livello si occupa principalmente di supportare colleghi e filtrare informazioni in base a fabbisogni specifici?", answers: [
{ text: "Prima Posizione Economica", correct: true },
{ text: "Assistente Amministrativo", correct: false },
{ text: "Seconda Posizione Economica", correct: false },
{ text: "Dirigente Scolastico", correct: false }
]},
{question: "Chi personalizza le strategie di raccolta e gestione dei dati in ambienti digitali?", answers: [
{ text: "Seconda Posizione Economica", correct: true },
{ text: "Prima Posizione Economica", correct: false },
{ text: "Assistente Amministrativo", correct: false },
{ text: "Collaboratore scolastico", correct: false }
]},
			//nuovo bloccoA_A3_Gestire_glossario

{question: "Cos’è un dato aperto (Open Data)?", answers: [
{ text: "Un’informazione digitale pubblicata in formato aperto, liberamente accessibile e riutilizzabile", correct: true },
{ text: "Un dato riservato alle PA", correct: false },
{ text: "Un documento cartaceo scansionato", correct: false },
{ text: "Un formato proprietario", correct: false }
]},
{question: "Quale tra questi è un esempio scolastico di Open Data?", answers: [
{ text: "Tabelle con numero di iscritti pubblicate in formato CSV", correct: true },
{ text: "Verbale del collegio docenti in PDF protetto", correct: false },
{ text: "Circolare interna in formato DOCX", correct: false },
{ text: "Registro di classe cartaceo", correct: false }
]},
{question: "Cos’è un formato aperto?", answers: [
{ text: "Formato leggibile da software liberi senza restrizioni di licenza", correct: true },
{ text: "Formato leggibile solo con software proprietari", correct: false },
{ text: "Formato usato solo per i dati sensibili", correct: false },
{ text: "Formato compresso", correct: false }
]},
{question: "Quale tra questi è un esempio di formato aperto?", answers: [
{ text: "ODT", correct: true },
{ text: "DOCX", correct: false },
{ text: "PSD", correct: false },
{ text: "PPTX", correct: false }
]},
{question: "Cosa si intende per interoperabilità?", answers: [
{ text: "La capacità dei sistemi digitali di dialogare e condividere informazioni in modo automatico e sicuro", correct: true },
{ text: "La possibilità di aprire un file su più sistemi operativi", correct: false },
{ text: "La condivisione di documenti tramite email", correct: false },
{ text: "L’uso di una stampante di rete", correct: false }
]},
{question: "Cos’è un metadato?", answers: [
{ text: "Informazione strutturata che descrive altri dati", correct: true },
{ text: "Il formato di compressione di un file", correct: false },
{ text: "Il codice di accesso a un database", correct: false },
{ text: "Una copia di backup", correct: false }
]},
{question: "A cosa serve un catalogo dei dati (Data Catalog)?", answers: [
{ text: "A elencare i dataset disponibili presso un’amministrazione", correct: true },
{ text: "A memorizzare le password di sistema", correct: false },
{ text: "A convertire i formati dei file", correct: false },
{ text: "A organizzare le riunioni", correct: false }
]},
{question: "Cosa si intende per riusabilità dei dati?", answers: [
{ text: "Capacità di un dato di essere riutilizzato, combinato o analizzato per nuove finalità", correct: true },
{ text: "La possibilità di eliminare un dato", correct: false },
{ text: "La trasformazione di dati cartacei in digitali", correct: false },
{ text: "L’archiviazione in cloud", correct: false }
]},
{question: "Cos’è un sistema informativo scolastico?", answers: [
{ text: "Insieme di banche dati e applicazioni usate dalla scuola", correct: true },
{ text: "Un manuale per i docenti", correct: false },
{ text: "Un archivio cartaceo", correct: false },
{ text: "Una newsletter scolastica", correct: false }
]},
{question: "Cosa significa trasparenza by design?", answers: [
{ text: "Impostare la gestione documentale per garantire trasparenza fin dall’inizio", correct: true },
{ text: "Pubblicare tutti i documenti sul sito senza filtri", correct: false },
{ text: "Usare solo software open source", correct: false },
{ text: "Rendere pubblici i dati personali degli studenti", correct: false }
]},
{question: "Cos’è un sistema di pubblicazione automatica?", answers: [
{ text: "Un meccanismo che pubblica automaticamente documenti dal software interno al sito", correct: true },
{ text: "Un social network scolastico", correct: false },
{ text: "Un programma di traduzione automatica", correct: false },
{ text: "Un software per creare PDF", correct: false }
]},
{question: "A cosa servono gli standard AGID come DCAT-AP_IT?", answers: [
{ text: "A descrivere i dataset aperti nei cataloghi pubblici", correct: true },
{ text: "A crittografare i dati scolastici", correct: false },
{ text: "A creare grafici e statistiche", correct: false },
{ text: "A formattare i documenti in PDF", correct: false }
]},

			//nuovo blocco A_A3_Condividere_slide

{question: "Cosa introduce il DPR 13 giugno 2023, n. 81?", answers: [
{ text: "Il nuovo codice di comportamento dei dipendenti pubblici", correct: true },
{ text: "Il regolamento sugli appalti pubblici", correct: false },
{ text: "Le norme sulla sicurezza informatica europea", correct: false },
{ text: "Il bilancio dello Stato", correct: false }
]},
{question: "Cosa disciplina l’articolo 11-bis del DPR 81/2023?", answers: [
{ text: "L’utilizzo delle tecnologie informatiche", correct: true },
{ text: "La gestione delle ferie dei dipendenti", correct: false },
{ text: "L’accesso agli atti amministrativi", correct: false },
{ text: "L’organizzazione delle riunioni", correct: false }
]},
{question: "Cosa disciplina l’articolo 11-ter del DPR 81/2023?", answers: [
{ text: "L’utilizzo dei mezzi di informazione e dei social media", correct: true },
{ text: "La gestione del protocollo informatico", correct: false },
{ text: "Le procedure di gara telematica", correct: false },
{ text: "L’archiviazione cartacea", correct: false }
]},
{question: "Cos’è il Codice dell’Amministrazione Digitale (CAD)?", answers: [
{ text: "Il testo unico che riunisce e organizza le norme sull’informatizzazione della PA nei rapporti con cittadini e imprese", correct: true },
{ text: "Il regolamento europeo sulla protezione dei dati", correct: false },
{ text: "Il manuale per l’uso dei software ministeriali", correct: false },
{ text: "Il codice penale per i reati informatici", correct: false }
]},
{question: "Quando è stato emanato il CAD?", answers: [
{ text: "Il 7 marzo 2005", correct: true },
{ text: "Il 13 giugno 2023", correct: false },
{ text: "Il 1 gennaio 2010", correct: false },
{ text: "Il 25 maggio 2018", correct: false }
]},
{question: "Che cos’è il Syllabus nella pubblica amministrazione?", answers: [
{ text: "Il documento che descrive il minimo delle conoscenze e abilità digitali richieste a ogni dipendente pubblico non specialista IT", correct: true },
{ text: "Un manuale di istruzioni per software gestionali", correct: false },
{ text: "Un registro delle presenze dei dipendenti", correct: false },
{ text: "Un elenco di leggi e decreti", correct: false }
]},
{question: "A chi è rivolto il Syllabus?", answers: [
{ text: "Ai dipendenti pubblici non specialisti IT", correct: true },
{ text: "Solo ai dirigenti della PA", correct: false },
{ text: "Agli studenti universitari", correct: false },
{ text: "Agli sviluppatori di software per la PA", correct: false }
]},
{question: "Qual è uno degli obiettivi del Syllabus?", answers: [
{ text: "Permettere l’autoverifica delle competenze digitali", correct: true },
{ text: "Definire il bilancio annuale dell’amministrazione", correct: false },
{ text: "Fornire linee guida per la privacy", correct: false },
{ text: "Creare un registro elettronico per la scuola", correct: false }
]},
{question: "Il Syllabus può essere utilizzato anche per:", answers: [
{ text: "Definire corsi di formazione sui fabbisogni rilevati", correct: true },
{ text: "Sostituire i manuali tecnici", correct: false },
{ text: "Elaborare bandi di gara", correct: false },
{ text: "Approvare delibere interne", correct: false }
]},
{question: "Qual è l’obiettivo generale del Syllabus?", answers: [
{ text: "Rendere i dipendenti pubblici capaci di operare in modo sicuro, consapevole, collaborativo e orientato al risultato nella PA digitale", correct: true },
{ text: "Insegnare a programmare in linguaggi IT complessi", correct: false },
{ text: "Gestire la contabilità delle amministrazioni", correct: false },
{ text: "Aumentare il numero di server nelle sedi pubbliche", correct: false }
]},
			//nuovo blocco A_A3_Condividere_glossario

{question: "Che cos'è l'Albo on-line in un'istituzione scolastica?", answers: [
{ text: "È il luogo digitale dove vengono pubblicati atti e provvedimenti adottati dall'Istituzione Scolastica, in sostituzione dell'Albo pretorio fisico", correct: true },
{ text: "È la sezione del sito scolastico dedicata alla trasparenza amministrativa", correct: false },
{ text: "È un archivio interno riservato alla segreteria didattica", correct: false },
{ text: "È un registro elettronico degli studenti", correct: false }
]},
{question: "Quale legge ha introdotto l'obbligo dell'Albo on-line?", answers: [
{ text: "Legge 69/2009", correct: true },
{ text: "D.lgs. 33/2013", correct: false },
{ text: "GDPR 2016/679", correct: false },
{ text: "Legge 104/1992", correct: false }
]},
{question: "Che cos'è la sezione Amministrazione Trasparente?", answers: [
{ text: "Una sezione obbligatoria dei siti delle PA con informazioni sulle attività dell'amministrazione", correct: true },
{ text: "Un registro elettronico riservato agli organi collegiali", correct: false },
{ text: "Un archivio interno per atti e delibere scolastiche", correct: false },
{ text: "Un portale dedicato alla gestione dei dati personali", correct: false }
]},
{question: "Quale decreto regola i contenuti e la struttura dell'Amministrazione Trasparente?", answers: [
{ text: "D.lgs. 14 marzo 2013, n. 33", correct: true },
{ text: "Legge 69/2009", correct: false },
{ text: "GDPR 2016/679", correct: false },
{ text: "D.lgs. 81/2008", correct: false }
]},
{question: "Cosa si intende per dato personale?", answers: [
{ text: "Informazioni che identificano o rendono identificabile, direttamente o indirettamente, una persona fisica", correct: true },
{ text: "Solo nome e cognome della persona", correct: false },
{ text: "Informazioni relative esclusivamente alla salute", correct: false },
{ text: "Informazioni anonime senza alcun legame con un individuo", correct: false }
]},
{question: "Chi è il DPO in una scuola?", answers: [
{ text: "Il consulente in materia di privacy nominato obbligatoriamente in ogni istituto scolastico", correct: true },
{ text: "Il dirigente scolastico", correct: false },
{ text: "Il responsabile di laboratorio", correct: false },
{ text: "Il rappresentante dei genitori", correct: false }
]},
{question: "In quale anno è entrata in vigore la normativa europea GDPR?", answers: [
{ text: "2018", correct: true },
{ text: "2016", correct: false },
{ text: "2020", correct: false },
{ text: "2013", correct: false }
]},
{question: "Chi è l'incaricato del trattamento dei dati personali nella scuola?", answers: [
{ text: "Una persona fisica autorizzata dal titolare a compiere operazioni sui dati personali", correct: true },
{ text: "Un organo collegiale scolastico", correct: false },
{ text: "Un soggetto esterno che fornisce servizi IT", correct: false },
{ text: "Un ispettore ministeriale", correct: false }
]},
{question: "Chi è l'interessato ai sensi del GDPR?", answers: [
{ text: "La persona fisica a cui si riferiscono i dati personali", correct: true },
{ text: "Il dirigente scolastico", correct: false },
{ text: "Il DPO", correct: false },
{ text: "L'incaricato del trattamento", correct: false }
]},
{question: "Cosa sono gli organi collegiali della scuola?", answers: [
{ text: "Organismi di partecipazione democratica che coinvolgono diverse componenti della comunità scolastica", correct: true },
{ text: "Uffici amministrativi interni alla scuola", correct: false },
{ text: "Gruppi di lavoro temporanei per progetti specifici", correct: false },
{ text: "Associazioni di ex studenti", correct: false }
]},
{question: "Come si esprime la volontà del Collegio dei Docenti e del Consiglio d'Istituto?", answers: [
{ text: "Attraverso delibere", correct: true },
{ text: "Attraverso note interne", correct: false },
{ text: "Attraverso circolari ministeriali", correct: false },
{ text: "Attraverso comunicazioni informali", correct: false }
]},
{question: "Cosa si intende per trattamento di dati personali?", answers: [
{ text: "Qualsiasi operazione compiuta su dati personali, con o senza mezzi automatizzati", correct: true },
{ text: "Solo la raccolta dei dati", correct: false },
{ text: "Solo la cancellazione dei dati", correct: false },
{ text: "Solo la conservazione dei dati", correct: false }
]},
{question: "Quali misure devono adottare i soggetti che trattano dati personali altrui?", answers: [
{ text: "Misure particolari per garantirne il corretto e sicuro utilizzo", correct: true },
{ text: "La pubblicazione dei dati sul sito web", correct: false },
{ text: "L'accesso libero ai dati per tutti gli utenti", correct: false },
{ text: "La conservazione illimitata dei dati", correct: false }
]},

				// Prima posizione economica - Fase 1, 2, 3

{question: "Qual è il primo passo nell'analisi preliminare di un file Excel PCTO ricevuto dalla segreteria didattica?", answers: [
  {text: "Aprire il file Excel e individuare errori generici come celle vuote o formati errati", correct: true},
  {text: "Inviare subito il file senza verificarlo", correct: false},
  {text: "Stampare il file per archiviarlo", correct: false},
  {text: "Cancellare tutte le celle con errori senza segnalarle", correct: false}
]},
{question: "Come si evidenziano errori o dati mancanti in un file Excel durante la verifica?", answers: [
  {text: "Utilizzando colori o commenti manualmente sulle celle interessate", correct: true},
  {text: "Nascondendo le righe con errori", correct: false},
  {text: "Eliminando i dati sbagliati senza segnalarli", correct: false},
  {text: "Ignorando gli errori", correct: false}
]},
{question: "Durante la verifica dei link e recapiti nel file PCTO, cosa bisogna fare?", answers: [
  {text: "Cliccare sui link, annotare se funzionano e se si riferiscono ad aziende reali o pagine inattive", correct: true},
  {text: "Eliminare i link non funzionanti senza segnalarli", correct: false},
  {text: "Modificare i link senza comunicare le modifiche", correct: false},
  {text: "Lasciare i link così come sono", correct: false}
]},
{question: "Qual è il modo corretto per segnalare problemi trovati nel file Excel PCTO?", answers: [
  {text: "Inserire le segnalazioni nella colonna “Note” del file", correct: true},
  {text: "Inviare un messaggio vocal senza allegare il file", correct: false},
  {text: "Rimuovere i dati problematici senza spiegazioni", correct: false},
  {text: "Stampare il file e consegnarlo senza indicazioni", correct: false}
]},
{question: "Quali sono le azioni finali dopo aver completato la verifica del file PCTO?", answers: [
  {text: "Salvare il file corretto con nome rinominato e inviarlo via email alla segreteria didattica", correct: true},
  {text: "Non salvare il file e mandare solo una email senza allegati", correct: false},
  {text: "Stampare il file e lasciarlo sulla scrivania", correct: false},
  {text: "Inviarlo a un collega senza segnalarlo alla segreteria", correct: false}
]},

				// Seconda posizione economica - Fase 1, 2, 3

{question: "Come va organizzato il file Excel per il controllo approfondito dei dati PCTO?", answers: [
  {text: "Ordinando i dati per tipologia, ad esempio per azienda o studente", correct: true},
  {text: "Lasciando i dati disordinati", correct: false},
  {text: "Cancellando i dati duplicati senza controlli", correct: false},
  {text: "Stampando il file senza modificarlo", correct: false}
]},
{question: "Quali verifiche sono fondamentali per controllare la coerenza dei dati in un file PCTO?", answers: [
  {text: "Verificare orari sovrapposti e nomi duplicati", correct: true},
  {text: "Verificare solo i nomi degli studenti", correct: false},
  {text: "Controllare solo i numeri di telefono", correct: false},
  {text: "Non effettuare alcun controllo", correct: false}
]},
{question: "Quali strumenti online possono essere usati per verificare l’esistenza e attività delle aziende?", answers: [
  {text: "Iscrizione camera di commercio, visure camerali, siti web e contatti aziendali", correct: true},
  {text: "Solo social media aziendali", correct: false},
  {text: "Solo il sito web aziendale senza ulteriori verifiche", correct: false},
  {text: "Non usare strumenti online", correct: false}
]},
{question: "Come si valuta l’affidabilità di un dominio web aziendale?", answers: [
  {text: "Controllando l’autenticità dei domini (.gov, .edu, .org) e utilizzando WHOIS per verificare il registrante", correct: true},
  {text: "Valutando solo il design del sito", correct: false},
  {text: "Affidandosi solo all’indirizzo email", correct: false},
  {text: "Non effettuando alcuna verifica", correct: false}
]},
{question: "Come si può assegnare un punteggio interno di attendibilità alle fonti?", answers: [
  {text: "Valutando criteri come autenticità, completezza e aggiornamento, con punteggio da 1 a 5", correct: true},
  {text: "Assegnando punteggi casuali senza criteri", correct: false},
  {text: "Non assegnando alcun punteggio", correct: false},
  {text: "Assegnando sempre punteggio massimo", correct: false}
]},
{question: "Cosa deve contenere il report finale redatto dall’assistente amministrativo?", answers: [
  {text: "Le criticità riscontrate, proposte di aggiornamento procedure e documentazione archiviata in Drive condiviso", correct: true},
  {text: "Solo l’elenco delle aziende", correct: false},
  {text: "Solo le email ricevute", correct: false},
  {text: "Nessun documento, solo comunicazioni orali", correct: false}
]},
{question: "Qual è la corretta procedura dopo aver redatto il report finale sulle verifiche PCTO?", answers: [
  {text: "Inviare il report al referente PCTO, proporre aggiornamenti e archiviare la documentazione", correct: true},
  {text: "Tenere il report per sé senza condividerlo", correct: false},
  {text: "Eliminare il report dopo qualche giorno", correct: false},
  {text: "Non inviare alcun report", correct: false}
]},

					// Prima posizione economica

{question: "Quali dati permettono di valutare se una fonte digitale aziendale è attendibile?", answers: [
  {text: "Estensione dominio (.gov, .edu, .org), contatti verificabili, autorevolezza contenuto e confronto con banche dati autorevoli", correct: true},
  {text: "Solo la presenza del logo aziendale", correct: false},
  {text: "L’aspetto grafico del sito web", correct: false},
  {text: "Il numero di like sui social media", correct: false}
]},
{question: "Come si può segnalare un’anomalia in un documento caricato da un’azienda partner nel portale PCTO?", answers: [
  {text: "Inviando una segnalazione via email all’ufficio PCTO con il file evidenziato", correct: true},
  {text: "Ignorando l’anomalia e procedendo", correct: false},
  {text: "Modificando direttamente il file senza informare nessuno", correct: false},
  {text: "Cancellando il documento", correct: false}
]},
{question: "In che modo si può contribuire a migliorare la qualità dei dati caricati nei sistemi digitali scolastici?", answers: [
  {text: "Controllando la coerenza dei dati, standardizzando formati e adottando etichette comuni", correct: true},
  {text: "Inserendo dati casuali per riempire i campi vuoti", correct: false},
  {text: "Lasciando i dati così come sono ricevuti", correct: false},
  {text: "Bloccare l’accesso ai dati esterni", correct: false}
]},


					// Seconda posizione economica

{question: "Come può essere strutturata una verifica sistematica dell’affidabilità dei contenuti digitali ricevuti da aziende esterne?", answers: [
  {text: "Progettando una checklist digitale condivisa con criteri di verifica, strumenti e responsabilità assegnate", correct: true},
  {text: "Facendo una verifica a caso quando possibile", correct: false},
  {text: "Affidando il controllo a una sola persona senza strumenti", correct: false},
  {text: "Non effettuando alcuna verifica", correct: false}
]},
{question: "Come l’analisi critica dei dati può influenzare le decisioni organizzative nell’ambito PCTO?", answers: [
  {text: "Permette di evitare convenzioni non sicure, tutelare gli studenti e programmare attività formative mirate", correct: true},
  {text: "Non ha alcun impatto sulle decisioni", correct: false},
  {text: "Serve solo a criticare i colleghi", correct: false},
  {text: "Ritarda inutilmente i processi", correct: false}
]},
{question: "Quali strumenti digitali possono essere usati per collaborare efficacemente con il team nella valutazione e revisione dei dati?", answers: [
  {text: "Google Sheets, strumenti online per analisi domini come Whois, Google Drive per archiviazione condivisa", correct: true},
  {text: "Solo posta cartacea e telefono", correct: false},
  {text: "App di messaggistica senza documentazione", correct: false},
  {text: "Solo software proprietari non condivisi", correct: false}
]},				

{question: "Qual è il compito dell’assistente amministrativo riguardo la documentazione digitale ricevuta da aziende esterne per il PCTO?", answers: [
  {text: "Verificare l’attendibilità, segnalare criticità e contribuire a definire procedure standard di controllo", correct: true},
  {text: "Archiviare semplicemente la documentazione senza controlli", correct: false},
  {text: "Condividere la documentazione con studenti senza verifiche", correct: false},
  {text: "Eliminare tutta la documentazione senza analisi", correct: false}
]},
{question: "Qual è uno degli obiettivi formativi principali relativi alla gestione dei dati e contenuti digitali?", answers: [
  {text: "Analizzare criticamente dati e contenuti provenienti da fonti esterne", correct: true},
  {text: "Condividere immediatamente tutte le informazioni ricevute", correct: false},
  {text: "Ignorare le fonti e accettare i dati come veritieri", correct: false},
  {text: "Non partecipare alle procedure digitali", correct: false}
]},
{question: "Cosa deve fare l’assistente amministrativo per garantire l’affidabilità delle informazioni gestite?", answers: [
  {text: "Collaborare all’adozione di procedure digitali condivise", correct: true},
  {text: "Usare solo documenti cartacei", correct: false},
  {text: "Delegare completamente il controllo ad altri uffici", correct: false},
  {text: "Ignorare le criticità rilevate", correct: false}
]},
{question: "Come si riconoscono contenuti non sicuri o parziali?", answers: [
  {text: "Verificando l’attendibilità delle fonti", correct: true},
  {text: "Accettando tutti i contenuti senza verifica", correct: false},
  {text: "Eliminando tutti i contenuti provenienti da fonti esterne", correct: false},
  {text: "Confrontando solo i dati interni", correct: false}
]},
				//nuovo blocco A_A2_valutare dati_testo caso

{question: "Cosa deve fare l'assistente amministrativo se l'informazione richiesta è stata omessa?", answers: [
  {text: "Provvedere tempestivamente alla pubblicazione nella sezione 'Amministrazione Trasparente', richiedendo agli uffici interni la fornitura del dato con scadenza", correct: true},
  {text: "Ignorare la richiesta e archiviarla", correct: false},
  {text: "Rispondere negativamente al richiedente senza pubblicare nulla", correct: false},
  {text: "Pubblicare solo parzialmente le informazioni", correct: false}
]},
{question: "Cosa si crea contestualmente alla protocollazione della richiesta di accesso civico?", answers: [
  {text: "Un fascicolo digitale dedicato alla richiesta, con tutti i documenti relativi", correct: true},
  {text: "Un registro cartaceo delle richieste", correct: false},
  {text: "Un file Excel con i dati della richiesta", correct: false},
  {text: "Un account PEC per il richiedente", correct: false}
]},
{question: "Qual è l'obiettivo della verifica formale della richiesta?", answers: [
  {text: "Assicurarsi che la richiesta sia completa degli elementi minimi richiesti", correct: true},
  {text: "Verificare la motivazione della richiesta", correct: false},
  {text: "Controllare la qualità del documento richiesto", correct: false},
  {text: "Verificare la competenza del richiedente", correct: false}
]},
{question: "Entro quanti giorni deve essere comunicata al richiedente l'avvenuta pubblicazione del dato/documento?", answers: [
  {text: "Entro 30 giorni dalla protocollazione della richiesta", correct: true},
  {text: "Entro 10 giorni dalla richiesta", correct: false},
  {text: "Entro 60 giorni dalla pubblicazione", correct: false},
  {text: "Non è previsto un termine specifico", correct: false}
]},
{question: "Quali canali possono essere utilizzati per inviare la comunicazione al richiedente?", answers: [
  {text: "PEC, PEO o posta ordinaria, preferibilmente lo stesso canale della richiesta", correct: true},
  {text: "Solo posta ordinaria", correct: false},
  {text: "Solo comunicazioni verbali", correct: false},
  {text: "Solo tramite social network", correct: false}
]},
{question: "Cosa si intende per 'Registro digitale delle Richieste di Accesso Civico'?", answers: [
  {text: "Un registro elettronico per tracciare tutte le richieste ricevute e gestite", correct: true},
  {text: "Un documento cartaceo da conservare in archivio", correct: false},
  {text: "Un database pubblico consultabile da tutti", correct: false},
  {text: "Una lista delle richieste respinte", correct: false}
]},
{question: "Perché è importante aggiornare regolarmente le procedure interne di gestione dell'ACS?", answers: [
  {text: "Per adeguarsi a nuove disposizioni normative e linee guida ANAC e migliorare l'efficacia del processo", correct: true},
  {text: "Per rinnovare la grafica dei documenti", correct: false},
  {text: "Per ridurre il numero di richieste", correct: false},
  {text: "Per aumentare il carico di lavoro", correct: false}
]},
{question: "Qual è il primo passo nel processo di gestione interna di una richiesta di Accesso Civico Semplice?", answers: [
  {text: "Protocollare la richiesta per garantirne tracciabilità e rispetto dei tempi", correct: true},
  {text: "Inoltrare immediatamente al Dirigente Scolastico", correct: false},
  {text: "Pubblicare la richiesta sul sito web", correct: false},
  {text: "Archiviare la richiesta senza protocollarla", correct: false}
]},
{question: "Chi riceve e verifica formalmente le richieste di Accesso Civico Semplice nella scuola?", answers: [
  {text: "L’assistente amministrativo individuato", correct: true},
  {text: "Il Dirigente Scolastico", correct: false},
  {text: "Il personale ATA generico", correct: false},
  {text: "Il referente del servizio IT", correct: false}
]},
{question: "Cosa verifica l’assistente amministrativo prima di inoltrare la richiesta al Dirigente Scolastico o altro referente?", answers: [
  {text: "La correttezza formale della richiesta", correct: true},
  {text: "La validità della firma digitale", correct: false},
  {text: "La motivazione della richiesta", correct: false},
  {text: "La presenza di dati sensibili", correct: false}
]},
{question: "Come si verifica se l’informazione richiesta è soggetta a obbligo di pubblicazione?", answers: [
  {text: "Consultando il sito web della PA per verificare se è stata omessa", correct: true},
  {text: "Contattando direttamente il richiedente", correct: false},
  {text: "Attraverso un controllo incrociato con altri enti", correct: false},
  {text: "Richiedendo una nuova delibera al Dirigente Scolastico", correct: false}
]},
{question: "Dove si cerca il dato o documento richiesto nell’ambito della gestione interna?", answers: [
  {text: "Nel sistema di gestione documentale e nel protocollo informatico", correct: true},
  {text: "Nel cloud personale del dirigente", correct: false},
  {text: "Solo nell’archivio cartaceo", correct: false},
  {text: "Nei social media ufficiali della scuola", correct: false}
]},

				// Accesso Documentale

{question: "Cos'è l'Accesso Documentale secondo la L. 241/1990?", answers: [
{text: "Il diritto di prendere visione e ottenere copia di documenti amministrativi per tutelare un interesse giuridico", correct: true},
{text: "Il diritto di richiedere qualsiasi documento senza motivazione", correct: false},
{text: "Un accesso limitato ai soli atti contabili", correct: false},
{text: "L'obbligo per la PA di pubblicare dati sul proprio sito", correct: false}
]},
{question: "Chi può presentare una richiesta di Accesso Documentale?", answers: [
{text: "Chiunque abbia un interesse diretto, concreto e attuale legato al documento", correct: true},
{text: "Solo i cittadini italiani", correct: false},
{text: "Chiunque senza necessità di motivare", correct: false},
{text: "Solo avvocati e rappresentanti legali", correct: false}
]},
{question: "Qual è il principale limite dell'Accesso Documentale?", answers: [
{text: "La tutela della riservatezza e di altri interessi pubblici e privati previsti dalla legge", correct: true},
{text: "Può essere esercitato solo online", correct: false},
{text: "Non permette di visionare documenti cartacei", correct: false},
{text: "È disponibile solo in orario d'ufficio", correct: false}
]},
{question: "Come deve essere motivata una richiesta di Accesso Documentale?", answers: [
{text: "Deve indicare l'interesse giuridico che si intende tutelare", correct: true},
{text: "Non deve essere motivata", correct: false},
{text: "Deve indicare solo il nome e cognome del richiedente", correct: false},
{text: "Deve riportare il numero di protocollo del documento", correct: false}
]},

			// FOIA - Accesso Civico Generalizzato

{question: "Che cosa introduce il FOIA in Italia?", answers: [
{text: "Il diritto di chiunque di accedere a dati e documenti detenuti dalla PA, senza necessità di motivare", correct: true},
{text: "Il diritto di accedere solo ai documenti storici", correct: false},
{text: "L'obbligo di pubblicazione dei soli atti amministrativi", correct: false},
{text: "Un accesso riservato ai residenti in Italia", correct: false}
]},
{question: "Qual è la finalità principale dell'Accesso Civico Generalizzato (FOIA)?", answers: [
{text: "Favorire il controllo diffuso sull'operato della PA e promuovere la trasparenza", correct: true},
{text: "Agevolare solo la ricerca storica", correct: false},
{text: "Ridurre i tempi di risposta della PA", correct: false},
{text: "Facilitare la comunicazione interna tra uffici", correct: false}
]},
{question: "Chi può esercitare il diritto di accesso civico generalizzato?", answers: [
{text: "Chiunque, senza necessità di dimostrare un interesse specifico", correct: true},
{text: "Solo i dipendenti pubblici", correct: false},
{text: "Solo cittadini con residenza in Italia", correct: false},
{text: "Solo giornalisti", correct: false}
]},
{question: "Quali sono i limiti del FOIA?", answers: [
{text: "La tutela di interessi pubblici e privati fondamentali come sicurezza, ordine pubblico e privacy", correct: true},
{text: "È limitato ai soli dati finanziari", correct: false},
{text: "Non consente richieste via PEC", correct: false},
{text: "Si applica solo ai ministeri", correct: false}
]},

				// Accesso Civico Semplice

{question: "Qual è lo scopo dell'Accesso Civico Semplice?", answers: [
{text: "Vigilare sul corretto adempimento degli obblighi di pubblicazione da parte delle amministrazioni", correct: true},
{text: "Permettere di richiedere qualsiasi documento senza motivazione", correct: false},
{text: "Richiedere atti amministrativi per tutelare un interesse giuridico", correct: false},
{text: "Consultare solo dati statistici", correct: false}
]},
{question: "Chi può richiedere l'Accesso Civico Semplice?", answers: [
{text: "Chiunque, senza necessità di dimostrare un interesse specifico", correct: true},
{text: "Solo i cittadini italiani", correct: false},
{text: "Solo i residenti nel comune di riferimento", correct: false},
{text: "Solo funzionari pubblici", correct: false}
]},
{question: "Qual è l'oggetto dell'Accesso Civico Semplice?", answers: [
{text: "Documenti, informazioni o dati che la PA deve pubblicare ma ha omesso", correct: true},
{text: "Tutti i documenti interni della PA", correct: false},
{text: "Solo i bilanci annuali", correct: false},
{text: "Solo le delibere comunali", correct: false}
]},
{question: "Qual è il principale limite dell'Accesso Civico Semplice?", answers: [
{text: "È limitato alle informazioni per cui sussiste un obbligo di pubblicazione", correct: true},
{text: "Non si può fare via email", correct: false},
{text: "È riservato ai soli dipendenti pubblici", correct: false},
{text: "Si applica solo agli enti locali", correct: false}
]},

			// Strumenti tecnologici per Accesso Civico Semplice

{question: "Qual è la funzione principale della piattaforma CMS nel sito scolastico?", answers: [
{text: "Facilitare la pubblicazione, l'aggiornamento rapido e la navigazione della sezione 'Amministrazione Trasparente'", correct: true},
{text: "Archiviare i documenti cartacei della scuola", correct: false},
{text: "Proteggere i dati da attacchi informatici", correct: false},
{text: "Gestire i registri delle presenze degli studenti", correct: false}
]},
{question: "A cosa serve il software di protocollo informatico nella gestione dell'accesso civico semplice?", answers: [
{text: "Garantire la tracciabilità univoca delle richieste dalla ricezione alla gestione", correct: true},
{text: "Velocizzare la correzione dei compiti", correct: false},
{text: "Proteggere la posta elettronica da spam", correct: false},
{text: "Creare automaticamente documenti PDF", correct: false}
]},
{question: "Qual è lo scopo principale di un Sistema di Gestione Documentale (DMS) in una scuola?", answers: [
{text: "Organizzare, indicizzare e reperire rapidamente documenti interni", correct: true},
{text: "Creare grafici statistici sugli studenti", correct: false},
{text: "Pubblicare automaticamente le circolari", correct: false},
{text: "Gestire le pagelle elettroniche", correct: false}
]},
{question: "Perché la PEC è importante per l'accesso civico semplice?", answers: [
{text: "Per ricevere e inviare richieste e risposte con valore legale in modo sicuro", correct: true},
{text: "Per inviare messaggi promozionali", correct: false},
{text: "Per fare backup dei documenti scolastici", correct: false},
{text: "Per registrare le presenze degli alunni", correct: false}
]},
				// nuovo blocco A2 Q testo caso - Accesso Civico Semplice

{question: "Qual è lo scopo principale dell'accesso civico semplice?", answers: [
{text: "Vigilare sul corretto adempimento degli obblighi di pubblicazione da parte delle amministrazioni", correct: true},
{text: "Permettere l'accesso a tutti i documenti della PA senza limiti", correct: false},
{text: "Ottenere informazioni riservate", correct: false},
{text: "Verificare la legittimità degli appalti pubblici", correct: false}
]},
{question: "Chi può presentare una richiesta di accesso civico semplice?", answers: [
{text: "Chiunque, senza necessità di dimostrare un interesse specifico", correct: true},
{text: "Solo i residenti del comune interessato", correct: false},
{text: "Solo i cittadini italiani", correct: false},
{text: "Solo le associazioni di categoria", correct: false}
]},
{question: "Qual è l'oggetto dell'accesso civico semplice?", answers: [
{text: "Documenti, informazioni o dati che la PA ha l'obbligo di pubblicare ma ha omesso", correct: true},
{text: "Qualsiasi documento interno della PA", correct: false},
{text: "Solo i bilanci e le delibere", correct: false},
{text: "Atti riservati alla magistratura", correct: false}
]},
{question: "La richiesta di accesso civico semplice deve essere motivata?", answers: [
{text: "No, non deve essere motivata", correct: true},
{text: "Sì, sempre", correct: false},
{text: "Solo per i documenti riservati", correct: false},
{text: "Solo per le informazioni finanziarie", correct: false}
]},
{question: "Qual è il limite principale dell'accesso civico semplice?", answers: [
{text: "È limitato alle informazioni per cui sussiste un obbligo di pubblicazione", correct: true},
{text: "Può essere esercitato solo una volta all'anno", correct: false},
{text: "Si applica solo ai cittadini italiani", correct: false},
{text: "È valido solo per documenti cartacei", correct: false}
]},
				// nuovo blocco A2 Q testo caso - trasparenza e l’accesso agli atti

{question: "Quale decreto legislativo ha introdotto l'accesso civico generalizzato (FOIA) in Italia?", answers: [
{text: "D.lgs. 97/2016", correct: true},
{text: "L. 241/1990", correct: false},
{text: "D.lgs. 33/2013", correct: false},
{text: "D.lgs. 82/2005", correct: false}
]},
{question: "Qual è la principale finalità del D.lgs. 33/2013?", answers: [
{text: "Rendere trasparente l'attività della Pubblica Amministrazione attraverso obblighi di pubblicazione", correct: true},
{text: "Regolare il trattamento dei dati personali", correct: false},
{text: "Introdurre il processo amministrativo telematico", correct: false},
{text: "Definire il codice dell'amministrazione digitale", correct: false}
]},
{question: "Quale legge disciplina l'accesso documentale tradizionale in Italia?", answers: [
{text: "L. 241/1990", correct: true},
{text: "D.lgs. 33/2013", correct: false},
{text: "L. 190/2012", correct: false},
{text: "D.lgs. 50/2016", correct: false}
]},
{question: "Cosa consente l'accesso civico generalizzato introdotto dal FOIA?", answers: [
{text: "Richiedere dati, documenti e informazioni detenuti dalle PA senza obbligo di motivare la richiesta", correct: true},
{text: "Accedere solo ai dati pubblicati obbligatoriamente", correct: false},
{text: "Richiedere atti solo per difendere un interesse diretto", correct: false},
{text: "Accedere esclusivamente ai documenti contabili", correct: false}
]},
{question: "Quali sono gli obblighi di pubblicazione previsti dal D.lgs. 33/2013 per le PA?", answers: [
{text: "Pubblicare nei siti istituzionali dati, documenti e informazioni relative all'organizzazione e all'attività amministrativa", correct: true},
{text: "Pubblicare soltanto le delibere comunali", correct: false},
{text: "Pubblicare esclusivamente bilanci e stipendi dei dirigenti", correct: false},
{text: "Pubblicare solo i documenti richiesti dai cittadini", correct: false}
]},
{question: "Quale tra le seguenti è una delle eccezioni al diritto di accesso civico generalizzato?", answers: [
{text: "La tutela della sicurezza pubblica e dell'ordine pubblico", correct: true},
{text: "La mancanza di formato digitale del documento", correct: false},
{text: "La provenienza del documento da un ente privato", correct: false},
{text: "L'assenza di firma autografa", correct: false}
]},
{question: "Qual è uno dei limiti principali del FOIA in Italia?", answers: [
{text: "Non possono essere divulgati dati la cui diffusione arrecherebbe pregiudizio a interessi pubblici o privati tutelati dalla legge", correct: true},
{text: "Si applica solo ai cittadini italiani", correct: false},
{text: "Può essere esercitato solo una volta all'anno", correct: false},
{text: "È valido esclusivamente per i documenti cartacei", correct: false}
]},
				// nuovo blocco A_A2_valutare_dati_glossario

{question:"Cos'è un cookie?",answers:[
  {text:"Un piccolo file di testo salvato da un sito web sul dispositivo dell’utente",correct:true},
  {text:"Un programma antivirus per il computer",correct:false},
  {text:"Un tipo di hardware per la connessione internet",correct:false},
  {text:"Un linguaggio di programmazione",correct:false}
]},
{question:"Cosa rappresenta il CAD?",answers:[
  {text:"Codice dell’Amministrazione Digitale che organizza le norme sull’informatizzazione della PA",correct:true},
  {text:"Codice per la crittografia dei dati",correct:false},
  {text:"Un programma per la gestione dei cookie",correct:false},
  {text:"Un sistema operativo per computer",correct:false}
]},
{question:"Cosa si intende per Competenza Digitale?",answers:[
  {text:"Insieme di abilità informatiche e digitali come alfabetizzazione, sicurezza e pensiero critico",correct:true},
  {text:"Solo la capacità di usare un computer",correct:false},
  {text:"Conoscenza esclusiva di linguaggi di programmazione",correct:false},
  {text:"Capacità di scrivere testi manualmente",correct:false}
]},
{question:"Quale contenuto rientra nei Contenuti Digitali?",answers:[
  {text:"Testi, immagini, video, audio ed elementi interattivi",correct:true},
  {text:"Solo testi scritti a mano",correct:false},
  {text:"Documenti cartacei scansionati senza formato digitale",correct:false},
  {text:"Solo video e film",correct:false}
]},
{question:"Cos'è DigComp 2.2?",answers:[
  {text:"Quadro europeo delle competenze digitali per cittadini e professionisti",correct:true},
  {text:"Un software per la creazione di contenuti digitali",correct:false},
  {text:"Un motore di ricerca avanzato",correct:false},
  {text:"Un tipo di malware",correct:false}
]},
{question:"Cosa si intende per Documento Informatico?",answers:[
  {text:"Rappresentazione digitale di atti, fatti o dati con rilevanza giuridica",correct:true},
  {text:"Documento scritto a mano su carta",correct:false},
  {text:"Un tipo di malware",correct:false},
  {text:"Un software per gestire i dati",correct:false}
]},
{question:"Qual è la differenza tra Documento Analogico e Documento Informatico?",answers:[
  {text:"Documento analogico è cartaceo con firma autografa, documento informatico è digitale",correct:true},
  {text:"Documento analogico è digitale, documento informatico è cartaceo",correct:false},
  {text:"Non c'è differenza",correct:false},
  {text:"Documento analogico è un software",correct:false}
]},
{question:"Cos'è l’E-Learning?",answers:[
  {text:"Metodo di insegnamento basato su materiali digitali e processi formativi",correct:true},
  {text:"Solo corsi in presenza",correct:false},
  {text:"Un tipo di hardware per computer",correct:false},
  {text:"Un tipo di virus informatico",correct:false}
]},
{question:"Cosa sono le ePolicy?",answers:[
  {text:"Norme e procedure per l’uso corretto delle tecnologie in ambiente scolastico",correct:true},
  {text:"Software per la gestione delle email",correct:false},
  {text:"Un sistema di sicurezza informatica",correct:false},
  {text:"Un tipo di malware",correct:false}
]},
{question:"Qual è la funzione della Firma Digitale?",answers:[
  {text:"Garantire identità, integrità del documento e non ripudio con valore legale",correct:true},
  {text:"È un software antivirus",correct:false},
  {text:"Serve solo a criptare messaggi",correct:false},
  {text:"È un programma di scrittura digitale",correct:false}
]},
{question:"Che cos’è IPA?",answers:[
  {text:"Banca dati pubblica con riferimenti per comunicare con enti pubblici",correct:true},
  {text:"Un programma per navigare su internet",correct:false},
  {text:"Un tipo di malware",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cos’è l’Intelligenza Artificiale?",answers:[
  {text:"Sistemi informatici che simulano funzioni dell’intelligenza umana",correct:true},
  {text:"Un tipo di hardware",correct:false},
  {text:"Un linguaggio di programmazione",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cosa indica un Link (hyperlink)?",answers:[
  {text:"Collegamento ipertestuale da una pagina web a un’altra pagina o file",correct:true},
  {text:"Un virus informatico",correct:false},
  {text:"Un tipo di software per navigare su internet",correct:false},
  {text:"Un tipo di documento digitale",correct:false}
]},
{question:"Che cos’è il Machine Learning?",answers:[
  {text:"Algoritmi che permettono a una macchina di imparare e migliorare con l’esperienza",correct:true},
  {text:"Un tipo di virus informatico",correct:false},
  {text:"Un programma per scrivere codice",correct:false},
  {text:"Un tipo di hardware",correct:false}
]},
{question:"Cos’è un Malware software?",answers:[
  {text:"Software dannoso che si installa inconsapevolmente per danneggiare o monitorare",correct:true},
  {text:"Un software antivirus",correct:false},
  {text:"Un tipo di programma educativo",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cos’è un motore di ricerca?",answers:[
  {text:"Sistema software che consente di trovare informazioni su Internet tramite parole chiave",correct:true},
  {text:"Un browser per navigare su internet",correct:false},
  {text:"Un sistema operativo",correct:false},
  {text:"Un tipo di malware",correct:false}
]},
{question:"Cos’è una OTP (One-Time Password)?",answers:[
  {text:"Password monouso valida per un solo accesso o transazione",correct:true},
  {text:"Password segreta usata sempre",correct:false},
  {text:"Un tipo di virus",correct:false},
  {text:"Un software per la gestione delle password",correct:false}
]},
{question:"Cos’è la PEC?",answers:[
  {text:"Sistema di posta elettronica certificata con valore legale simile a raccomandata",correct:true},
  {text:"Un programma di posta elettronica normale",correct:false},
  {text:"Un tipo di virus",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cos’è uno Screenshot?",answers:[
  {text:"Cattura dell’immagine del desktop o di una finestra in formato immagine",correct:true},
  {text:"Un software per modificare immagini",correct:false},
  {text:"Un tipo di virus informatico",correct:false},
  {text:"Un tipo di documento digitale",correct:false}
]},
{question:"Cosa sono i Servizi Online?",answers:[
  {text:"Funzioni offerte via Internet per interagire, accedere a informazioni o effettuare transazioni",correct:true},
  {text:"Programmi per computer offline",correct:false},
  {text:"Un tipo di malware",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cosa significa Sicurezza Informatica?",answers:[
  {text:"Pratiche per proteggere dati digitali, dispositivi e risorse personali",correct:true},
  {text:"Un tipo di malware",correct:false},
  {text:"Un programma antivirus",correct:false},
  {text:"Un tipo di hardware",correct:false}
]},
{question:"Cos’è S.I.D.I.?",answers:[
  {text:"Sistema Informativo Dell'Istruzione per gestione dati scolastici",correct:true},
  {text:"Un sistema operativo",correct:false},
  {text:"Un programma antivirus",correct:false},
  {text:"Un tipo di malware",correct:false}
]},
{question:"Cos’è SPID?",answers:[
  {text:"Sistema Pubblico di Identità Digitale per accesso sicuro ai servizi pubblici",correct:true},
  {text:"Un sistema operativo",correct:false},
  {text:"Un programma di posta elettronica",correct:false},
  {text:"Un tipo di malware",correct:false}
]},
{question:"Cosa si intende per Tecnologia dell’Informazione?",answers:[
  {text:"Metodi e tecnologie per archiviazione, trasmissione ed elaborazione dati e informazioni",correct:true},
  {text:"Un tipo di malware",correct:false},
  {text:"Un programma antivirus",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cos’è un Touchscreen?",answers:[
  {text:"Dispositivo che consente di controllare un sistema tramite tocchi sullo schermo",correct:true},
  {text:"Un tipo di malware",correct:false},
  {text:"Un programma per computer",correct:false},
  {text:"Un sistema operativo",correct:false}
]},
{question:"Cos’è VOIP?",answers:[
  {text:"Sistema telefonico che trasmette voce e dati tramite Internet",correct:true},
  {text:"Un programma antivirus",correct:false},
  {text:"Un tipo di malware",correct:false},
  {text:"Un tipo di hardware",correct:false}
]},
				// nuovo blocco A_A2_valutare dati_slide

				// Prima posizione economica

  {question: "Per la Prima posizione economica - Qual è il primo passo suggerito per cercare informazioni efficacemente?",
   answers: [
     {text: "Digitare subito la parola chiave principale", correct: false},
     {text: "Definire con attenzione quali informazioni si vogliono cercare e discutere parole chiave con i colleghi", correct: true},
     {text: "Cercare solo tra i primi tre risultati", correct: false},
     {text: "Citare sempre l’autore senza controllare le fonti", correct: false}
   ]},
  {question: "Per la Prima posizione economica - Perché è importante verificare i risultati di una ricerca andando oltre le prime pagine?",
   answers: [
     {text: "Perché le informazioni importanti si trovano sempre alla fine", correct: false},
     {text: "Perché non sempre le informazioni più utili sono tra i primi risultati", correct: true},
     {text: "Perché è necessario aumentare il tempo di ricerca", correct: false},
     {text: "Perché i primi risultati sono sempre inattendibili", correct: false}
   ]},
  {question: "Per la Prima posizione economica - Qual è una funzione utile per esaminare rapidamente il contenuto di una pagina web?",
   answers: [
     {text: "CTRL+F per cercare parole chiave nella pagina", correct: true},
     {text: "Bloccare la pagina per salvarla", correct: false},
     {text: "Usare un motore di ricerca interno al sito sempre presente", correct: false},
     {text: "Chiudere la pagina e cercare un’altra fonte", correct: false}
   ]},
  {question: "Per la Prima posizione economica - Perché è importante citare correttamente la fonte di un’informazione trovata online?",
   answers: [
     {text: "Per evitare il plagio e dare valore all’informazione", correct: true},
     {text: "Perché aumenta il numero di pagine visitate", correct: false},
     {text: "Perché aiuta a trovare altri siti", correct: false},
     {text: "Perché così si può copiare il contenuto", correct: false}
   ]},
  {question: "Per la Prima posizione economica - Come definisce il Codice dell’Amministrazione Digitale (CAD) il documento informatico?",
   answers: [
     {text: "Una rappresentazione non digitale di dati rilevanti", correct: false},
     {text: "Un insieme di dati in formato cartaceo", correct: false},
     {text: "La rappresentazione informatica di atti, fatti o dati giuridicamente rilevanti", correct: true},
     {text: "Un documento scritto a mano", correct: false}
   ]},

				// Seconda posizione economica

  {question: "Per la Seconda posizione economica - Cosa si intende per contenuto digitale negli enti pubblici?",
   answers: [
     {text: "Solo documenti cartacei digitalizzati", correct: false},
     {text: "Qualsiasi media, informazione o dato creato e distribuito in formato digitale", correct: true},
     {text: "Solo dati gestiti tramite app", correct: false},
     {text: "Solo informazioni visibili sui siti web", correct: false}
   ]},
  {question: "Per la Seconda posizione economica - Quali strumenti includono i contenuti digitali nella pubblica amministrazione?",
   answers: [
     {text: "Solo siti web e app", correct: false},
     {text: "Servizi online, gestione documentale, siti web, app, strumenti di comunicazione, dati e informazioni", correct: true},
     {text: "Solo piattaforme social", correct: false},
     {text: "Solo sistemi di posta elettronica", correct: false}
   ]},
  {question: "Per la Seconda posizione economica - Qual è il valore legale di un documento informatico firmato digitalmente?",
   answers: [
     {text: "Non ha valore legale", correct: false},
     {text: "Ha valore legale come se fosse firmato autograficamente", correct: true},
     {text: "Ha valore solo se stampato", correct: false},
     {text: "Ha valore legale solo se firmato manualmente", correct: false}
   ]},
  {question: "Per la Seconda posizione economica - Qual è la differenza tra firma digitale e firma elettronica semplice?",
   answers: [
     {text: "La firma digitale è meno sicura", correct: false},
     {text: "La firma elettronica semplice ha una valenza legale più debole rispetto alla firma digitale", correct: true},
     {text: "La firma digitale non ha valore legale", correct: false},
     {text: "La firma elettronica semplice è sempre equivalente alla firma digitale", correct: false}
   ]},
  {question: "Per la Seconda posizione economica - Perché un documento informatico firmato digitalmente è valido in giudizio?",
   answers: [
     {text: "Perché è immodificabile e permette l’identificazione certa del firmatario", correct: true},
     {text: "Perché è stampato su carta speciale", correct: false},
     {text: "Perché è inviato tramite e-mail", correct: false},
     {text: "Perché contiene dati personali", correct: false}
   ]},

				// nuovo blocco A-A2-privacy

				// per la Prima posizione economica

{question: "Per la Prima posizione economica - Qual è la prima azione che l'assistente amministrativo deve compiere dopo aver individuato dati personali non conformi pubblicati sul sito scolastico?",
 answers: [
  { text: "Rimuovere i file non conformi dal sito e sostituirli con elenchi codificati", correct: true },
  { text: "Inoltrare una segnalazione all'Autorità Garante per la privacy senza modificare nulla", correct: false },
  { text: "Ignorare il problema e aspettare indicazioni dal dirigente scolastico", correct: false },
  { text: "Pubblicare un avviso sul sito informando gli studenti del problema", correct: false }
 ]},

{question: "Per la Prima posizione economica - Quando l’assistente amministrativo esamina i documenti da pubblicare sul sito, cosa deve verificare principalmente?",
 answers: [
  { text: "Che i dati personali siano ridotti al minimo e anonimizzati se necessario", correct: true },
  { text: "Che i documenti siano esteticamente ben formattati", correct: false },
  { text: "Che tutte le informazioni siano visibili senza limitazioni", correct: false },
  { text: "Che i dati degli studenti siano pubblicati con nome completo e data di nascita", correct: false }
 ]},

{question: "Per la Prima posizione economica - Come deve essere effettuata la sostituzione dei file sul CMS scolastico per garantire la conformità al GDPR?",
 answers: [
  { text: "Utilizzando codici identificativi e iniziali al posto di dati completi", correct: true },
  { text: "Caricando i dati senza alcuna modifica, per garantire trasparenza", correct: false },
  { text: "Pubblicando solo i dati completi ma senza foto", correct: false },
  { text: "Inserendo un disclaimer che avverte della possibile visibilità dei dati", correct: false }
 ]},

{question: "Per la Prima posizione economica - Quale misura l’assistente deve adottare riguardo alle comunicazioni interne tra il personale scolastico?",
 answers: [
  { text: "Verificare che le comunicazioni avvengano esclusivamente tramite indirizzi e-mail istituzionali", correct: true },
  { text: "Permettere l’uso di e-mail personali per maggiore praticità", correct: false },
  { text: "Evitare di monitorare le comunicazioni interne per rispetto della privacy", correct: false },
  { text: "Consentire l’uso di applicazioni di messaggistica personali per la velocità", correct: false }
 ]},

{question: "Per la Prima posizione economica - Qual è lo scopo principale della creazione delle procedure operative standard (SOP) in questo contesto?",
 answers: [
  { text: "Garantire uniformità e conformità al GDPR nella gestione dei dati scolastici", correct: true },
  { text: "Velocizzare la pubblicazione dei documenti senza controlli", correct: false },
  { text: "Delegare completamente la responsabilità al DPO senza interventi propri", correct: false },
  { text: "Mantenere la privacy solo per i dati sensibili degli insegnanti", correct: false }
 ]},

{question: "Per la Prima posizione economica - Quale attività è fondamentale nella fase di formazione e sensibilizzazione interna?",
 answers: [
  { text: "Condividere criticità rilevate e promuovere buone pratiche per la tutela dei dati personali", correct: true },
  { text: "Limitarsi a distribuire materiale informativo senza incontri formativi", correct: false },
  { text: "Ignorare i feedback del personale e concentrarsi solo sulla parte tecnica", correct: false },
  { text: "Rendere obbligatoria la firma di un modulo di responsabilità senza formazione", correct: false }
 ]},

			// per la Seconda posizione economica

{question: "Per la Seconda posizione economica - Qual è il primo compito dell’assistente nella gestione del problema GDPR?",
 answers: [
  { text: "Coordinare il gruppo di lavoro per definire priorità e tempistiche della revisione dei contenuti", correct: true },
  { text: "Rimuovere personalmente i documenti non conformi senza consultare il team", correct: false },
  { text: "Lasciare che il DPO gestisca tutto senza interventi", correct: false },
  { text: "Inviare una segnalazione all’Autorità Garante senza modificare i contenuti", correct: false }
 ]},

{question: "Per la Seconda posizione economica - Come deve essere gestito il confronto con il DPO?",
 answers: [
  { text: "Gestendo direttamente la corrispondenza e integrando le indicazioni nelle procedure operative", correct: true },
  { text: "Aspettare che il DPO fornisca un manuale dettagliato senza altre interazioni", correct: false },
  { text: "Consultare il DPO solo in caso di sanzioni", correct: false },
  { text: "Limitarsi a inviare comunicazioni generiche senza dettagliare i problemi", correct: false }
 ]},

{question: "Per la Seconda posizione economica - Quale attività di verifica è richiesta nella fase di rimozione e anonimizzazione dei documenti?",
 answers: [
  { text: "Controllare che i documenti siano anonimizzati e verificare la cronologia modifiche nel CMS", correct: true },
  { text: "Scaricare i documenti e inviarli via email al personale per revisione", correct: false },
  { text: "Pubblicare nuovamente i documenti senza modifiche per velocizzare il processo", correct: false },
  { text: "Delegare la verifica a personale esterno senza supervisione", correct: false }
 ]},

{question: "Per la Seconda posizione economica - Quali misure di comunicazione interna vengono promosse dall’assistente?",
 answers: [
  { text: "Emissione di circolari per disciplinare l’uso dei canali digitali e promozione dell’uso del registro elettronico", correct: true },
  { text: "Permettere l’uso libero di e-mail personali per aumentare la flessibilità", correct: false },
  { text: "Limitare l’uso delle comunicazioni digitali per ridurre i rischi", correct: false },
  { text: "Usare solo comunicazioni verbali per evitare tracce scritte", correct: false }
 ]},

{question: "Per la Seconda posizione economica - Cosa prevede la fase di creazione delle procedure operative standard (SOP)?",
 answers: [
  { text: "Redigere la versione ufficiale del vademecum e produrre checklist operative coerenti con la normativa", correct: true },
  { text: "Creare SOP solo per uso interno senza coinvolgere altri settori", correct: false },
  { text: "Affidare la creazione delle SOP esclusivamente al personale tecnico informatico", correct: false },
  { text: "Evitare procedure scritte per mantenere flessibilità operativa", correct: false }
 ]},

{question: "Per la Seconda posizione economica - Quali strumenti formativi vengono sviluppati nella fase di formazione e sensibilizzazione interna?",
 answers: [
  { text: "Creazione di slide, casi-studio e quiz di verifica, con analisi dei risultati per interventi mirati", correct: true },
  { text: "Distribuzione di brochure senza verifica dell’apprendimento", correct: false },
  { text: "Svolgimento di lezioni frontali senza materiale di supporto", correct: false },
  { text: "Rinuncia a formare il personale per mancanza di tempo", correct: false }
 ]},
				
				// nuovo blocco A-A2-privacy

{question:"Cosa indica l'acronimo GDPR?",answers:[
 {text:"General Data Protection Regulation, la normativa europea sulla protezione dei dati personali.",correct:true},
 {text:"General Data Processing Rules, le regole generali per la gestione dei dati aziendali.",correct:false},
 {text:"Global Data Privacy Regulation, la normativa globale per la privacy informatica.",correct:false},
 {text:"General Digital Privacy Rights, i diritti digitali fondamentali degli utenti.",correct:false}]},

{question:"Che cosa rappresenta il DPO (Data Protection Officer)?",answers:[
 {text:"La figura responsabile di organizzare e supervisionare il trattamento dei dati personali in conformità al GDPR.",correct:true},
 {text:"Un consulente esterno per la sicurezza informatica senza responsabilità diretta sui dati.",correct:false},
 {text:"Il responsabile legale per la gestione dei contratti di dati aziendali.",correct:false},
 {text:"Un software che automatizza il trattamento dei dati personali.",correct:false}]},

{question:"Cosa si intende con DPIA (Data Protection Impact Assessment)?",answers:[
 {text:"Procedura per valutare i rischi di un trattamento dati e individuare misure per mitigarli.",correct:true},
 {text:"Documento di approvazione per l’uso dei dati biometrici nelle aziende.",correct:false},
 {text:"Registro delle violazioni di dati personali.",correct:false},
 {text:"Rapporto annuale sulle attività del DPO.",correct:false}]},

{question:"Che cos’è il Registro dei Data Breach?",answers:[
 {text:"Documento obbligatorio in cui il titolare del trattamento annota tutte le violazioni di dati personali.",correct:true},
 {text:"Registro pubblico consultabile da chiunque sulle violazioni di dati in Europa.",correct:false},
 {text:"Archivio dei dati personali non più utilizzati da un’azienda.",correct:false},
 {text:"Lista di utenti sospetti per violazioni della privacy.",correct:false}]},

{question:"Cosa significa 'Accountability' nel GDPR?",answers:[
 {text:"Responsabilizzazione del titolare nel garantire e dimostrare la conformità al GDPR.",correct:true},
 {text:"Libertà del titolare di decidere arbitrariamente sulle modalità di trattamento.",correct:false},
 {text:"Esenzione da responsabilità in caso di data breach.",correct:false},
 {text:"Delegare tutte le responsabilità al DPO.",correct:false}]},

{question:"Che cos’è il Codice Privacy?",answers:[
 {text:"Il testo unico nazionale che regola la protezione dei dati personali in Italia.",correct:true},
 {text:"Un codice identificativo univoco per ogni dato personale.",correct:false},
 {text:"Un sistema di crittografia per proteggere i dati.",correct:false},
 {text:"Un software per gestire le autorizzazioni di accesso.",correct:false}]},

{question:"Cosa sono i Big Data?",answers:[
 {text:"Grandi insiemi di dati complessi che richiedono strumenti avanzati per la gestione e l’analisi.",correct:true},
 {text:"Dati personali particolarmente sensibili.",correct:false},
 {text:"Database utilizzati solo da enti pubblici.",correct:false},
 {text:"Piccoli archivi di dati anonimi.",correct:false}]},

{question:"Cosa indica il termine 'Credenziali di autenticazione'?",answers:[
 {text:"Dati e dispositivi usati da una persona per verificare la propria identità in un sistema.",correct:true},
 {text:"Documenti cartacei di autorizzazione all’accesso fisico in azienda.",correct:false},
 {text:"Password utilizzate esclusivamente per accedere ai social network.",correct:false},
 {text:"Codici segreti gestiti esclusivamente dal DPO.",correct:false}]},

{question:"Cosa sono i Dati biometrici?",answers:[
 {text:"Dati personali relativi a caratteristiche fisiche o comportamentali che identificano una persona in modo univoco.",correct:true},
 {text:"Dati relativi a giudizi legali e procedimenti penali.",correct:false},
 {text:"Informazioni anonime raccolte per studi statistici.",correct:false},
 {text:"Dati personali divulgati in pubblico.",correct:false}]},

{question:"Cosa sono i Dati giudiziari?",answers:[
 {text:"Informazioni riguardanti provvedimenti giudiziari e situazioni processuali di una persona.",correct:true},
 {text:"Dati raccolti durante processi di marketing legale.",correct:false},
 {text:"Dati anonimi usati per rilevamenti statistici giudiziari.",correct:false},
 {text:"Informazioni personali pubblicate sui registri comunali.",correct:false}]},

{question:"Che cosa significa 'Diritto alla portabilità'?",answers:[
 {text:"Diritto di trasferire i propri dati personali da un titolare del trattamento a un altro.",correct:true},
 {text:"Diritto di cancellare i dati da qualsiasi sistema elettronico.",correct:false},
 {text:"Diritto di impedire l’uso dei dati biometrici.",correct:false},
 {text:"Diritto a ricevere una copia cartacea del proprio registro dati.",correct:false}]},

{question:"Che cosa è il Double opt-in?",answers:[
 {text:"Procedura che richiede una doppia conferma del consenso, ad esempio tramite modulo e mail di verifica.",correct:true},
 {text:"Il consenso implicito dato durante la navigazione di un sito web.",correct:false},
 {text:"L’obbligo di fornire due documenti d’identità per iscriversi a un servizio.",correct:false},
 {text:"Procedura che consente di saltare la conferma via mail per velocizzare l’iscrizione.",correct:false}]},

{question:"Che cosa si intende per Informativa nel contesto GDPR?",answers:[
 {text:"Documento con cui il titolare comunica agli interessati finalità e modalità del trattamento dei dati.",correct:true},
 {text:"Comunicazione riservata tra DPO e Autorità di controllo.",correct:false},
 {text:"Un tipo di report statistico interno all’azienda.",correct:false},
 {text:"Documento di identità digitale per accedere ai servizi.",correct:false}]},

{question:"Cosa significa Opt-in?",answers:[
 {text:"Consenso esplicito che un soggetto dà per ricevere comunicazioni o servizi.",correct:true},
 {text:"Rifiuto implicito di ricevere email commerciali.",correct:false},
 {text:"Procedura automatica di iscrizione senza consenso.",correct:false},
 {text:"Codice identificativo per utenti anonimi.",correct:false}]},

{question:"Che cos’è la Privacy by default?",answers:[
 {text:"Principio che prevede di trattare solo i dati necessari per gli scopi previsti e per il tempo strettamente necessario.",correct:true},
 {text:"Impostazione che consente di condividere tutti i dati per default.",correct:false},
 {text:"Una tecnica di crittografia per proteggere i dati biometrici.",correct:false},
 {text:"Normativa che impone l’archiviazione permanente di tutti i dati personali.",correct:false}]},

{question:"Chi è il Responsabile per la Protezione dei Dati Personali (DPO)?",answers:[
 {text:"Specialista che supporta e supervisiona la conformità al GDPR all’interno di un’organizzazione.",correct:true},
 {text:"Funzionario che gestisce solo le richieste di accesso ai dati.",correct:false},
 {text:"Tecnico informatico responsabile della manutenzione hardware.",correct:false},
 {text:"Consulente legale esterno senza accesso ai dati.",correct:false}]},

{question:"Cosa sono gli Strumenti elettronici nel contesto GDPR?",answers:[
 {text:"Dispositivi e programmi utilizzati per il trattamento automatizzato dei dati personali.",correct:true},
 {text:"Apparecchiature per la sorveglianza fisica degli uffici.",correct:false},
 {text:"Sistemi manuali di archiviazione cartacea.",correct:false},
 {text:"Software di fatturazione non collegati ai dati personali.",correct:false}]},

{question:"Che cosa si intende per Trattamento dei dati?",answers:[
 {text:"Qualsiasi operazione eseguita su dati personali, dalla raccolta alla cancellazione.",correct:true},
 {text:"Solo la conservazione dei dati su supporti digitali.",correct:false},
 {text:"La condivisione dei dati solo con enti pubblici.",correct:false},
 {text:"L’uso esclusivo di dati anonimi per studi statistici.",correct:false}]},

{question:"Cosa si intende per Violazione dei dati personali?",answers:[
 {text:"Evento che causa distruzione, perdita, modifica o accesso non autorizzato ai dati personali.",correct:true},
 {text:"Condivisione volontaria di dati tra dipendenti di un’azienda.",correct:false},
 {text:"Conservazione di dati per un periodo superiore a quello previsto.",correct:false},
 {text:"Utilizzo di dati per scopi di marketing interno.",correct:false}]},

			//nuovo blocco A_A2_PROTEGGERE I DATI_ Glossario

{question: "Quali strategie digitali adotta un assistente amministrativo per ottimizzare la gestione e la valutazione delle istanze quotidiane?",
answers: [
{ text: "Protocollare ogni istanza tramite GECODOC, utilizzare Excel per il monitoraggio, archiviare documenti su NAS, digitalizzare e classificare istanze, e collaborare internamente tramite condivisione documenti", correct: true },
{ text: "Stampare tutte le istanze e archiviarle manualmente senza digitalizzazione", correct: false },
{ text: "Delegare tutte le istanze senza monitoraggio né protocollazione", correct: false },
{ text: "Utilizzare solo la posta elettronica senza strumenti di tracciamento o archiviazione", correct: false }
]},

{question: "Quali strategie digitali utilizza un assistente amministrativo per monitorare cattedre scoperte, rinunce e nuove disponibilità per lo scorrimento delle graduatorie?",
answers: [
{ text: "Monitoraggio tramite piattaforma SIDI, aggiornamento comunicazioni PEC, protocollazione in GECODOC, collaborazione con DSGA e dirigente", correct: true },
{ text: "Gestione manuale senza uso di piattaforme digitali o protocolli formali", correct: false },
{ text: "Delegare il monitoraggio solo ai docenti senza coinvolgimento dell’amministrazione", correct: false },
{ text: "Ignorare le comunicazioni PEC e non aggiornare i registri digitali", correct: false }
]},

{question: "Quali strategie digitali adotta un assistente amministrativo per individuare i docenti disponibili e istruire i loro contratti?",
answers: [
{ text: "Consultazione graduatorie SIDI o Argo, convocazioni via PEC, inserimento dati contrattuali su SIDI, protocollazione in GECODOC, firma e invio contratti", correct: true },
{ text: "Invio contratti via posta cartacea senza uso di piattaforme digitali o protocolli", correct: false },
{ text: "Predisposizione dei contratti senza consultare graduatorie o documenti ufficiali", correct: false },
{ text: "Gestione dei contratti affidata esclusivamente ai docenti senza supervisione amministrativa", correct: false }
]},
			//nuovo blocco Questionnaire Report

{question: "Cosa si intende per Data Breach e quali sono le possibili conseguenze per un'organizzazione?",
answers: [
{ text: "Una violazione dei dati sensibili causata da attacchi dolosi o errori, con gravi rischi per la sicurezza e la privacy", correct: true },
{ text: "Un semplice malfunzionamento hardware senza impatti sui dati", correct: false },
{ text: "Un aggiornamento di sistema previsto senza rischi", correct: false },
{ text: "Un tipo di backup dei dati per sicurezza", correct: false }
]},

{question: "Qual è l’obiettivo delle strategie di Disaster Recovery nei data center?",
answers: [
{ text: "Ripristinare rapidamente le operazioni dopo un attacco o incidente per minimizzare i tempi di inattività", correct: true },
{ text: "Aumentare la capacità di archiviazione senza preoccuparsi della sicurezza", correct: false },
{ text: "Eliminare dati non importanti per liberare spazio", correct: false },
{ text: "Creare copie fisiche dei server per uso futuro", correct: false }
]},

{question: "Cosa comprendono le metodologie Vulnerability Assessment e Penetration Test (VAPT)?",
answers: [
{ text: "Valutazioni e test di sicurezza per individuare vulnerabilità in un sistema informatico", correct: true },
{ text: "Processi di ottimizzazione della rete senza controllo della sicurezza", correct: false },
{ text: "Procedure di installazione software standard", correct: false },
{ text: "Backup dei dati in ambienti esterni", correct: false }
]},

{question: "Cosa sono i Deep Fake e quali rischi comportano?",
answers: [
{ text: "Tecnologie che manipolano contenuti digitali per creare informazioni false o ingannevoli, con rischi per l’informazione e la sicurezza", correct: true },
{ text: "Software per migliorare la qualità delle immagini senza rischi", correct: false },
{ text: "Metodi di protezione dei dati personali", correct: false },
{ text: "Tecniche di compressione video standard", correct: false }
]},

{question: "Quali sono alcuni consigli pratici e misure di sicurezza fondamentali per la protezione dei dati nei data center?",
answers: [
{ text: "Implementare sistemi di autenticazione robusta, aggiornare regolarmente software e firmware, effettuare backup frequenti e monitorare costantemente le reti", correct: true },
{ text: "Ignorare gli aggiornamenti software per evitare interruzioni", correct: false },
{ text: "Condividere le credenziali di accesso tra più utenti per facilitare il lavoro", correct: false },
{ text: "Disabilitare i sistemi di monitoraggio per ridurre i costi energetici", correct: false }
]},

{question: "Quali misure immediate di sicurezza è importante mettere in pratica per proteggere informazioni personali e professionali?",
answers: [
{ text: "Utilizzare password robuste, adottare strategie di sensibilizzazione contro l’ingegneria sociale e collaborare con i colleghi per conoscere la normativa NIS 2", correct: true },
{ text: "Condividere le password con colleghi per facilitare l’accesso", correct: false },
{ text: "Ignorare la normativa NIS 2 perché non riguarda il personale scolastico", correct: false },
{ text: "Evitare di aggiornare i sistemi per non creare problemi di compatibilità", correct: false }
]},

{question: "Perché è importante discutere e conoscere la normativa europea NIS 2 all’interno degli istituti scolastici?",
answers: [
{ text: "Per garantire la sicurezza dei servizi digitali, proteggere le infrastrutture e mitigare le minacce cibernetiche", correct: true },
{ text: "Per aumentare il carico burocratico senza benefici pratici", correct: false },
{ text: "Per limitare l’uso delle tecnologie digitali agli insegnanti", correct: false },
{ text: "Per evitare di implementare misure di sicurezza", correct: false }
]},

{question: "Cos’è l’autenticazione a due fattori (2FA) e perché è importante?",
answers: [
{ text: "È un metodo di sicurezza che richiede due diversi fattori di verifica per accedere a un account, riducendo il rischio di accessi non autorizzati anche se la password viene rubata", correct: true },
{ text: "È un sistema che elimina completamente la necessità della password", correct: false },
{ text: "È un metodo che utilizza solo l’invio di email per verificare l’identità", correct: false },
{ text: "È un sistema meno sicuro rispetto all’uso di sole password complesse", correct: false }
]},

{question: "Qual è il metodo più comune per il secondo fattore nell’autenticazione a due fattori?",
answers: [
{ text: "Un codice numerico inviato tramite OTP o SMS", correct: true },
{ text: "Un secondo indirizzo email", correct: false },
{ text: "Una domanda di sicurezza", correct: false },
{ text: "L’impronta digitale senza password", correct: false }
]},

{question: "Che cos’è l’autenticazione a tre fattori (3FA) e dove viene comunemente utilizzata?",
answers: [
{ text: "È un metodo che richiede tre fattori di verifica ed è usato ad esempio nello SPID", correct: true },
{ text: "È un sistema che richiede tre password diverse", correct: false },
{ text: "È un’autenticazione che elimina la necessità di password", correct: false },
{ text: "È un metodo usato solo nelle reti aziendali senza connessione internet", correct: false }
]},

{question: "Che cos’è la valutazione di impatto del trattamento (D.P.I.A.) secondo il GDPR?",
answers: [
{ text: "Un onere a carico del titolare del trattamento per valutare rischi e impatti sulla privacy dei dati personali", correct: true },
{ text: "Un documento che autorizza il trattamento dei dati senza limiti", correct: false },
{ text: "Un controllo effettuato solo dall’Autorità Garante", correct: false },
{ text: "Un tipo di crittografia per proteggere i dati", correct: false }
]},

{question: "Cosa significa il principio di accountability nel GDPR?",
answers: [
{ text: "La responsabilità del titolare del trattamento di rispettare e dimostrare il rispetto delle norme sulla protezione dati", correct: true },
{ text: "L’obbligo di archiviare tutti i dati senza restrizioni", correct: false },
{ text: "L’esclusione del titolare dal controllo sul trattamento dei dati", correct: false },
{ text: "La possibilità di cedere i dati a terzi senza consenso", correct: false }
]},

{question: "Chi è il DPO (Data Protection Officer) e qual è il suo ruolo principale?",
answers: [
{ text: "Una figura specializzata che supervisiona e organizza la gestione e la protezione dei dati personali in conformità alle normative", correct: true },
{ text: "Un tecnico informatico che si occupa solo della sicurezza dei server", correct: false },
{ text: "Un dipendente che archivia documenti cartacei", correct: false },
{ text: "Un consulente legale esterno senza ruolo operativo", correct: false }
]},

{question: "Qual è il principale dovere delle istituzioni scolastiche riguardo alla privacy?",
answers: [
{ text: "Rispettare, tutelare e proteggere i dati personali trattati, specialmente quelli di soggetti minorenni", correct: true },
{ text: "Trattare tutti i dati personali senza limitazioni", correct: false },
{ text: "Conservare i dati personali solo in formato cartaceo", correct: false },
{ text: "Condividere liberamente i dati con enti esterni", correct: false }
]},

{question: "Quali dati possono trattare le istituzioni scolastiche?",
answers: [
{ text: "Solo i dati necessari per le finalità istituzionali di interesse pubblico, nel rispetto dei principi di finalità e non eccedenza", correct: true },
{ text: "Tutti i dati personali raccolti senza restrizioni", correct: false },
{ text: "Dati personali di qualsiasi natura anche senza consenso", correct: false },
{ text: "Soltanto dati anonimi", correct: false }
]},

{question: "Perché proteggere i dati personali nelle scuole è particolarmente delicato?",
answers: [
{ text: "Perché coinvolge dati di minori e ambienti tecnologici complessi che richiedono attenzione e strategie specifiche", correct: true },
{ text: "Perché la maggior parte dei dati trattati riguarda solo il personale scolastico", correct: false },
{ text: "Perché la normativa privacy non si applica agli studenti", correct: false },
{ text: "Perché i dati vengono trattati esclusivamente in forma anonima", correct: false }
]},

				//nuovo blocco A_A2_proteg_dati_personali_privacy_slides

{  question: "Cosa si intende per dipendenza da sistemi automatici?",
  answers: [
    { text: "Affidarsi eccessivamente a strumenti digitali o IA senza verifica umana", correct: true },
    { text: "Utilizzare un computer per scrivere un documento", correct: false },
    { text: "Usare un calendario elettronico per segnare appuntamenti", correct: false },
    { text: "Connettersi a Internet tramite Wi-Fi", correct: false }
  ]},
{  question: "Qual è un rischio concreto della dipendenza eccessiva da sistemi automatici?",
  answers: [
    { text: "Riduzione della capacità critica e decisionale autonoma", correct: true },
    { text: "Miglioramento della precisione nelle decisioni", correct: false },
    { text: "Maggiore rapidità nelle operazioni", correct: false },
    { text: "Accesso immediato a informazioni affidabili", correct: false }
  ]},
{  question: "Come si può ridurre il rischio di dipendenza da sistemi automatici?",
  answers: [
    { text: "Mantenere sempre un controllo umano sui risultati", correct: true },
    { text: "Disattivare ogni tecnologia digitale", correct: false },
    { text: "Usare solo software gratuiti", correct: false },
    { text: "Affidarsi solo a un’unica piattaforma", correct: false }
  ]},
{  question: "Quale comportamento è sintomo di dipendenza da sistemi automatici?",
  answers: [
    { text: "Prendere decisioni senza verificare le informazioni fornite dall’IA", correct: true },
    { text: "Controllare più fonti per confermare un dato", correct: false },
    { text: "Usare strumenti digitali come supporto, ma verificare i risultati", correct: false },
    { text: "Integrare analisi umana e dati tecnologici", correct: false }
  ]},
{  question: "Che cosa regola il GDPR nell’Unione Europea?",
  answers: [
    { text: "La protezione dei dati personali e la privacy dei cittadini", correct: true },
    { text: "Le tasse sul commercio internazionale", correct: false },
    { text: "Le norme per la sicurezza sul lavoro", correct: false },
    { text: "Le procedure per le elezioni europee", correct: false }
  ]},
{  question: "Quale tra i seguenti è considerato un dato personale secondo il GDPR?",
  answers: [
    { text: "Il nome e il cognome di una persona", correct: true },
    { text: "Il colore preferito", correct: false },
    { text: "Un numero casuale generato dal computer", correct: false },
    { text: "Il prezzo di un prodotto in un negozio", correct: false }
  ]},
{  question: "Qual è uno dei principi fondamentali del GDPR?",
  answers: [
    { text: "Minimizzazione dei dati", correct: true },
    { text: "Archiviazione illimitata dei dati", correct: false },
    { text: "Vendita dei dati senza consenso", correct: false },
    { text: "Uso dei dati solo per scopi pubblicitari", correct: false }
  ]},
{  question: "Cosa significa 'consenso esplicito' secondo il GDPR?",
  answers: [
    { text: "Autorizzazione chiara e specifica data dall'interessato", correct: true },
    { text: "Silenzio o mancata opposizione dell’utente", correct: false },
    { text: "Approvazione implicita da parte dell’amministrazione", correct: false },
    { text: "Autorizzazione verbale senza registrazione", correct: false }
  ]},
{  question: "Nel contesto dell'intelligenza artificiale, cosa si intende per 'bias' nei dati di addestramento?",
  answers: [
    { text: "Un malfunzionamento temporaneo del software", correct: false },
    { text: "Una distorsione o pregiudizio che influenza i risultati", correct: true },
    { text: "Un processo per migliorare l’efficienza del modello", correct: false },
    { text: "Un errore di calcolo dovuto a mancanza di memoria", correct: false }
  ]},
{  question: "Quale tra i seguenti è un esempio di bias nei sistemi di IA?",
  answers: [
    { text: "Il modello traduce correttamente testi in più lingue", correct: false },
    { text: "Il modello favorisce determinate risposte a causa di dati squilibrati", correct: true },
    { text: "Il modello riduce i tempi di calcolo", correct: false },
    { text: "Il modello funziona senza connessione internet", correct: false }
  ]},
{  question: "Come si può ridurre il bias in un sistema di IA?",
  answers: [
    { text: "Utilizzando dataset diversificati e bilanciati", correct: true },
    { text: "Evitando l’uso di algoritmi complessi", correct: false },
    { text: "Limitando il numero di test sul modello", correct: false },
    { text: "Riducendo la potenza di calcolo", correct: false }
  ]},
{  question: "Perché il bias nei dati di addestramento può essere un problema?",
  answers: [
    { text: "Può portare a decisioni errate o discriminatorie", correct: true },
    { text: "Rende l'interfaccia grafica meno intuitiva", correct: false },
    { text: "Aumenta il consumo di energia", correct: false },
    { text: "Causa un rallentamento temporaneo del sistema", correct: false }
  ]},  
{    question: "Quali sono alcune applicazioni pratiche dell'intelligenza artificiale negli uffici amministrativi scolastici?",
    answers: [
      { text: "Utilizzo di chatbot per risposte rapide, generazione automatica di testi, sintesi e semplificazione di documenti complessi, e creazione di contenuti visivi personalizzati.", correct: true },
      { text: "Impiego esclusivo di software tradizionali senza automazione, affidamento totale al personale per tutte le risposte e nessun uso di strumenti digitali per la creazione di contenuti.", correct: false },
      { text: "Sostituzione completa del personale amministrativo con robot, abolizione di qualsiasi controllo umano sulle informazioni e uso limitato solo a sistemi di archiviazione cartacea.", correct: false },
      { text: "Applicazione di tecnologie IA solo per scopi ludici, esclusione dell’automazione nei processi e uso limitato a software di grafica tradizionale senza integrazione IA.", correct: false }
    ]  },
{    question: "Quali sono gli obblighi principali per gli istituti scolastici secondo il Regolamento europeo AI Act?",
    answers: [
      { text: "Evitare la condivisione di dati sensibili, mappare internamente gli strumenti di IA utilizzati, formare il personale sull’uso responsabile, adottare un regolamento interno e fornire informative chiare ai fornitori.", correct: true },
      { text: "Consentire la libera circolazione dei dati, limitare la formazione solo ai dirigenti scolastici, evitare regolamenti interni per favorire la flessibilità e gestire i fornitori senza necessità di informativa.", correct: false },
      { text: "Delegare completamente la gestione dell’IA ai fornitori esterni senza mappatura interna, evitare di regolamentare l’uso dell’IA nelle scuole e limitare la formazione al minimo indispensabile.", correct: false },
      { text: "Conservare dati sensibili senza limitazioni, escludere il personale docente dalla formazione e non comunicare con i fornitori per non creare vincoli.", correct: false }
    ]  },
{    question: "Quali sono i principi chiave del Regolamento europeo AI Act da rispettare negli istituti scolastici?",
    answers: [
      { text: "Garantire trasparenza nelle operazioni, mantenere supervisione umana attiva, documentare accuratamente l’uso dell’IA e valutare preventivamente i rischi associati.", correct: true },
      { text: "Promuovere l’autonomia totale dei sistemi, limitare la supervisione umana solo ai casi critici, affidarsi esclusivamente a report automatici e gestire i rischi dopo l’implementazione.", correct: false },
      { text: "Favorire l’adozione rapida senza necessità di documentazione, effettuare valutazioni periodiche ma non preventive, e sostituire la supervisione umana con controlli algoritmici.", correct: false },
      { text: "Mantenere riservatezza assoluta sull’uso delle tecnologie IA, delegare ogni decisione ai sistemi automatizzati e minimizzare la comunicazione degli impatti agli utenti.", correct: false }
    ]  },
{    question: "Che cos’è l’intelligenza artificiale?",
    answers: [
      { text: "Un sistema basato su macchine, progettato per operare con autonomia e generare output come previsioni, raccomandazioni o decisioni che influenzano ambienti fisici o virtuali.", correct: true },
      { text: "Un software che automatizza esclusivamente operazioni ripetitive senza capacità di apprendimento o adattamento.", correct: false },
      { text: "Un programma limitato a simulare emozioni umane senza alcuna capacità di influenzare l’ambiente.", correct: false },
      { text: "Un insieme di regole fisse applicate da un computer senza possibilità di modifica o evoluzione.", correct: false }
    ]},
  {    question: "Qual è l'obiettivo principale nell'interazione con i sistemi di intelligenza artificiale per il personale scolastico?",
    answers: [
      { text: "Guidare il personale ad un uso consapevole dell’IA, riconoscendone potenzialità e rispettando le regole.", correct: true },
      { text: "Incoraggiare l’adozione spontanea e non regolamentata di strumenti IA per aumentare la produttività.", correct: false },
      { text: "Limitare l’uso dell’IA solo a figure tecniche senza coinvolgimento didattico.", correct: false },
      { text: "Affidare ogni decisione educativa esclusivamente agli algoritmi di intelligenza artificiale.", correct: false }
    ]
  },
					//nuovo blocco A_A1_sistemi di IA slides
  {
    question: "Qual è l’obiettivo principale dell’assistenza agli alunni con disabilità nel contesto del DigComp?",
    answers: [
      { text: "Favorire l’autonomia, l’inclusione e la partecipazione attiva degli studenti con bisogni educativi speciali.", correct: true },
      { text: "Isolare gli studenti con disabilità per evitare interferenze.", correct: false },
      { text: "Limitare l’uso della tecnologia per questi studenti.", correct: false },
      { text: "Sostituire completamente l’insegnante con tecnologie digitali.", correct: false }
    ]
  },
  {
    question: "Quali competenze si vogliono fornire agli alunni con disabilità secondo il quadro DigComp?",
    answers: [
      { text: "Competenze digitali per navigare nel mondo digitale e migliorare comunicazione, apprendimento e interazione sociale.", correct: true },
      { text: "Competenze manuali per attività artigianali.", correct: false },
      { text: "Competenze linguistiche solo in lingua straniera.", correct: false },
      { text: "Competenze sportive per attività fisiche.", correct: false }
    ]
  },
  {
    question: "L’approccio DigComp per alunni con bisogni educativi speciali si concentra su:",
    answers: [
      { text: "Individuare e adempiere un bisogno importante attraverso l’integrazione delle tecnologie digitali.", correct: true },
      { text: "Escludere gli studenti dal contesto digitale.", correct: false },
      { text: "Utilizzare solo strumenti tradizionali senza tecnologia.", correct: false },
      { text: "Garantire solo la presenza fisica senza supporto digitale.", correct: false }
    ]
  },
  {
    question: "L’inclusione digitale per alunni con disabilità mira a:",
    answers: [
      { text: "Migliorare la loro comunicazione, apprendimento e interazione sociale.", correct: true },
      { text: "Limitare l’uso di dispositivi digitali.", correct: false },
      { text: "Favorire l’isolamento dagli altri studenti.", correct: false },
      { text: "Sostituire l’interazione umana con la tecnologia.", correct: false }
    ]
  },
  {
    question: "Qual è una delle abilità fondamentali per sviluppare la competenza 'Individuare bisogni e risposte tecnologiche'?",
    answers: [
      { text: "Analizzare le esigenze tecnologiche e identificare le soluzioni più adatte.", correct: true },
      { text: "Scrivere codici complessi per software.", correct: false },
      { text: "Gestire la contabilità dell'istituto.", correct: false },
      { text: "Organizzare eventi scolastici.", correct: false }
    ]
  },
  {
    question: "Cosa significa valutare le tecnologie disponibili per soddisfare le esigenze?",
    answers: [
      { text: "Selezionare le tecnologie più adeguate in base alle necessità rilevate.", correct: true },
      { text: "Acquistare la tecnologia più costosa disponibile.", correct: false },
      { text: "Ignorare le esigenze e usare sempre lo stesso strumento.", correct: false },
      { text: "Delegare completamente la scelta al reparto IT senza consultazioni.", correct: false }
    ]
  },
  {
    question: "Quale abilità riguarda l’uso di strumenti e metodologie per la valutazione delle esigenze tecnologiche?",
    answers: [
      { text: "Utilizzare strumenti e metodologie per valutare le esigenze tecnologiche.", correct: true },
      { text: "Sviluppare applicazioni mobile.", correct: false },
      { text: "Effettuare la manutenzione hardware.", correct: false },
      { text: "Gestire il personale scolastico.", correct: false }
    ]
  },
  {
    question: "Perché è importante comunicare efficacemente le esigenze tecnologiche e le soluzioni proposte?",
    answers: [
      { text: "Per garantire che tutti i soggetti coinvolti comprendano e supportino le soluzioni.", correct: true },
      { text: "Per evitare di dover collaborare con altri.", correct: false },
      { text: "Per limitare l’accesso alle informazioni.", correct: false },
      { text: "Per nascondere problemi tecnici.", correct: false }
    ]
  },
  {
    question: "Qual è lo scopo principale delle tecnologie assistive menzionate?",
    answers: [
      { text: "Migliorare l’accesso alle informazioni e ai contenuti online.", correct: true },
      { text: "Creare contenuti multimediali avanzati.", correct: false },
      { text: "Gestire i database scolastici.", correct: false },
      { text: "Organizzare eventi scolastici.", correct: false }
    ]
  },
  {
    question: "Quali sono esempi di tecnologie assistive per l’accesso ai contenuti online?",
    answers: [
      { text: "Lettori di schermo e strumenti di riconoscimento vocale.", correct: true },
      { text: "Software di contabilità e gestione magazzino.", correct: false },
      { text: "Programmi di grafica e video editing.", correct: false },
      { text: "Applicazioni per la gestione delle supplenze.", correct: false }
    ]
  },
  {
    question: "A cosa serve la riproduzione vocale per il parlato nelle tecnologie assistive?",
    answers: [
      { text: "Permette a persone con capacità di comunicazione orale limitata o inesistente di comunicare.", correct: true },
      { text: "Migliora la qualità audio delle registrazioni musicali.", correct: false },
      { text: "Supporta la traduzione automatica di testi.", correct: false },
      { text: "Facilita la gestione delle email.", correct: false }
    ]
  },
  {
    question: "Chi può beneficiare delle opzioni di riproduzione vocale per il parlato?",
    answers: [
      { text: "Persone con capacità di comunicazione orale limitata o inesistente.", correct: true },
      { text: "Solo gli insegnanti.", correct: false },
      { text: "Solo il personale amministrativo.", correct: false },
      { text: "Tutti gli studenti senza distinzione.", correct: false }
    ]
  },
  {
    question: "Qual è un uso pratico degli strumenti di riconoscimento vocale nelle tecnologie assistive?",
    answers: [
      { text: "Consentire la dettatura di testi per facilitare l’accesso alle informazioni.", correct: true },
      { text: "Creare presentazioni multimediali.", correct: false },
      { text: "Gestire le convocazioni nelle scuole.", correct: false },
      { text: "Effettuare backup dei dati scolastici.", correct: false }
    ]
  },

  							//nuovo blocco A_A1_Individuare_bisogni_slide
  {
    question: "Durante le operazioni di scrutinio finale del secondo quadrimestre, la piattaforma del registro elettronico va in crash. Quali competenze trasversali emergono nella gestione del problema?",
    answers: [
      { text: "Diagnostica tecnica, gestione del tempo e comunicazione interfunzionale.", correct: true },
      { text: "Programmazione informatica avanzata e design grafico.", correct: false },
      { text: "Competenze finanziarie e legali.", correct: false },
      { text: "Marketing e pubbliche relazioni.", correct: false }
    ]
  },
  {
    question: "Durante le operazioni di scrutinio finale del secondo quadrimestre, la piattaforma del registro elettronico va in crash. Qual è la prima fase dell’attività organizzata per affrontare il problema?",
    answers: [
      { text: "Pianificazione delle azioni alternative.", correct: false },
      { text: "Diagnosi del problema.", correct: true },
      { text: "Documentazione e chiusura del caso.", correct: false },
      { text: "Attivazione dei canali di supporto.", correct: false }
    ]
  },
  {
    question: "Durante le operazioni di scrutinio finale del secondo quadrimestre, la piattaforma del registro elettronico va in crash. Quali strumenti utilizza l’assistente amministrativo per affrontare il problema?",
    answers: [
      { text: "Browser con strumenti di diagnostica, software helpdesk, PEC, comunicazione interna, software per report.", correct: true },
      { text: "Solo telefono e posta ordinaria.", correct: false },
      { text: "Software di grafica e marketing.", correct: false },
      { text: "Software di contabilità e gestione magazzino.", correct: false }
    ]
  },
  {
    question: "Durante le operazioni di scrutinio finale del secondo quadrimestre, la piattaforma del registro elettronico va in crash. Chi viene aggiornato costantemente durante la gestione del problema?",
    answers: [
      { text: "Il DSGA.", correct: true },
      { text: "I docenti.", correct: false },
      { text: "Le famiglie.", correct: false },
      { text: "Il personale ATA.", correct: false }
    ]
  },
  {
    question: "Qual è la prima fascia costituita dal sistema GPS?",
    answers: [
      { text: "Docenti non abilitati ma con requisiti minimi.", correct: false },
      { text: "Docenti abilitati o specializzati.", correct: true },
      { text: "Docenti supplenti temporanei.", correct: false },
      { text: "Docenti di ruolo.", correct: false }
    ]
  },
  {
    question: "A cosa sono collegate le Graduatorie di Istituto?",
    answers: [
      { text: "Sono indipendenti dalle GPS.", correct: false },
      { text: "Sono collegate alle GPS e utilizzate per supplenze brevi e temporanee.", correct: true },
      { text: "Sono utilizzate solo per supplenze annuali.", correct: false },
      { text: "Sono utilizzate esclusivamente per il personale ATA.", correct: false }
    ]
  },
  {
    question: "Quale attività svolge l’assistente amministrativo nella prima posizione economica?",
    answers: [
      { text: "Organizza incontri formativi per il personale scolastico.", correct: false },
      { text: "Supporta gli aspiranti, verifica la completezza delle domande e pubblica le graduatorie nel rispetto della privacy.", correct: true },
      { text: "Gestisce i contratti di supplenza.", correct: false },
      { text: "Svolge attività di monitoraggio delle cattedre scoperte.", correct: false }
    ]
  },
  {
    question: "Quale attività è prevista nel processo di gestione interna ed esterna della seconda posizione economica?",
    answers: [
      { text: "Solo pubblicazione delle graduatorie.", correct: false },
      { text: "Monitoraggio delle cattedre scoperte, gestione supplenze brevi e accertamento titoli tramite SIDI.", correct: true },
      { text: "Supporto agli aspiranti con chatbot dedicati.", correct: false },
      { text: "Verifica formale delle domande e assegnazione punteggi.", correct: false }
    ]
  },
  {
    question: "Quale piattaforma utilizza l’assistente amministrativo per l’accesso e la profilatura?",
    answers: [
      { text: "Piattaforma esterna di gestione documentale.", correct: false },
      { text: "SIDI (Sistema Informativo dell'Istruzione).", correct: true },
      { text: "Sistema di posta elettronica certificata.", correct: false },
      { text: "Forum online dedicati al personale.", correct: false }
    ]
  },
  {
    question: "Quali sono le due fasce principali costituite dal sistema GPS?",
    answers: [
      { text: "Prima fascia: docenti non abilitati; Seconda fascia: docenti abilitati.", correct: false },
      { text: "Prima fascia: docenti abilitati o specializzati; Seconda fascia: docenti non ancora abilitati ma con requisiti minimi.", correct: true },
      { text: "Prima fascia: docenti supplenti; Seconda fascia: docenti di ruolo.", correct: false },
      { text: "Prima fascia: insegnanti temporanei; Seconda fascia: insegnanti permanenti.", correct: false }
    ]
  },
  {
    question: "Per quali tipi di supplenze sono utilizzate le GPS?",
    answers: [
      { text: "Supplenze brevi e temporanee.", correct: false },
      { text: "Supplenze annuali o fino al termine delle attività didattiche.", correct: true },
      { text: "Solo supplenze annuali.", correct: false },
      { text: "Solo supplenze per personale ATA.", correct: false }
    ]
  },
  {
    question: "Qual è il ruolo dell’assistente amministrativo nella prima posizione economica riguardo alla valutazione delle istanze GPS?",
    answers: [
      { text: "Gestisce la pubblicazione dei contratti di lavoro.", correct: false },
      { text: "Partecipa a incontri formativi, supporta gli aspiranti, controlla formalmente le domande, assegna punteggi e pubblica le graduatorie.", correct: true },
      { text: "Coordina le supplenze tra scuole e UST.", correct: false },
      { text: "Monitora le assenze del personale docente.", correct: false }
    ]
  },
  {
    question: "Cosa comprende la gestione interna ed esterna nella seconda posizione economica?",
    answers: [
      { text: "Solo la gestione delle supplenze brevi.", correct: false },
      { text: "Organizzazione di incontri formativi, monitoraggio delle cattedre scoperte, accesso a SIDI, gestione convocazioni e contratti, e accertamento titoli.", correct: true },
      { text: "Solo la pubblicazione delle graduatorie.", correct: false },
      { text: "Solo la gestione delle comunicazioni con i docenti.", correct: false }
    ]
  },
  {
    question: "Quale sistema è utilizzato per la gestione documentale nella Prima posizione economica?",
    answers: [
      { text: "Protocollo Informatico", correct: false },
      { text: "Sistema proprietario per la gestione documentale", correct: true },
      { text: "SIDI area convocazioni", correct: false },
      { text: "Firma elettronica avanzata", correct: false }
    ]
  },
  {
    question: "Quale sistema informativo è utilizzato per la valutazione GPS nella Prima posizione economica?",
    answers: [
      { text: "SIDI area valutazione GPS", correct: true },
      { text: "Piattaforme di gestione del personale", correct: false },
      { text: "Sistema proprietario per la gestione documentale", correct: false },
      { text: "Protocollo Informatico", correct: false }
    ]
  },
  {
    question: "Quale sistema di posta è utilizzato nella gestione della Prima posizione economica?",
    answers: [
      { text: "Solo posta elettronica certificata", correct: false },
      { text: "Posta elettronica ordinaria e certificata", correct: true },
      { text: "Solo posta cartacea", correct: false },
      { text: "Nessun sistema di posta", correct: false }
    ]
  },
  {
    question: "A cosa servono le piattaforme di comunicazione e collaborazione nella Prima posizione economica?",
    answers: [
      { text: "Per facilitare la comunicazione interna tra uffici e scuole", correct: true },
      { text: "Per inviare solo comunicazioni esterne", correct: false },
      { text: "Per la gestione solo delle graduatorie", correct: false },
      { text: "Per la gestione esclusiva del personale", correct: false }
    ]
  },
  {
    question: "Quali strumenti online possono aiutare lo scambio di informazioni e aggiornamenti nella Prima posizione economica?",
    answers: [
      { text: "Gruppi e forum online", correct: true },
      { text: "Solo e-mail", correct: false },
      { text: "Solo incontri in presenza", correct: false },
      { text: "Solo comunicazioni telefoniche", correct: false }
    ]
  },
  {
    question: "Quale strumento in più è previsto per la Seconda posizione economica rispetto alla Prima?",
    answers: [
      { text: "Firma elettronica avanzata per la sottoscrizione dei contratti", correct: true },
      { text: "Sistema proprietario per la gestione documentale", correct: false },
      { text: "Protocollo Informatico", correct: false },
      { text: "SIDI area valutazione GPS", correct: false }
    ]
  },
  {
    question: "Quale piattaforma aggiuntiva è utilizzata nella Seconda posizione economica per la gestione del personale?",
    answers: [
      { text: "Piattaforme di gestione del personale", correct: true },
      { text: "Piattaforme di collaborazione tra uffici", correct: false },
      { text: "SIDI area valutazione GPS", correct: false },
      { text: "Forum online", correct: false }
    ]
  },
  {
    question: "Quali aree copre il sistema SIDI nella Seconda posizione economica?",
    answers: [
      { text: "Valutazione GPS, Convocazioni, Gestione Giuridica e Retributiva contratti", correct: true },
      { text: "Solo valutazione GPS", correct: false },
      { text: "Solo convocazioni", correct: false },
      { text: "Solo gestione documentale", correct: false }
    ]
  },
  {
    question: "Qual è uno degli obiettivi nella gestione efficiente delle graduatorie (Seconda posizione economica)?",
    answers: [
      { text: "Ignorare la verifica dei titoli", correct: false },
      { text: "Ottimizzare i processi per la verifica e validazione dei titoli e punteggi", correct: true },
      { text: "Aumentare i tempi di attesa per la firma dei contratti", correct: false },
      { text: "Evitare il coordinamento tra uffici", correct: false }
    ]
  },
  {
    question: "Come si migliora il coordinamento tra UST e scuole nella gestione delle graduatorie?",
    answers: [
      { text: "Utilizzando canali di comunicazione fluidi come messaggistica ed e-mail", correct: true },
      { text: "Spostando tutte le comunicazioni su carta", correct: false },
      { text: "Limitando la comunicazione ai soli dirigenti", correct: false },
      { text: "Evitate comunicazioni tra uffici", correct: false }
    ]
  },
  {
    question: "Cosa implica la comunicazione trasparente nelle procedure GPS?",
    answers: [
      { text: "Gestire i dati in maniera trasparente evitando modalità analogiche", correct: true },
      { text: "Nascondere informazioni agli aspiranti", correct: false },
      { text: "Non comunicare nulla agli utenti", correct: false },
      { text: "Comunicare solo tramite incontri in presenza", correct: false }
    ]
  },
  {
    question: "Quale supporto è previsto per il problem solving agli aspiranti GPS?",
    answers: [
      { text: "FAQ e chatbot dedicati", correct: true },
      { text: "Solo incontri telefonici", correct: false },
      { text: "Nessun supporto", correct: false },
      { text: "Solo comunicazioni via fax", correct: false }
    ]
  },
  {
    question: "Cosa si intende per monitoraggio e feedback nella gestione GPS?",
    answers: [
      { text: "Raccogliere dati sulle assegnazioni e feedback per migliorare il sistema", correct: true },
      { text: "Ignorare i dati raccolti", correct: false },
      { text: "Raccogliere solo dati senza analisi", correct: false },
      { text: "Non raccogliere feedback dagli aspiranti", correct: false }
    ]
  },
  {
    question: "Come si tutela la privacy nell’individuazione del personale supplente?",
    answers: [
      { text: "Gestendo con attenzione le informazioni personali", correct: true },
      { text: "Pubblicando tutte le informazioni personali", correct: false },
      { text: "Non proteggendo alcun dato", correct: false },
      { text: "Diffondendo i dati solo via e-mail", correct: false }
    ]
  },
  {
    question: "Qual è l’uso delle firme elettroniche nella gestione GPS (Seconda posizione economica)?",
    answers: [
      { text: "Per la contrattualizzazione e conservazione digitale", correct: true },
      { text: "Solo per la firma cartacea", correct: false },
      { text: "Non sono utilizzate firme elettroniche", correct: false },
      { text: "Solo per la comunicazione interna", correct: false }
    ]
  },
  {
    question: "Quale formazione è prevista per il personale coinvolto nella gestione GPS?",
    answers: [
      { text: "Formazione su normativa e strumenti tecnologici", correct: true },
      { text: "Nessuna formazione", correct: false },
      { text: "Solo formazione informale tra colleghi", correct: false },
      { text: "Formazione solo su strumenti cartacei", correct: false }
    ]
  },
  {
    question: "Cosa presuppone l’approccio al sistema GPS da parte degli assistenti amministrativi?",
    answers: [
      { text: "La consapevolezza dell’importanza della gestione dei dati e dell’uso delle tecnologie disponibili.", correct: true },
      { text: "La riduzione dell’utilizzo di tecnologie per evitare errori.", correct: false },
      { text: "L’eliminazione delle procedure cartacee senza controllo umano.", correct: false },
      { text: "L’uso esclusivo di strumenti analogici per garantire la sicurezza.", correct: false }
    ]
  },
  {
    question: "Qual è una delle strategie operative per la gestione efficiente delle istanze GPS (Prima posizione economica)?",
    answers: [
      { text: "Ignorare la privacy degli utenti", correct: false },
      { text: "Gestione e analisi dei dati personali", correct: true },
      { text: "Evitare la formazione del personale", correct: false },
      { text: "Non fornire supporto agli aspiranti", correct: false }
    ]
  },
  {
    question: "Cosa significa comunicazione trasparente nella gestione delle istanze GPS?",
    answers: [
      { text: "Non condividere alcuna informazione con gli utenti", correct: false },
      { text: "Trasparenza nelle procedure attraverso la gestione dei dati personali degli istanti", correct: true },
      { text: "Diffondere tutte le informazioni senza filtri", correct: false },
      { text: "Limitare la comunicazione ai soli docenti abilitati", correct: false }
    ]
  },
  {
    question: "Quale strumento di supporto è menzionato per il problem solving degli aspiranti GPS?",
    answers: [
      { text: "FAQ e chatbot dedicati", correct: true },
      { text: "Supporto telefonico senza limiti", correct: false },
      { text: "Solo email", correct: false },
      { text: "Incontri settimanali obbligatori", correct: false }
    ]
  },
  {
    question: "Quale precauzione viene adottata nella pubblicazione delle graduatorie GPS per tutelare la privacy?",
    answers: [
      { text: "Limitare la diffusione delle informazioni personali degli utenti", correct: true },
      { text: "Pubblicare tutte le informazioni senza filtro", correct: false },
      { text: "Condividere solo con i dirigenti scolastici", correct: false },
      { text: "Non pubblicare le graduatorie", correct: false }
    ]
  },
  {
    question: "Cosa comprende la formazione interna del personale per la gestione delle istanze GPS?",
    answers: [
      { text: "Normativa e utilizzo degli strumenti tecnologici", correct: true },
      { text: "Solo la normativa senza strumenti tecnologici", correct: false },
      { text: "Solo formazione informale tra colleghi", correct: false },
      { text: "Nessuna formazione è prevista", correct: false }
    ]
  },
// nuovo blocco A1 Q testo caso
  {
    question: "Qual è il problema principale che rallenta l’attività della segreteria?",
    answers: [
      { text: "Il numero crescente di comunicazioni scolastiche da predisporre manualmente.", correct: true },
      { text: "La mancanza di personale qualificato.", correct: false },
      { text: "L’uso di strumenti informatici obsoleti.", correct: false },
      { text: "La scarsa collaborazione tra docenti e segreteria.", correct: false }
    ]
  },
  {
    question: "Cosa propone il DSGA per velocizzare la predisposizione delle comunicazioni?",
    answers: [
      { text: "Assumere più personale amministrativo.", correct: false },
      { text: "Testare un assistente virtuale come ChatGPT per generare bozze di documenti.", correct: true },
      { text: "Ridurre il numero di comunicazioni da inviare.", correct: false },
      { text: "Utilizzare modelli cartacei precompilati.", correct: false }
    ]
  },
  {
    question: "Quali passaggi sono previsti nell’articolazione dell’attività di gestione delle comunicazioni?",
    answers: [
      { text: "Selezione della comunicazione, predisposizione del prompt, revisione e approvazione del testo.", correct: true },
      { text: "Predisposizione del testo, invio e archiviazione.", correct: false },
      { text: "Redazione, pubblicazione e feedback.", correct: false },
      { text: "Formazione del personale, test del sistema e monitoraggio.", correct: false }
    ]
  },
  {
    question: "Qual è il compito della prima posizione economica nell’uso dell’assistente virtuale?",
    answers: [
      { text: "Redigere la bozza della circolare, correggerla e inviarla al DSGA per la pubblicazione.", correct: true },
      { text: "Gestire la pubblicazione della circolare sul sito web della scuola.", correct: false },
      { text: "Sviluppare l’immagine da pubblicare insieme alla comunicazione.", correct: false },
      { text: "Monitorare il rispetto delle normative sulla privacy.", correct: false }
    ]
  },
  {
    question: "Quale ulteriore responsabilità ha la seconda posizione economica?",
    answers: [
      { text: "Gestire la pubblicazione della circolare sul sito web della scuola e predisporre un articolo divulgativo corredato da immagine IA.", correct: true },
      { text: "Solo redigere la bozza della circolare interna.", correct: false },
      { text: "Controllare la correttezza formale del testo scritto dall’assistente virtuale.", correct: false },
      { text: "Organizzare corsi di formazione per il personale.", correct: false }
    ]
  },
  {
    question: "Come deve essere scritto l’articolo pubblicato sul sito web dalla seconda posizione economica?",
    answers: [
      { text: "In forma accessibile e divulgativa per facilitare la comprensione dell’utenza.", correct: true },
      { text: "In stile tecnico e dettagliato per gli addetti ai lavori.", correct: false },
      { text: "Con un linguaggio formale e burocratico.", correct: false },
      { text: "In modo sintetico e con abbreviazioni.", correct: false }
    ]
  },

//nuovo blocco domande da interazione IA
    {
        question: "A cosa corrisponde l'AI Act?",
        answers: [
            { text: "Regolamento europeo 2024/1689 sull’intelligenza artificiale. Definisce principi, obblighi e classificazione dei sistemi di IA in base al rischio per i diritti fondamentali.", correct: true },
            { text: "Protocollo ONU sul controllo delle esportazioni di tecnologie IA.", correct: false },
            { text: "Legge italiana del 2023 sull’uso delle piattaforme digitali nella PA.", correct: false },
            { text: "Documento tecnico dell’IEEE sugli standard di machine learning.", correct: false }
        ]
    },{
        question: "Cosa si intende con Autonomia operativa?",
        answers: [
            { text: "Capacità di un sistema di IA di raccogliere dati, analizzarli e produrre output senza istruzioni predefinite o controllo diretto umano.", correct: true },
            { text: "Uso di robot per svolgere mansioni senza supervisione umana per lunghi periodi.", correct: false },
            { text: "Capacità di un drone di ricaricare le proprie batterie in autonomia.", correct: false },
            { text: "Modalità di esecuzione offline di un software di IA.", correct: false }
        ]
    },{
        question: "Cosa si intende con Bias?",
        answers: [
            { text: "Distorsione nei dati o negli algoritmi che può portare il sistema a produrre risultati discriminatori o non attendibili.", correct: true },
            { text: "Processo di bilanciamento delle classi nei dati di addestramento.", correct: false },
            { text: "Tecnica per ottimizzare la velocità di calcolo degli algoritmi IA.", correct: false },
            { text: "Parametro che indica il margine di errore di un modello predittivo.", correct: false }
        ]
    },{
        question: "Cosa si intende con Chatbot?",
        answers: [
            { text: "Assistente virtuale che utilizza l’IA per rispondere automaticamente a domande o fornire informazioni, simulando un dialogo con un essere umano.", correct: true },
            { text: "Sistema di IA specializzato nell’analisi dei dati testuali.", correct: false },
            { text: "Software per il riconoscimento vocale in tempo reale.", correct: false },
            { text: "Algoritmo per la traduzione automatica di testi.", correct: false }
        ]
    },{
        question: "Cosa si intende con Classificazione del rischio?",
        answers: [
            { text: "Sistema di categorizzazione dell’IA previsto dall’AI Act: rischio inaccettabile (vietato), alto (regolato), limitato (trasparente), minimo o nullo (non regolato).", correct: true },
            { text: "Procedura interna per valutare il rischio informatico di un’applicazione.", correct: false },
            { text: "Metodo di classificazione dei dati sensibili previsto dal GDPR.", correct: false },
            { text: "Scala di valutazione dell’impatto ambientale di un sistema IA.", correct: false }
        ]
    },{
        question: "Cosa si intende con Generatore di testo?",
        answers: [
            { text: "Strumento di IA capace di creare testi coerenti e pertinenti a partire da un prompt, utile per bozze, riassunti o comunicazioni.", correct: true },
            { text: "Software per la sintesi vocale.", correct: false },
            { text: "Sistema di riconoscimento ottico dei caratteri (OCR).", correct: false },
            { text: "Modulo di IA per la traduzione automatica di testi.", correct: false }
        ]
    },{
        question: "Cosa si intende con GDPR?",
        answers: [
            { text: "Regolamento generale sulla protezione dei dati personali. Impone limiti all’uso di dati sensibili, anche da parte dei sistemi di IA.", correct: true },
            { text: "Normativa europea sul commercio elettronico.", correct: false },
            { text: "Regolamento UE sulla sicurezza dei prodotti elettronici.", correct: false },
            { text: "Accordo internazionale sullo scambio di dati tra governi.", correct: false }
        ]
    },{
        question: "Cosa si intende con Mappatura degli strumenti?",
        answers: [
            { text: "Attività interna alla scuola per identificare, elencare e monitorare gli strumenti di IA in uso, anche se a basso rischio.", correct: true },
            { text: "Registro nazionale delle applicazioni IA autorizzate.", correct: false },
            { text: "Analisi dei costi dei software utilizzati in un ente pubblico.", correct: false },
            { text: "Inventario dei dispositivi hardware presenti in un laboratorio.", correct: false }
        ]
    },{
        question: "Cosa si intende con Output?",
        answers: [
            { text: "Risultato generato da un sistema di IA in risposta a un comando o a un input fornito dall’utente.", correct: true },
            { text: "Processo di addestramento di un modello IA.", correct: false },
            { text: "Set di dati utilizzato per testare un algoritmo.", correct: false },
            { text: "Fase di raccolta dei dati per un sistema IA.", correct: false }
        ]
    },{
        question: "Cosa si intende con Prompt?",
        answers: [
            { text: "Comando o domanda inserita in un sistema di IA per generare una risposta o attivare una funzione. È l’elemento chiave per interagire efficacemente con l’intelligenza artificiale.", correct: true },
            { text: "Formato di esportazione dei dati da un sistema IA.", correct: false },
            { text: "Protocollo di comunicazione tra due sistemi informatici.", correct: false },
            { text: "Parametro di configurazione di un algoritmo.", correct: false }
        ]
    },{
        question: "Cosa si intende con Supervisione umana?",
        answers: [
            { text: "Principio secondo cui ogni decisione automatizzata deve poter essere compresa, verificata e controllata da una persona in carne ed ossa.", correct: true },
            { text: "Monitoraggio delle prestazioni di un server IA.", correct: false },
            { text: "Gestione manuale di un database scolastico.", correct: false },
            { text: "Revisione periodica delle licenze software.", correct: false }
        ]
    },{
        question: "Cosa si intende con Tracciabilità?",
        answers: [
            { text: "Caratteristica richiesta ai sistemi di IA per permettere la ricostruzione dei processi decisionali e garantire trasparenza e responsabilità.", correct: true },
            { text: "Sistema di localizzazione GPS integrato in robot e droni.", correct: false },
            { text: "Metodo di autenticazione a due fattori per l’accesso ai sistemi IA.", correct: false },
            { text: "Registro dei dipendenti autorizzati a usare un’applicazione IA.", correct: false }
        ]
    },
//nuovo blocco Sistemi di IA glossario
   {
    question: "A cosa si riferisce l'identità digitale?",
    answers: [
      { text: "Il metodo di autenticazione di un utente su un sito web o un servizio, nonché un insieme di dati che identificano un utente attraverso il tracciamento delle sue attività digitali, azioni e contributi su Internet o sui dispositivi digitali", correct: true },
      { text: "Il numero di telefono assegnato da un operatore mobile", correct: false },
      { text: "Il sistema di sicurezza fisica di un edificio", correct: false },
      { text: "Il codice fiscale di un cittadino", correct: false }
    ]
  },{
    question: "Come si proteggono i dati personali e la privacy?",
    answers: [
      { text: "Individuare e cestinare i messaggi di posta elettronica sospetti che cercano di ottenere informazioni e dati sensibili", correct: true },
      { text: "Condividere le password solo con familiari e amici", correct: false },
      { text: "Salvare tutte le informazioni su cloud pubblici senza crittografia", correct: false },
      { text: "Usare solo reti Wi-Fi pubbliche per accedere ai dati sensibili", correct: false }
    ]
  },{
    question: "Quali le responsabilità degli assistenti nell'uso della propria identità digitale?",
    answers: [
      { text: "Custodire e usare consapevolmente le credenziali di accesso alle piattaforme digitali", correct: true },
      { text: "Condividere le password con i colleghi per facilitare il lavoro", correct: false },
      { text: "Usare l'identità digitale per scopi personali durante l’orario di lavoro", correct: false },
      { text: "Ignorare gli avvisi di sicurezza perché non rilevanti", correct: false }
    ]
  },{
    question: "Quale modalità di comunicazione formale può essere adottata dall'assistente amministrativo per informare il dirigente scolastico del malfunzionamento?",
    answers: [
      { text: "La posta istituzionale (e-mail)", correct: true },
      { text: "Messaggio WhatsApp personale", correct: false },
      { text: "Chiamata informale senza documentazione", correct: false },
      { text: "Post su social media", correct: false }
    ]
  },{
    question: "Quale delle seguenti è una delle prime azioni da compiere per diagnosticare il malfunzionamento del registro elettronico?",
    answers: [
      { text: "Controllare le credenziali e provare l'accesso da un browser alternativo", correct: true },
      { text: "Spegnere e riaccendere il computer senza ulteriori controlli", correct: false },
      { text: "Ignorare il problema e continuare il lavoro manualmente", correct: false },
      { text: "Disinstallare e reinstallare il sistema operativo", correct: false }
    ]
  },{
    question: "In caso di crash del registro elettronico durante gli scrutini, quale strumento può essere utilizzato per creare un backup dei dati?",
    answers: [
      { text: "Un documento Excel condiviso su Google for Education", correct: true },
      { text: "Stampare a mano tutte le pagine del registro elettronico", correct: false },
      { text: "Utilizzare un software di grafica per ricostruire i dati", correct: false },
      { text: "Salvare le informazioni solo su un disco esterno non connesso a internet", correct: false }
    ]
  },{
    question: "Perché è importante essere attenti e tempestivi nella sistemazione di una posizione assicurativa?",
    answers: [
      { text: "Garantire trasparenza, efficienza e tracciabilità della spesa pubblica", correct: true },
      { text: "Per ricevere bonus personali", correct: false },
      { text: "Per evitare di dover lavorare in futuro", correct: false },
      { text: "Per non dover utilizzare strumenti digitali", correct: false }
    ]
  },{
    question: "Quale piattaforma viene utilizzata per effettuare l'indagine di mercato e predisporre ordini richieste di offerta nella procedura di acquisto digitale?",
    answers: [
      { text: "MePA - Mercato Elettronico della Pubblica Amministrazione", correct: true },
      { text: "Amazon Business", correct: false },
      { text: "Facebook Marketplace", correct: false },
      { text: "Ebay", correct: false }
    ]
  },{
    question: "In quale fase del processo l'Assistente Amministrativo utilizza la PEC per sollecitare il pagamento al fornitore, seguendo un template predefinito?",
    answers: [
      { text: "Fase 4 - Contabilizzazione e Archiviazione", correct: true },
      { text: "Fase 1 - Richiesta d’acquisto", correct: false },
      { text: "Fase 2 - Negoziazione prezzi", correct: false },
      { text: "Fase 3 - Controllo magazzino", correct: false }
    ]
  },{
    question: "Secondo l'AI Act, quale sistema di IA rientra nella categoria a rischio alto in ambito scolastico?",
    answers: [
      { text: "Un sistema usato per la protocollo automatica delle comunicazioni in entrata", correct: true },
      { text: "Un assistente vocale per rispondere alle domande degli studenti", correct: false },
      { text: "Un software di videoscrittura", correct: false },
      { text: "Un'app per la gestione del calendario scolastico", correct: false }
    ]
  },{
    question: "Qual è uno dei principi fondamentali previsti dal Regolamento europeo sull'uso dell'IA nella Pubblica Amministrazione?",
    answers: [
      { text: "Supervisione umana delle decisioni automatizzate", correct: true },
      { text: "Automazione totale senza intervento umano", correct: false },
      { text: "Eliminazione di tutte le figure professionali umane", correct: false },
      { text: "Libertà di condividere dati sensibili senza restrizioni", correct: false }
    ]
  },{
    question: "In quale caso l'uso dell'IA nei processi amministrativi scolastici può comportare rischi significativi?",
    answers: [
      { text: "Per elaborazione dati sensibili non anonimizzati su piattaforme pubbliche", correct: true },
      { text: "Per uso di software antivirus aggiornati", correct: false },
      { text: "Per backup frequenti dei dati", correct: false },
      { text: "Per uso di reti interne protette", correct: false }
    ]
  },{
    question: "Qual è la piattaforma utilizzata dagli assistenti amministrativi per la valutazione delle domande di inserimento/aggiornamento nelle GPS?",
    answers: [
      { text: "SIDI (Sistema Informativo Dell'Istruzione)", correct: true },
      { text: "Google Classroom", correct: false },
      { text: "Moodle", correct: false },
      { text: "Microsoft Teams", correct: false }
    ]
  },{
    question: "Quale canale di comunicazione è più frequentemente utilizzato dalle scuole per interpellare gli aspiranti docenti per le supplenze brevi e saltuarie dalle Graduatorie di Istituto?",
    answers: [
      { text: "L'invio di e-mail (anche PEC) o comunicazioni tramite piattaforme gestionali scolastiche", correct: true },
      { text: "Telefonate informali", correct: false },
      { text: "Messaggi su WhatsApp personali", correct: false },
      { text: "Annunci su social media", correct: false }
    ]
  },{
    question: "Quale strumento di sottoscrizione dei contratti è richiesto?",
    answers: [
      { text: "Firma elettronica avanzata", correct: true },
      { text: "Firma autografa scannerizzata", correct: false },
      { text: "Firma su foglio bianco", correct: false },
      { text: "Firma digitale con semplice immagine", correct: false }
    ]
  },{
    question: "Autenticazione a due fattori che cosa è?",
    answers: [
      { text: "È un metodo di sicurezza che richiede due forme di identificazione per accedere a un account o sistema, oltre alla tradizionale password. Viene richiesto un secondo \"fattore\" per verificare l'identità dell'utente, come un codice inviato via SMS, un codice generato da un'app di autenticazione, o una chiave hardware", correct: true },
      { text: "Un metodo che permette di usare la stessa password per due account diversi", correct: false },
      { text: "Un codice inviato solo una volta alla registrazione", correct: false },
      { text: "Un sistema che richiede solo la password senza altri controlli", correct: false }
    ]
  },{
    question: "Cosa sono i data center?",
    answers: [
      { text: "I data center sono centri che svolgono un ruolo fondamentale nel garantire un processo di backup e ripristino dati senza interruzioni nelle aziende e nelle pubbliche Amministrazioni", correct: true },
      { text: "Centri sportivi per la formazione digitale", correct: false },
      { text: "Postazioni di lavoro per sviluppatori software", correct: false },
      { text: "Sistemi per l’eliminazione definitiva dei dati", correct: false }
    ]
  },{
    question: "Cosa significa GDPR?",
    answers: [
      { text: "General Data Protection Regulation, il regolamento europeo per la protezione dei dati personali", correct: true },
      { text: "Gestione dei dati pubblici regionali", correct: false },
      { text: "Gruppo di discussione per la privacy", correct: false },
      { text: "Gestione dati personali regionali", correct: false }
    ]
  },{
    question: "Chi è il DPO?",
    answers: [
      { text: "Il Data Protection Officer, ovvero il responsabile della protezione dei dati personali all'interno dell'organizzazione", correct: true },
      { text: "Un tecnico informatico responsabile delle reti", correct: false },
      { text: "Un docente che si occupa di sicurezza in classe", correct: false },
      { text: "Un funzionario amministrativo incaricato della contabilità", correct: false }
    ]
  },

//nuovo blocco da wzapp
{
    question: "Che cosa si intende per accessibilità digitale?",
    answers: [
      { text: "La possibilità di utilizzare strumenti informatici da parte di persone con disabilità, garantendo la fruibilità tramite tecnologie assistive", correct: true },
      { text: "L'accesso esclusivo a software proprietari", correct: false },
      { text: "L'uso di dispositivi mobili per ogni utente", correct: false },
      { text: "La creazione di contenuti solo per utenti esperti", correct: false }
    ]
  },
  {
    question: "A cosa serve un'app di gestione/monitoraggio in un sistema tecnologico?",
    answers: [
      { text: "Monitorare dati da sensori, visualizzare attività storiche e modificare impostazioni da remoto", correct: true },
      { text: "Giocare a videogiochi", correct: false },
      { text: "Effettuare chiamate vocali", correct: false },
      { text: "Gestire solo la sicurezza fisica", correct: false }
    ]
  },
  {
    question: "Qual è la funzione della centralina di controllo programmabile?",
    answers: [
      { text: "Riceve dati dai sensori e comanda l’attivazione o disattivazione dell’impianto secondo regole impostate", correct: true },
      { text: "Archivia dati storici senza alcuna azione", correct: false },
      { text: "Genera energia elettrica", correct: false },
      { text: "Gestisce solo la connessione internet", correct: false }
    ]
  },
  {
    question: "Per cosa si utilizza un foglio di calcolo nella gestione tecnologica?",
    answers: [
      { text: "Per pianificare budget di spesa e confrontare i costi dei componenti tecnologici", correct: true },
      { text: "Per creare presentazioni multimediali", correct: false },
      { text: "Per modificare immagini", correct: false },
      { text: "Per navigare in Internet", correct: false }
    ]
  },
  {
    question: "Cos’è l’irrigazione intelligente?",
    answers: [
      { text: "Una strategia che usa la tecnologia per automatizzare e ottimizzare l’apporto idrico", correct: true },
      { text: "Un metodo manuale tradizionale di irrigazione", correct: false },
      { text: "Una tecnica per aumentare l’uso di acqua senza controllo", correct: false },
      { text: "Un sistema per irrigare solo terreni artificiali", correct: false }
    ]
  },
  {
    question: "Cosa si intende con cloud computing?",
    answers: [
      { text: "Erogazione di servizi informatici tramite Internet, accessibili da diversi dispositivi", correct: true },
      { text: "Uso esclusivo di computer desktop", correct: false },
      { text: "Archiviazione di dati solo su dischi locali", correct: false },
      { text: "Un sistema operativo per smartphone", correct: false }
    ]
  },
  {
    question: "Qual è il significato di digital transformation (trasformazione digitale)?",
    answers: [
      { text: "Processo di integrazione delle tecnologie digitali in ogni ambito di un’organizzazione o della vita quotidiana", correct: true },
      { text: "Solo l’acquisto di nuovi computer", correct: false },
      { text: "La creazione di siti web statici", correct: false },
      { text: "Il processo di stampa di documenti digitali", correct: false }
    ]
  },
  {
    question: "Che cos’è l’intelligenza artificiale (AI)?",
    answers: [
      { text: "Sistemi informatici che eseguono compiti richiedenti intelligenza umana come apprendimento e ragionamento", correct: true },
      { text: "Un software per creare grafici", correct: false },
      { text: "Un tipo di hardware per computer", correct: false },
      { text: "Un’app per inviare messaggi vocali", correct: false }
    ]
  },
  {
    question: "Qual è il ruolo di Internet nella competenza 5.2?",
    answers: [
      { text: "È la rete globale fondamentale per ricercare, confrontare e accedere alle risposte tecnologiche ai bisogni", correct: true },
      { text: "È un social network per utenti professionali", correct: false },
      { text: "Serve solo per scaricare software", correct: false },
      { text: "È un’app per gestione di contatti", correct: false }
    ]
  },
  {
    question: "Cosa si intende con Internet of Things (IoT)?",
    answers: [
      { text: "Rete di oggetti fisici con sensori e connessione a Internet che raccolgono e scambiano dati", correct: true },
      { text: "Un nuovo tipo di smartphone", correct: false },
      { text: "Un software per la gestione di database", correct: false },
      { text: "Un’app di messaggistica istantanea", correct: false }
    ]
  },
  {
    question: "Quali sono i vantaggi del software open source?",
    answers: [
      { text: "Codice pubblico, modificabile e distribuibile liberamente, con vantaggi in costi, personalizzazione e trasparenza", correct: true },
      { text: "Software a pagamento con licenza chiusa", correct: false },
      { text: "Programmi usati solo per videogiochi", correct: false },
      { text: "Software che non permette modifiche al codice", correct: false }
    ]
  },
  {
    question: "Cosa rappresenta il problem solving in ambito digitale?",
    answers: [
      { text: "Il processo cognitivo di affrontare e risolvere problemi usando strumenti digitali", correct: true },
      { text: "Solo la scrittura di codice", correct: false },
      { text: "La semplice installazione di software", correct: false },
      { text: "L’acquisto di hardware avanzato", correct: false }
    ]
  },
  {
    question: "Che cosa si intende per Software as a Service (SaaS)?",
    answers: [
      { text: "Modello in cui un software è ospitato da un fornitore e disponibile via Internet, spesso tramite abbonamento", correct: true },
      { text: "Software installato solo su singolo dispositivo senza rete", correct: false },
      { text: "Un sistema operativo open source", correct: false },
      { text: "Un programma di grafica professionale", correct: false }
    ]
  },
  {
    question: "Cos’è la tecnologia assistiva?",
    answers: [
      { text: "Strumenti e sistemi che aiutano persone con disabilità a superare barriere funzionali e migliorare autonomia", correct: true },
      { text: "Tecnologie usate solo in ambito industriale", correct: false },
      { text: "Software per videogiochi", correct: false },
      { text: "Dispositivi per aumentare la velocità di internet", correct: false }
    ]
  },
//nuovo blocco
{
    question: "Qual è il principale vantaggio del passaggio da una gestione cartacea a una gestione digitale degli acquisti nella Pubblica Amministrazione?",
    answers: [
      { text: "Garantire trasparenza, efficienza e tracciabilità della spesa", correct: true },
      { text: "Ridurre il numero di fornitori disponibili", correct: false },
      { text: "Eliminare completamente i controlli amministrativi", correct: false },
      { text: "Aumentare l'uso della carta per la documentazione", correct: false }
    ]
  },
  {
    question: "Quali piattaforme digitali sono utilizzate per la gestione degli acquisti nella PA secondo il testo?",
    answers: [
      { text: "MePA e Piattaforma Certificazione Crediti", correct: true },
      { text: "Facebook e Instagram", correct: false },
      { text: "Spotify e Netflix", correct: false },
      { text: "Google Drive e Dropbox", correct: false }
    ]
  },
  {
    question: "Qual è il ruolo principale dell’Assistente Amministrativo in Prima Posizione Economica nel processo digitale di acquisto?",
    answers: [
      { text: "Eseguire compiti esecutivi come caricare documenti e inviare PEC da modelli predefiniti", correct: true },
      { text: "Gestire l’intero processo decisionale e negoziare i contratti", correct: false },
      { text: "Creare piattaforme digitali per la PA", correct: false },
      { text: "Effettuare ispezioni negli uffici fornitori", correct: false }
    ]
  },
  {
    question: "Quali strumenti digitali garantiscono la tracciabilità e la sicurezza nelle comunicazioni con i fornitori?",
    answers: [
      { text: "Posta Elettronica Certificata (PEC) e Firma Digitale", correct: true },
      { text: "Chat di WhatsApp e Messenger", correct: false },
      { text: "SMS e chiamate telefoniche", correct: false },
      { text: "Fax tradizionale", correct: false }
    ]
  },
  {
    question: "In che modo l’Assistente Amministrativo in Seconda Posizione Economica contribuisce al raggiungimento del risultato?",
    answers: [
      { text: "Gestendo e supervisionando il processo, proponendo soluzioni e valutando offerte", correct: true },
      { text: "Solo eseguendo ordini senza alcuna autonomia", correct: false },
      { text: "Organizzando eventi aziendali per i fornitori", correct: false },
      { text: "Redigendo bilanci annuali", correct: false }
    ]
  },
  {
    question: "Come si articola il processo di acquisto digitale nella PA?",
    answers: [
      { text: "Rilevazione fabbisogno, indagine di mercato e ordine, esecuzione e monitoraggio, contabilizzazione e archiviazione", correct: true },
      { text: "Solo la stipula del contratto", correct: false },
      { text: "Invio di richieste via email senza controllo", correct: false },
      { text: "Acquisto diretto senza monitoraggio", correct: false }
    ]
  },
  {
    question: "Quale documento viene predisposto dall’Assistente in Seconda Posizione Economica da sottoporre al DSGA e al Dirigente?",
    answers: [
      { text: "Bozza di Ordine Diretto di Acquisto (OdA) o determina a contrarre", correct: true },
      { text: "Richiesta di ferie", correct: false },
      { text: "Lettera di dimissioni", correct: false },
      { text: "Modulo per cambio turno", correct: false }
    ]
  },
  {
    question: "Quali attività esegue l’Assistente in Prima Posizione Economica nella fase di contabilizzazione e archiviazione?",
    answers: [
      { text: "Carica la fattura nel protocollo e invia solleciti di pagamento tramite PEC", correct: true },
      { text: "Supervisiona e negozia contratti con fornitori", correct: false },
      { text: "Prepara campagne pubblicitarie", correct: false },
      { text: "Organizza meeting con il personale", correct: false }
    ]
  },
  {
    question: "Perché è importante passare da una cultura di adempimento formale a una cultura orientata ai risultati nella PA digitale?",
    answers: [
      { text: "Per assicurare che l'acquisto sia giusto, conveniente, tempestivo e tracciabile", correct: true },
      { text: "Per ridurre il numero di documenti prodotti", correct: false },
      { text: "Per eliminare ogni tipo di controllo", correct: false },
      { text: "Per aumentare la burocrazia", correct: false }
    ]
  },
  {
    question: "Qual è la differenza principale tra i compiti dell’Assistente in Prima e Seconda Posizione Economica nel monitoraggio dell’ordine?",
    answers: [
      { text: "Il primo esegue compiti esecutivi, il secondo gestisce e risolve problemi operativi", correct: true },
      { text: "Il primo fa tutto da solo, il secondo non fa nulla", correct: false },
      { text: "Entrambi hanno lo stesso ruolo senza differenze", correct: false },
      { text: "Il primo si occupa di marketing, il secondo di vendite", correct: false }
    ]
  },
  {
    question: "Come viene gestita la ricerca di fornitori e la scelta del miglior prodotto in un processo digitale?",
    answers: [
      { text: "Attraverso piattaforme di e-procurement come MePA che permettono confronto e ordini diretti", correct: true },
      { text: "Inviando email generiche a fornitori casuali", correct: false },
      { text: "Chiamando telefonicamente senza registrare le offerte", correct: false },
      { text: "Scegliendo sempre il primo fornitore trovato", correct: false }
    ]
  },
  {
    question: "Qual è la funzione del Protocollo Informatico nel processo di gestione digitale degli acquisti?",
    answers: [
      { text: "Registrare e conservare a norma tutti i documenti relativi all'acquisto", correct: true },
      { text: "Creare grafici di vendite mensili", correct: false },
      { text: "Gestire le ferie del personale", correct: false },
      { text: "Inviare newsletter agli utenti", correct: false }
    ]
  },
  {
    question: "In quale fase del processo digitale l’Assistente Amministrativo può inviare un sollecito di pagamento tramite PEC?",
    answers: [
      { text: "Nella fase di contabilizzazione e archiviazione, dopo aver ricevuto la fattura e l'ok alla liquidazione", correct: true },
      { text: "Durante la rilevazione del fabbisogno", correct: false },
      { text: "Durante l’indagine di mercato", correct: false },
      { text: "Dopo la stipula del contratto ma prima dell'ordine", correct: false }
    ]
  },
  {
    question: "Quali rischi sono legati alla gestione frammentaria e cartacea degli acquisti nella PA?",
    answers: [
      { text: "Ritardi, acquisti non ottimali e difficoltà nel monitoraggio della spesa", correct: true },
      { text: "Maggiore velocità nei processi", correct: false },
      { text: "Riduzione della burocrazia", correct: false },
      { text: "Aumento della trasparenza", correct: false }
    ]
  },
// nuovo blocco
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
//nuvo blocco di domande
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
  question: "Chi può ricevere la prima posizione economica secondo il C.C.N.L.?",
  answers: [
    { text: "Solo gli assistenti tecnici", correct: false },
    { text: "Tutto il personale inquadrato nelle Aree Collaboratori, Operatori e Assistenti", correct: true },
    { text: "Solo il personale docente", correct: false },
    { text: "Solo il personale con contratto a tempo determinato", correct: false }
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
  question: "Che cos’è il principio della Comunità Educante secondo il d.lgs. n. 297/1994?",
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
  question: "Quale piattaforma viene utilizzata dall’assistente per la rendicontazione delle attività progettuali?",
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
    question: "Cosa si intende per 'Lordo Stato'?",
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

// Funzione per mescolare un array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  const info = document.getElementById("info");
  const results = document.getElementById("results");
  results.innerHTML = "";

  // Seleziona 20 domande (o meno, se la libreria è piccola)
  const numQuestions = Math.min(20, questions.length);
  selectedQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, numQuestions);

  // Per ogni domanda randomizza l’ordine delle risposte
  selectedQuestions = selectedQuestions.map(q => {
    // Clona l’oggetto domanda per non modificare l’originale
    const questionCopy = {
      ...q,
      answers: shuffleArray([...q.answers])
    };
    return questionCopy;
  });

  // Mostra le domande con risposte mescolate
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
