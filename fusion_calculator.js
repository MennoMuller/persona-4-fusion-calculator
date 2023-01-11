const arcana2Combos = [
  { source: ["Fool", "Fool"], result: "Fool" },
  { source: ["Fool", "Magician"], result: "Temperance" },
  { source: ["Fool", "Priestess"], result: "Death" },
  { source: ["Fool", "Empress"], result: "Moon" },
  { source: ["Fool", "Emperor"], result: "Death" },
  { source: ["Fool", "Hierophant"], result: "Chariot" },
  { source: ["Fool", "Lovers"], result: "Empress" },
  { source: ["Fool", "Chariot"], result: "Sun" },
  { source: ["Fool", "Justice"], result: "Magician" },
  { source: ["Fool", "Hermit"], result: "Strength" },
  { source: ["Fool", "Fortune"], result: "Magician" },
  { source: ["Fool", "Strength"], result: "Magician" },
  { source: ["Fool", "Hanged Man"], result: "Strength" },
  { source: ["Fool", "Death"], result: "Hermit" },
  { source: ["Fool", "Temperance"], result: "Hierophant" },
  { source: ["Fool", "Devil"], result: "Temperance" },
  { source: ["Fool", "Tower"], result: "Star" },
  { source: ["Fool", "Star"], result: "Empress" },
  { source: ["Fool", "Moon"], result: "Emperor" },
  { source: ["Fool", "Sun"], result: "Devil" },
  { source: ["Fool", "Judgement"], result: "Hanged Man" },
  { source: ["Fool", "Jester"], result: "Priestess" },
  { source: ["Fool", "Aeon"], result: "Death" },
  { source: ["Magician", "Magician"], result: "Magician" },
  { source: ["Magician", "Priestess"], result: "Moon" },
  { source: ["Magician", "Empress"], result: "Justice" },
  { source: ["Magician", "Emperor"], result: "Strength" },
  { source: ["Magician", "Hierophant"], result: "Devil" },
  { source: ["Magician", "Lovers"], result: "Death" },
  { source: ["Magician", "Chariot"], result: "Temperance" },
  { source: ["Magician", "Justice"], result: "Strength" },
  { source: ["Magician", "Hermit"], result: "Empress" },
  { source: ["Magician", "Fortune"], result: "Lovers" },
  { source: ["Magician", "Strength"], result: "Justice" },
  { source: ["Magician", "Hanged Man"], result: "Sun" },
  { source: ["Magician", "Death"], result: "Emperor" },
  { source: ["Magician", "Temperance"], result: "Strength" },
  { source: ["Magician", "Devil"], result: "Sun" },
  { source: ["Magician", "Tower"], result: "Hanged Man" },
  { source: ["Magician", "Moon"], result: "Star" },
  { source: ["Magician", "Sun"], result: "Chariot" },
  { source: ["Magician", "Judgement"], result: "Lovers" },
  { source: ["Magician", "Jester"], result: "Hierophant" },
  { source: ["Magician", "Aeon"], result: "Emperor" },
  { source: ["Priestess", "Priestess"], result: "Priestess" },
  { source: ["Priestess", "Empress"], result: "Hermit" },
  { source: ["Priestess", "Emperor"], result: "Empress" },
  { source: ["Priestess", "Hierophant"], result: "Sun" },
  { source: ["Priestess", "Lovers"], result: "Emperor" },
  { source: ["Priestess", "Chariot"], result: "Hierophant" },
  { source: ["Priestess", "Justice"], result: "Hermit" },
  { source: ["Priestess", "Hermit"], result: "Death" },
  { source: ["Priestess", "Fortune"], result: "Hanged Man" },
  { source: ["Priestess", "Strength"], result: "Justice" },
  { source: ["Priestess", "Hanged Man"], result: "Moon" },
  { source: ["Priestess", "Death"], result: "Magician" },
  { source: ["Priestess", "Temperance"], result: "Hierophant" },
  { source: ["Priestess", "Devil"], result: "Justice" },
  { source: ["Priestess", "Tower"], result: "Magician" },
  { source: ["Priestess", "Star"], result: "Emperor" },
  { source: ["Priestess", "Moon"], result: "Star" },
  { source: ["Priestess", "Sun"], result: "Devil" },
  { source: ["Priestess", "Judgement"], result: "Sun" },
  { source: ["Priestess", "Jester"], result: "Devil" },
  { source: ["Priestess", "Aeon"], result: "Sun" },
  { source: ["Empress", "Empress"], result: "Empress" },
  { source: ["Empress", "Emperor"], result: "Moon" },
  { source: ["Empress", "Hierophant"], result: "Death" },
  { source: ["Empress", "Lovers"], result: "Justice" },
  { source: ["Empress", "Chariot"], result: "Justice" },
  { source: ["Empress", "Justice"], result: "Magician" },
  { source: ["Empress", "Hermit"], result: "Magician" },
  { source: ["Empress", "Fortune"], result: "Star" },
  { source: ["Empress", "Strength"], result: "Hierophant" },
  { source: ["Empress", "Hanged Man"], result: "Temperance" },
  { source: ["Empress", "Death"], result: "Chariot" },
  { source: ["Empress", "Temperance"], result: "Devil" },
  { source: ["Empress", "Devil"], result: "Priestess" },
  { source: ["Empress", "Tower"], result: "Hermit" },
  { source: ["Empress", "Star"], result: "Chariot" },
  { source: ["Empress", "Moon"], result: "Temperance" },
  { source: ["Empress", "Sun"], result: "Priestess" },
  { source: ["Empress", "Judgement"], result: "Priestess" },
  { source: ["Empress", "Jester"], result: "Strength" },
  { source: ["Empress", "Aeon"], result: "Temperance" },
  { source: ["Emperor", "Emperor"], result: "Emperor" },
  { source: ["Emperor", "Hierophant"], result: "Empress" },
  { source: ["Emperor", "Lovers"], result: "Justice" },
  { source: ["Emperor", "Chariot"], result: "Temperance" },
  { source: ["Emperor", "Justice"], result: "Devil" },
  { source: ["Emperor", "Hermit"], result: "Priestess" },
  { source: ["Emperor", "Fortune"], result: "Lovers" },
  { source: ["Emperor", "Strength"], result: "Hermit" },
  { source: ["Emperor", "Hanged Man"], result: "Empress" },
  { source: ["Emperor", "Death"], result: "Moon" },
  { source: ["Emperor", "Temperance"], result: "Sun" },
  { source: ["Emperor", "Devil"], result: "Moon" },
  { source: ["Emperor", "Tower"], result: "Star" },
  { source: ["Emperor", "Star"], result: "Death" },
  { source: ["Emperor", "Moon"], result: "Magician" },
  { source: ["Emperor", "Sun"], result: "Chariot" },
  { source: ["Emperor", "Judgement"], result: "Lovers" },
  { source: ["Emperor", "Jester"], result: "Justice" },
  { source: ["Emperor", "Aeon"], result: "Hanged Man" },
  { source: ["Hierophant", "Hierophant"], result: "Hierophant" },
  { source: ["Hierophant", "Lovers"], result: "Death" },
  { source: ["Hierophant", "Chariot"], result: "Sun" },
  { source: ["Hierophant", "Justice"], result: "Temperance" },
  { source: ["Hierophant", "Hermit"], result: "Justice" },
  { source: ["Hierophant", "Fortune"], result: "Priestess" },
  { source: ["Hierophant", "Strength"], result: "Sun" },
  { source: ["Hierophant", "Hanged Man"], result: "Death" },
  { source: ["Hierophant", "Death"], result: "Devil" },
  { source: ["Hierophant", "Temperance"], result: "Magician" },
  { source: ["Hierophant", "Devil"], result: "Emperor" },
  { source: ["Hierophant", "Tower"], result: "Hanged Man" },
  { source: ["Hierophant", "Star"], result: "Moon" },
  { source: ["Hierophant", "Moon"], result: "Empress" },
  { source: ["Hierophant", "Sun"], result: "Strength" },
  { source: ["Hierophant", "Judgement"], result: "Chariot" },
  { source: ["Hierophant", "Jester"], result: "Magician" },
  { source: ["Hierophant", "Aeon"], result: "Moon" },
  { source: ["Lovers", "Lovers"], result: "Lovers" },
  { source: ["Lovers", "Chariot"], result: "Hierophant" },
  { source: ["Lovers", "Justice"], result: "Priestess" },
  { source: ["Lovers", "Hermit"], result: "Magician" },
  { source: ["Lovers", "Fortune"], result: "Star" },
  { source: ["Lovers", "Strength"], result: "Emperor" },
  { source: ["Lovers", "Hanged Man"], result: "Moon" },
  { source: ["Lovers", "Death"], result: "Star" },
  { source: ["Lovers", "Temperance"], result: "Hierophant" },
  { source: ["Lovers", "Devil"], result: "Hierophant" },
  { source: ["Lovers", "Tower"], result: "Star" },
  { source: ["Lovers", "Star"], result: "Hermit" },
  { source: ["Lovers", "Moon"], result: "Hanged Man" },
  { source: ["Lovers", "Sun"], result: "Devil" },
  { source: ["Lovers", "Judgement"], result: "Strength" },
  { source: ["Lovers", "Jester"], result: "Sun" },
  { source: ["Lovers", "Aeon"], result: "Justice" },
  { source: ["Chariot", "Chariot"], result: "Chariot" },
  { source: ["Chariot", "Justice"], result: "Temperance" },
  { source: ["Chariot", "Hermit"], result: "Justice" },
  { source: ["Chariot", "Fortune"], result: "Devil" },
  { source: ["Chariot", "Strength"], result: "Magician" },
  { source: ["Chariot", "Hanged Man"], result: "Death" },
  { source: ["Chariot", "Death"], result: "Hermit" },
  { source: ["Chariot", "Temperance"], result: "Magician" },
  { source: ["Chariot", "Devil"], result: "Moon" },
  { source: ["Chariot", "Tower"], result: "Hanged Man" },
  { source: ["Chariot", "Star"], result: "Hierophant" },
  { source: ["Chariot", "Moon"], result: "Sun" },
  { source: ["Chariot", "Sun"], result: "Strength" },
  { source: ["Chariot", "Judgement"], result: "Temperance" },
  { source: ["Chariot", "Jester"], result: "Chariot" },
  { source: ["Chariot", "Aeon"], result: "Strength" },
  { source: ["Justice", "Justice"], result: "Justice" },
  { source: ["Justice", "Hermit"], result: "Strength" },
  { source: ["Justice", "Fortune"], result: "Lovers" },
  { source: ["Justice", "Strength"], result: "Temperance" },
  { source: ["Justice", "Hanged Man"], result: "Priestess" },
  { source: ["Justice", "Death"], result: "Strength" },
  { source: ["Justice", "Temperance"], result: "Hermit" },
  { source: ["Justice", "Devil"], result: "Magician" },
  { source: ["Justice", "Tower"], result: "Lovers" },
  { source: ["Justice", "Star"], result: "Moon" },
  { source: ["Justice", "Moon"], result: "Strength" },
  { source: ["Justice", "Sun"], result: "Temperance" },
  { source: ["Justice", "Judgement"], result: "Lovers" },
  { source: ["Justice", "Jester"], result: "Emperor" },
  { source: ["Justice", "Aeon"], result: "Lovers" },
  { source: ["Hermit", "Hermit"], result: "Hermit" },
  { source: ["Hermit", "Fortune"], result: "Empress" },
  { source: ["Hermit", "Strength"], result: "Hierophant" },
  { source: ["Hermit", "Hanged Man"], result: "Moon" },
  { source: ["Hermit", "Death"], result: "Sun" },
  { source: ["Hermit", "Temperance"], result: "Magician" },
  { source: ["Hermit", "Devil"], result: "Justice" },
  { source: ["Hermit", "Tower"], result: "Death" },
  { source: ["Hermit", "Star"], result: "Justice" },
  { source: ["Hermit", "Moon"], result: "Empress" },
  { source: ["Hermit", "Sun"], result: "Temperance" },
  { source: ["Hermit", "Judgement"], result: "Star" },
  { source: ["Hermit", "Jester"], result: "Moon" },
  { source: ["Hermit", "Aeon"], result: "Magician" },
  { source: ["Fortune", "Fortune"], result: "Fortune" },
  { source: ["Fortune", "Strength"], result: "Star" },
  { source: ["Fortune", "Hanged Man"], result: "Death" },
  { source: ["Fortune", "Death"], result: "Hermit" },
  { source: ["Fortune", "Temperance"], result: "Devil" },
  { source: ["Fortune", "Devil"], result: "Emperor" },
  { source: ["Fortune", "Tower"], result: "Chariot" },
  { source: ["Fortune", "Star"], result: "Star" },
  { source: ["Fortune", "Moon"], result: "Lovers" },
  { source: ["Fortune", "Sun"], result: "Priestess" },
  { source: ["Fortune", "Judgement"], result: "Hanged Man" },
  { source: ["Fortune", "Jester"], result: "Devil" },
  { source: ["Fortune", "Aeon"], result: "Priestess" },
  { source: ["Strength", "Strength"], result: "Strength" },
  { source: ["Strength", "Hanged Man"], result: "Hierophant" },
  { source: ["Strength", "Death"], result: "Hanged Man" },
  { source: ["Strength", "Temperance"], result: "Sun" },
  { source: ["Strength", "Devil"], result: "Hermit" },
  { source: ["Strength", "Tower"], result: "Hanged Man" },
  { source: ["Strength", "Star"], result: "Emperor" },
  { source: ["Strength", "Moon"], result: "Justice" },
  { source: ["Strength", "Sun"], result: "Temperance" },
  { source: ["Strength", "Jester"], result: "Empress" },
  { source: ["Strength", "Aeon"], result: "Chariot" },
  { source: ["Hanged Man", "Hanged Man"], result: "Hanged Man" },
  { source: ["Hanged Man", "Death"], result: "Priestess" },
  { source: ["Hanged Man", "Temperance"], result: "Death" },
  { source: ["Hanged Man", "Devil"], result: "Justice" },
  { source: ["Hanged Man", "Tower"], result: "Hermit" },
  { source: ["Hanged Man", "Star"], result: "Empress" },
  { source: ["Hanged Man", "Moon"], result: "Priestess" },
  { source: ["Hanged Man", "Sun"], result: "Devil" },
  { source: ["Hanged Man", "Judgement"], result: "Empress" },
  { source: ["Hanged Man", "Jester"], result: "Priestess" },
  { source: ["Hanged Man", "Aeon"], result: "Death" },
  { source: ["Death", "Death"], result: "Death" },
  { source: ["Death", "Temperance"], result: "Chariot" },
  { source: ["Death", "Devil"], result: "Star" },
  { source: ["Death", "Tower"], result: "Lovers" },
  { source: ["Death", "Star"], result: "Lovers" },
  { source: ["Death", "Moon"], result: "Priestess" },
  { source: ["Death", "Sun"], result: "Empress" },
  { source: ["Death", "Jester"], result: "Temperance" },
  { source: ["Death", "Aeon"], result: "Hanged Man" },
  { source: ["Temperance", "Temperance"], result: "Temperance" },
  { source: ["Temperance", "Devil"], result: "Hermit" },
  { source: ["Temperance", "Tower"], result: "Star" },
  { source: ["Temperance", "Star"], result: "Hierophant" },
  { source: ["Temperance", "Moon"], result: "Hanged Man" },
  { source: ["Temperance", "Sun"], result: "Hermit" },
  { source: ["Temperance", "Jester"], result: "Death" },
  { source: ["Temperance", "Aeon"], result: "Empress" },
  { source: ["Devil", "Devil"], result: "Devil" },
  { source: ["Devil", "Tower"], result: "Emperor" },
  { source: ["Devil", "Star"], result: "Emperor" },
  { source: ["Devil", "Moon"], result: "Empress" },
  { source: ["Devil", "Sun"], result: "Hierophant" },
  { source: ["Devil", "Jester"], result: "Chariot" },
  { source: ["Devil", "Aeon"], result: "Magician" },
  { source: ["Tower", "Tower"], result: "Tower" },
  { source: ["Tower", "Star"], result: "Hanged Man" },
  { source: ["Tower", "Moon"], result: "Priestess" },
  { source: ["Tower", "Sun"], result: "Chariot" },
  { source: ["Tower", "Jester"], result: "Hermit" },
  { source: ["Tower", "Aeon"], result: "Emperor" },
  { source: ["Star", "Star"], result: "Star" },
  { source: ["Star", "Moon"], result: "Emperor" },
  { source: ["Star", "Sun"], result: "Moon" },
  { source: ["Star", "Jester"], result: "Empress" },
  { source: ["Star", "Aeon"], result: "Chariot" },
  { source: ["Moon", "Moon"], result: "Moon" },
  { source: ["Moon", "Sun"], result: "Strength" },
  { source: ["Moon", "Jester"], result: "Hermit" },
  { source: ["Moon", "Aeon"], result: "Hierophant" },
  { source: ["Sun", "Sun"], result: "Sun" },
  { source: ["Sun", "Jester"], result: "Lovers" },
  { source: ["Sun", "Aeon"], result: "Priestess" },
  { source: ["Judgement", "Judgement"], result: "Judgement" },
  { source: ["Judgement", "Jester"], result: "Chariot" },
  { source: ["Judgement", "Aeon"], result: "Hanged Man" },
  { source: ["Jester", "Jester"], result: "Jester" },
  { source: ["Jester", "Aeon"], result: "Devil" },
  { source: ["Aeon", "Aeon"], result: "Aeon" },
];

