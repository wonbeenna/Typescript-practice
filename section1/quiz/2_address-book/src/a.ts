function fetchItems(): string[] {
  var items = ["a", "b", "c"];
  return items;
}

var result = fetchItems();

function fetchItems2(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

export { Contact, PhoneType };
