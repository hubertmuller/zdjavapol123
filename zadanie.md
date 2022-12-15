Dla każdego:
1. Wygeneruj komponent o nazwie Detale i wyświetl go przy każdej nazwie miasta w komponencie Wiadomosci
2. Komponent Detale powinien zawierać html-owy przycisk o tytule "Detale"
3. W komponencie Detale zdefiniuj metode detale(id), gdzie id to łańcuch będący id miasta (masz je zdefiniowane w interfejsie w pliku pogoda.service.ts). Pozostaw tą metodę narazie pustą.
4. W templacie komponentu Detale przy kodzie przycisku umiesc atrybut (click) i wywolaj funkcje detale(). np <button (click)="detale(pogoda.id)">. Spowoduje to przy kazdorazowym kliknieciu na element wywolanie metody detale() z parametrem id oznaczajacym konkretne miasto
5. Uzyj console.log() w metodzie detale(id) aby wyprowadzic przekazany parametr id.

Jesli nie miales problemow sprobuj dalej:

6. W serwisie pogoda service sprobuj dodac metodę która analogicznie do metody pobierającej liste miast wysle zapytanie o detale pogody dla danego miasta. Adres detali pogody to:

https://6395b39490ac47c680714f1a.mockapi.io/pogoda-detale/12

Mock server jest zrobiony tak ze zwraca dane tylko dla id 1-12. Zwroc uwage ze zwracany jest tylko obiekt a nie tablica obiektow. Koncowa czesc adresu to id miasta - musisz zatem ją dynamicznie zmieniac (lączyć ze stałą czescia adresu)

7. Wykorzystaj metode z punktu 6 w komponencie detale (musisz wstrzyknac serwis PogodaService) do pobrania danych przy nacisnieciu w przycisk Detale. Bedziesz musial zasubskrybowac sie na Observable z odpowiedzia o detalach pogody.

Jesli nadal idzie Ci dobrze:

8. Sprobuj w komponencie detale pokazac pobrane dane