const arcana3Combos = [
  { source: ["Magician", "Fool"], result: "Fortune" },
  { source: ["Priestess", "Fool"], result: "Lovers" },
  { source: ["Priestess", "Magician"], result: "Fortune" },
  { source: ["Empress", "Fool"], result: "Judgement" },
  { source: ["Empress", "Magician"], result: "Sun" },
  { source: ["Empress", "Priestess"], result: "Temperance" },
  { source: ["Emperor", "Fool"], result: "Hermit" },
  { source: ["Emperor", "Magician"], result: "Death" },
  { source: ["Emperor", "Priestess"], result: "Justice" },
  { source: ["Emperor", "Empress"], result: "Fool" },
  { source: ["Hierophant", "Fool"], result: "Tower" },
  { source: ["Hierophant", "Magician"], result: "Jester" },
  { source: ["Hierophant", "Priestess"], result: "Empress" },
  { source: ["Hierophant", "Empress"], result: "Priestess" },
  { source: ["Hierophant", "Emperor"], result: "Chariot" },
  { source: ["Lovers", "Fool"], result: "Devil" },
  { source: ["Lovers", "Magician"], result: "Temperance" },
  { source: ["Lovers", "Priestess"], result: "Hanged Man" },
  { source: ["Lovers", "Empress"], result: "Fool" },
  { source: ["Lovers", "Emperor"], result: "Devil" },
  { source: ["Lovers", "Hierophant"], result: "Hanged Man" },
  { source: ["Chariot", "Fool"], result: "Lovers" },
  { source: ["Chariot", "Magician"], result: "Emperor" },
  { source: ["Chariot", "Priestess"], result: "Magician" },
  { source: ["Chariot", "Empress"], result: "Emperor" },
  { source: ["Chariot", "Emperor"], result: "Tower" },
  { source: ["Chariot", "Hierophant"], result: "Judgement" },
  { source: ["Chariot", "Lovers"], result: "Hierophant" },
  { source: ["Justice", "Fool"], result: "Chariot" },
  { source: ["Justice", "Magician"], result: "CHariot" },
  { source: ["Justice", "Priestess"], result: "Hermit" },
  { source: ["Justice", "Empress"], result: "Death" },
  { source: ["Justice", "Emperor"], result: "Jester" },
  { source: ["Justice", "Hierophant"], result: "Magician" },
  { source: ["Justice", "Lovers"], result: "Aeon" },
  { source: ["Justice", "Chariot"], result: "Temperance" },
  { source: ["Hermit", "Fool"], result: "Strength" },
  { source: ["Hermit", "Magician"], result: "Empress" },
  { source: ["Hermit", "Priestess"], result: "Magician" },
  { source: ["Hermit", "Empress"], result: "Fool" },
  { source: ["Hermit", "Emperor"], result: "Moon" },
  { source: ["Hermit", "Hierophant"], result: "Lovers" },
  { source: ["Hermit", "Lovers"], result: "Hierophant" },
  { source: ["Hermit", "Chariot"], result: "Priestess" },
  { source: ["Hermit", "Justice"], result: "Emperor" },
  { source: ["Fortune", "Fool"], result: "Judgement" },
  { source: ["Fortune", "Magician"], result: "Strength" },
  { source: ["Fortune", "Priestess"], result: "Aeon" },
  { source: ["Fortune", "Empress"], result: "Strength" },
  { source: ["Fortune", "Emperor"], result: "Priestess" },
  { source: ["Fortune", "Hierophant"], result: "Hanged Man" },
  { source: ["Fortune", "Lovers"], result: "Hanged Man" },
  { source: ["Fortune", "Chariot"], result: "Temperance" },
  { source: ["Fortune", "Justice"], result: "Priestess" },
  { source: ["Fortune", "Hermit"], result: "Judgement" },
  { source: ["Strength", "Fool"], result: "Empress" },
  { source: ["Strength", "Magician"], result: "Tower" },
  { source: ["Strength", "Priestess"], result: "Empress" },
  { source: ["Strength", "Empress"], result: "Jester" },
  { source: ["Strength", "Emperor"], result: "Hermit" },
  { source: ["Strength", "Hierophant"], result: "Moon" },
  { source: ["Strength", "Lovers"], result: "Fool" },
  { source: ["Strength", "Chariot"], result: "Aeon" },
  { source: ["Strength", "Justice"], result: "Priestess" },
  { source: ["Strength", "Hermit"], result: "Justice" },
  { source: ["Strength", "Fortune"], result: "Priestess" },
  { source: ["Hanged Man", "Fool"], result: "Star" },
  { source: ["Hanged Man", "Magician"], result: "Fortune" },
  { source: ["Hanged Man", "Priestess"], result: "Chariot" },
  { source: ["Hanged Man", "Empress"], result: "Sun" },
  { source: ["Hanged Man", "Emperor"], result: "Hierophant" },
  { source: ["Hanged Man", "Hierophant"], result: "Star" },
  { source: ["Hanged Man", "Lovers"], result: "Justice" },
  { source: ["Hanged Man", "Chariot"], result: "Devil" },
  { source: ["Hanged Man", "Justice"], result: "Star" },
  { source: ["Hanged Man", "Hermit"], result: "Strength" },
  { source: ["Hanged Man", "Fortune"], result: "Fool" },
  { source: ["Hanged Man", "Strength"], result: "Star" },
  { source: ["Death", "Fool"], result: "Star" },
  { source: ["Death", "Magician"], result: "Fool" },
  { source: ["Death", "Priestess"], result: "Chariot" },
  { source: ["Death", "Empress"], result: "Hierophant" },
  { source: ["Death", "Emperor"], result: "Strength" },
  { source: ["Death", "Hierophant"], result: "Magician" },
  { source: ["Death", "Lovers"], result: "Hanged Man" },
  { source: ["Death", "Chariot"], result: "Devil" },
  { source: ["Death", "Justice"], result: "Devil" },
  { source: ["Death", "Hermit"], result: "Magician" },
  { source: ["Death", "Fortune"], result: "Moon" },
  { source: ["Death", "Strength"], result: "Empress" },
  { source: ["Death", "Hanged Man"], result: "Devil" },
  { source: ["Temperance", "Fool"], result: "Justice" },
  { source: ["Temperance", "Magician"], result: "Sun" },
  { source: ["Temperance", "Priestess"], result: "Lovers" },
  { source: ["Temperance", "Empress"], result: "Aeon" },
  { source: ["Temperance", "Emperor"], result: "Devil" },
  { source: ["Temperance", "Hierophant"], result: "Emperor" },
  { source: ["Temperance", "Lovers"], result: "Fortune" },
  { source: ["Temperance", "Chariot"], result: "Moon" },
  { source: ["Temperance", "Justice"], result: "Magician" },
  { source: ["Temperance", "Hermit"], result: "Devil" },
  { source: ["Temperance", "Fortune"], result: "Tower" },
  { source: ["Temperance", "Strength"], result: "Emperor" },
  { source: ["Temperance", "Hanged Man"], result: "Justice" },
  { source: ["Temperance", "Death"], result: "Jester" },
  { source: ["Devil", "Fool"], result: "Lovers" },
  { source: ["Devil", "Magician"], result: "Chariot" },
  { source: ["Devil", "Priestess"], result: "Hermit" },
  { source: ["Devil", "Empress"], result: "Fool" },
  { source: ["Devil", "Emperor"], result: "Death" },
  { source: ["Devil", "Hierophant"], result: "Moon" },
  { source: ["Devil", "Lovers"], result: "Tower" },
  { source: ["Devil", "Chariot"], result: "Emperor" },
  { source: ["Devil", "Justice"], result: "Priestess" },
  { source: ["Devil", "Hermit"], result: "Death" },
  { source: ["Devil", "Fortune"], result: "Tower" },
  { source: ["Devil", "Strength"], result: "Lovers" },
  { source: ["Devil", "Hanged Man"], result: "Justice" },
  { source: ["Devil", "Death"], result: "Lovers" },
  { source: ["Devil", "Temperance"], result: "Justice" },
  { source: ["Tower", "Fool"], result: "Fortune" },
  { source: ["Tower", "Magician"], result: "Emperor" },
  { source: ["Tower", "Priestess"], result: "Moon" },
  { source: ["Tower", "Empress"], result: "Judgement" },
  { source: ["Tower", "Emperor"], result: "Priestess" },
  { source: ["Tower", "Hierophant"], result: "Emperor" },
  { source: ["Tower", "Lovers"], result: "Judgement" },
  { source: ["Tower", "Chariot"], result: "Hierophant" },
  { source: ["Tower", "Justice"], result: "Chariot" },
  { source: ["Tower", "Hermit"], result: "Jester" },
  { source: ["Tower", "Fortune"], result: "Magician" },
  { source: ["Tower", "Strength"], result: "Devil" },
  { source: ["Tower", "Hanged Man"], result: "Fortune" },
  { source: ["Tower", "Death"], result: "Justice" },
  { source: ["Tower", "Temperance"], result: "Judgement" },
  { source: ["Tower", "Devil"], result: "Star" },
  { source: ["Star", "Fool"], result: "Hermit" },
  { source: ["Star", "Magician"], result: "Hierophant" },
  { source: ["Star", "Priestess"], result: "Empress" },
  { source: ["Star", "Empress"], result: "Jester" },
  { source: ["Star", "Emperor"], result: "Sun" },
  { source: ["Star", "Hierophant"], result: "Lovers" },
  { source: ["Star", "Lovers"], result: "Hierophant" },
  { source: ["Star", "Chariot"], result: "Aeon" },
  { source: ["Star", "Justice"], result: "Sun" },
  { source: ["Star", "Hermit"], result: "Death" },
  { source: ["Star", "Fortune"], result: "Magician" },
  { source: ["Star", "Strength"], result: "Devil" },
  { source: ["Star", "Hanged Man"], result: "Sun" },
  { source: ["Star", "Death"], result: "Fortune" },
  { source: ["Star", "Temperance"], result: "Hierophant" },
  { source: ["Star", "Devil"], result: "Fortune" },
  { source: ["Star", "Tower"], result: "Hermit" },
  { source: ["Moon", "Fool"], result: "Empress" },
  { source: ["Moon", "Magician"], result: "Sun" },
  { source: ["Moon", "Priestess"], result: "Empress" },
  { source: ["Moon", "Empress"], result: "Moon" },
  { source: ["Moon", "Emperor"], result: "Strength" },
  { source: ["Moon", "Hierophant"], result: "Aeon" },
  { source: ["Moon", "Lovers"], result: "Hanged Man" },
  { source: ["Moon", "Chariot"], result: "Fool" },
  { source: ["Moon", "Justice"], result: "Star" },
  { source: ["Moon", "Hermit"], result: "Jester" },
  { source: ["Moon", "Fortune"], result: "Strength" },
  { source: ["Moon", "Strength"], result: "Hierophant" },
  { source: ["Moon", "Hanged Man"], result: "Magician" },
  { source: ["Moon", "Death"], result: "Hanged Man" },
  { source: ["Moon", "Temperance"], result: "Hanged Man" },
  { source: ["Moon", "Devil"], result: "Death" },
  { source: ["Moon", "Tower"], result: "Hanged Man" },
  { source: ["Moon", "Star"], result: "Death" },
  { source: ["Sun", "Fool"], result: "Empress" },
  { source: ["Sun", "Magician"], result: "Fortune" },
  { source: ["Sun", "Priestess"], result: "Aeon" },
  { source: ["Sun", "Empress"], result: "Lovers" },
  { source: ["Sun", "Emperor"], result: "Devil" },
  { source: ["Sun", "Hierophant"], result: "Magician" },
  { source: ["Sun", "Lovers"], result: "Jester" },
  { source: ["Sun", "Chariot"], result: "Priestess" },
  { source: ["Sun", "Justice"], result: "Judgement" },
  { source: ["Sun", "Hermit"], result: "Tower" },
  { source: ["Sun", "Fortune"], result: "Chariot" },
  { source: ["Sun", "Strength"], result: "Tower" },
  { source: ["Sun", "Hanged Man"], result: "Empress" },
  { source: ["Sun", "Death"], result: "Empress" },
  { source: ["Sun", "Temperance"], result: "Fortune" },
  { source: ["Sun", "Devil"], result: "Lovers" },
  { source: ["Sun", "Tower"], result: "Death" },
  { source: ["Sun", "Star"], result: "Chariot" },
  { source: ["Sun", "Moon"], result: "Death" },
  { source: ["Judgement", "Fool"], result: "Temperance" },
  { source: ["Judgement", "Magician"], result: "Sun" },
  { source: ["Judgement", "Priestess"], result: "Temperance" },
  { source: ["Judgement", "Empress"], result: "Star" },
  { source: ["Judgement", "Emperor"], result: "Hanged Man" },
  { source: ["Judgement", "Hierophant"], result: "Fool" },
  { source: ["Judgement", "Lovers"], result: "Emperor" },
  { source: ["Judgement", "Chariot"], result: "Tower" },
  { source: ["Judgement", "Justice"], result: "Sun" },
  { source: ["Judgement", "Hermit"], result: "Temperance" },
  { source: ["Judgement", "Fortune"], result: "Fool" },
  { source: ["Judgement", "Strength"], result: "Temperance" },
  { source: ["Judgement", "Hanged Man"], result: "Fool" },
  { source: ["Judgement", "Death"], result: "Strength" },
  { source: ["Judgement", "Temperance"], result: "Chariot" },
  { source: ["Judgement", "Devil"], result: "Death" },
  { source: ["Judgement", "Tower"], result: "Aeon" },
  { source: ["Judgement", "Star"], result: "Lovers" },
  { source: ["Judgement", "Moon"], result: "Hermit" },
  { source: ["Judgement", "Sun"], result: "Chariot" },
  { source: ["Jester", "Fool"], result: "Priestess" },
  { source: ["Jester", "Magician"], result: "Star" },
  { source: ["Jester", "Priestess"], result: "Moon" },
  { source: ["Jester", "Empress"], result: "Devil" },
  { source: ["Jester", "Emperor"], result: "Chariot" },
  { source: ["Jester", "Hierophant"], result: "Fortune" },
  { source: ["Jester", "Lovers"], result: "Tower" },
  { source: ["Jester", "Chariot"], result: "Strength" },
  { source: ["Jester", "Justice"], result: "Hermit" },
  { source: ["Jester", "Hermit"], result: "Aeon" },
  { source: ["Jester", "Fortune"], result: "Emperor" },
  { source: ["Jester", "Strength"], result: "Magician" },
  { source: ["Jester", "Hanged Man"], result: "Moon" },
  { source: ["Jester", "Death"], result: "Fortune" },
  { source: ["Jester", "Temperance"], result: "Priestess" },
  { source: ["Jester", "Devil"], result: "Aeon" },
  { source: ["Jester", "Tower"], result: "Judgement" },
  { source: ["Jester", "Star"], result: "Death" },
  { source: ["Jester", "Moon"], result: "Hanged Man" },
  { source: ["Jester", "Sun"], result: "Lovers" },
  { source: ["Jester", "Judgement"], result: "Death" },
  { source: ["Aeon", "Fool"], result: "Jester" },
  { source: ["Aeon", "Magician"], result: "Empress" },
  { source: ["Aeon", "Priestess"], result: "Fool" },
  { source: ["Aeon", "Empress"], result: "Star" },
  { source: ["Aeon", "Emperor"], result: "Sun" },
  { source: ["Aeon", "Hierophant"], result: "Sun" },
  { source: ["Aeon", "Lovers"], result: "Judgement" },
  { source: ["Aeon", "Chariot"], result: "Justice" },
  { source: ["Aeon", "Justice"], result: "Temperance" },
  { source: ["Aeon", "Hermit"], result: "Moon" },
  { source: ["Aeon", "Fortune"], result: "Fool" },
  { source: ["Aeon", "Strength"], result: "Hermit" },
  { source: ["Aeon", "Hanged Man"], result: "Jester" },
  { source: ["Aeon", "Death"], result: "Strength" },
  { source: ["Aeon", "Temperance"], result: "Judgement" },
  { source: ["Aeon", "Devil"], result: "Lovers" },
  { source: ["Aeon", "Tower"], result: "Fortune" },
  { source: ["Aeon", "Star"], result: "Tower" },
  { source: ["Aeon", "Moon"], result: "Tower" },
  { source: ["Aeon", "Sun"], result: "Hierophant" },
  { source: ["Aeon", "Judgement"], result: "Sun" },
  { source: ["Aeon", "Jester"], result: "Judgement" },
];

