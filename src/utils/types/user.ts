interface Company {
  name: string;
  catchPhrase: string;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  company: Company;
}
