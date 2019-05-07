// Raphael Guillemin
// Pierre Antoine Vaillancourt
// 5 novembre 2018

// Ce programme execute une version simplifiee du jeu de demineur

// Ensemble d'images de taille 16x16 pixels.  Chaque element du
// tableau images correspond a une image d'une tuile du jeu demineur.
// Une image est representee par un tableau des rangees de pixels.
// Chaque rangee est un tableau contenant l'index de la couleur dans
// le tableau colormap.
var images = [
    [ // 0
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 1
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [8,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [8,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 2
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0],
    [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
    [8,0,0,2,2,2,0,0,0,0,2,2,2,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0],
    [8,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0],
    [8,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0],
    [8,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0],
    [8,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0],
    [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
    [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 3
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
    [8,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
    [8,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0],
    [8,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
    [8,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
    [8,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 4
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,4,4,4,0,4,4,4,0,0,0,0],
    [8,0,0,0,0,4,4,4,0,4,4,4,0,0,0,0],
    [8,0,0,0,4,4,4,0,0,4,4,4,0,0,0,0],
    [8,0,0,0,4,4,4,0,0,4,4,4,0,0,0,0],
    [8,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0],
    [8,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0],
    [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 5
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [8,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0],
    [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
    [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
    [8,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 6
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
    [8,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],
    [8,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],
    [8,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0],
    [8,0,0,6,6,6,0,0,0,0,6,6,6,0,0,0],
    [8,0,0,6,6,6,0,0,0,0,6,6,6,0,0,0],
    [8,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0],
    [8,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 7
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0],
    [8,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0],
    [8,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0],
    [8,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0],
    [8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // 8
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
    [8,0,0,8,8,8,8,8,8,8,8,8,8,0,0,0],
    [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
    [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
    [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
    [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
    [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
    [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
    [8,0,0,8,8,8,8,8,8,8,8,8,8,0,0,0],
    [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // mine
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
    [8,0,0,0,7,0,7,7,7,7,7,0,7,0,0,0],
    [8,0,0,0,0,7,7,7,7,7,7,7,0,0,0,0],
    [8,0,0,0,7,7,9,9,7,7,7,7,7,0,0,0],
    [8,0,0,0,7,7,9,9,7,7,7,7,7,0,0,0],
    [8,0,7,7,7,7,7,7,7,7,7,7,7,7,7,0],
    [8,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0],
    [8,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0],
    [8,0,0,0,0,7,7,7,7,7,7,7,0,0,0,0],
    [8,0,0,0,7,0,7,7,7,7,7,0,7,0,0,0],
    [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [ // mine sur fond rouge
    [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
    [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
    [8,3,3,3,7,3,7,7,7,7,7,3,7,3,3,3],
    [8,3,3,3,3,7,7,7,7,7,7,7,3,3,3,3],
    [8,3,3,3,7,7,9,9,7,7,7,7,7,3,3,3],
    [8,3,3,3,7,7,9,9,7,7,7,7,7,3,3,3],
    [8,3,7,7,7,7,7,7,7,7,7,7,7,7,7,3],
    [8,3,3,3,7,7,7,7,7,7,7,7,7,3,3,3],
    [8,3,3,3,7,7,7,7,7,7,7,7,7,3,3,3],
    [8,3,3,3,3,7,7,7,7,7,7,7,3,3,3,3],
    [8,3,3,3,7,3,7,7,7,7,7,3,7,3,3,3],
    [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
    [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
    [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
    ],
    [ // tuile non-devoilee
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
    [9,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
    [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]
    ],
    [ // 12 (tests unitaires)
    [2]
    ],  
    [ // 13 (tests unitaires)
    [1,1],
    [1,1]
    ],
    [ // 14 (tests unitaires)
    [5,6],
    [7,8]
    ],
    [ // 15 (tests unitaires)
    [9,9],
    [2,2]
    ],
    [ // 16 (tests unitaires)
    [9,9,9],
    [9,9,9],
    [9,9,9]   
    ],
    [ // 17 (tests unitaires)
    [9,8,7],
    [6,5,4],
    [3,2,1] 
    ],
    [ // 18 (tests unitaires)
    [0,0,0],
    [3,3,3],
    [6,6,6] 
    ],
    [ // 19 (tests unitaires)
    [1],
    [3]
    ]
];


// Ensemble de couleurs utilisees dans la definition des images
// ci-dessus.  A tout endroit ou le nombre c apparait dans une image,
// la couleur RGB du pixel est colormap[c].
var colormap = [
    { r: 192, g: 192, b: 192 },
    { r:   0, g:   0, b: 255 },
    { r:   0, g: 128, b:   0 },
    { r: 255, g:   0, b:   0 },
    { r:   0, g:   0, b: 128 },
    { r: 128, g:   0, b:   0 },
    { r:   0, g: 128, b: 128 },
    { r:   0, g:   0, b:   0 },
    { r: 128, g: 128, b: 128 },
    { r: 255, g: 255, b: 255 }
];


// Taille des images (matrices de pixels) utilisees par la fonction demineur
var tailleImageX = 16;
var tailleImageY = 16;


// Affiche une image associee a une tuile en colorant chaque pixel 
// individuellement 
var afficherImage = function(x, y, colormap, image) {
  for (var j=tailleImageY*y; j<tailleImageY*(y+1); j++) { 
    for (var i=tailleImageX*x; i<tailleImageX*(x+1); i++) { 
      // Associe une image a une tuile
      var imageTuile = images[image]; 
      
      // Pixel specifique dans la tuile
      var pixelVise = imageTuile[j%tailleImageY][i%tailleImageX]; 

      // Colore le pixel desire dans la tuile
      setPixel(i,j,colormap[pixelVise]); 
   	}
  }
};


// Genere une grille de tuiles de hauteur et largeur predefinies
var creerGrille = function(largeur, hauteur) {

  setScreenMode(largeur*tailleImageX, hauteur*tailleImageY);

  for (var j=0; j<hauteur;j++) {
    for (var i=0; i<largeur; i++) {
      // Affiche des tuiles grises non-cliquees
      afficherImage(i,j,colormap,11); 
    }
  }
};


// Retourne les coordonnees x et y de la tuile cliquee par l'utilisateur
var attendreClic = function() {
  // clic contient la position et l'etat du bouton de la souris
  var clic = getMouse();

  // Verifie l'etat du clic a chaque 0.01 seconde
  while (clic.down === false) {
    clic = getMouse();
    pause(0.01);
  }

  // Coordonnees de la tuile ou se trouve le pixel clique
  clic.x = Math.floor(clic.x/tailleImageX);
  clic.y = Math.floor(clic.y/tailleImageY);

  return(clic);

};


// Change l'image de la tuile cliquee par l'utilisateur
var clicTuile = function(clic, tableauMinesValeurs) {
  if (clic.down == true) {
    afficherImage(clic.x,clic.y,colormap,tableauMinesValeurs[clic.y][clic.x]);
  }
};


// Cree un tableau de 1 dimension contenant l'index de toutes les valeurs 
// d'un tableau bidimensionnel de largeur et hauteur precisees en paramtetre 
// excepte une valeur precisee en parametre
var tableauCoordonnees = function(largeur,hauteur,x,y) {
  var tabCoordonnees = Array();
  for (var j=0; j<hauteur; j++) {
    for (var i=0; i<largeur; i++) {
      if (!(j==y && i==x)) { // Valeur precisee exclue
        tabCoordonnees.push({x:i, y:j}); 
      }
    }
  }
  return (tabCoordonnees);
};


// Cree un tableau qui contient une valeur true ou false dependamment de si
// une mine se cache sous la tuile
var placerMines = function(largeur, hauteur, nbMines, x, y) {
  
  // Cree un tableau bidimensionnel de meme taille que la grille affichee
  var tableau = Array(hauteur);
    for (var j=0; j<hauteur; j++) {
      tableau[j] = Array(largeur); 
  }

  // Pas de mine sous la premiere tuile
  tableau[y][x] = false; 

  // Tableau unidimensionnel contenant toutes les coordonnees des tuiles sauf
  // celles de la premiere tuile cliquee 
  var tabCoordonnees = tableauCoordonnees(largeur, hauteur, x, y); 

  // Choisit tuile au hasard parmi tuiles sans mine et lui donne une mine tant
  // qu'il reste des mines a placer
  while (nbMines > 0) {

    // Choisit au hasard une valeur dans le tableau unidimensionnel 
    var indexHasard = Math.floor(Math.random()*tabCoordonnees.length);

    // Associe valeur choisie au hasard a une tuile 
    var coordTuileHasard = tabCoordonnees[indexHasard];

    // Place une mine sous la tuile choisie au hasard
    tableau[coordTuileHasard.y][coordTuileHasard.x] = true;

    // Supprime du tableau unidimensionnel l'index qui vient d'etre utilise
    tabCoordonnees[indexHasard] = tabCoordonnees[tabCoordonnees.length-1];
    tabCoordonnees.pop();
    
    nbMines--;
  }

  // Tuiles restantes n'ont pas de mine
  for (var j=0; j<hauteur;j++) {
    for (var i=0; i<largeur; i++) {
      if (tableau[j][i] != true) {
        tableau[j][i] = false;
      }
    }
  }

  return(tableau);
};


// Donne une valeur numerique aux tuiles sans mine
var placerValeurs = function(tableau) {
  for (var j=0; j<tableau.length; j++) {
    for (var i=0; i<tableau[j].length; i++) {
      if (tableau[j][i] == false) { // Tuile sans mine
        tableau[j][i] = valeurTuile(tableau, i, j);
      }
    }
  }
  return tableau;
};


// Verifie si tuiles adjacentes sont dans les limites du tableau
var tuilesAdjDansTab = function (tableau, x, y, i, j) {
  if (
    j >= 0 && j < tableau.length && // Tuile se situe dans hauteur tableau
    i>= 0 && i < tableau[j].length && // Tuile se situe dans largeur tableau
    !(j==y && i==x) // Tuile adjacente n'est pas tuile centree
    ) {
    return true;
  }
};


// Revele tuiles adjacentes si la tuile cliquee n'est voisine d'aucune mine
var tuilesAdjacentes = function(tableau, x, y) {

  adjacentes:
  for (var j=y-1; j<=y+1; j++) {
    for (var i=x-1; i<=x+1; i++) {
      	if (tableau[y][x] > 0 ) { // Mine autour de la tuile
          break adjacentes;
        } else if (
          // Tuile adjacente est dans le tableau (hauteur et largeur), n'est 
          // pas tuile d'origine et n'est pas revelee
          tuilesAdjDansTab(tableau, x, y, i, j) &&
          typeof tableau[j][i] === 'number' 
          ) {
          afficherImage(i, j, colormap, tableau[j][i]);
          tuileRevelee(tableau, i, j);
      }
    }
  }
};


// Analyse les tuiles adjacentes et incremente de un pour chaque tuile qui
// cache une mine (valeur "true")
var valeurTuile = function(tableau, x, y) {
  
  // Valeur initiale de chaque tuile vide est 0
  tableau[y][x] = 0; 

  for (var j=y-1; j<=y+1; j++) {
    for (var i=x-1; i<=x+1; i++) {
      
      // Tuile adjacente est dans le tableau (hauteur et largeur), n'est pas 
      // tuile d'origine et contient une mine
      if (tuilesAdjDansTab(tableau,x,y,i,j) && tableau[j][i] === true) {
        tableau[y][x]++;
      }
    }
  }
  return(tableau[y][x]);
};


// Affiche toutes les mines non-cliquees en fin de partie
var afficherToutesMines = function(tableau) {
  for (var j=0; j<tableau.length;j++){
    for (var i=0; i<tableau[j].length; i++){
      if (tableau[j][i] === true) {

        // Affiche l'image mine sur fond gris
        afficherImage(i,j,colormap,9);
      }
    }
  }
};


// Si tuile revelee, valeur tuile devient false
var tuileRevelee = function(tableau, x, y) {
  tableau[y][x] = false;
};


// Analyse le tableau et verifie si tuiles non-minees restantes
var tuilesRestantes = function (tableau) {
  for (var j=0; j<tableau.length; j++) {
    for (var i=0; i<tableau[j].length; i++) {
      if (typeof tableau[j][i] === 'number') {
        return true;
      }
    }
  }
};


// Cree une partie avec un nombre de mines et un tableau de taille predefinies
var demineur = function(largeur, hauteur, nbMines) {

  // Taille des images utilisees
  tailleImageY = 16;
  tailleImageX = 16;

  // Affiche la grille vierge
  creerGrille(largeur, hauteur);

  // Place les mines et les valeurs numeriques des autres tuiles apres le 
  // premier clic
  var clicIni = attendreClic();
  var tableauMines = placerMines(
    largeur, hauteur, nbMines, clicIni.x, clicIni.y
    );
  var tabMinesValeurs = placerValeurs(tableauMines);

  // Revele la premiere tuile et les tuiles adjacentes au besoin
  afficherImage(
    clicIni.x, clicIni.y, colormap, tabMinesValeurs[clicIni.y][clicIni.x]
    );
  tuilesAdjacentes(tabMinesValeurs, clicIni.x, clicIni.y);
  tuileRevelee(tabMinesValeurs, clicIni.x, clicIni.y);

  // Jeu continue jusqu'a defaite ou que tuiles non-minees toutes revelees
  while (tuilesRestantes(tabMinesValeurs)) {
    var nouvClic = attendreClic();

    // Tuile cliquee contient mine
    if (tabMinesValeurs[nouvClic.y][nouvClic.x] === true) {

      // Affiche image tuile sur fond rouge
      afficherImage(nouvClic.x, nouvClic.y, colormap, 10);
      tuileRevelee(tabMinesValeurs, nouvClic.x, nouvClic.y);

      // Affiche les mines non-cliquees et, apres un court delai, le message 
      // de fin de partie
      afficherToutesMines(tabMinesValeurs);
      pause(0.1);
      alert("Perdu!");

      // Fin de la partie
      return; 
    
    // Tuile cliquee ne contient pas de mine
    } else if (typeof tabMinesValeurs[nouvClic.y][nouvClic.x] === "number") {

      // Affiche la tuile et les tuiles adjacentes au besoin
      afficherImage(
        nouvClic.x,nouvClic.y, colormap, 
        tabMinesValeurs[nouvClic.y][nouvClic.x]
        );
      tuilesAdjacentes(tabMinesValeurs, nouvClic.x, nouvClic.y);
      tuileRevelee(tabMinesValeurs, nouvClic.x, nouvClic.y);
    }
  }

  // S'il ne reste que des tuiles avec des mines, affiche les mines 
  // non-cliquees et, apres un court delai, le message de fin de partie
  afficherToutesMines(tabMinesValeurs);
  pause(0.1);
  alert("Gagné!");

  // Fin de la partie
  return;
};


// Tests unitaires
var testDemineur = function(colormap) {

  // Tests pour grille de taille 1x1
  tailleImageY = 1;
  tailleImageX = 1;
  setScreenMode(tailleImageX,tailleImageY);

  // Aucune mine, une seule tuile
  assert(placerMines(tailleImageX,tailleImageY, 0, 0, 0) == "false");
  // Affichage d'un pixel
  assert(exportScreen(afficherImage(0,0,colormap,12)) == "#008000");

  // Tests pour grille de taille 1x2
  tailleImageY = 2;
  tailleImageX = 1;
  setScreenMode(tailleImageX,tailleImageY);

  // Aucune mine, deux tuiles
  assert(placerMines(tailleImageX,tailleImageY, 0, 0, 0) == "false,false");
  // Une mine, une tuile
  assert(placerMines(tailleImageX,tailleImageY, 1, 0, 0) == "false,true");
  // Affichage de deux pixels differents
  assert(exportScreen(afficherImage(0,0,colormap,19)) == "#0000ff\n#ff0000");
  
  // Tests pour grille de taille 2x2
  tailleImageY=2;
  tailleImageX=2;
  setScreenMode(tailleImageX,tailleImageY);

  // Une mine, quatre tuiles
  assert(placerMines(tailleImageX,tailleImageY, 1, 0, 0) == 
    "false,true,false,false"||"false,false,true,false"||
    "false,false,false,true"
  );
  // Une mine, quatre tuiles, clic initial different
  assert(placerMines(tailleImageX,tailleImageY, 1, 0, 1) == 
    "true,false,false,false"||"false,false,true,false"||
    "false,false,false,true"
  );
  // Nombre max de mines sur quatre tuiles
  assert(placerMines(tailleImageX,tailleImageY, 3, 0, 0) == 
    "false,true,true,true"
  );
  // Nombre max de mines sur quatre tuiles, clic initial different
  assert(placerMines(tailleImageX,tailleImageY, 3, 1, 1) == 
    "true,true,true,false"
  );
  // Affiche quatre pixels identiques
  assert(exportScreen(afficherImage(0,0,colormap,13)) ==
    "#0000ff#0000ff\n#0000ff#0000ff"
  );
  // Affiche quatre pixels differents
  assert(exportScreen(afficherImage(0,0,colormap,14)) ==
    "#800000#008080\n#000000#808080"
  );
  // Affiche deux pixels identiques et deux pixels diffents sur deux rangees
  assert(exportScreen(afficherImage(0,0,colormap,15)) ==
    "#ffffff#ffffff\n#008000#008000"
  );

  // Tests pour grille de taille 3x3
  tailleImageY=3;
  tailleImageX=3;
  setScreenMode(tailleImageX,tailleImageY);

  // Affiche neuf pixels identiques
  assert(exportScreen(afficherImage(0,0,colormap,16)) ==
    "#ffffff#ffffff#ffffff\n#ffffff#ffffff#ffffff\n#ffffff#ffffff#ffffff"
  );
  // Affiche neuf pixels differents
  assert(exportScreen(afficherImage(0,0,colormap,17)) ==
    "#ffffff#808080#000000\n#008080#800000#000080\n#ff0000#008000#0000ff"
  );
  // Affiche trois rangees differentes de pixels identiques
  assert(exportScreen(afficherImage(0,0,colormap,18)) ==
    "#c0c0c0#c0c0c0#c0c0c0\n#ff0000#ff0000#ff0000\n#008080#008080#008080"
  );
};


// Decommenter ci-dessous pour tester les fonctions et procedures exigees
//testDemineur(colormap);


// Decommenter ci-dessous pour jouer au jeu
demineur(10,10,10);