const specialCombos = [
  { result: "Izanagi", sources: ["Yomotsu-Shikome", "Obariyon"] },
  { result: "Pixie", sources: ["Orobas", "Jack Frost"] },
  { result: "Slime", sources: ["Eligor", "Nata Taishi"] },
  { result: "Norn", sources: ["Atropos", "Lachesis", "Clotho"] },
  { result: "Alice", sources: ["Nebiros", "Belial"] },
  { result: "Ukobach", sources: ["Lilim", "Vetala"] },
  { result: "Shiva", sources: ["Rangda", "Barong"] },
  { result: "Ardha", sources: ["Parvati", "Shiva"] },
];

let personas;
let activeRequests = 0;
let totalRequests = 0;

let twoFusionQueries =
  "INSERT INTO persona_fusion(ingredient1, ingredient2, fusion_result) \nVALUES ";

let threeFusionQueries =
  "INSERT INTO persona_fusion(ingredient1, ingredient2, ingredient3, fusion_result) \nVALUES ";

function waitForSlot(arg, i) {
  if (activeRequests < 1000) {
    getFusionResult(arg);
    totalRequests++;
    document.getElementById("status").innerHTML =
      totalRequests + "/" + (personaPairs.length + personaTrios.length);
  } else {
    setTimeout(() => {
      waitForSlot(arg, i);
    }, i);
  }
}

