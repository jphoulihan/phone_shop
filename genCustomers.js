//random selection from array
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

//shuffle method *not used
Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

//***********lists************//

//alphabet for eircode//
alphabet = `abcdefghijklmnopqrstuvwxyz`;

//titles
const title = `Mx
  Ms
  Mr
  Mrs
  Miss
  Dr`.split(/\n/);

//bNames
const bNames = `Alby
  Colby
  Damir
  Thiago
  Tyson
  Yousuf
  Clark
  Donnie
  Cobi
  Jakov
  Kiaan
  Advik
  Aodán
  Azaan
  Bernardo
  Bradán
  Cadán
  Clay
  Óran
  Rónan
  Ruán
  Seánie
  Sunny
  Théo
  Ruaidhrí
  Lawson
  Kaison
  Laoch
  Yazan
  Orán
  Pádhraic
  T J
  Teidí
  Cúán
  Denny
  Benett
  Aris
  Boston
  Brín
  Glen
  Enda
  Aodhan
  Fintan
  Padraic
  Desmond
  Finlay
  Rossa
  Antonio
  Zachariah
  Diarmaid
  Kilian
  Dion
  Finian
  Kornel
  Marcos
  Trevor
  Terry
  Carlos
  Damon
  Jared
  Kaden
  Malachi
  Russell
  Sami
  Solomon
  Wesley
  Aleks
  Anton
  Dwayne
  Enrico
  Erikas
  Felim
  Gabrielius
  Jarlath
  Jerome
  Kallum
  Lennox
  Roberto
  Rui
  Samson
  Taha
  Cohen
  Don
  Geordan
  Isaiah
  Johan
  Jon
  Kade
  Keagan
  Kurt
  Manus
  Micah
  Remi
  Roger
  Theodor
  Tiago
  Torin
  Xander
  Alejandro`.split(/\n/);

//gNames
const gNames = `Emily
  Grace
  Fiadh
  Sophie
  Hannah
  Amelia
  Ava
  Ellie
  Ella
  Mia
  Lucy
  Emma
  Lily
  Olivia
  Chloe
  Aoife
  Caoimhe
  Molly
  Anna
  Sophia
  Holly
  Freya
  Saoirse
  Kate
  Sadie
  Robyn
  Katie
  Ruby
  Evie
  Éabha
  Cara
  Sarah
  Isabelle
  Isla
  Alice
  Leah
  Sadhbh
  Eva
  Erin
  Róisín
  Zoe
  Sofia
  Zara
  Willow
  Charlotte
  Lauren
  Jessica
  Faye
  Ciara
  Clodagh
  Millie
  Isabella
  Eve
  Niamh
  Maya
  Layla
  Ada
  Rosie
  Abigail
  Julia
  Clara
  Maisie
  Amy
  Maria
  Aria
  Alannah
  Annie
  Harper
  Aoibhín
  Emilia
  Amber
  Bonnie
  Mila
  Heidi
  Ailbhe
  Bella
  Abbie
  Ivy
  Aoibheann
  Rose
  Sienna
  Elizabeth
  Georgia
  Rebecca
  Laura
  Ellen
  Méabh
  Alexandra
  Kayla
  Isabel
  Hollie
  Mary
  Áine
  Aisling
  Hazel
  Rachel
  Tara
  Evelyn
  Megan
  Doireann`.split(/\n/);

