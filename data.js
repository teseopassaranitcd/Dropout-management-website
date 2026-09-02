/* ============================================================
   THE COLLEGE DROPOUT — DATI APPARTAMENTI (fonte unica)
   ============================================================
   Questo è l'UNICO file da modificare per:
   - aggiornare prezzi, disponibilità, descrizioni
   - aggiungere/rimuovere un appartamento
   - cambiare le foto di un appartamento

   Contiene DUE strutture, usate rispettivamente da:
   - appartamento.html  -> window.APARTMENTS  (dati completi, pagina di dettaglio)
   - soluzioni.html     -> window.SOLUZIONI_LIST (dati sintetici, mappa/elenco)

   ATTENZIONE: se aggiungi/rimuovi un appartamento o ne cambi la
   disponibilità, aggiorna ENTRAMBE le strutture per coerenza tra
   le pagine (stesso "id" in entrambe).
   ============================================================ */

window.APARTMENTS = {
  1:{
    id:1,
    name:{it:'Via Garibaldi n.188',en:'Via Garibaldi n.188'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.4030,lng:12.8615,
    cover:'images/via-garibaldi-188/terrazza-01.jpg',
    sideImg:'images/via-garibaldi-188/terrazza-03.jpg',
    gallery:[
      'images/via-garibaldi-188/cucina-01.jpg',
      'images/via-garibaldi-188/cucina-02.jpg',
      'images/via-garibaldi-188/cucina-03.jpg',
      'images/via-garibaldi-188/bagno-vasca-01.jpg',
      'images/via-garibaldi-188/bagno-vasca-02.jpg',
      'images/via-garibaldi-188/bagno-vasca-03.jpg',
      'images/via-garibaldi-188/bagno-doccia-01.jpg',
      'images/via-garibaldi-188/bagno-doccia-02.jpg',
      'images/via-garibaldi-188/corridoio-01.jpg',
      'images/via-garibaldi-188/corridoio-02.jpg',
      'images/via-garibaldi-188/scala-01.jpg',
      'images/via-garibaldi-188/terrazza-02.jpg',
      'images/via-garibaldi-188/terrazza-03.jpg',
      'images/via-garibaldi-188/terrazza-04.jpg',
      'images/via-garibaldi-188/grande-02-lavanderia.jpg',
      'images/via-garibaldi-188/esterno-vicolo-01.jpg',
      'images/via-garibaldi-188/esterno-vicolo-02.jpg',
    ],
    descrizione:{
      it:`<p><strong>Appartamento in affitto al secondo piano</strong> di uno stabile di tre piani, in Via Giuseppe Garibaldi 188, nel cuore del centro storico di Rieti.</p><p>È composto da un'ampia cucina con zona pranzo, due camere (entrambe utilizzabili come singole o doppie), due bagni (uno per camera) e una terrazza di circa 30 m². Sulla terrazza si trova anche un terzo bagno, con funzione di lavanderia.</p><p>Posizione centralissima: pochi minuti a piedi dalla stazione ferroviaria, da tutti i poli dell'Università La Sapienza a Rieti e a circa 10 minuti a piedi dal campus dell'Università della Tuscia. Tutti i servizi sono disponibili nel raggio di poche centinaia di metri.</p><p>Adatto da 2 a 4 studenti grazie alla presenza di due bagni. <strong>Il prezzo include le spese condominiali e l'abbonamento Wi-Fi.</strong></p>`,
      en:`<p><strong>Apartment for rent on the second floor</strong> of a three-storey building, at Via Giuseppe Garibaldi 188, in the heart of Rieti's historic centre.</p><p>It comprises a large kitchen with dining area, two bedrooms (each usable as single or double), two bathrooms (one per bedroom) and a terrace of about 30 m². On the terrace there is also a third bathroom, used as a laundry room.</p><p>Very central location: a few minutes' walk from the train station, from all the campuses of La Sapienza University in Rieti, and about 10 minutes' walk from the University of Tuscia campus. All amenities are within a few hundred metres.</p><p>Suitable for 2 to 4 students thanks to the two bathrooms. <strong>The price includes condominium fees and Wi-Fi subscription.</strong></p>`
    },
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'117 m² + 32 m² terrazza',en:'117 m² + 32 m² terrace'}},
      {label:{it:'Camere',en:'Bedrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'2° di 2',en:'2nd of 2'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'3 (2 + lavanderia)',en:'3 (2 + laundry)'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria di Rieti',en:'Rieti train station'},dist:{it:'',en:''}},
      {name:{it:'Poli Università La Sapienza (Rieti)',en:'La Sapienza University campuses (Rieti)'},dist:{it:'',en:''}},
      {name:{it:'Campus Università della Tuscia',en:'University of Tuscia campus'},dist:{it:'',en:''}},
      {name:{it:'Servizi vari (negozi, farmacie, bar)',en:'Various amenities (shops, pharmacies, cafés)'},dist:{it:'',en:''}},
    ],
    /* rentalMode: 'intero' | 'camere' | 'entrambi' */
    rentalMode:'entrambi',
    deposito:1,
    /* prezzo intero a scaglioni in base al numero di persone */
    interoPricing:[
      {persone:2,prezzo:600},
      {persone:3,prezzo:650},
      {persone:4,prezzo:700}
    ],
    floorplan:'images/via-garibaldi-188/planimetria-p2.jpg',
    /* coordinate hotspot lette dalla planimetria reale (Franceschini - Via G. Garibaldi 188, piano secondo) */
    rooms:[
      {
        id:'piccola',name:{it:'Camera Piccola',en:'Small Bedroom'},priceSingola:300,priceDoppia:360,sqm:15.4,legendNum:1,availableFrom:'2026-10-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Porta-finestra',en:'French window'},{it:'Completamente arredata',en:'Fully furnished'},{it:'Bagno dedicato',en:'Dedicated bathroom'}],
        photos:[
          'images/via-garibaldi-188/piccola-01.jpg',
          'images/via-garibaldi-188/piccola-02.jpg',
          'images/via-garibaldi-188/piccola-03.jpg'
        ],
        hotspot:{x:65.66,y:15.4},
        overlayPoly:[[59.72,5.91],[73.94,7.31],[70.62,24.67],[58.36,23.71]]
      },
      {
        id:'grande',name:{it:'Camera Grande',en:'Large Bedroom'},priceSingola:320,priceDoppia:380,sqm:21.0,legendNum:2,availableFrom:'2026-10-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Doppia porta-finestra',en:'Double French window'},{it:'Completamente arredata',en:'Fully furnished'},{it:'Bagno dedicato',en:'Dedicated bathroom'}],
        photos:[
          'images/via-garibaldi-188/grande-01.jpg',
          'images/via-garibaldi-188/grande-03.jpg'
        ],
        hotspot:{x:40.7,y:15.56},
        overlayPoly:[[32.55,5.91],[49.35,5.21],[48.27,25.46],[32.62,25.64]]
      }
    ]
  },
  2:{
    id:2,
    name:{it:'Via San Leopardo n.1',en:'Via San Leopardo n.1'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.403857,lng:12.8652,
    cover:'images/via-san-leopardo-1/foto-01.jpg',
    sideImg:'images/via-san-leopardo-1/foto-36.jpg',
    gallery:[
      'images/via-san-leopardo-1/foto-02.jpg',
      'images/via-san-leopardo-1/foto-04.jpg',
      'images/via-san-leopardo-1/foto-05.jpg',
      'images/via-san-leopardo-1/foto-06.jpg',
      'images/via-san-leopardo-1/foto-07.jpg',
      'images/via-san-leopardo-1/foto-08.jpg',
      'images/via-san-leopardo-1/foto-09.jpg',
      'images/via-san-leopardo-1/foto-10.jpg',
      'images/via-san-leopardo-1/foto-11.jpg',
      'images/via-san-leopardo-1/foto-12.jpg',
      'images/via-san-leopardo-1/foto-13.jpg',
      'images/via-san-leopardo-1/foto-15.jpg',
      'images/via-san-leopardo-1/foto-16.jpg',
      'images/via-san-leopardo-1/foto-17.jpg',
      'images/via-san-leopardo-1/foto-18.jpg',
      'images/via-san-leopardo-1/foto-19.jpg',
      'images/via-san-leopardo-1/foto-20.jpg',
      'images/via-san-leopardo-1/foto-25.jpg',
      'images/via-san-leopardo-1/foto-26.jpg',
      'images/via-san-leopardo-1/foto-28.jpg',
      'images/via-san-leopardo-1/foto-29.jpg',
      'images/via-san-leopardo-1/foto-30.jpg',
      'images/via-san-leopardo-1/foto-31.jpg',
      'images/via-san-leopardo-1/foto-32.jpg',
      'images/via-san-leopardo-1/foto-33.jpg',
      'images/via-san-leopardo-1/foto-34.jpg',
      'images/via-san-leopardo-1/foto-35.jpg',
      'images/via-san-leopardo-1/foto-36.jpg',
      'images/via-san-leopardo-1/foto-39.jpg',
      'images/via-san-leopardo-1/foto-40.jpg',
      'images/via-san-leopardo-1/foto-41.jpg',
      'images/via-san-leopardo-1/foto-42.jpg',
      'images/via-san-leopardo-1/foto-43.jpg',
    ],
    descrizione:{it:"Appartamento situato in Via San Leopardo, nel pieno centro storico di Rieti, in prossimità della stazione ferroviaria e della sede dell'Università La Sapienza, oltre che di tutti i principali servizi. L'immobile fa parte di una palazzina cielo-terra sviluppata su cinque livelli: cantina interrata, deposito a piano terra, lavanderia al mezzanino e l'appartamento vero e proprio, distribuito tra primo e secondo piano. Le camere, affittate esclusivamente a studenti universitari fuori sede, comprendono una doppia al primo piano — con bagno di servizio dedicato — e tre singole al secondo e ultimo piano, servite dal bagno principale. L'appartamento è arredato, con riscaldamento autonomo, e il canone include la connessione Wi-Fi.",en:"Apartment located on Via San Leopardo, in the heart of Rieti's historic centre, close to the train station and the La Sapienza University campus, as well as all main amenities. The property is part of a self-contained building spread over five levels: a basement cellar, a ground-floor storage room, a mezzanine laundry room, and the apartment itself, spread across the first and second floors. The bedrooms, rented exclusively to out-of-town university students, comprise one double on the first floor — served by a dedicated bathroom — and three singles on the second and top floor, served by the main bathroom. The apartment is furnished, has independent heating, and the rent includes the Wi-Fi connection."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'200 m²',en:'200 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'Cantina, deposito, mezzanino, 1° e 2° piano - Palazzetto cielo-terra',en:'Cellar, storage, mezzanine, 1st and 2nd floor - Self-contained building'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/autobus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'University of Tuscia campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    deposito:1,
    interoPricing:[],
    floorplan:[
      {img:'images/via-san-leopardo-1/planimetria-p0.jpg',label:{it:'Cantina',en:'Cellar'}},
      {img:'images/via-san-leopardo-1/planimetria-p1.jpg',label:{it:'Mezzanino - Lavanderia',en:'Mezzanine - Laundry'}},
      {img:'images/via-san-leopardo-1/planimetria-p2.jpg',label:{it:'Primo piano',en:'First floor'}},
      {img:'images/via-san-leopardo-1/planimetria-p3.jpg',label:{it:'Secondo piano',en:'Second floor'}}
    ],
    floorplanDefault:2,
    rooms:[
      {
        id:'camera1',name:{it:'Camera doppia - Piano primo',en:'Camera doppia - Piano primo'},priceSingola:350,priceDoppia:440,sqm:29,
        availableFrom:'2026-09-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio',en:'Wardrobe'},{it:'Schermo HD',en:'HD screen'},{it:'Scrivanie',en:'Desks'}],
        photos:[
          'images/via-san-leopardo-1/foto-02.jpg',
          'images/via-san-leopardo-1/foto-04.jpg',
          'images/via-san-leopardo-1/foto-05.jpg',
          'images/via-san-leopardo-1/foto-10.jpg',
          'images/via-san-leopardo-1/foto-13.jpg',
          'images/via-san-leopardo-1/foto-15.jpg'
        ],
        floorIndex:2,
        hotspot:{x:45,y:80},
        overlayPoly:[[39.36,58.2],[31.92,88.95],[58.22,88.95],[60.73,62.01]]
      },
      {
        id:'camera2',name:{it:'Camera singola 1 - Secondo piano',en:'Camera singola 1 - Secondo piano'},priceSingola:300,priceDoppia:null,sqm:18,
        availableFrom:'2027-09-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-san-leopardo-1/foto-11.jpg',
          'images/via-san-leopardo-1/foto-12.jpg',
          'images/via-san-leopardo-1/foto-25.jpg',
          'images/via-san-leopardo-1/foto-28.jpg'
        ],
        floorIndex:3,
        hotspot:{x:61.08,y:27.65},
        overlayPoly:[[70.83,24.58],[68.07,40.13],[49.03,31.9],[56.4,13.99]]
      },
      {
        id:'camera3',name:{it:'Camera singola 2 - Secondo piano',en:'Camera singola 2 - Secondo piano'},priceSingola:300,priceDoppia:null,sqm:16,
        availableFrom:'2027-03-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-san-leopardo-1/foto-41.jpg',
          'images/via-san-leopardo-1/foto-42.jpg',
          'images/via-san-leopardo-1/foto-43.jpg'
        ],
        floorIndex:3,
        hotspot:{x:44.01,y:70.85},
        overlayPoly:[[49.13,59.87],[39.3,58.69],[31.73,85.75],[46.26,85.49],[49.54,68.1],[48.11,67.19]]
      },
      {
        id:'camera4',name:{it:'Camera singola 3 - Secondo piano',en:'Camera singola 3 - Secondo piano'},priceSingola:300,priceDoppia:null,sqm:14,
        availableFrom:'2027-08-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-san-leopardo-1/foto-34.jpg',
          'images/via-san-leopardo-1/foto-35.jpg',
          'images/via-san-leopardo-1/foto-39.jpg'
        ],
        floorIndex:3,
        hotspot:{x:53.85,y:71.63},
        overlayPoly:[[60.59,61.7],[54.45,60.78],[53.22,68.1],[49.85,67.84],[46.78,85.75],[58.24,85.62]]
      }
    ]
  },
  3:{
    id:3,
    name:{it:'Via G. Garibaldi n.33',en:'Via G. Garibaldi n.33'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:false,
    availableFrom:'2027-10-01',
    lat:42.404762,lng:12.870206,
    cover:'images/via-garibaldi-33/foto-01.jpg',
    sideImg:'images/via-garibaldi-33/foto-15.jpg',
    gallery:[
      'images/via-garibaldi-33/foto-02.jpg',
      'images/via-garibaldi-33/foto-03.jpg',
      'images/via-garibaldi-33/foto-04.jpg',
      'images/via-garibaldi-33/foto-05.jpg',
      'images/via-garibaldi-33/foto-06.jpg',
      'images/via-garibaldi-33/foto-10.jpg',
      'images/via-garibaldi-33/foto-15.jpg',
      'images/via-garibaldi-33/camera1-01.jpg',
      'images/via-garibaldi-33/camera1-02.jpg',
      'images/via-garibaldi-33/camera2-01.jpg',
      'images/via-garibaldi-33/camera2-02.jpg',
    ],
    descrizione:{it:"<p>Appartamento sito al secondo ed ultimo piano di uno stabile in via G. Garibaldi 33, nel pieno centro storico di Rieti. L'immobile si trova in prossimità di Porta d'Arce e a pochi minuti di camminata dalla stazione bus/treni, dal supermercato Carrefour, dalle principali sedi universitarie della città, nonché da ogni servizio utile. L'appartamento si compone di ingresso, soggiorno, due camere, cucina abitabile e bagno. La prima camera è affittata come singola, è completamente arredata e dispone di letto matrimoniale e balconcino sul grazioso cortile interno. La seconda camera può essere affittata come singola o come doppia. Tutti gli infissi sono nuovi e a doppio vetro, per assicurare un'ottima efficienza energetica, ed ogni camera dispone di diversi affacci con diversa esposizione. Scenico soffitto in legno a vista. Disponibile anche una piccola cantina al piano terra, utile per riporre valige, biciclette o quant'altro.",en:"<p>Apartment on the second and top floor of a building at Via G. Garibaldi 33, in the heart of Rieti's historic centre. It's close to Porta d'Arce and just a few minutes' walk from the bus/train station, the Carrefour supermarket, the city's main university campuses, and every useful service. The apartment comprises an entrance hall, living room, two bedrooms, an eat-in kitchen and a bathroom. The first bedroom is rented as a single, is fully furnished, and has a double bed and a small balcony overlooking the charming inner courtyard. The second bedroom can be rented as a single or a double. All windows are new, double-glazed units for excellent energy efficiency, and each bedroom has different-facing windows with varied exposure. Striking exposed wooden ceiling. A small cellar on the ground floor is also available, useful for storing suitcases, bicycles and more."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'80 m²',en:'80 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'2 di 2',en:'2 di 2'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'intero',
    interoPricing:[{persone:2,prezzo:650},{persone:3,prezzo:680}],
    deposito:1,
    floorplan:'images/via-garibaldi-33/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera matrimoniale',en:'Double bedroom'},priceSingola:null,priceDoppia:null,sqm:16,
        availableFrom:null,
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-garibaldi-33/camera1-01.jpg',
          'images/via-garibaldi-33/camera1-02.jpg'
        ],
        hotspot:{x:61.53,y:19.87},
        overlayPoly:[[46.74,2.40],[45.78,11.63],[48.51,13.00],[46.28,47.70],[83.47,48.01],[82.79,12.41],[77.17,3.92]]
      },
      {
        id:'camera2',name:{it:'Camera singola/doppia',en:'Single/double bedroom'},priceSingola:null,priceDoppia:null,sqm:17,
        availableFrom:null,
        features:[{it:'Affittabile come singola o doppia',en:'Rentable as single or double'}],
        photos:[
          'images/via-garibaldi-33/camera2-01.jpg',
          'images/via-garibaldi-33/camera2-02.jpg'
        ],
        hotspot:{x:25.76,y:72.85},
        overlayPoly:[[14.53,50.12],[9.87,95.36],[37.95,95.36],[40.67,50.58]]
      }
    ]
  },
  4:{
    id:4,
    name:{it:'Via delle Ortensie n.8',en:'Via delle Ortensie n.8'},
    zone:{it:'Città Giardino',en:'Città Giardino'},
    available:true,
    lat:42.399983,lng:12.856886,
    cover:'images/via-delle-ortensie-8/foto-01.jpg',
    sideImg:'images/via-delle-ortensie-8/foto-01.jpg',
    gallery:[
      'images/via-delle-ortensie-8/foto-02.jpg',
      'images/via-delle-ortensie-8/foto-03.jpg',
      'images/via-delle-ortensie-8/foto-04.jpg',
      'images/via-delle-ortensie-8/foto-05.jpg',
      'images/via-delle-ortensie-8/foto-06.jpg',
      'images/via-delle-ortensie-8/foto-07.jpg',
      'images/via-delle-ortensie-8/foto-08.jpg',
      'images/via-delle-ortensie-8/foto-09.jpg',
      'images/via-delle-ortensie-8/foto-10.jpg',
      'images/via-delle-ortensie-8/foto-11.jpg',
      'images/via-delle-ortensie-8/foto-12.jpg',
      'images/via-delle-ortensie-8/foto-13.jpg',
      'images/via-delle-ortensie-8/foto-14.jpg',
    ],
    descrizione:{it:"<p>Affittasi a studentesse universitarie camera in appartamento situato al terzo piano di un immobile con ascensore, nel quartiere Città Giardino di Rieti. Le condizioni dello stabile sono ottime: arredamento, impianti e infissi (vetri doppi) sono praticamente nuovi. Riscaldamento autonomo.</p><p>L'appartamento si compone di un ingresso con armadio a muro, un salone open space, una cucina con sala da pranzo e dispensa, un bagno comune con vasca e lavatrice, e due camere singole, una delle quali con bagno privato. Completano la proprietà due balconi: uno accessibile dal salone e dalla camera piccola, l'altro dalla cucina e dalla camera grande.</p><p>È presente una terza camera, che però rimarrà chiusa: la sua metratura non è conteggiata nella superficie complessiva indicata.</p><p>Il canone mensile comprende le spese condominiali e l'abbonamento Wi-Fi; è richiesta una mensilità come deposito cauzionale.</p>",en:"<p>Room for rent to female university students, in an apartment on the third floor of a building with a lift, in the Città Giardino district of Rieti. The building is in excellent condition: furnishings, systems and windows (double glazing) are practically new. Independent heating.</p><p>The apartment comprises an entrance hall with a built-in wardrobe, an open-space living room, a kitchen with dining area and pantry, a shared bathroom with tub and washing machine, and two single bedrooms, one of which has a private bathroom. Two balconies complete the property: one accessible from the living room and the smaller bedroom, the other from the kitchen and the larger bedroom.</p><p>There is a third room, which will however remain locked: its floor area is not included in the total surface stated.</p><p>The monthly rent includes condominium fees and Wi-Fi subscription; one month's rent is required as a security deposit.</p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'110 m²',en:'110 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'3 di 5',en:'3 of 5'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fast food',en:'Fast food'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fermata bus urbani/extraurbani',en:'Urban/extra-urban bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    interoPricing:[],
    deposito:1,
    floorplan:'images/via-delle-ortensie-8/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola con bagno privato',en:'Camera singola con bagno privato'},priceSingola:330,priceDoppia:null,sqm:22,
        availableFrom:'2026-12-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Bagno privato',en:'Private bathroom'},{it:'Balcone',en:'Balcony'},{it:'Televisore',en:'TV'}],
        photos:[
          'images/via-delle-ortensie-8/foto-05.jpg',
          'images/via-delle-ortensie-8/foto-06.jpg',
          'images/via-delle-ortensie-8/foto-07.jpg',
          'images/via-delle-ortensie-8/foto-08.jpg'
        ],
        hotspot:{x:27.72,y:25.93},
        overlayPoly:[[11.99,5.56],[12.25,30.34],[43.26,30.19],[43.39,5.42]]
      },
      {
        id:'camera2',name:{it:'Camera singola',en:'Camera singola'},priceSingola:280,priceDoppia:null,sqm:12,
        availableFrom:'2027-07-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio',en:'Wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Televisore',en:'TV'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-delle-ortensie-8/foto-10.jpg',
          'images/via-delle-ortensie-8/foto-14.jpg'
        ],
        hotspot:{x:63.03,y:48.72},
        overlayPoly:[[50.74,31.54],[50.74,49.87],[75.42,49.87],[75.2,31.4]]
      },
      {
        id:'camera3',name:{it:'Camera ad uso magazzino',en:'Storage room'},priceSingola:null,priceDoppia:null,sqm:null,
        availableFrom:'locked',
        features:[],
        photos:[],
        hotspot:{x:59.65,y:25.98},
        overlayPoly:[[75.34,5.6],[44.21,5.72],[43.98,30.04],[75.08,30.35]]
      }
    ]
  },
  5:{
    id:5,
    name:{it:'Via C. Maderno n.10',en:'Via C. Maderno n.10'},
    zone:{it:'Micioccoli',en:'Micioccoli'},
    available:true,
    lat:42.41854,lng:12.855783,
    cover:'images/via-maderno-10/foto-01.jpg',
    sideImg:'images/via-maderno-10/foto-09.jpg',
    gallery:[
      'images/via-maderno-10/foto-02.jpg',
      'images/via-maderno-10/foto-03.jpg',
      'images/via-maderno-10/foto-04.jpg',
      'images/via-maderno-10/foto-05.jpg',
      'images/via-maderno-10/foto-06.jpg',
      'images/via-maderno-10/foto-07.jpg',
      'images/via-maderno-10/foto-08.jpg',
      'images/via-maderno-10/foto-09.jpg',
      'images/via-maderno-10/foto-10.jpg',
      'images/via-maderno-10/foto-11.jpg',
      'images/via-maderno-10/foto-12.jpg',
      'images/via-maderno-10/foto-13.jpg',
      'images/via-maderno-10/foto-14.jpg',
      'images/via-maderno-10/foto-15.jpg',
      'images/via-maderno-10/foto-16.jpg',
      'images/via-maderno-10/foto-17.jpg',
      'images/via-maderno-10/foto-18.jpg',
    ],
    descrizione:{it:"Appartamento in affitto riservato a studentesse universitarie, situato al piano rialzato di una palazzina in Via Carlo Maderno 10. Si compone di una zona giorno con ingresso, sala e cucina attrezzata (frigorifero, forno, microonde, lavastoviglie), e di una zona notte con due camere, ciascuna dotata di bagno privato: una doppia e una singola. È presente anche un terrazzo. L'appartamento è completamente ammobiliato e dotato di connessione internet. Il canone include le spese condominiali e l'abbonamento Wi-Fi.",en:"Apartment for rent reserved for female university students, on the raised ground floor of a building at Via Carlo Maderno 10. It comprises a living area with entrance hall, lounge and fully equipped kitchen (fridge, oven, microwave, dishwasher), and a sleeping area with two bedrooms, each with its own private bathroom: one double and one single. A terrace is also available. The apartment is fully furnished and has an internet connection. The rent includes condominium fees and the Wi-Fi subscription."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'80 m²',en:'80 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'1 di 3',en:'1 di 3'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Campi sportivi',en:'Sports fields'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fermata autobus',en:'Bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Palestra',en:'Gym'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'entrambi',
    deposito:1,
    interoPricing:[{persone:3,prezzo:700}],
    floorplan:'images/via-maderno-10/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola con bagno privato',en:'Camera singola con bagno privato'},priceSingola:300,priceDoppia:null,sqm:22,
        availableFrom:'2026-08-01',
        features:[{it:'Letto singolo con cassettone apribile con secondo letto singolo in caso di ospiti',en:'Single bed with pull-out guest bed'},{it:'Balcone privato',en:'Private balcony'},{it:'Bagno privato',en:'Private bathroom'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-maderno-10/foto-04.jpg',
          'images/via-maderno-10/foto-05.jpg',
          'images/via-maderno-10/foto-06.jpg',
          'images/via-maderno-10/foto-14.jpg',
          'images/via-maderno-10/foto-16.jpg',
          'images/via-maderno-10/foto-17.jpg'
        ],
        hotspot:{x:53,y:27},
        overlayPoly:[[49.55,15.97],[49.55,40.22],[75.24,40.22],[75.24,34.75],[77.77,34.75],[77.77,42.37],[84.53,42.37],[84.53,20.0],[77.77,20.0],[77.77,24.18],[75.24,24.18],[75.24,15.97]]
      },
      {
        id:'camera2',name:{it:'Camera doppia',en:'Camera doppia'},priceSingola:null,priceDoppia:400,sqm:16,
        availableFrom:'2027-05-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivanie',en:'Desks'}],
        photos:[
          'images/via-maderno-10/foto-02.jpg',
          'images/via-maderno-10/foto-07.jpg',
          'images/via-maderno-10/foto-08.jpg'
        ],
        hotspot:{x:53,y:56},
        overlayPoly:[[49.55,52.35],[49.55,81.82],[75.14,81.82],[75.14,52.35]]
      }
    ]
  },
  6:{
    id:6,
    name:{it:'Via Nuova n.115 - Piano I',en:'Via Nuova n.115 - Piano I'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    availableFrom:'2027-08-01',
    lat:42.404778,lng:12.865834,
    cover:'images/via-nuova-115-piano-1/foto-01.jpg',
    sideImg:'images/via-nuova-115-piano-1/foto-10.jpg',
    gallery:[
      'images/via-nuova-115-piano-1/foto-02.jpg',
      'images/via-nuova-115-piano-1/foto-03.jpg',
      'images/via-nuova-115-piano-1/foto-04.jpg',
      'images/via-nuova-115-piano-1/foto-05.jpg',
      'images/via-nuova-115-piano-1/foto-06.jpg',
      'images/via-nuova-115-piano-1/foto-07.jpg',
      'images/via-nuova-115-piano-1/foto-08.jpg',
      'images/via-nuova-115-piano-1/foto-09.jpg',
      'images/via-nuova-115-piano-1/foto-10.jpg',
      'images/via-nuova-115-piano-1/foto-11.jpg',
      'images/via-nuova-115-piano-1/foto-12.jpg',
    ],
    descrizione:{it:"<p>Appartamento affittasi a studenti universitari, situato al primo piano di una palazzina di recente ristrutturazione in Via Nuova, nel pieno centro storico di Rieti. Pochi passi separano l'appartamento dalla stazione ferroviaria/autobus, dal supermercato Carrefour e dalle sedi dell'Università La Sapienza e dell'Università della Tuscia.</p><p>L'appartamento si compone di un ingresso con soggiorno, cucina, bagno e due camere da letto, una singola e una matrimoniale ad uso singolo. Completa la proprietà una cantina al piano seminterrato. Buono lo stato generale, arredato e con cucina attrezzata.</p><p>Il canone mensile comprende le spese condominiali e l'abbonamento Wi-Fi; le altre utenze sono escluse. È richiesta una mensilità come deposito cauzionale. Lo spazio è indicato per un massimo di due persone.</p>",en:"<p>Apartment for rent to university students, located on the first floor of a recently renovated building on Via Nuova, in the heart of Rieti's historic centre. Just a few steps from the train/bus station, the Carrefour supermarket, and the La Sapienza and Tuscia University campuses.</p><p>The apartment comprises an entrance with living room, kitchen, bathroom and two bedrooms, one single and one double used as a single. A cellar in the basement completes the property. Good overall condition, furnished with an equipped kitchen.</p><p>The monthly rent includes condominium fees and Wi-Fi subscription; other utilities are excluded. One month's rent is required as a security deposit. The space is suited for a maximum of two people.</p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'55 m²',en:'55 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'1 di 3',en:'1 of 3'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'intero',
    interoPricing:[{persone:2,prezzo:520}],
    deposito:1,
    floorplan:'images/via-nuova-115-piano-1/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera 1',en:'Camera 1'},priceSingola:null,priceDoppia:null,sqm:null,
        availableFrom:'2027-08-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-1/foto-06.jpg'
        ],
        hotspot:{x:68.78,y:40.36},
        overlayPoly:[[49.69,17.48],[50.02,49.64],[87.54,49.07],[87.86,17.18]]
      },
      {
        id:'camera2',name:{it:'Camera 2',en:'Camera 2'},priceSingola:null,priceDoppia:null,sqm:null,
        availableFrom:'2027-08-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-1/foto-02.jpg',
          'images/via-nuova-115-piano-1/foto-03.jpg',
          'images/via-nuova-115-piano-1/foto-04.jpg'
        ],
        hotspot:{x:68.5,y:75.41},
        overlayPoly:[[87.21,49.95],[49.85,50.52],[49.85,87.55],[87.07,85.54]]
      }
    ]
  },
  7:{
    id:7,
    name:{it:'Via Nuova n.115 - Piano II',en:'Via Nuova n.115 - Piano II'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.404778,lng:12.865834,
    cover:'images/via-nuova-115-piano-2/foto-01.jpg',
    sideImg:'images/via-nuova-115-piano-2/foto-11.jpg',
    gallery:[
      'images/via-nuova-115-piano-2/foto-02.jpg',
      'images/via-nuova-115-piano-2/foto-03.jpg',
      'images/via-nuova-115-piano-2/foto-04.jpg',
      'images/via-nuova-115-piano-2/foto-05.jpg',
      'images/via-nuova-115-piano-2/foto-06.jpg',
      'images/via-nuova-115-piano-2/foto-07.jpg',
      'images/via-nuova-115-piano-2/foto-08.jpg',
      'images/via-nuova-115-piano-2/foto-09.jpg',
      'images/via-nuova-115-piano-2/foto-10.jpg',
      'images/via-nuova-115-piano-2/foto-11.jpg',
      'images/via-nuova-115-piano-2/foto-12.jpg',
    ],
    descrizione:{it:"<p>Appartamento affittasi a studenti universitari, situato al secondo piano di una palazzina nel pieno centro storico di Rieti. Pochi passi separano l'appartamento dalla stazione ferroviaria e dalle sedi dell'Università La Sapienza e dell'Università della Tuscia; anche il supermercato Carrefour di Porta Conca è raggiungibile con una passeggiata di 3 minuti.</p><p>L'appartamento si compone di un ingresso, una cucina, un bagno e tre camere singole (una più piccola, le altre due più spaziose), tutte arredate con armadio, scrivania e televisore. Completa la proprietà una cantina al piano terra, ad uso degli inquilini. Buono lo stato generale, con cucina attrezzata e terrazzo.</p><p>Il canone mensile comprende le spese condominiali e l'abbonamento Wi-Fi; le utenze sono da dividere tra gli inquilini. È richiesta una mensilità come deposito cauzionale.</p><p><em>Nota: nelle foto mostrate la cucina era ancora in fase di allestimento.</em></p>",en:"<p>Apartment for rent to university students, located on the second floor of a building in the heart of Rieti's historic centre. Just a few steps from the train station and the La Sapienza and Tuscia University campuses; the Carrefour supermarket in Porta Conca is also within a 3-minute walk.</p><p>The apartment comprises an entrance hall, a kitchen, a bathroom and three single bedrooms (one smaller, the other two more spacious), all furnished with a wardrobe, desk and TV. A cellar on the ground floor completes the property, for tenants' use. Good overall condition, with an equipped kitchen and a terrace.</p><p>The monthly rent includes condominium fees and Wi-Fi subscription; utilities are to be split among tenants. One month's rent is required as a security deposit.</p><p><em>Note: in the photos shown, the kitchen was still being set up.</em></p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'70 m²',en:'70 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'2 di 3',en:'2 of 3'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'entrambi',
    interoPricing:[{persone:3,prezzo:750}],
    deposito:1,
    floorplan:'images/via-nuova-115-piano-2/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera 1',en:'Camera 1'},priceSingola:230,priceDoppia:null,sqm:null,
        availableFrom:'2027-03-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-2/foto-05.jpg',
          'images/via-nuova-115-piano-2/foto-09.jpg'
        ],
        hotspot:{x:60.52,y:78.5},
        overlayPoly:[[47.75,64.44],[48.15,84.98],[73.15,86.3],[73.02,64.63]]
      },
      {
        id:'camera2',name:{it:'Camera 2',en:'Camera 2'},priceSingola:260,priceDoppia:null,sqm:null,
        availableFrom:'2027-08-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-2/foto-10.jpg',
          'images/via-nuova-115-piano-2/foto-11.jpg'
        ],
        hotspot:{x:34.48,y:76.27},
        overlayPoly:[[21.89,52.17],[22.44,83.86],[47.05,84.98],[46.52,51.8]]
      },
      {
        id:'camera3',name:{it:'Camera 3',en:'Camera 3'},priceSingola:260,priceDoppia:null,sqm:null,
        availableFrom:'2027-08-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-2/foto-07.jpg',
          'images/via-nuova-115-piano-2/foto-08.jpg',
          'images/via-nuova-115-piano-2/foto-12.jpg'
        ],
        hotspot:{x:38.95,y:41.8},
        overlayPoly:[[20.94,16.89],[22.04,50.1],[56.55,49.54],[56.29,18.44]]
      }
    ]
  },
  8:{
    id:8,
    name:{it:'Via Nuova n.115 - Piano III',en:'Via Nuova n.115 - Piano III'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.404778,lng:12.865834,
    cover:'images/via-nuova-115-piano-3/foto-01.jpg',
    sideImg:'images/via-nuova-115-piano-3/foto-06.jpg',
    gallery:[
      'images/via-nuova-115-piano-3/foto-02.jpg',
      'images/via-nuova-115-piano-3/foto-03.jpg',
      'images/via-nuova-115-piano-3/foto-04.jpg',
      'images/via-nuova-115-piano-3/foto-05.jpg',
      'images/via-nuova-115-piano-3/foto-06.jpg',
      'images/via-nuova-115-piano-3/foto-07.jpg',
      'images/via-nuova-115-piano-3/foto-08.jpg',
      'images/via-nuova-115-piano-3/foto-09.jpg',
      'images/via-nuova-115-piano-3/foto-10.jpg',
      'images/via-nuova-115-piano-3/foto-11.jpg',
    ],
    descrizione:{it:"<p>Appartamento affittasi a studenti universitari, situato al terzo piano di una palazzina di recente ristrutturazione in Via Nuova, nel pieno centro storico di Rieti. Pochi passi separano l'appartamento dalla stazione ferroviaria/autobus, dal supermercato Carrefour e dalle sedi dell'Università La Sapienza e dell'Università della Tuscia.</p><p>L'appartamento si sviluppa in un ingresso, una cucina abitabile completamente attrezzata, un bagno e tre camere da letto singole, due delle quali con accesso diretto al balcone. Completa la proprietà una cantina al piano seminterrato. Buono lo stato generale, arredato in ogni ambiente.</p><p>Il canone mensile comprende le spese condominiali e l'abbonamento Wi-Fi; le altre utenze sono escluse. È richiesta una mensilità come deposito cauzionale. Lo spazio è indicato per un massimo di tre persone.</p>",en:"<p>Apartment for rent to university students, located on the third floor of a recently renovated building on Via Nuova, in the heart of Rieti's historic centre. Just a few steps from the train/bus station, the Carrefour supermarket, and the La Sapienza and Tuscia University campuses.</p><p>The apartment comprises an entrance hall, a fully equipped eat-in kitchen, a bathroom and three single bedrooms, two of which open directly onto the balcony. A cellar in the basement completes the property. Good overall condition, furnished throughout.</p><p>The monthly rent includes condominium fees and Wi-Fi subscription; other utilities are excluded. One month's rent is required as a security deposit. The space is suited for a maximum of three people.</p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'78 m²',en:'78 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'3 di 3',en:'3 of 3'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'entrambi',
    interoPricing:[{persone:3,prezzo:780}],
    deposito:1,
    floorplan:'images/via-nuova-115-piano-3/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:250,priceDoppia:null,sqm:null,
        availableFrom:'2027-10-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-3/foto-10.jpg',
          'images/via-nuova-115-piano-3/foto-11.jpg'
        ],
        hotspot:{x:40.99,y:43.45},
        overlayPoly:[[30.86,16.21],[30.76,52.37],[51.23,52.53],[51.12,17.61]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:260,priceDoppia:null,sqm:null,
        availableFrom:'2027-09-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-3/foto-03.jpg'
        ],
        hotspot:{x:66.62,y:43.69},
        overlayPoly:[[51.82,17.61],[51.83,52.38],[81.43,52.11],[79.3,18.86]]
      },
      {
        id:'camera3',name:{it:'Camera singola 3',en:'Camera singola 3'},priceSingola:260,priceDoppia:null,sqm:null,
        availableFrom:'2027-09-01',
        features:[],
        photos:[
          'images/via-nuova-115-piano-3/foto-04.jpg',
          'images/via-nuova-115-piano-3/foto-05.jpg'
        ],
        hotspot:{x:70.06,y:81.36},
        overlayPoly:[[46.74,65.25],[46.84,87.33],[83.65,88.37],[81.32,53.1],[58.12,53.09],[58.02,64.84]]
      }
    ]
  },
  9:{
    id:9,
    name:{it:'Via Porta Romana n.22',en:'Via Porta Romana n.22'},
    zone:{it:'Porta Romana',en:'Porta Romana'},
    available:false,
    availableFrom:'2026-12-01',
    lat:42.398305,lng:12.860369,
    cover:'',
    sideImg:'images/placeholder-apt.jpg',
    gallery:[],
    descrizione:{it:'<p><em>Pagina in fase di allestimento. Il materiale (foto, planimetria, descrizione dettagliata) sarà inserito appena disponibile.</em></p>',en:'<p><em>Page under construction. Photos, floor plan and full description will be added as soon as available.</em></p>'},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'50 m²',en:'50 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'1 di 2',en:'1 di 2'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[],
    rentalMode:'intero',
    interoPricing:[{persone:2,prezzo:600}],
    floorplan:null,
    rooms:[

    ]
  },
  10:{
    id:10,
    name:{it:'Via P. Boschi n.29',en:'Via P. Boschi n.29'},
    zone:{it:'Regina Pacis',en:'Regina Pacis'},
    available:true,
    lat:42.407603,lng:12.853169,
    cover:'images/via-boschi-29/foto-01.jpg',
    sideImg:'images/via-boschi-29/foto-20.jpg',
    gallery:[
      'images/via-boschi-29/foto-02.jpg',
      'images/via-boschi-29/foto-03.jpg',
      'images/via-boschi-29/foto-04.jpg',
      'images/via-boschi-29/foto-05.jpg',
      'images/via-boschi-29/foto-06.jpg',
      'images/via-boschi-29/foto-07.jpg',
      'images/via-boschi-29/foto-08.jpg',
      'images/via-boschi-29/foto-09.jpg',
      'images/via-boschi-29/foto-10.jpg',
      'images/via-boschi-29/foto-11.jpg',
      'images/via-boschi-29/foto-12.jpg',
      'images/via-boschi-29/foto-13.jpg',
      'images/via-boschi-29/foto-14.jpg',
      'images/via-boschi-29/foto-15.jpg',
      'images/via-boschi-29/foto-16.jpg',
      'images/via-boschi-29/foto-17.jpg',
      'images/via-boschi-29/foto-18.jpg',
      'images/via-boschi-29/foto-19.jpg',
      'images/via-boschi-29/foto-20.jpg',
    ],
    descrizione:{it:"Appartamento situato al quarto e ultimo piano di un condominio in Via Pietro Boschi, zona Regina Pacis, servito da ascensore. Si compone di ingresso con corridoio, sala da pranzo con balcone, cucina e due bagni. Le quattro camere, affittate a studenti fuori sede, comprendono una doppia — dotata di balcone esclusivo — e tre singole, una delle quali con letto matrimoniale. Gli infissi sono nuovi e a doppio vetro in tutto l'appartamento. Nel raggio di poche centinaia di metri si trovano tutti i servizi utili, e in circa 10 minuti a piedi si raggiunge il polo universitario La Sapienza di Via Cintia. Il canone include l'abbonamento Wi-Fi e le spese condominiali.",en:"Apartment on the fourth and top floor of a building on Via Pietro Boschi, in the Regina Pacis area, served by a lift. It comprises an entrance hall, a dining room with a balcony, a kitchen and two bathrooms. The four bedrooms, rented to out-of-town students, comprise one double — with its own private balcony — and three singles, one of which has a double bed. The windows are new, double-glazed units throughout the apartment. All useful services are within a few hundred metres, and the La Sapienza university campus on Via Cintia is about a 10-minute walk away. The rent includes the Wi-Fi subscription and condominium fees."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'130 m²',en:'130 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'4 di 4',en:'4 di 4'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Bar',en:'Café'},dist:{it:'',en:''}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'',en:''}},
      {name:{it:'Palestra',en:'Gym'},dist:{it:'',en:''}},
      {name:{it:'Banca',en:'Bank'},dist:{it:'',en:''}},
      {name:{it:'Polo Università La Sapienza (Via Cintia)',en:'La Sapienza University campus (Via Cintia)'},dist:{it:'',en:''}},
    ],
    rentalMode:'camere',
    deposito:1,
    interoPricing:[],
    floorplan:'images/via-boschi-29/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera doppia',en:'Camera doppia'},priceSingola:420,priceDoppia:480,sqm:28,
        availableFrom:'2027-09-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Scrivanie',en:'Desks'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-boschi-29/foto-05.jpg',
          'images/via-boschi-29/foto-06.jpg',
          'images/via-boschi-29/foto-07.jpg'
        ],
        hotspot:{x:52,y:80},
        overlayPoly:[[59.25,63.66],[45.33,63.66],[45.33,84.81],[41.91,84.81],[41.91,92.39],[54.12,92.39],[54.12,84.81],[59.25,84.81]]
      },
      {
        id:'camera2',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:280,priceDoppia:null,sqm:12,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio',en:'Wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-boschi-29/foto-10.jpg',
          'images/via-boschi-29/foto-11.jpg'
        ],
        hotspot:{x:48,y:42},
        overlayPoly:[[55.93,29.45],[50.15,29.45],[50.15,36.24],[39.65,36.24],[39.65,45.25],[55.93,45.25]]
      },
      {
        id:'camera3',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:300,priceDoppia:null,sqm:14,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-boschi-29/foto-12.jpg',
          'images/via-boschi-29/foto-13.jpg'
        ],
        hotspot:{x:57,y:20},
        overlayPoly:[[51.06,6.86],[51.06,23.70],[62.67,23.70],[62.67,6.86]]
      },
      {
        id:'camera4',name:{it:'Camera singola 3',en:'Camera singola 3'},priceSingola:300,priceDoppia:null,sqm:16,
        availableFrom:'2027-01-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio grande',en:'Large wardrobe'}],
        photos:[
          'images/via-boschi-29/foto-14.jpg',
          'images/via-boschi-29/foto-15.jpg'
        ],
        hotspot:{x:43,y:19},
        overlayPoly:[[36.83,6.93],[36.83,21.74],[50.76,21.74],[50.76,6.93]]
      }
    ]
  },
  11:{
    id:11,
    name:{it:'Largo S. D\'Acquisto n.14',en:'Largo S. D\'Acquisto n.14'},
    zone:{it:'Micioccoli',en:'Micioccoli'},
    available:true,
    lat:42.41629,lng:12.859835,
    cover:'images/largo-dacquisto-14/foto-01.jpg',
    sideImg:'images/largo-dacquisto-14/foto-07.jpg',
    gallery:[
      'images/largo-dacquisto-14/foto-02.jpg',
      'images/largo-dacquisto-14/foto-03.jpg',
      'images/largo-dacquisto-14/foto-04.jpg',
      'images/largo-dacquisto-14/foto-05.jpg',
      'images/largo-dacquisto-14/foto-06.jpg',
      'images/largo-dacquisto-14/foto-07.jpg',
      'images/largo-dacquisto-14/foto-08.jpg',
      'images/largo-dacquisto-14/foto-09.jpg',
      'images/largo-dacquisto-14/foto-10.jpg',
      'images/largo-dacquisto-14/foto-11.jpg',
      'images/largo-dacquisto-14/foto-12.jpg',
      'images/largo-dacquisto-14/foto-13.jpg',
      'images/largo-dacquisto-14/foto-14.jpg',
      'images/largo-dacquisto-14/foto-15.jpg',
      'images/largo-dacquisto-14/foto-16.jpg',
    ],
    descrizione:{it:"Appartamento situato al terzo piano di un palazzo di recente ristrutturazione (bonus 110%) in Largo Salvo D'Acquisto, riservato a studenti fuori sede. Si compone di una zona giorno con ingresso, cucina abitabile con balconcino e sala con balcone, e di una zona notte con corridoio, ripostiglio e tre camere singole. Sono presenti due bagni: uno di servizio, con lavandino, servizi igienici e lavatrice, e uno principale, finestrato, con vasca da bagno/box doccia. Gli infissi sono nuovi e a doppio vetro. Dispone di caldaia di recente installazione e l'immobile è servito da ascensore. Il canone include l'abbonamento Wi-Fi e le spese condominiali. Soggiorno minimo richiesto: 6 mesi.",en:"Apartment on the third floor of a recently renovated building (110% superbonus works) on Largo Salvo D'Acquisto, reserved for out-of-town students. It comprises a living area with entrance hall, eat-in kitchen with a small balcony and lounge with a balcony, and a sleeping area with hallway, storage closet and three single bedrooms. There are two bathrooms: a service bathroom with sink, toilet and washing machine, and a windowed main bathroom with bathtub/shower box. The windows are new, double-glazed units. It has a recently installed boiler, and the building has a lift. The rent includes the Wi-Fi subscription and condominium fees. Minimum stay required: 6 months."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'90 m²',en:'90 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'3 di 4',en:'3 di 4'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Campi sportivi',en:'Sports fields'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fermata autobus',en:'Bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Palestra',en:'Gym'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'entrambi',
    deposito:1,
    interoPricing:[{persone:3,prezzo:750}],
    floorplan:'images/largo-dacquisto-14/planimetria-largo-dacquisto.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:260,priceDoppia:null,sqm:12,
        availableFrom:'2026-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio grande',en:'Large wardrobe'}],
        photos:[
          'images/largo-dacquisto-14/camera1-01.jpg',
          'images/largo-dacquisto-14/camera1-02.jpg'
        ],
        hotspot:{x:31.77,y:45.72},
        overlayPoly:[[19.4,35.9],[40.34,36.07],[40.34,49.57],[35.6,49.66],[35.53,51.5],[19.4,51.59]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:270,priceDoppia:null,sqm:13,
        availableFrom:'2027-08-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/largo-dacquisto-14/camera2-01.jpg',
          'images/largo-dacquisto-14/camera2-02.jpg',
          'images/largo-dacquisto-14/camera2-03.jpg'
        ],
        hotspot:{x:47.78,y:66.89},
        overlayPoly:[[40.47,57.64],[54.91,57.64],[55.11,76.14],[40.61,76.14]]
      },
      {
        id:'camera3',name:{it:'Camera singola 3',en:'Camera singola 3'},priceSingola:260,priceDoppia:null,sqm:13,
        availableFrom:'2027-01-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio grande',en:'Large wardrobe'}],
        photos:[
          'images/largo-dacquisto-14/foto-04.jpg',
          'images/largo-dacquisto-14/foto-08.jpg'
        ],
        hotspot:{x:25.44,y:76.04},
        overlayPoly:[[19.61,60.71],[39.73,60.8],[39.73,76.31],[24.82,75.96],[25.03,77.98],[28.35,78.07],[28.35,87.06],[18.73,87.06],[18.79,78.21],[21.3,78.12],[21.3,76.1],[19.54,76.1]]
      }
    ]
  },
  12:{
    id:12,
    name:{it:'Viale T. Morroni n.20',en:'Viale T. Morroni n.20'},
    zone:{it:'Viale Morroni',en:'Viale Morroni'},
    available:true,
    lat:42.405201,lng:12.8646,
    cover:'images/via-morroni-20/foto-01.jpg',
    sideImg:'images/via-morroni-20/foto-11.jpg',
    gallery:[
      'images/via-morroni-20/foto-02.jpg',
      'images/via-morroni-20/foto-03.jpg',
      'images/via-morroni-20/foto-04.jpg',
      'images/via-morroni-20/foto-05.jpg',
      'images/via-morroni-20/foto-06.jpg',
      'images/via-morroni-20/foto-07.jpg',
      'images/via-morroni-20/foto-08.jpg',
      'images/via-morroni-20/foto-09.jpg',
      'images/via-morroni-20/foto-10.jpg',
      'images/via-morroni-20/foto-11.jpg',
      'images/via-morroni-20/foto-12.jpg',
      'images/via-morroni-20/foto-13.jpg',
      'images/via-morroni-20/foto-14.jpg',
      'images/via-morroni-20/foto-15.jpg',
    ],
    descrizione:{it:"Appartamento in affitto riservato a studenti universitari, situato al piano 4 di 5 di un elegante palazzo residenziale in Viale Tommaso Morroni, nel pieno centro città di Rieti — a pochi passi dalla stazione ferroviaria/bus, accanto a un supermercato e a pochi minuti a piedi dalle sedi cittadine delle Università La Sapienza e della Tuscia. Si compone di un ampio ingresso/soggiorno, due spaziose camere doppie entrambe con affaccio su Viale Morroni e sul centro storico, cucina abitabile con zona pranzo e balcone, e bagno con box doccia e vasca da bagno, finestrato. L'edificio è dotato di ascensore. L'appartamento è completamente arredato e dotato di connessione internet; il canone include le spese condominiali e l'abbonamento Wi-Fi.",en:"Apartment for rent reserved for university students, on the 4th of 5 floors of an elegant residential building on Viale Tommaso Morroni, in the heart of Rieti — a short walk from the train/bus station, next to a supermarket and a few minutes' walk from the local campuses of La Sapienza and Tuscia universities. It comprises a large entrance hall/living room, two spacious double bedrooms both overlooking Viale Morroni and the historic centre, a kitchen with dining area and balcony, and a windowed bathroom with shower box and bathtub. The building has a lift. The apartment is fully furnished and has an internet connection; the rent includes condominium fees and the Wi-Fi subscription."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'85 m²',en:'85 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'4 di 5',en:'4 di 5'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    deposito:2,
    interoPricing:[],
    floorplan:'images/via-morroni-20/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera doppia 1',en:'Camera doppia 1'},priceSingola:null,priceDoppia:450,sqm:24,
        availableFrom:'2026-09-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivanie',en:'Desks'},{it:'Vista sul centro storico',en:'Historic centre view'}],
        photos:[
          'images/via-morroni-20/foto-05.jpg',
          'images/via-morroni-20/foto-08.jpg',
          'images/via-morroni-20/foto-15.jpg'
        ],
        hotspot:{x:42.56,y:36},
        overlayPoly:[[31.21,11.94],[53.9,11.94],[53.9,42.13],[31.21,42.13]]
      },
      {
        id:'camera2',name:{it:'Camera doppia 2',en:'Camera doppia 2'},priceSingola:null,priceDoppia:450,sqm:18,
        availableFrom:'2026-09-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivanie',en:'Desks'},{it:'Vista sul centro storico',en:'Historic centre view'}],
        photos:[
          'images/via-morroni-20/foto-09.jpg',
          'images/via-morroni-20/foto-11.jpg'
        ],
        hotspot:{x:63.38,y:36},
        overlayPoly:[[55.52,12.2],[71.23,12.2],[71.23,42.13],[55.52,42.13]]
      }
    ]
  },
  13:{
    id:13,
    name:{it:'Via della Ripresa n.73',en:'Via della Ripresa n.73'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.404539,lng:12.865605,
    cover:'images/via-ripresa-73/foto-01.jpg',
    sideImg:'images/via-ripresa-73/foto-03.jpg',
    gallery:[
      'images/via-ripresa-73/foto-02.jpg',
      'images/via-ripresa-73/foto-03.jpg',
      'images/via-ripresa-73/foto-04.jpg',
      'images/via-ripresa-73/foto-05.jpg',
      'images/via-ripresa-73/foto-06.jpg',
      'images/via-ripresa-73/foto-07.jpg',
      'images/via-ripresa-73/foto-08.jpg',
      'images/via-ripresa-73/foto-09.jpg',
      'images/via-ripresa-73/foto-10.jpg',
      'images/via-ripresa-73/foto-11.jpg',
      'images/via-ripresa-73/foto-12.jpg',
      'images/via-ripresa-73/foto-13.jpg',
      'images/via-ripresa-73/foto-14.jpg',
      'images/via-ripresa-73/foto-15.jpg',
      'images/via-ripresa-73/foto-16.jpg',
      'images/via-ripresa-73/foto-17.jpg',
      'images/via-ripresa-73/foto-18.jpg',
    ],
    descrizione:{it:"Appartamento completamente ristrutturato al primo piano di una palazzina di modeste dimensioni, in Via della Ripresa, nel cuore del Centro Storico di Rieti. Si compone di ingresso e zona giorno con cucina attrezzata (frigorifero, forno, microonde, lavastoviglie) e sala da pranzo. Attraverso un corridoio si raggiungono le quattro camere singole, tutte indipendenti e arredate con armadio e scrivania. Sono presenti due bagni, entrambi forniti di ogni servizio, con sanitari e box doccia nuovi. Mobili ed elettrodomestici sono nuovi, frutto della recente ristrutturazione. Il canone include la connessione Wi-Fi e le spese condominiali.",en:"Fully renovated apartment on the first floor of a small building on Via della Ripresa, in the heart of Rieti's historic centre. It comprises an entrance and living area with an equipped kitchen (fridge, oven, microwave, dishwasher) and dining room. A corridor leads to the four single bedrooms, all independent and furnished with a wardrobe and desk. There are two bathrooms, both fully equipped with new fixtures and shower box. Furniture and appliances are new, following the recent renovation. The rent includes the Wi-Fi subscription and condominium fees."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'90 m²',en:'90 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'1 di 2',en:'1 di 2'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    deposito:1,
    interoPricing:[],
    floorplan:'images/via-ripresa-73/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:280,priceDoppia:null,sqm:12,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio',en:'Wardrobe'},{it:'Spazio per le valigie',en:'Suitcase storage space'}],
        photos:[
          'images/via-ripresa-73/foto-13.jpg'
        ],
        hotspot:{x:78.38,y:55},
        overlayPoly:[[85.41,42.7],[70.17,44.03],[72.11,76.49],[85.83,74.9]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:280,priceDoppia:null,sqm:12,
        availableFrom:'2027-06-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio',en:'Wardrobe'},{it:'Spazio per le valigie',en:'Suitcase storage space'}],
        photos:[
          'images/via-ripresa-73/foto-10.jpg'
        ],
        hotspot:{x:62.29,y:58},
        overlayPoly:[[70.08,52.8],[53.93,53.61],[53.64,78.74],[71.5,76.62]]
      },
      {
        id:'camera3',name:{it:'Camera singola 3',en:'Camera singola 3'},priceSingola:250,priceDoppia:null,sqm:10,
        availableFrom:'2027-01-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio',en:'Wardrobe'},{it:'Spazio per le valigie',en:'Suitcase storage space'}],
        photos:[
          'images/via-ripresa-73/foto-08.jpg'
        ],
        hotspot:{x:43.82,y:60},
        overlayPoly:[[50.7,53.74],[36.56,54.28],[37.49,81.25],[50.51,80.18]]
      },
      {
        id:'camera4',name:{it:'Camera singola 4',en:'Camera singola 4'},priceSingola:280,priceDoppia:null,sqm:12,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Armadio',en:'Wardrobe'},{it:'Spazio per le valigie',en:'Suitcase storage space'}],
        photos:[
          'images/via-ripresa-73/foto-12.jpg'
        ],
        hotspot:{x:27,y:78},
        overlayPoly:[[17.49,58.11],[18.11,82.71],[36.78,81.25],[35.96,59.26],[29.8,59.27],[29.6,57.83]]
      }
    ]
  },
  14:{
    id:14,
    name:{it:'Via dei Tigli n.14',en:'Via dei Tigli n.14'},
    zone:{it:'Viale Matteucci',en:'Viale Matteucci'},
    available:true,
    lat:42.402504,lng:12.854594,
    cover:'images/via-tigli-14/foto-01.jpg',
    sideImg:'images/via-tigli-14/foto-14.jpg',
    gallery:[
      'images/via-tigli-14/foto-02.jpg',
      'images/via-tigli-14/foto-03.jpg',
      'images/via-tigli-14/foto-04.jpg',
      'images/via-tigli-14/foto-05.jpg',
      'images/via-tigli-14/foto-06.jpg',
      'images/via-tigli-14/foto-07.jpg',
      'images/via-tigli-14/foto-08.jpg',
      'images/via-tigli-14/foto-09.jpg',
      'images/via-tigli-14/foto-10.jpg',
      'images/via-tigli-14/foto-11.jpg',
      'images/via-tigli-14/foto-12.jpg',
      'images/via-tigli-14/foto-13.jpg',
      'images/via-tigli-14/foto-14.jpg',
      'images/via-tigli-14/foto-15.jpg',
      'images/via-tigli-14/foto-16.jpg',
      'images/via-tigli-14/foto-17.jpg',
      'images/via-tigli-14/foto-18.jpg',
      'images/via-tigli-14/foto-19.jpg',
    ],
    descrizione:{it:"Affittasi a studenti universitari appartamento situato al terzo piano di uno stabile in Via dei Tigli, in un'ottima posizione nella zona di Città Giardino: a soli 5 minuti a piedi si raggiungono sia la sede dell'Università La Sapienza di Rieti sia il centro commerciale Perseo, mentre qualsiasi altro servizio utile si trova nel raggio di poche centinaia di metri. L'immobile si compone di ingresso, soggiorno, sala da pranzo, cucinotto, tre ampie camere singole e un bagno. Sono presenti due balconi: uno con accesso dalla sala da pranzo, l'altro raggiungibile da due delle tre camere da letto. Il condominio dispone di giardino. Le spese condominiali sono incluse nel canone.",en:"For rent to university students, apartment on the third floor of a building on Via dei Tigli, in an excellent position in the Città Giardino area: just a 5-minute walk from both the La Sapienza University campus in Rieti and the Perseo shopping centre, with every other useful service within a few hundred metres. The property comprises an entrance hall, living room, dining room, kitchenette, three large single bedrooms and one bathroom. There are two balconies: one accessible from the dining room, the other reachable from two of the three bedrooms. The building has a shared garden. Condominium fees are included in the rent."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'110 m²',en:'110 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'3 di 4',en:'3 di 4'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Fast food',en:'Fast food'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fermata autobus',en:'Bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    condNote:{it:'Le spese condominiali sono incluse nel canone.',en:'Condominium fees are included in the rent.'},
    rentalMode:'entrambi',
    deposito:1,
    interoPricing:[{persone:3,prezzo:870}],
    floorplan:'images/via-tigli-14/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:300,priceDoppia:null,sqm:12,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio a ponte',en:'Bridge wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-tigli-14/foto-02.jpg',
          'images/via-tigli-14/foto-09.jpg'
        ],
        hotspot:{x:31.56,y:20},
        overlayPoly:[[38.86,17.29],[24.27,17.29],[24.27,39.12],[38.86,39.12]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:300,priceDoppia:null,sqm:16,
        availableFrom:'2027-09-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-tigli-14/foto-01.jpg',
          'images/via-tigli-14/foto-13.jpg',
          'images/via-tigli-14/foto-18.jpg'
        ],
        hotspot:{x:31.95,y:54},
        overlayPoly:[[39.6,50.32],[24.29,50.32],[24.29,78.1],[28.75,78.1],[28.75,79.8],[24.29,79.8],[24.29,89.24],[39.6,89.24],[39.6,79.8],[37.4,79.8],[37.4,78.1],[39.6,78.1]]
      },
      {
        id:'camera3',name:{it:'Camera singola 3',en:'Camera singola 3'},priceSingola:300,priceDoppia:null,sqm:14,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-tigli-14/foto-07.jpg',
          'images/via-tigli-14/foto-14.jpg'
        ],
        hotspot:{x:45.68,y:55},
        overlayPoly:[[51.64,50.84],[39.94,50.84],[39.73,89.15],[51.64,89.15],[51.64,79.94],[49.1,79.94],[49.1,78.18],[51.64,78.18]]
      }
    ]
  },
  15:{
    id:15,
    name:{it:'Via fratelli Cervi n.2',en:'Via fratelli Cervi n.2'},
    zone:{it:'Molino della Salce',en:'Molino della Salce'},
    available:true,
    lat:42.404743,lng:12.848819,
    cover:'images/via-fratelli-cervi-2/foto-01.jpg',
    sideImg:'images/via-fratelli-cervi-2/foto-08.jpg',
    gallery:[
      'images/via-fratelli-cervi-2/foto-02.jpg',
      'images/via-fratelli-cervi-2/foto-03.jpg',
      'images/via-fratelli-cervi-2/foto-04.jpg',
      'images/via-fratelli-cervi-2/foto-05.jpg',
      'images/via-fratelli-cervi-2/foto-06.jpg',
      'images/via-fratelli-cervi-2/foto-07.jpg',
      'images/via-fratelli-cervi-2/foto-08.jpg',
      'images/via-fratelli-cervi-2/foto-09.jpg',
      'images/via-fratelli-cervi-2/foto-10.jpg',
      'images/via-fratelli-cervi-2/foto-11.jpg',
      'images/via-fratelli-cervi-2/foto-12.jpg',
      'images/via-fratelli-cervi-2/foto-13.jpg',
      'images/via-fratelli-cervi-2/foto-14.jpg',
      'images/via-fratelli-cervi-2/foto-15.jpg',
      'images/via-fratelli-cervi-2/foto-16.jpg',
      'images/via-fratelli-cervi-2/foto-17.jpg',
      'images/via-fratelli-cervi-2/foto-18.jpg',
      'images/via-fratelli-cervi-2/foto-19.jpg',
      'images/via-fratelli-cervi-2/foto-20.jpg',
    ],
    descrizione:{it:"Ampia villa indipendente disposta su quattro livelli — seminterrato, piano terra, primo piano e mansarda — in Via Fratelli Cervi, zona Molino della Salce a Rieti. Il piano seminterrato ospita una taverna attrezzata con cucina e bagno, il garage e la lavanderia: tutti spazi comuni a disposizione degli inquilini. Al piano terra si trovano un ampio salone, la cucina comune con sala da pranzo e un bagno di servizio. Il primo piano accoglie le camere singole, servite da due bagni, mentre la mansarda al secondo piano ospita la camera doppia con bagno privato. Completa la proprietà un giardino privato ad uso comune di tutti gli inquilini. La proprietaria, una signora anziana, vive nella casa condividendo gli spazi comuni con gli inquilini.",en:"Large independent villa spread over four levels — basement, ground floor, first floor and attic — on Via Fratelli Cervi, in the Molino della Salce area of Rieti. The basement houses a fully equipped tavern with kitchen and bathroom, the garage and the laundry room: all common spaces available to tenants. The ground floor has a large living room, a shared kitchen with dining area and a service bathroom. The first floor holds the single bedrooms, served by two bathrooms, while the attic on the second floor houses the double bedroom with private bathroom. The property also includes a private garden for shared use by all tenants. The elderly owner lives in the house and shares the common areas with the tenants."},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'300 m²',en:'300 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'S1, Terra, 1, 2 - Villa indipendente',en:'S1, Terra, 1, 2 - Villa indipendente'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'4',en:'4'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Campi sportivi',en:'Sports fields'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fermata autobus',en:'Bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    deposito:1,
    interoPricing:[],
    floorplan:[
      {img:'images/via-fratelli-cervi-2/planimetria-seminterrato.jpg',label:{it:'Seminterrato',en:'Basement'}},
      {img:'images/via-fratelli-cervi-2/planimetria-terra.jpg',label:{it:'Piano Terra',en:'Ground floor'}},
      {img:'images/via-fratelli-cervi-2/planimetria-primo.jpg',label:{it:'Primo piano',en:'First floor'}},
      {img:'images/via-fratelli-cervi-2/planimetria-mansarda.jpg',label:{it:'Mansarda',en:'Attic'}}
    ],
    floorplanDefault:2,
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1 - Primo piano',en:'Camera singola 1 - Primo piano'},priceSingola:300,priceDoppia:null,sqm:20,
        availableFrom:'2027-08-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-fratelli-cervi-2/foto-01.jpg',
          'images/via-fratelli-cervi-2/foto-02.jpg',
          'images/via-fratelli-cervi-2/foto-03.jpg'
        ],
        floorIndex:2,
        hotspot:{x:21.46,y:60.8},
        overlayPoly:[[19.61,44.84],[47.25,44.84],[47.18,80.09],[19.67,80.09],[19.67,66.49],[17.71,66.41],[17.64,81.14],[7.07,80.96],[6.94,40.72],[17.78,40.63],[17.57,51.59],[19.47,51.85]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2 - Primo piano',en:'Camera singola 2 - Primo piano'},priceSingola:280,priceDoppia:null,sqm:18,
        availableFrom:'2027-03-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[
          'images/via-fratelli-cervi-2/foto-06.jpg',
          'images/via-fratelli-cervi-2/foto-07.jpg',
          'images/via-fratelli-cervi-2/foto-09.jpg',
          'images/via-fratelli-cervi-2/foto-10.jpg'
        ],
        floorIndex:2,
        hotspot:{x:77.89,y:24.86},
        overlayPoly:[[55.31,7.05],[78.89,7.05],[79.02,18.54],[80.79,18.89],[80.85,6.96],[92.3,6.96],[92.37,42.65],[80.85,42.65],[80.79,30.9],[79.02,31.07],[79.02,42.91],[55.45,42.73]]
      },
      {
        id:'camera3',name:{it:'Mansarda doppia - Secondo piano',en:'Mansarda doppia - Secondo piano'},priceSingola:null,priceDoppia:500,sqm:50,
        availableFrom:'2026-10-01',
        features:[{it:'Bagno privato',en:'Private bathroom'},{it:'Due letti singoli',en:'Two single beds'},{it:'Scrivanie',en:'Desks'}],
        photos:[
          'images/via-fratelli-cervi-2/foto-12.jpg',
          'images/via-fratelli-cervi-2/foto-13.jpg',
          'images/via-fratelli-cervi-2/foto-14.jpg',
          'images/via-fratelli-cervi-2/foto-15.jpg',
          'images/via-fratelli-cervi-2/foto-16.jpg',
          'images/via-fratelli-cervi-2/foto-17.jpg',
          'images/via-fratelli-cervi-2/foto-18.jpg',
          'images/via-fratelli-cervi-2/foto-19.jpg'
        ],
        floorIndex:3,
        hotspot:{x:46.16,y:24.74},
        overlayPoly:[[9.92,5.91],[24.08,5.91],[24.08,10.73],[25.23,10.82],[25.23,5.91],[80.79,6.08],[80.92,9.42],[90.81,9.59],[91.02,31.86],[82.28,32.21],[82.28,41.68],[78.55,41.95],[78.55,42.73],[25.16,42.56],[25.3,15.55],[24.21,15.73],[24.15,40.37],[20.42,40.45],[20.35,42.65],[9.85,42.65]]
      },
      {
        id:'camera4',name:{it:'Camera della proprietaria',en:"Owner's room"},priceSingola:null,priceDoppia:null,sqm:null,
        availableFrom:'locked',
        features:[],
        photos:[],
        floorIndex:2,
        hotspot:{x:39.88,y:24.94},
        overlayPoly:[[25.37,7.14],[25.3,42.82],[54.43,42.82],[54.43,6.96]]
      }
    ]
  },
  16:{
    id:16,
    name:{it:'Vicolo San Bernardino n.27',en:'Vicolo San Bernardino n.27'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.401559,lng:12.86289,
    cover:'images/via-san-bernardino-27/foto-01.jpg',
    sideImg:'images/via-san-bernardino-27/foto-01.jpg',
    gallery:[
      'images/via-san-bernardino-27/foto-02.jpg',
      'images/via-san-bernardino-27/foto-03.jpg',
      'images/via-san-bernardino-27/foto-04.jpg',
      'images/via-san-bernardino-27/foto-05.jpg',
      'images/via-san-bernardino-27/foto-06.jpg',
      'images/via-san-bernardino-27/foto-07.jpg',
      'images/via-san-bernardino-27/foto-08.jpg',
      'images/via-san-bernardino-27/foto-09.jpg',
      'images/via-san-bernardino-27/foto-10.jpg',
      'images/via-san-bernardino-27/foto-11.jpg',
      'images/via-san-bernardino-27/foto-12.jpg',
      'images/via-san-bernardino-27/foto-13.jpg',
      'images/via-san-bernardino-27/foto-14.jpg',
      'images/via-san-bernardino-27/foto-15.jpg',
    ],
    descrizione:{it:"<p>Affittasi camere singole in appartamento riservato a studentesse universitarie, all'interno di un palazzetto cielo-terra su tre livelli in Vicolo San Bernardino, adiacente a Piazza San Francesco, nel pieno centro storico di Rieti. In pochi minuti a piedi si raggiungono Piazza Cavour (fermata delle linee urbane ed extraurbane), il supermercato Conad e i principali servizi, oltre alle sedi dell'Università La Sapienza, a poche centinaia di metri.</p><p>L'appartamento si sviluppa su tre piani: al piano terra si trovano l'ingresso, la cucina abitabile e la zona living; al primo piano una delle camere e i due bagni; al secondo piano le restanti due camere. I due bagni si differenziano per dotazioni: quello di servizio, cieco, è dotato di lavandino e box doccia, mentre il bagno principale, finestrato, dispone di vasca da bagno, lavandino e sanitari.</p><p>Completamente arredato e dotato di ogni comfort, tra cui lavastoviglie, lavatrice, connessione internet e aria condizionata. Riscaldamento autonomo.</p>",en:"<p>Single rooms for rent in an apartment reserved for female university students, inside a townhouse spread over three levels on Vicolo San Bernardino, next to Piazza San Francesco, in the heart of Rieti's historic centre. A few minutes' walk from Piazza Cavour (urban and extra-urban bus stop), the Conad supermarket and the main amenities, as well as the La Sapienza University campuses, just a few hundred metres away.</p><p>The apartment is spread over three floors: the ground floor has the entrance, an eat-in kitchen and a living area; the first floor has one of the bedrooms and both bathrooms; the second floor has the remaining two bedrooms. The two bathrooms differ in fittings: the windowless service bathroom has a sink and shower box, while the main bathroom, which has a window, features a bathtub, sink and toilet.</p><p>Fully furnished and equipped with every comfort, including dishwasher, washing machine, internet connection and air conditioning. Independent heating.</p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'90 m²',en:'90 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'Terra, 1, 2 - Palazzetto cielo-terra',en:'Terra, 1, 2 - Palazzetto cielo-terra'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Fermata bus urbani/extraurbani',en:'Urban/extra-urban bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    interoPricing:[],
    deposito:2,
    floorplan:[
      {img:'images/via-san-bernardino-27/planimetria-terra.jpg',label:{it:'Piano Terra',en:'Ground floor'}},
      {img:'images/via-san-bernardino-27/planimetria-primo.jpg',label:{it:'Piano Primo',en:'First floor'}},
      {img:'images/via-san-bernardino-27/planimetria-secondo.jpg',label:{it:'Piano Secondo',en:'Second floor'}}
    ],
    floorplanDefault:1,
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1 - Primo piano',en:'Camera singola 1 - Primo piano'},priceSingola:300,priceDoppia:null,sqm:12,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio',en:'Wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-san-bernardino-27/foto-11.jpg',
          'images/via-san-bernardino-27/foto-14.jpg',
          'images/via-san-bernardino-27/foto-15.jpg'
        ],
        floorIndex:1,
        hotspot:{x:20.25,y:77.97},
        overlayPoly:[[6.86,29.58],[6.64,86.42],[33.66,86.84],[33.85,29.93]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2 - Secondo piano',en:'Camera singola 2 - Secondo piano'},priceSingola:280,priceDoppia:null,sqm:12,
        availableFrom:'2027-09-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio',en:'Wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-san-bernardino-27/foto-04.jpg'
        ],
        floorIndex:2,
        hotspot:{x:18.81,y:77.34},
        overlayPoly:[[5.35,26.46],[5.12,86.11],[32.35,86.69],[32.4,27.36]]
      },
      {
        id:'camera3',name:{it:'Camera doppia - Secondo piano',en:'Camera doppia - Secondo piano'},priceSingola:350,priceDoppia:380,sqm:16,
        availableFrom:'2027-09-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio',en:'Wardrobe'},{it:'Scrivania',en:'Desk'}],
        photos:[
          'images/via-san-bernardino-27/foto-06.jpg'
        ],
        floorIndex:2,
        hotspot:{x:67.84,y:88.94},
        overlayPoly:[[48.02,25.54],[48.34,86.05],[68.53,86.21],[68.88,93.49],[86.12,93.24],[87.17,24.97]]
      }
    ]
  },
  17:{
    id:17,
    name:{it:'Via G. Garibaldi n.89',en:'Via G. Garibaldi n.89'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    lat:42.404495,lng:12.868609,
    cover:'images/via-garibaldi-89-secondo/foto-01.jpg',
    sideImg:'images/via-garibaldi-89-secondo/foto-06.jpg',
    gallery:[
      'images/via-garibaldi-89-secondo/foto-02.jpg',
      'images/via-garibaldi-89-secondo/foto-03.jpg',
      'images/via-garibaldi-89-secondo/foto-04.jpg',
      'images/via-garibaldi-89-secondo/foto-05.jpg',
      'images/via-garibaldi-89-secondo/foto-06.jpg',
      'images/via-garibaldi-89-secondo/foto-07.jpg',
      'images/via-garibaldi-89-secondo/foto-08.jpg',
      'images/via-garibaldi-89-secondo/foto-09.jpg',
      'images/via-garibaldi-89-secondo/foto-10.jpg',
      'images/via-garibaldi-89-secondo/foto-11.jpg',
      'images/via-garibaldi-89-secondo/foto-12.jpg',
      'images/via-garibaldi-89-secondo/foto-14.jpg',
      'images/via-garibaldi-89-secondo/foto-15.jpg',
      'images/via-garibaldi-89-secondo/foto-16.jpg',
      'images/via-garibaldi-89-secondo/foto-17.jpg',
    ],
    descrizione:{it:"<p>Appartamento riservato a studentesse universitarie in Via Giuseppe Garibaldi, al secondo piano di Palazzo Martelli, residenza storica risalente al XVI secolo, nel cuore del centro storico di Rieti, entro le mura cittadine. Posizione strategica: 10 minuti a piedi separano l'appartamento sia dalla sede dell'Università La Sapienza che da quella dell'Università della Tuscia, mentre la stazione ferroviaria e il supermercato Carrefour di Viale Morroni si trovano a poche centinaia di metri.</p><p>Attraversato il cortile condominiale e salite le scale, un piccolo ingresso introduce a uno spazioso salone, affiancato dal primo dei tre bagni, quello di servizio con centrale termica. Salendo un paio di gradini si raggiunge un secondo soggiorno, più raccolto, da cui si accede alla cucina abitabile e alle due camere singole, comunicanti tra loro e servite dal secondo bagno con box doccia. Completa la zona notte una suite doppia più ampia, dotata di bagno privato con vasca idromassaggio. Un'ulteriore scala interna conduce all'altana, adibita a monolocale indipendente e proposta come annuncio a sé stante.</p><p>Arredi, materiali e rifiniture di grande pregio caratterizzano l'intero appartamento, con pavimento in parquet in ogni ambiente. Riscaldamento autonomo.</p><p><em>Nota: alcune delle foto sono state scattate durante la fase di allestimento dell'appartamento, quando alcuni mobili erano ancora protetti da teli.</em></p>",en:"<p>Apartment reserved for female university students on Via Giuseppe Garibaldi, on the second floor of Palazzo Martelli, a historic residence dating back to the 16th century, in the heart of Rieti's old town, within the city walls. Strategic location: a 10-minute walk separates the apartment from both the La Sapienza and Tuscia University campuses, while the train station and the Carrefour supermarket on Viale Morroni are just a few hundred metres away.</p><p>Crossing the shared courtyard and climbing the stairs, a small entrance hall opens onto a spacious living room, flanked by the first of the three bathrooms, the service one with the boiler. A couple of steps up lead to a second, cosier living area, from which you reach the eat-in kitchen and the two single bedrooms, connected to each other and served by the second bathroom with shower box. Completing the sleeping quarters is a larger double suite with its own private bathroom featuring a whirlpool tub. A further internal staircase leads up to the loft, converted into an independent studio and listed as a separate property.</p><p>Fine furnishings, materials and finishes run throughout the apartment, with parquet flooring in every room. Independent heating.</p><p><em>Note: some of the photos were taken while the apartment was still being furnished, with some pieces still covered in protective plastic.</em></p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'300+ m²',en:'300+ m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'Secondo',en:'Second'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'3',en:'3'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'entrambi',
    interoPricing:[{persone:3,prezzo:950},{persone:4,prezzo:1000}],
    deposito:1,
    floorplan:'images/via-garibaldi-89-secondo/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:275,priceDoppia:null,sqm:14,
        availableFrom:'2026-11-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Scrivania',en:'Desk'},{it:'Lucernaio',en:'Skylight'},{it:'Armadio grande',en:'Large wardrobe'}],
        photos:[
          'images/via-garibaldi-89-secondo/foto-01.jpg',
          'images/via-garibaldi-89-secondo/foto-03.jpg',
          'images/via-garibaldi-89-secondo/foto-10.jpg',
          'images/via-garibaldi-89-secondo/foto-14.jpg'
        ],
        hotspot:{x:62.87,y:36.84},
        overlayPoly:[[56.53,32.53],[70.01,32.63],[68.32,41.1],[56.6,41.1]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:275,priceDoppia:null,sqm:14,
        availableFrom:'2027-10-01',
        features:[{it:'Letto matrimoniale',en:'Double bed'},{it:'Affaccio panoramico',en:'Panoramic view'},{it:'Scrivania',en:'Desk'},{it:'Armadio a muro',en:'Built-in wardrobe'},{it:'Bagno in camera',en:'En-suite bathroom'}],
        photos:[
          'images/via-garibaldi-89-secondo/foto-02.jpg',
          'images/via-garibaldi-89-secondo/foto-05.jpg',
          'images/via-garibaldi-89-secondo/foto-13.jpg'
        ],
        hotspot:{x:63.31,y:26.28},
        overlayPoly:[[55.38,22.48],[69.81,21.42],[70.76,30.76],[57.28,30.47]]
      },
      {
        id:'camera3',name:{it:'Suite doppia',en:'Suite doppia'},priceSingola:450,priceDoppia:480,pricePerPerson:250,sqm:40,
        availableFrom:'2026-10-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Ampia metratura',en:'Spacious'},{it:'Bagno privato con vasca idromassaggio',en:'Private bathroom with whirlpool tub'}],
        photos:[],
        hotspot:{x:51.43,y:76.67},
        overlayPoly:[[43.52,68.06],[61.48,67.68],[59.85,85.11],[40.88,85.83]]
      }
    ]
  },
  18:{
    id:18,
    name:{it:'Via G. Garibaldi n.89 - Secondo rialzato',en:'Via G. Garibaldi n.89 - Secondo rialzato'},
    zone:{it:'Centro Storico',en:'Historic Centre'},
    available:true,
    availableFrom:'2026-10-01',
    lat:42.404495,lng:12.868609,
    cover:'images/via-garibaldi-89-secondo-rialzato/foto-01.jpg',
    sideImg:'images/via-garibaldi-89-secondo-rialzato/foto-07.jpg',
    gallery:[
      'images/via-garibaldi-89-secondo-rialzato/foto-02.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-03.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-04.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-05.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-06.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-07.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-08.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-09.jpg',
      'images/via-garibaldi-89-secondo-rialzato/foto-10.jpg',
    ],
    descrizione:{it:"<p>Monolocale in affitto riservato a studentesse universitarie, ricavato in un'altana al secondo piano rialzato di Palazzo Martelli, residenza storica risalente al XVI secolo, nel cuore del centro storico di Rieti, entro le mura cittadine. Posizione strategica: a soli 10 minuti a piedi sia dalla sede dell'Università La Sapienza che da quella dell'Università della Tuscia, con la stazione ferroviaria e il supermercato Carrefour di Viale Morroni a poca distanza.</p><p>Dal cortile condominiale si salgono le scale fino all'appartamento del secondo piano, e da lì, attraverso una scala interna a quell'appartamento, si raggiunge l'altana: chi occupa il monolocale condivide quindi il passaggio con gli inquilini del piano sottostante. Dal pianerottolo in cima alla scala si accede al bagno, con box doccia, e all'ambiente unico che compone l'abitazione, un open space di circa 45 mq comprensivo di angolo cottura attrezzato (frigorifero, lavastoviglie, piano a induzione, microonde), letto matrimoniale, divano e angolo studio con tavolo e sedie.</p><p>Ottima l'esposizione, con finestre sul lato Est e un balcone di circa 10 mq sul lato Sud (non conteggiato nella superficie calpestabile), raggiungibile tramite una porta-finestra. Arredi, materiali e finiture di pregio in tutto l'appartamento. Riscaldamento autonomo. Lo spazio è adatto a una persona, o a due se già in confidenza tra loro, data la conformazione a open space dell'ambiente.</p>",en:"<p>Studio flat for rent reserved for female university students, set in a rooftop loft (altana) on the raised second floor of Palazzo Martelli, a historic residence dating back to the 16th century, in the heart of Rieti's historic centre, within the old city walls. Strategic location: just a 10-minute walk from both the La Sapienza and Tuscia University campuses, with the train station and the Carrefour supermarket on Viale Morroni close by.</p><p>From the shared courtyard you climb the stairs to the second-floor apartment, and from there, via an internal staircase within that apartment, you reach the loft: whoever rents the studio therefore shares the passage with the tenants of the floor below. From the landing at the top of the stairs you reach the bathroom, with shower box, and the single open-plan room that makes up the home, roughly 45 sqm including a fitted kitchenette (fridge, dishwasher, induction hob, microwave), a double bed, a sofa and a study corner with table and chairs.</p><p>Excellent light exposure, with windows facing East and a balcony of about 10 sqm facing South (not counted in the floor area), reached through a French door. High-quality furniture, materials and finishes throughout. Independent heating. The space suits one person, or two if already well acquainted, given the open-plan layout.</p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'45 m²',en:'45 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'2 rialzato',en:'2 rialzato'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'1',en:'1'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'No',en:'No'}},
    ],
    servizi:[
      {name:{it:'Stazione ferroviaria/bus',en:'Train/bus station'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'intero',
    interoPricing:[{persone:1,prezzo:475},{persone:2,prezzo:525}],
    deposito:1,
    floorplan:'images/via-garibaldi-89-secondo-rialzato/planimetria.jpg',
    rooms:[

    ]
  },
  19:{
    id:19,
    name:{it:'Via Contigliano n.12',en:'Via Contigliano n.12'},
    zone:{it:'Viale Maraini',en:'Viale Maraini'},
    available:true,
    lat:42.406339,lng:12.858418,
    cover:'images/via-contigliano-12/foto-01.jpg',
    sideImg:'images/via-contigliano-12/foto-18.jpg',
    gallery:[
      'images/via-contigliano-12/foto-02.jpg',
      'images/via-contigliano-12/foto-03.jpg',
      'images/via-contigliano-12/foto-04.jpg',
      'images/via-contigliano-12/foto-05.jpg',
      'images/via-contigliano-12/foto-06.jpg',
      'images/via-contigliano-12/foto-07.jpg',
      'images/via-contigliano-12/foto-08.jpg',
      'images/via-contigliano-12/foto-09.jpg',
      'images/via-contigliano-12/foto-10.jpg',
      'images/via-contigliano-12/foto-11.jpg',
      'images/via-contigliano-12/foto-13.jpg',
      'images/via-contigliano-12/foto-14.jpg',
      'images/via-contigliano-12/foto-15.jpg',
      'images/via-contigliano-12/foto-18.jpg',
      'images/via-contigliano-12/foto-19.jpg',
      'images/via-contigliano-12/foto-20.jpg',
      'images/via-contigliano-12/foto-21.jpg',
      'images/via-contigliano-12/foto-22.jpg',
      'images/via-contigliano-12/foto-23.jpg',
      'images/via-contigliano-12/foto-24.jpg',
      'images/via-contigliano-12/foto-25.jpg',
      'images/via-contigliano-12/foto-26.jpg',
      'images/via-contigliano-12/foto-27.jpg',
      'images/via-contigliano-12/camera2-01.jpg',
      'images/via-contigliano-12/camera2-02.jpg',
      'images/via-contigliano-12/camera2-03.jpg',
      'images/via-contigliano-12/camera2-04.jpg',
      'images/via-contigliano-12/camera2-05.jpg',
      'images/via-contigliano-12/camera2-06.jpg',
      'images/via-contigliano-12/camera2-07.jpg',
      'images/via-contigliano-12/camera3-01.jpg',
      'images/via-contigliano-12/camera3-02.jpg',
      'images/via-contigliano-12/camera3-03.jpg',
      'images/via-contigliano-12/camera3-04.jpg',
      'images/via-contigliano-12/camera3-05.jpg',
      'images/via-contigliano-12/camera3-06.jpg',
    ],
    descrizione:{it:"<p>Affittasi a studenti fuorisede appartamento situato al quarto piano di un condominio in Via Contigliano 12, a Rieti. L'immobile si trova appena fuori dal centro storico, in una zona centrale, ben collegata e dotata di ogni comfort e servizio: da qui è possibile spostarsi a piedi ovunque, raggiungendo con facilità sia la sede dell'Università La Sapienza che quella dell'Università della Tuscia. L'edificio è dotato di ascensore e giardino condominiale.</p><p>Entrando ci si trova in un piccolo ingresso, da cui si accede al salone doppio, dotato di balcone. Attraversando il corridoio si raggiunge la sala da pranzo e, oltre questa, la cucina, affacciata su un secondo balcone. Proseguendo lungo il corridoio si incontrano, sulla sinistra, il bagno principale con ampio box doccia e, sulla destra, la prima camera singola, anch'essa dotata di balcone. In fondo al corridoio si trovano, sulla sinistra, il bagno di servizio con vasca da bagno e, sulla destra, la seconda camera singola, leggermente più ampia della prima ma priva di balcone. Da un piccolo disimpegno si raggiunge infine la camera doppia, dotata di due letti singoli e di un grande armadio a muro. Un quarto balcone, più ampio degli altri, si trova all'estremità opposta rispetto all'ingresso. Per i dettagli sulla disposizione interna si rimanda alla planimetria allegata.</p><p>Entrambi i bagni sono finestrati. Riscaldamento autonomo, appartamento completamente arredato.</p><p>L'appartamento non è stato pensato come investimento: è stato abitato dalla famiglia proprietaria fino a poco tempo fa e si trova in condizioni eccellenti. Si richiede massima serietà: contattare solo se realmente interessati.</p>",en:"<p>Apartment for rent to out-of-town students, on the fourth floor of a building at Via Contigliano 12, Rieti. The property sits just outside the historic centre, in a central, well-connected area with every comfort and service close by: everything is reachable on foot from here, including both the La Sapienza and Tuscia University campuses. The building has a lift and a shared garden.</p><p>The entrance hall is small and leads into the double living room, which has a balcony. Crossing the corridor leads to the dining room and, beyond it, the kitchen, which opens onto a second balcony. Further along the corridor, on the left, is the main bathroom with a large shower box, and on the right, the first single bedroom, also with its own balcony. At the end of the corridor, on the left, is the service bathroom with a bathtub, and on the right, the second single bedroom, slightly larger than the first but without a balcony. A small hallway leads to the double bedroom, furnished with two single beds and a large built-in wardrobe. A fourth, larger balcony sits at the opposite end from the entrance. For further details on the internal layout, please refer to the attached floor plan.</p><p>Both bathrooms have windows. Independent heating, fully furnished apartment.</p><p>The apartment was never intended as an investment property: it was home to the owners' family until recently and is in excellent condition. Serious enquiries only, please get in touch only if genuinely interested.</p>"},
    caratteristiche:[
      {label:{it:'Superficie',en:'Size'},value:{it:'120 m²',en:'120 m²'}},
      {label:{it:'Piano',en:'Floor'},value:{it:'3',en:'3'}},
      {label:{it:'Ascensore',en:'Lift'},value:{it:'Sì',en:'Yes'}},
      {label:{it:'Bagni',en:'Bathrooms'},value:{it:'2',en:'2'}},
      {label:{it:'Riscaldamento',en:'Heating'},value:{it:'Autonomo',en:'Independent'}},
      {label:{it:'Arredato',en:'Furnished'},value:{it:'Sì',en:'Yes'}},
    ],
    servizi:[
      {name:{it:'Sede Università La Sapienza',en:'La Sapienza University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Sede Università della Tuscia',en:'Tuscia University campus'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Supermercato',en:'Supermarket'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Fermata autobus',en:'Bus stop'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Palestra',en:'Gym'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Locali per mangiare e bere',en:'Food and drinks'},dist:{it:'nelle vicinanze',en:'nearby'}},
      {name:{it:'Centro storico',en:'Historic centre'},dist:{it:'nelle vicinanze',en:'nearby'}},
    ],
    rentalMode:'camere',
    deposito:1,
    interoPricing:[],
    floorplan:'images/via-contigliano-12/planimetria.jpg',
    rooms:[
      {
        id:'camera1',name:{it:'Camera singola 1',en:'Camera singola 1'},priceSingola:300,priceDoppia:null,sqm:10,
        availableFrom:'2026-11-01',
        features:[{it:'Letto singolo',en:'Single bed'},{it:'Armadio',en:'Wardrobe'},{it:'Scrivania',en:'Desk'},{it:'Balcone',en:'Balcony'}],
        photos:[],
        hotspot:{x:57.37,y:84.0},
        overlayPoly:[[49.55,56.96],[65.19,56.96],[65.19,95.53],[49.55,95.53]]
      },
      {
        id:'camera2',name:{it:'Camera singola 2',en:'Camera singola 2'},priceSingola:300,priceDoppia:null,sqm:14,
        availableFrom:'2027-03-01',
        features:[{it:'Letto a una piazza e mezza',en:'Extra-long single bed'},{it:'Scrivania grande',en:'Large desk'},{it:'Armadio',en:'Wardrobe'}],
        photos:[
          'images/via-contigliano-12/camera2-01.jpg',
          'images/via-contigliano-12/camera2-02.jpg',
          'images/via-contigliano-12/camera2-03.jpg',
          'images/via-contigliano-12/camera2-04.jpg',
          'images/via-contigliano-12/camera2-05.jpg',
          'images/via-contigliano-12/camera2-06.jpg',
          'images/via-contigliano-12/camera2-07.jpg'
        ],
        hotspot:{x:74.12,y:87.5},
        overlayPoly:[[65.65,56.59],[82.58,56.59],[82.58,93.05],[65.65,93.05]]
      },
      {
        id:'camera3',name:{it:'Camera doppia',en:'Camera doppia'},priceSingola:400,priceDoppia:450,sqm:20,
        availableFrom:'2027-03-01',
        features:[{it:'Due letti singoli',en:'Two single beds'},{it:'Armadio grande',en:'Large wardrobe'},{it:'Scrivanie',en:'Desks'}],
        photos:[
          'images/via-contigliano-12/camera3-01.jpg',
          'images/via-contigliano-12/camera3-02.jpg',
          'images/via-contigliano-12/camera3-03.jpg',
          'images/via-contigliano-12/camera3-04.jpg',
          'images/via-contigliano-12/camera3-05.jpg',
          'images/via-contigliano-12/camera3-06.jpg'
        ],
        hotspot:{x:70.94,y:30.0},
        overlayPoly:[[59.40,3.95],[82.49,3.95],[82.49,35.01],[59.40,35.01]]
      }
    ]
  }
};

window.SOLUZIONI_LIST = [
  {id:1,name:"Soluzione Via Garibaldi",    zone:"Centro Storico",  price:300,rooms:2,sqm:117,roomDates:["2026-10-01","2026-10-01"], lat:42.4034304,lng:12.8652728,img:"images/via-garibaldi-188/terrazza-03.jpg"},
  {id:2,name:"Via San Leopardo",zone:"Centro Storico",price:300,rooms:4,sqm:200,roomDates:['2026-09-01','2027-09-01','2027-03-01','2027-08-01'], lat:42.403857,lng:12.8652,img:"images/via-san-leopardo-1/foto-36.jpg"},
  {id:3,name:"Via G. Garibaldi n.33",zone:"Centro Storico",price:650,rooms:1,sqm:80,available:false, lat:42.404762,lng:12.870206,img:"images/via-garibaldi-33/foto-15.jpg"},
  {id:4,name:"Via delle Ortensie n.8",zone:"Città Giardino",price:280,rooms:2,sqm:110,roomDates:['2026-12-01','2027-07-01'], lat:42.399983,lng:12.856886,img:"images/via-delle-ortensie-8/foto-01.jpg"},
  {id:5,name:"Via C. Maderno n.10",zone:"Micioccoli",price:300,rooms:2,sqm:80,roomDates:['2026-08-01','2027-05-01'], lat:42.41854,lng:12.855783,img:"images/via-maderno-10/foto-09.jpg"},
  {id:6,name:"Via Nuova n.115 - Piano I",zone:"Centro Storico",price:520,rooms:1,sqm:55,available:true, lat:42.404778,lng:12.865834,img:"images/via-nuova-115-piano-1/foto-10.jpg"},
  {id:7,name:"Via Nuova n.155 - Piano II",zone:"Centro Storico",price:750,rooms:3,sqm:70,roomDates:['2027-03-01','2027-08-01','2027-08-01'], lat:42.404778,lng:12.865834,img:"images/via-nuova-115-piano-2/foto-11.jpg"},
  {id:8,name:"Via Nuova n.115 - Piano III",zone:"Centro Storico",price:780,rooms:3,sqm:78,roomDates:['2027-10-01','2027-09-01','2027-09-01'], lat:42.404778,lng:12.865834,img:"images/via-nuova-115-piano-3/foto-06.jpg"},
  {id:9,name:"Via Porta Romana n.22",zone:"Porta Romana",price:600,rooms:1,sqm:50,available:false, lat:42.398305,lng:12.860369,img:"images/placeholder-apt.jpg"},
  {id:10,name:"Via P. Boschi n.29",zone:"Regina Pacis",price:280,rooms:4,sqm:130,roomDates:['2027-09-01','2027-09-01','2027-09-01','2027-01-01'], lat:42.407603,lng:12.853169,img:"images/via-boschi-29/foto-20.jpg"},
  {id:11,name:"Largo S. D\'Acquisto n.14",zone:"Micioccoli",price:260,rooms:3,sqm:90,roomDates:['2026-09-01','2027-08-01','2027-01-01'], lat:42.41629,lng:12.859835,img:"images/largo-dacquisto-14/foto-07.jpg"},
  {id:12,name:"Viale T. Morroni n.20",zone:"Viale Morroni",price:450,rooms:2,sqm:85,roomDates:['2026-09-01','2026-09-01'], lat:42.405201,lng:12.8646,img:"images/via-morroni-20/foto-11.jpg"},
  {id:13,name:"Via della Ripresa n.73",zone:"Centro Storico",price:250,rooms:4,sqm:90,roomDates:['2027-09-01','2027-06-01','2027-01-01','2027-09-01'], lat:42.404539,lng:12.865605,img:"images/via-ripresa-73/foto-03.jpg"},
  {id:14,name:"Via dei Tigli n.14",zone:"Viale Matteucci",price:300,rooms:3,sqm:110,roomDates:['2027-09-01','2027-09-01','2027-09-01'], lat:42.402504,lng:12.854594,img:"images/via-tigli-14/foto-14.jpg"},
  {id:15,name:"Via fratelli Cervi n.2",zone:"Molino della Salce",price:280,rooms:3,sqm:300,roomDates:['2027-08-01','2027-03-01','2026-10-01'], lat:42.404743,lng:12.848819,img:"images/via-fratelli-cervi-2/foto-08.jpg"},
  {id:16,name:"Vicolo San Bernardino n.27",zone:"Centro Storico",price:280,rooms:3,sqm:90,roomDates:['2027-09-01','2027-09-01','2027-09-01'], lat:42.401559,lng:12.86289,img:"images/via-san-bernardino-27/foto-01.jpg"},
  {id:17,name:"Via G. Garibaldi n.89 - Secondo",zone:"Centro Storico",price:275,rooms:3,sqm:300,roomDates:['2026-11-01','2027-10-01','2026-10-01'], lat:42.404495,lng:12.868609,img:"images/via-garibaldi-89-secondo/foto-06.jpg"},
  {id:18,name:"Via G. Garibaldi n.89 - Secondo rialzato",zone:"Centro Storico",price:475,rooms:1,sqm:45,available:true, lat:42.404495,lng:12.868609,img:"images/via-garibaldi-89-secondo-rialzato/foto-07.jpg"},
  {id:19,name:"Via Contigliano n.12",zone:"Viale Maraini",price:300,rooms:3,sqm:120,roomDates:['2026-10-01','2027-03-01','2027-03-01'], lat:42.406339,lng:12.858418,img:"images/via-contigliano-12/foto-18.jpg"}
];