function waitForDone() {
  if (activeRequests == 0) {
    document.getElementById("download").href = makeTextFile(
      twoFusionQueries.slice(0, -3) +
        ";\n\n" +
        threeFusionQueries.slice(0, -3) +
        ";"
    );
    console.log("Download ready");
  } else {
    setTimeout(() => {
      waitForDone();
    }, 100);
  }
}

let textFile = null;
const makeTextFile = function (text) {
  var data = new Blob([text], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  // returns a URL you can use as a href
  return textFile;
};

let personaPairs = [];
let personaTrios = [];
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (xhttp.readyState === XMLHttpRequest.DONE) {
    if (xhttp.status === "OK" || (xhttp.status >= 200 && xhttp.status < 400)) {
      personas = JSON.parse(xhttp.responseText);
      console.log(personas);
      for (let i = 0; i < personas.length; i++) {
        for (let j = i + 1; j < personas.length; j++) {
          personaPairs.push([personas[i], personas[j]]);
          for (let k = j + 1; k < personas.length; k++) {
            personaTrios.push([personas[i], personas[j], personas[k]]);
          }
        }
      }
      console.log(personaPairs);
      console.log(personaTrios);
      //console.log(getFusionResult(personaTrios[0]));
      for (let i = 0; i < personaPairs.length; i++) {
        waitForSlot(personaPairs[i], i);
      }
      for (let i = 0; i < personaTrios.length; i++) {
        waitForSlot(personaTrios[i], i);
      }
    }
  }
};
xhttp.open("GET", `http://localhost:3000/persona`);
xhttp.send();

