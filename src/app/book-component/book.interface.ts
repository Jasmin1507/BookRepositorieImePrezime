export interface Books {
  id: number;
  naziv: string;
  autor: string;
  zanr: string;
  opis: string;
  slika: string;
  cijena: number;
  jezik: string;
  brojStranica: number;
  datumIzdavanja: Date;
  showOpis: boolean;
}