const sNames = `Murphy
  Kelly
  Sullivan
  Walsh
  Smith
  O'Brien
  Byrne
  Ryan
  Connor
  O'Neill
  Reilly
  Doyle
  McCarthy
  Gallagher
  Doherty
  Kennedy
  Lynch
  Murray
  Quinn
  Moore
  McLaughlin
  Carroll
  Connolly
  Daly
  Connell
  Wilson
  Dunne
  Brennan
  Burke
  Collins
  Campbell
  Clarke
  Johnston
  Hughes
  Farrell
  Fitzgerald
  Brown
  Martin
  Maguire
  Nolan
  Flynn
  Thompson
  Callaghan
  O'Donnell
  Duffy
  Mahony
  Boyle
  Healy
  Shea
  White
  Sweeney
  Hayes
  Kavanagh
  Power
  McGrath
  Moran
  Brady
  Stewart
  Casey
  Foley
  Fitzpatrick
  Leary
  McDonnell
  McMahon
  Donnelly
  Regan
  Donovan
  Burns
  Flanagan
  Mullan
  Barry
  Kane
  Robinson
  Cunningham
  Griffin
  Kenny
  Sheehan
  Ward
  Whelan
  Lyons
  Reid
  Graham
  Higgins
  Cullen
  Keane
  King
  Maher
  McKenna
  Bell
  Scott
  Hogan
  Keeffe
  Magee
  McNamara
  McDonald
  McDermott
  Moloney
  Rourke
  Buckley
  Dwyer`.split(/\n/);

//emails
const emailName = `hermanab
  eegsa
  bancboy
  drewf
  moxfulder
  wiseb
  beebop
  rocksteady
  fuzzy
  dunlop
  greeneggs
  icup
  nevermind
  forever41
  laterly
  baconsandwich
  eldridge
  curtains
  drapes
  muffintop
  handles
  weelass
  reverttofakie
  gerjerjerry
  bentop
  benwaaa
  ferfirfrom
  roguewave
  backwardsforwards
  nihlists
  qtip
  methodman
  mfdoom
  nalgene
  rlafore
  adalovely
  eire32
  guitarpicker
  pogueslammer
  idcard
  mousetrap
  tweezerlips
  avrillavinefan
  rockbottom
  sidewalkingfootpath
  vscodemafia
  breakbeat
  funkingupmylife
  relaxthekax
  queueingup`.split(/\n/);

const emailService = `msn
  gmail
  yahoo
  hotmail
  mumail
  aol
  icloud
  verizon
  att
  outlook`.split(/\n/);

const domains = `ie
  es
  nl
  au
  co.uk
  com
  net`.split(/\n/);

const estates = `Abbey Court
  Simmonstown Manor
  Woolstans
  The Grove
  Beaty Park
  Castletown
  Manor Grove
  Beaty Grove
  Dead End
  Ceaderwood
  The Drive
  Cherrywood
  St Patrick's Park
  Vanessa Lawns
  East-Link Bridge
  Samuel Beckett Bridge
  Seán O'Casey Bridge
  Talbot Memorial Bridge
  Loopline Bridge
  Butt Bridge
  Rosie Hackett Bridge
  O'Connell Bridge
  Ha'penny Bridge
  Millennium bridge
  Grattan Bridge
  O'Donovan Rossa Bridge
  Father Mathew Bridge
  Mellows Bridge
  James Joyce Bridge
  Rory O'More Bridge
  Frank Sherwin Bridge
  Seán Heuston Bridge`.split(/\n/);

const towns = `Celbridge
  Leixlip
  Maynooth
  Lucan
  Killarney
  Tralee
  Foxford
  Lahinch
  Cahersiveen
  Dingle
  Brandon
  Claghan
  Sallins
  Ardclock
  Mullaghmore
  Strandhill
  Kinard
  Inch
  Coumeenoole
  Gowlane
  Aileens
  Ventry
  Waymont
  Waterville
  Port Magee`.split(/\n/);

const counties = `Antrim
  Armagh
  Carlow
  Cavan
  Clare
  Cork
  Derry
  Donegal
  Down
  Dublin
  Fermanagh
  Galway
  Kerry
  Kildare
  Kilkenny
  Laois
  Leitrim
  Limerick
  Longford
  Louth
  Mayo
  Meath
  Monaghan
  Offaly
  Roscommon
  Sligo
  Tipperary
  Tyrone
  Waterford
  Westmeath
  Wexford
  Wicklow`.split(/\n/);