function getFusionResult(ingredients) {
  //console.log(ingredients);
  const arcana1 = ingredients[0].arcananame;
  const arcana2 = ingredients[1].arcananame;
  const comboObject1 = arcana2Combos.find(
    (x) =>
      (x.source[0] == arcana1 && x.source[1] == arcana2) ||
      (x.source[1] == arcana1 && x.source[0] == arcana2)
  );
  if (!comboObject1) {
    return null;
  }
  let comboArcana = comboObject1.result;
  let level;
  let round = arcana1 == arcana2 ? "down" : "up";
  if (ingredients.length == 3) {
    round = "up";
    const arcana3 = ingredients[2].arcananame;
    const comboObject2 = arcana3Combos.find(
      (x) =>
        (x.source[0] == comboArcana && x.source[1] == arcana3) ||
        (x.source[1] == comboArcana && x.source[0] == arcana3)
    );
    if (!comboObject2) {
      return null;
    }
    comboArcana = comboObject2.result;
    level =
      (ingredients[0].baselevel +
        ingredients[1].baselevel +
        ingredients[2].baselevel) /
        3 +
      5;
  } else {
    level = (ingredients[0].baselevel + ingredients[1].baselevel) / 2 + 1;
  }

  requestResultName(comboArcana, level, round, ingredients);
}

