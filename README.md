# Dokumentacja projektu: REST Countries API

## Wprowadzenie

Ten projekt to aplikacja frontendowa oparta na frameworku **React**, zbudowana przy użyciu **Vite** jako narzędzia do budowania, **Tailwind CSS** do stylizacji oraz biblioteki **Axios** do komunikacji z REST API. Aplikacja korzysta z publicznego API [REST Countries](https://restcountries.com/) w celu wyświetlania informacji o krajach.

---

## Funkcjonalności

1. **Wyświetlanie listy krajów**:
   - Aplikacja pobiera dane o krajach z API REST Countries i wyświetla je w formie kart.
2. **Szczegóły kraju**:
   - Użytkownik może kliknąć na kartę kraju, aby przejść do szczegółowych informacji o nim.
3. **Filtrowanie i wyszukiwanie**:
   - Możliwość filtrowania krajów według regionu.
   - Wyszukiwanie krajów według nazwy.
4. **Przełącznik motywu kolorystycznego**:
   - Przełączanie między trybem jasnym i ciemnym.

---

## Technologie i narzędzia

### 1. **Framework: React**

React został użyty jako główna biblioteka do budowy interfejsu użytkownika dzięki swojej komponentowej architekturze, która pozwala na łatwe zarządzanie stanem i ponowne użycie kodu.

#### Architektura projektu

Projekt jest zorganizowany zgodnie z następującą strukturą:

```
/src
 |-- /components     # Komponenty wielokrotnego użytku
 |-- /pages          # Widoki odpowiadające poszczegęlnym podstronom
 |-- main.jsx        # Punkt wejścia aplikacji
 |-- App.jsx         # Główny komponent aplikacji
 |-- index.css       # Główny plik css
```

### 2. **Vite**

Vite został wybrany jako narzędzie do budowania projektu ze względu na:

- Bardzo szybkie odświeżanie podczas developmentu (hot module replacement).
- Nowoczesny ekosystem i wsparcie dla Reacta oraz Tailwinda.

### 3. **Tailwind CSS**

Tailwind CSS zapewnia elastyczny system klas pomocniczych, które pozwalają na szybkie i intuicyjne stylowanie komponentów. Użycie Tailwinda przyspieszyło proces tworzenia UI dzięki:

- Gotowym klasom do responsywnego projektowania.
- Możliwości łatwej personalizacji motywu (np. tryb jasny/ciemny).

### 4. **Axios**

Axios to biblioteka do obsługi żądań HTTP, która została użyta do komunikacji z REST API. Zalety Axiosa to:

- Obsługa obietnic (promises).
- Łatwe zarządzanie nagłówkami żądań.

### 5. **REST API**

Projekt korzysta z publicznego API REST Countries, które udostępnia dane o krajach, takie jak:

- Nazwa kraju.
- Flaga.
- Stolica.
- Region.
- Populacja.
- Języki.
- Granice.

---

## Wykorzystane funkcjonalności

### a. Routery kierujące ruchem HTTP

Do zarządzania routingiem wykorzystano bibliotekę **React Router**, która pozwala na:

- Nawigację między stronami (lista krajów, szczegóły kraju).
- Obsługę parametrów URL (np. `/:countryName`).

### b. Współpraca z REST API

Komunikacja z REST API odbywa się za pomocą biblioteki Axios. Dane są pobierane i zapisywane w lokalnym stanie komponentów za pomocą **useState** i **useEffect**.
