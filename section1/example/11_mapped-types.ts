// mapped types
type Heroes = "Hulk" | "Thor" | "Capt";
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33, // hulk's age must be number
  Thor: 20,
  Capt: 10,
};
