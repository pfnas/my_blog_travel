*page contact: effet de fondu
https://www.youtube.com/watch?v=7sKC9_McrlQ&ab_channel=FormationsExcel%2CAccessetbiend%27autres

*ajout de card
https://www.youtube.com/watch?v=hfPlTJJnDac&ab_channel=FormationsExcel%2CAccessetbiend%27autres

*creation du pop-up: information sur les voyages
 https://fr.w3docs.com/snippets/css/comment-creer-une-forme-popup-avec-css-et-javascript.html# my_blog_travel

 <body>
│
├── <header>
│     ├── <nav class="navbar">
│     │     ├── <a class="logo">...</a>
│     │     ├── <ul class="nav-links">...</ul>
│     │     └── <div class="menu-toggle">...</div>
│     └── </nav>
│
├── <main>
│     ├── <section class="interlayer">
│     │     └── <div class="interlayer-content">Titre + sous-titre ou image</div>
│     │
│     ├── <section class="country-section">
│     │     ├── <div class="flag">
│     │     │     └── <div class="display_flag">
│     │     │           ├── <a><img src="..." alt="Drapeau du pays"></a>
│     │     │           └── <button class="btn" id="travelBtn">Travel to [Pays]</button>
│     │     │
│     │     ├── <div class="about-wrapper container">
│     │     │     ├── <div class="about-text">Texte descriptif du pays</div>
│     │     │     └── <div class="about-img">
│     │     │           ├── <img src="...">
│     │     │           ├── <img src="...">
│     │     │           └── ...
│     │     │
│     │     ├── <div class="carousel-wrapper">
│     │     │     ├── <h2 class="carousel-title">Découvrir [Pays]</h2>
│     │     │     └── <div class="carousel" id="carousel-[pays]">
│     │     │           ├── <div class="carousel-item">...</div>
│     │     │           └── ...
│     │     │
│     │     └── <section class="interlayer interlayer-bottom">
│     │           <div class="interlayer-content">Citation, info ou visuel</div>
│     │
│     └── </section>
│
└── <footer>
      ├── <div class="footer-content">
      │     ├── <p class="copyright">© La Tête en l’air</p>
      │     └── <ul class="footer-links">...</ul>
      └── </div>
</body>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Nom du pays] — La Tête en l’air</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- ===== HEADER ===== -->
  <header>
    <nav class="navbar">
      <a href="index.html" class="logo">La Tête en l’air</a>
      <ul class="nav-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="sites.html">Sites de vol</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="menu-toggle">☰</div>
    </nav>
  </header>

  <main>

    <!-- ===== INTERLAYER (bannière ou visuel d’intro) ===== -->
    <section class="interlayer">
      <div class="interlayer-content">
        <h1>Découvre [Pays]</h1>
        <p>Entre ciel et terre, l’aventure commence ici.</p>
      </div>
    </section>

    <!-- ===== SECTION PAYS ===== -->
    <section class="country-section">

      <!-- Drapeau + bouton -->
      <div class="flag">
        <div class="display_flag">
          <a href="https://fr.wikipedia.org/wiki/[Pays]">
            <img src="[URL du drapeau]" alt="Drapeau de [Pays]" width="150">
          </a>
          <button class="btn" id="travelBtn">Travel to [Pays]</button>
        </div>
      </div>

      <!-- À propos -->
      <div class="about-wrapper container">
        <div class="about-text">
          <h2>À propos de [Pays]</h2>
          <p>Texte descriptif du pays, paysages, ambiance, culture...</p>
        </div>
        <div class="about-img">
          <img src="[image1.jpg]" alt="[Pays] paysage">
          <img src="[image2.jpg]" alt="[Pays] montagne">
        </div>
      </div>

      <!-- Carrousel -->
      <div class="carousel-wrapper">
        <h2 class="carousel-title">Explorer [Pays]</h2>
        <div class="carousel" id="carousel-[pays]">
          <div class="carousel-item"><img src="..." alt=""></div>
          <div class="carousel-item"><img src="..." alt=""></div>
          <div class="carousel-item"><img src="..." alt=""></div>
        </div>
      </div>

      <!-- Interlayer bas -->
      <section class="interlayer interlayer-bottom">
        <div class="interlayer-content">
          <p>“Citation ou phrase inspirante liée au vol libre.”</p>
        </div>
      </section>

    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer>
    <div class="footer-content">
      <p>© 2025 La Tête en l’air. Tous droits réservés.</p>
      <ul class="footer-links">
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Confidentialité</a></li>
      </ul>
    </div>
  </footer>

</body>
</html>
| Classe / ID           | Type      | Rôle / Description                                 |
| --------------------- | --------- | -------------------------------------------------- |
| `.navbar`             | `div/nav` | Barre de navigation principale                     |
| `.nav-links`          | `ul`      | Liens du menu                                      |
| `.menu-toggle`        | `div`     | Bouton menu mobile                                 |
| `.interlayer`         | `section` | Bande visuelle (intro ou séparation)               |
| `.interlayer-content` | `div`     | Contenu textuel de l’interlayer                    |
| `.country-section`    | `section` | Bloc principal du pays                             |
| `.flag`               | `div`     | Conteneur du drapeau                               |
| `.display_flag`       | `div`     | Drapeau + bouton “Travel to [Pays]”                |
| `.btn`                | `button`  | Bouton d’action (voyager, découvrir, etc.)         |
| `.about-wrapper`      | `div`     | Conteneur flex (texte + images)                    |
| `.about-text`         | `div`     | Texte descriptif du pays                           |
| `.about-img`          | `div`     | Images du pays (souvent en colonne)                |
| `.carousel-wrapper`   | `div`     | Conteneur du carrousel                             |
| `.carousel-title`     | `h2`      | Titre du carrousel                                 |
| `.carousel`           | `div`     | Conteneur principal du slider                      |
| `.carousel-item`      | `div`     | Élément individuel du carrousel (image ou contenu) |
| `.interlayer-bottom`  | `section` | Interlayer de fin de page                          |
| `.footer-content`     | `div`     | Contenu du pied de page                            |
| `.footer-links`       | `ul`      | Liens secondaires (mentions légales, etc.)         |
| `#carousel-[pays]`    | `id`      | Identifiant spécifique à chaque carrousel          |
| `#travelBtn`          | `id`      | Bouton “Travel to [Pays]” spécifique               |







 <img src="./Assets/Italie/rome/rome13.webp" alt="Rome" class="gallery-thumb active">
    <img src="./Assets/Italie/rome/rome22.webp" alt="rome" class="gallery-thumb active">
    <img src="./Assets/Italie/rome/rome24.webp" alt="rome"  class="gallery-thumb"> 
     <img src="./Assets/Italie/rome/rome18.webp" alt="rome"  class="gallery-thumb">    
    <img src="./Assets/Italie/rome/rome4.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome5.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome6.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome7.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome8.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome9.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome10.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome11.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome12.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome2.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome14.webp" alt="rome"  class="gallery-thumb">
     <img src="./Assets/Italie/rome/rome1.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome15.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome16.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome20.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome21.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome15.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome22.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome23.webp" alt="rome"  class="gallery-thumb">
    <img src="./Assets/Italie/rome/rome24.webp" alt="rome"  class="gallery-thumb">
     <img src="./Assets/Italie/rome/rome17.webp" alt="rome"  class="gallery-thumb"> 