function requestResultName(arcana, level, round, ingredients) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (
        xhttp.status === "OK" ||
        (xhttp.status >= 200 && xhttp.status < 400)
      ) {
        const result = JSON.parse(xhttp.responseText);
        //console.log(result);
        if (!result[0]) {
          //console.log("Failure!");
          activeRequests--;
          return null;
        }
        if (ingredients.find((x) => x.personaname == result[0].personaname)) {
          //console.log("Failure!");
          requestResultName(
            arcana,
            result[0].baselevel - 0.5,
            round,
            ingredients
          );
        } else {
          //console.log("Success!");
          sendFusion(ingredients, result[0]);
        }
      }
    }
  };
  activeRequests++;
  xhttp.open(
    "GET",
    `http://localhost:3000/persona/${arcana}/${level}/${round}`
  );
  xhttp.send();
}

function sendFusion(ingredients, result) {
  const xhttp = new XMLHttpRequest();
  let sentObject;
  if (ingredients.length == 3) {
    threeFusionQueries += `('${ingredients[0].personaname}','${ingredients[1].personaname}','${ingredients[2].personaname}','${result.personaname}'),\n\t`;

    sentObject = {
      ingredient1: ingredients[0].personaname,
      ingredient2: ingredients[1].personaname,
      ingredient3: ingredients[2].personaname,
      fusion_result: result.personaname,
    };
  } else {
    twoFusionQueries += `('${ingredients[0].personaname}','${ingredients[1].personaname}','${result.personaname}'),\n\t`;
    sentObject = {
      ingredient1: ingredients[0].personaname,
      ingredient2: ingredients[1].personaname,
      fusion_result: result.personaname,
    };
  }
  activeRequests--;
  // xhttp.onreadystatechange = function () {
  //   if (xhttp.readyState === XMLHttpRequest.DONE) {
  //     if (
  //       xhttp.status === "OK" ||
  //       (xhttp.status >= 200 && xhttp.status < 400)
  //     ) {
  //       activeRequests--;
  //     }
  //   }
  // };
  // activeRequests++;
  // xhttp.open("POST", `http://localhost:3000/fusion/${ingredients.length}`);
  // xhttp.send(JSON.stringify(sentObject));
}
