<div align="center">

# **Daniel Stodulski** <br>Programista Oprogramowania

</div>

Email: DanielStodulski000@gmail.com  
Telefon: +48 785 919 909  
GitHub: [github.com/Daynlight](https://github.com/Daynlight)

---

## O mnie

Programista oprogramowania z ponad **4-letnim niekomercyjnym doświadczeniem** w programowaniu, obecnie skupiony głównie na ```C``` i ```C++```. Interesuję się **programowaniem niskopoziomowym** oraz **rozwojem wieloplatformowym**, w tym ```sieciami```, ```oknami```, ```silnikami```, ```narzędziami``` oraz ```optymalizacją```. Chcę również nauczyć się **języków wyższego poziomu**, takich jak ```C#``` i ```Java```.  

Mam duże **ambicje** i stale dążę do **rozwoju swoich umiejętności** w zakresie **programowania systemowego**, **architektury**, **wydajności** oraz **grafiki komputerowej**. Szybko przyswajam nowe koncepcje i potrafię je **wdrażać** przy stosunkowo krótkim czasie adaptacji. Dobrze radzę sobie także z **analizą** i **odtwarzaniem** istniejących systemów na podstawie ```idei```, ```problemów, które rozwiązują```, ```dokumentacji``` lub ```ograniczonego kodu referencyjnego```.

## Języki programowania

- ```C``` / ```C++```
- ```SQL```
- ```Python```
- ```YAML```
- ```GLSL```

## Narzędzia i platformy

- **Systemy budowania**: ```CMake```, ```Premake```
- **VCS / CI**: ```Git```, ```GitHub```, ```GitHub Actions```
- **Systemy operacyjne**: ```Linux```, ```Windows```
- **Kontenery**: ```Docker```
- **Bazy danych**: ```MySQL```, ```SQLite```
- **IDE**: ```Visual Studio```, ```VS Code```
- **Dokumentacja**: ```Markdown```, ```DrawIO```
- **Debugowanie / Profilowanie**: ```gdb```, ```Valgrind```, ```KCachegrind```

## Inne umiejętności

- **WebDev**: ```HTML```, ```CSS```, ```JavaScript```
- **Frameworki CSS**: ```Bootstrap```
- **Frameworki / Runtime**: podstawowe doświadczenie z ```Node.js```, ```React.js```, ```Vite.js```, ```Express.js```
- **Tworzenie treści 2D/3D**: ```Blender (podstawowe modelowanie)```, ```GIMP```, ```Krita```

## Zainteresowania

- **Programowanie niskopoziomowe** i **projektowanie systemów**
- **Grafika komputerowa** i **rendering**
- **Silniki gier** i **narzędzia dla programistów**
- **Wydajność** i **optymalizacja**, szczególnie w **silnikach gier**
- Okazjonalnie **rysunek** i **modelowanie 3D**

## Doświadczenie

- **Wkład w projekty open-source**:
  - [skill-icons](https://github.com/LelouchFR/skill-icons)
  - [linkfree-generator](https://github.com/chriskthomas/linkfree-generator)
- **Projekty uniwersyteckie i własne** w C/C++, skoncentrowane na **programowaniu systemowym**, **architekturze**, **stabilności**, **wieloplatformowości**, **sieciach** oraz **rozwoju silników i narzędzi**

## Projekty

### [CPU](https://github.com/daynlight/CPU) – Prosty emulator CPU i asembler (Logisim, Python)

- Implementacja **ALU**, **CU**, **magistrali danych**, **rejestrów**, **RAM**, **terminala**, **obsługi klawiatury**, **dysków** oraz **własnych instrukcji CPU**
- Zaprojektowany w Logisim na poziomie **bramek logicznych** i modułów takich jak **RAM**
- Gotowy do **pisania systemu operacyjnego**
- Występują pewne błędy związane z **przełączaniem dysków**
- Zawiera **prosty asembler** napisany w ```Pythonie``` ułatwiający programowanie
- Zawiera prosty **BIOS** oraz **program kalkulatora**
- **Kalkulator** nie parsuje danych wejściowych do typu int, co powoduje problemy przy **większych liczbach**, jednak **celem projektu** była **logika bramek** i **architektura**
- W przyszłości możliwe dodanie **pełnego systemu operacyjnego** oraz **GPU**
- Projekt pokazuje **zrozumienie architektury niskopoziomowej**, **instrukcji** oraz **modelu wykonania**
- Jest to **stary projekt**, ale **najpopularniejszy** na moim GitHubie

### [CWindow](https://github.com/daynlight/CWindow) – Wieloplatformowa biblioteka okien i renderingu (C++)

- Biblioteka do **tworzenia okien** i **obsługi zdarzeń** na wielu platformach (```Windows```, ```Linux```)
- Udostępnia ```Renderer```, ```DrawShader```, ```ComputeShader```, ```Uniform```, ```Texture```, ```Mesh``` zaprojektowane z myślą o **modularności** i **stabilności**
- Wykorzystywana w innych projektach, m.in. [Graphite](https://github.com/daynlight/Graphite)
- Integracja z **ImGui** do interfejsu edytora
- **Gotowa do prostego użycia**, a w planach:
  - Rozszerzenie shaderów o ```geometry shader```, ```tessellation shader``` oraz typy ```enum```
  - Ulepszenie ```Mesh``` poprzez lepsze przekazywanie danych w oparciu o ```Bytes``` i struktury
  - **Menedżer tekstur** optymalizujący zużycie pamięci GPU (mipmapy, analiza czasu życia danych)
  - Dodanie kolejnych **API renderujących**, takich jak ```Vulkan``` i ```DirectX```

### [Graphite](https://github.com/daynlight/Graphite) – Narzędzie do wizualizacji matematycznej (C++) **[W trakcie rozwoju]**

- **Hot-swap skryptów** na podstawie czasu ostatniej modyfikacji
- Wykorzystanie ```fork``` w **trybie Sandbox** dla bezpiecznej edycji skryptów
- Własne flagi: **verbose/debug**, **sandbox**, **init**, **help**
- Wykorzystuje bibliotekę [CWindow](https://github.com/daynlight/CWindow) do renderowania
- Zawiera dopracowane **wiki** oraz **standardy społeczności**
- **Instalator** kopiujący wymagane nagłówki do ```/usr/local/include/Graphite/```
- Obecnie skupiony na **Linuksie**, w przyszłości planowane **wsparcie wieloplatformowe**
- **Plany**:
  - **Menedżer pakietów** dla społeczności
  - Optymalizacja rysowania z użyciem **norm funkcji** i **SSBO**
  - **Wsparcie 3D** z **poziomami szczegółowości (LOD)**
  - Inicjalizacja projektu z **szablonu**
  - Wsparcie dla **Windows**

### [Network](https://github.com/daynlight/Network) – Wieloplatformowa biblioteka sieciowa (C)

- Lekka biblioteka C upraszczająca obsługę **gniazd TCP/UDP** w ```C``` / ```C++```
- Skupiona na **nieblokującym I/O** oraz **wieloplatformowości**
- Aktualnie obsługuje ```Windows``` oraz ```Linux```
- Zawiera przykład **czatu wieloużytkownikowego**
- **Plany**:
  - Szyfrowanie ```x258831```
  - Kompresja ```LZ4``` / ```RLE```
  - Platforma **Android**

### [PixForge](https://github.com/daynlight/PixForge) – Wieloplatformowy silnik gier 2D (C++) **[Planowany]**

- **Projekt przyszłościowy**: wieloplatformowy **silnik gier 2D** w C++
- Skupienie na **modularności**, **wydajności**, **dodatkach**, **wielu rendererach** oraz **łatwości użycia** dla **twórców gier indie**