//***********lists************//

//***get title**** */
function getRanTitle() {
  return `${title.sample().trim()}`;
}

//******get firstname******/
var fNames = [...new Set([...bNames, ...gNames])];
function getRanFName() {
  return fNames.sample().trim();
}

//******get lastname******/
function getRanLName() {
  return sNames.sample().trim();
}

//**********getting mobile numbers********** *//
const mobileProvider = [85, 87, 86, 89, 83];

function getRandomMobileNumber() {
  return [...Array(7)].map(() => Math.floor(Math.random() * 10)).join("");
}

function getRanMobile() {
  return `0${mobileProvider.sample()}${getRandomMobileNumber()}`;
}

//********getting emails******** */
function getRanEmail() {
  return `${emailName
    .sample()
    .trim()}@${emailService.sample().trim()}.${domains.sample().trim()}`;
}

//*******get eircode****** */
function getEircodeLetter() {
  return `${
    alphabet[Math.floor(Math.random() * alphabet.length)]
  }`.toUpperCase();
}

function eirCodeNum() {
  return Math.floor(Math.random() * 8);
}

function getRanEircode() {
  let a = getEircodeLetter();
  let b = eirCodeNum();
  let c = eirCodeNum();
  let d = getEircodeLetter();
  let e = eirCodeNum();
  let f = getEircodeLetter();
  let g = eirCodeNum();

  return a + b + c + d + e + f + g;
}

//**********get address lines********* */
function getAddressLine() {
  return `${Math.floor(Math.random() * 80 + 1)} ${estates.sample()}`;
}

function getRanTown() {
  return `${towns.sample().trim()}`;
}

function getRanCounty() {
  return `${counties.sample().trim()}`;
}

//insert cunstomer function returning insert objects for personal details
function insertCustomer() {
  let val0 = getRanTitle();
  let val1 = getRanFName();
  let val2 = getRanLName();
  let val3 = getRanMobile();
  let val4 = getRanEmail();

  return `{"title":"${val0}","fname":"${val1}","lname":"${val2}","mobile":"${val3}","email":"${val4}",}`
}

//insert address function returning insert objects for home address, this will be embedded in customer doc
function insertHomeAddress() {
  let val0 = getAddressLine();
  let val1 = getAddressLine();
  let val2 = getRanTown();
  let val3 = getRanCounty();
  let val4 = getRanEircode();

  return `{"label": "Home", "home_add_line_1":"${val0}","home_add_line_2":"${val1}","home_town":"${val2}","home_county_city":"${val3}","home_eircode":"${val4}"}`;
}

//insert address function returning insert objects for shipping address, this will be embedded customer doc
function insertShippingAddress() {
  let val0 = getAddressLine();
  let val1 = getAddressLine();
  let val2 = getRanTown();
  let val3 = getRanCounty();
  let val4 = getRanEircode();

  return `{"label":"Shipping", "ship_add_line_1":"${val0}","ship_add_line_2":"${val1}","ship_town":"${val2}","ship_county_city":"${val3}","ship_eircode":"${val4}"}`;
}

let count = 0;
//increase for larger list of inserts, loop maxCustomer plus 1 to compensate for , format of bulk array insert ;
let maxCustomers = 1;

//method for embedded address array of addresses with labels home, shipping.
function getAddresses() {
  
    while(count < 5){
        console.log(`"addresses": [`);
      
        console.log(insertHomeAddress() + ",\n" + insertShippingAddress());
      
        console.log("]");
        count++;
    }
    count = 0;
}

//loop function for multiple insert statements for customers table
function getCustomers() {
  console.log("List of customer insert statements: \n");
  while (count < 5) {
    //if doing cli insert list remove comma from console.log, for node insert include +"," after insert function
    console.log(insertCustomer());
    count++;
  }
  console.log("\n");
  count = 0;
}


//run this file from cli to execute insert lists
getCustomers();
getAddresses();
