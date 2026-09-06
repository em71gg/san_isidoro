
import type es from './i18n/es.json';

// Usamos el archivo español como base para el tipado automático de textos
export type TraduccionEstructura = typeof es;

// Definimos la estructura interna de nuestra lista de botones/idiomas
export interface IdiomaConfig {
  codigo: string;
  nombre: string;
  flag: string;
}

export const idiomas: IdiomaConfig[] = [
    {
        codigo: "es",
        nombre: "Español",
        flag: "es"
    },
    {
        codigo: "en",
        nombre: "English",
        flag: "gb"
    },
    {
        codigo: "fr",
        nombre: "Français",
        flag: "fr"
    },
    {
        codigo: "de",
        nombre: "Deutsch",
        flag: "de"
    }
];