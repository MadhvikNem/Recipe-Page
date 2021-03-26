
const recipe = 
{
    
    "type": "Recipe",
    "author": "Madhvik Nemani",
    "cookTime": "It takes around 30 minutes with 10 minutes of preparation!!",
    "datePublished": "2021-03-18",
    "description": "This is the simplest recipe for mashed potatoes I have learned ever.",
    "image": "mashedpotatoes.jpg",
    "recipeIngredient": 
    [
      "3-4 Boiled potatoes, Soy milk, Butter, Basil, Garlic, Salt & Pepper",
      
    ],

    "name": "TEN'S MASHED",
    "nutrition": "NutritionInformation",
    "calories": "240 calories",
    "fatContent": "9 grams fat",
    "prepTime": "PT15M",
    "recipeInstructions": "Boil the potatoes, start by putting butter in the pan on medium heat; slowly start mashing the potatoes on top of the hot butter, once you've mashed all your potatotes with the butter, use sow milk to make it the consistency you like; to finish it off you add salt and pepper for flavour and mix shredded basil. It's Ready to eat. Make sure to always use low heat ",
    "recipeYield": "You get 3 Servings"
    

  }

const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("description").innerText = recipe.description;

document.getElementById("author").innerText = recipe.author;

const instructionElement  = document.getElementById("instructions");

instructionElement.innerText = recipe.instructions;

const timeElement = document.getElementById("cookTime");
instructionElement.innerText = recipe.cookTime;




const ingredientElement = document.getElementById("ingredients");

ingredientElement.innerText = recipe.recipeIngredient;

const recipeinstructionsElement = document.getElementById("recipeInstructions");

recipeinstructionsElement.innerText = recipe.recipeInstructions;
  

const recipeyieldElement = document.getElementById("recipeYield");

recipeyieldElement.innerText = recipe.recipeYield;
  