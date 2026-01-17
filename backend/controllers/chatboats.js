// import Bot from "../models/boat.js";

// // Sample Food Items Database
// const foodItems = [
//     { name: "Grilled Chicken Salad", calories: 350, protein: 30, carbs: 10, fat: 15, dietaryTags: ["low-carb", "keto"], goal: ["weight-loss", "health"] },
//     { name: "Vegan Buddha Bowl", calories: 400, protein: 15, carbs: 50, fat: 12, dietaryTags: ["vegan"], goal: ["weight-loss", "health"] },
//     { name: "Paneer Butter Masala", calories: 450, protein: 20, carbs: 30, fat: 25, dietaryTags: ["vegetarian"], goal: ["weight-gain"] },
//     { name: "Protein Shake", calories: 250, protein: 25, carbs: 20, fat: 5, dietaryTags: ["keto"], goal: ["weight-gain", "health"] },
//     { name: "Oats with Milk & Fruits", calories: 300, protein: 10, carbs: 45, fat: 8, dietaryTags: ["vegetarian"], goal: ["weight-loss", "health"] },
// ];

// export const Message = async (req, res) => {
//     try {
//         const { text } = req.body;

//         if (!text?.trim()) {
//             return res.status(400).json({ error: "Text cannot be empty" });
//         }

//         const normalizedText = text.toLowerCase().trim();

//         // Food Assistance Bot Responses
//         const botResponses = {
//             "hello": "Hi! I’m your Food Assistant Bot. I can suggest meals for weight loss, weight gain, or healthy eating. I can also show nutrition info, diet-specific meals, or guide food donation.",
//             "weight loss": () => {
//                 const meals = foodItems.filter(item => item.goal.includes("weight-loss"));
//                 return meals.length
//                     ? "Here are some meals for weight loss:\n" + meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")
//                     : "Sorry, no meals availyable for weight loss right now.";
//             },
//             "weight gain": () => {
//                 const meals = foodItems.filter(item => item.goal.includes("weight-gain"));
//                 return meals.length
//                     ? "Here are some meals for weight gain:\n" + meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")
//                     : "Sorry, no meals available for weight gain right now.";
//             },
//             "healthy food": () => {
//                 const meals = foodItems.filter(item => item.goal.includes("health"));
//                 return meals.length
//                     ? "Here are some healthy meals:\n" + meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")
//                     : "Sorry, no healthy meals available right now.";
//             },
//             "vegan": () => {
//                 const meals = foodItems.filter(item => item.dietaryTags.includes("vegan"));
//                 return meals.length
//                     ? "Here are vegan meals:\n" + meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")
//                     : "Sorry, no vegan meals available right now.";
//             },
//             "keto": () => {
//                 const meals = foodItems.filter(item => item.dietaryTags.includes("keto"));
//                 return meals.length
//                     ? "Here are keto meals:\n" + meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")
//                     : "Sorry, no keto meals available right now.";
//             },
//             "donate food": "You can donate surplus food via our Food Donation System. Select your food item and the nearest NGO/shelter to contribute.",
//             "nearby home-cook meals": "Here are some home-cooked meals near you. Support local chefs while enjoying fresh meals!"
//         };

//         // Check if user typed a specific meal for nutrition info
//         const nutritionMatch = foodItems.find(item => normalizedText.includes(item.name.toLowerCase()));
//         let botText;
//         if (nutritionMatch) {
//             botText = `Nutrition Info for ${nutritionMatch.name}:\n• Calories: ${nutritionMatch.calories} kcal\n• Protein: ${nutritionMatch.protein} g\n• Carbs: ${nutritionMatch.carbs} g\n• Fat: ${nutritionMatch.fat} g`;
//         } else if (botResponses[normalizedText]) {
//             botText = typeof botResponses[normalizedText] === "function"
//                 ? botResponses[normalizedText]()
//                 : botResponses[normalizedText];
//         } else {
//             botText = "Sorry, I didn't understand that. You can ask me about weight loss foods, weight gain foods, healthy meals, nutrition info, vegan/keto meals, or food donation!";
//         }

//         // Save only bot response
//         const bot = await Bot.create({ text: botText });

//         return res.status(200).json({
//             userMessage: text,  // no User model, just echo input
//             botMessage: bot.text,
//         });

//     } catch (error) {
//         console.log("Error in Food Assistance Message Controller:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// };
// import Bot from "../models/boat.js";

// // Sample Food Items Database
// const foodItems = [
//     { name: "Grilled Chicken Salad", calories: 350, protein: 30, carbs: 10, fat: 15, dietaryTags: ["low-carb", "keto"], goal: ["weight-loss", "health"] },
//     { name: "Vegan Buddha Bowl", calories: 400, protein: 15, carbs: 50, fat: 12, dietaryTags: ["vegan"], goal: ["weight-loss", "health"] },
//     { name: "Paneer Butter Masala", calories: 450, protein: 20, carbs: 30, fat: 25, dietaryTags: ["vegetarian"], goal: ["weight-gain"] },
//     { name: "Protein Shake", calories: 250, protein: 25, carbs: 20, fat: 5, dietaryTags: ["keto"], goal: ["weight-gain", "health"] },
//     { name: "Oats with Milk & Fruits", calories: 300, protein: 10, carbs: 45, fat: 8, dietaryTags: ["vegetarian"], goal: ["weight-loss", "health"] },
// ];

// // Trendy / Chatty replies
// const defaultReplies = [
//     "Hmm 🤔, interesting! Could you tell me more?",
//     "Yum 😋! That sounds tasty. Are you looking for meal ideas?",
//     "I got you! Let me suggest something healthy 🥗",
//     "Cool! I can help with that. Here’s a thought:",
//     "Sure thing! Here's a tasty option you might like:"
// ];

// export const Message = async (req, res) => {
//     try {
//         const { text } = req.body;

//         if (!text?.trim()) {
//             return res.status(400).json({ error: "Text cannot be empty" });
//         }

//         const normalizedText = text.toLowerCase().trim();

//         // Check if user typed a specific meal for nutrition info
//         const nutritionMatch = foodItems.find(item => normalizedText.includes(item.name.toLowerCase()));

//         let botText = "";

//         if (nutritionMatch) {
//             // Detailed nutrition info
//             botText = `💡 Nutrition Info for ${nutritionMatch.name}:\n- Calories: ${nutritionMatch.calories} kcal\n- Protein: ${nutritionMatch.protein} g\n- Carbs: ${nutritionMatch.carbs} g\n- Fat: ${nutritionMatch.fat} g\nEnjoy your meal! 😋`;
//         } else {
//             // Keyword-based trendy suggestions
//             if (normalizedText.includes("weight loss")) {
//                 const meals = foodItems.filter(item => item.goal.includes("weight-loss"));
//                 botText = meals.length
//                     ? `🔥 Here are some tasty options for weight loss:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}`
//                     : "Sorry, I don't have weight-loss meals right now 😅";
//             } else if (normalizedText.includes("weight gain")) {
//                 const meals = foodItems.filter(item => item.goal.includes("weight-gain"));
//                 botText = meals.length
//                     ? `💪 Bulk up with these meals:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}`
//                     : "Hmm, no weight-gain meals available at the moment 😔";
//             } else if (normalizedText.includes("vegan")) {
//                 const meals = foodItems.filter(item => item.dietaryTags.includes("vegan"));
//                 botText = meals.length
//                     ? `🌱 Go green! Check these vegan options:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}`
//                     : "Oops, no vegan meals found 😢";
//             } else if (normalizedText.includes("keto")) {
//                 const meals = foodItems.filter(item => item.dietaryTags.includes("keto"));
//                 botText = meals.length
//                     ? `🥓 Keto lovers, try these:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}`
//                     : "No keto meals right now 😅";
//             } else if (normalizedText.includes("donate")) {
//                 botText = "🙏 You can donate your extra food to nearby NGOs or shelters. Every bit counts!";
//             } else {
//                 // If nothing matches, give a trendy random reply
//                 const randomReply = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
//                 botText = `${randomReply}\n💡 Tip: You can ask me about weight loss foods, weight gain foods, vegan/keto meals, or nutrition info!`;
//             }
//         }

//         // Save bot response
//         const bot = await Bot.create({ text: botText });

//         return res.status(200).json({
//             userMessage: text,
//             botMessage: bot.text
//         });

//     } catch (error) {
//         console.log("Error in Food Assistance Message Controller:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// };
import Bot from "../models/boat.js";

const foodItems = [
    { name: "Grilled Chicken Salad", calories: 350, protein: 30, carbs: 10, fat: 15, dietaryTags: ["low-carb", "keto"], goal: ["weight-loss", "health"] },
    { name: "Vegan Buddha Bowl", calories: 400, protein: 15, carbs: 50, fat: 12, dietaryTags: ["vegan"], goal: ["weight-loss", "health"] },
    { name: "Paneer Butter Masala", calories: 450, protein: 20, carbs: 30, fat: 25, dietaryTags: ["vegetarian"], goal: ["weight-gain"] },
    { name: "Protein Shake", calories: 250, protein: 25, carbs: 20, fat: 5, dietaryTags: ["keto"], goal: ["weight-gain", "health"] },
    { name: "Oats with Milk & Fruits", calories: 300, protein: 10, carbs: 45, fat: 8, dietaryTags: ["vegetarian"], goal: ["weight-loss", "health"] },
];

// Small talk / greetings
const smallTalk = {
    hi: ["Hello! 😄 How's your day going?", "Hey there! Ready to eat healthy today? 🥗", "Hi! What are you craving today? 🍽️"],
    hello: ["Hi! 👋 Looking for meal ideas or nutrition info?", "Hello! 😎 I can help with healthy meals or diet tips.", "Hey! Want some tasty suggestions?"],
    "how are you": ["I'm great! 😄 Hungry to help you pick a meal!", "Doing awesome! Ready to suggest some food? 🥑", "Feeling tasty today! 😋 How about you?"],
    "what's up": ["Just helping people eat healthy! 😎", "Cooking up some meal ideas for you! 🍳", "Here to give you the best food tips! 🥗"]
};

const defaultReplies = [
    "Hmm 🤔, interesting! Could you tell me more?",
    "Yum 😋! That sounds tasty. Are you looking for meal ideas?",
    "I got you! Let me suggest something healthy 🥗",
    "Cool! I can help with that. Here’s a thought:",
    "Sure thing! Here's a tasty option you might like:"
];

const extraReplies = [
    "💡 Fun fact: Eating healthy keeps your mind sharp!",
    "🥑 Did you know? Balanced meals = happy mood!",
    "🔥 Tip: Mix protein and veggies for energy boost!",
    "😎 Pro tip: Hydration is key along with meals!",
];

export const Message = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text?.trim()) return res.status(400).json({ error: "Text cannot be empty" });

        const normalizedText = text.toLowerCase().trim();

        // 1️⃣ Check if user typed a specific meal for nutrition info
        const nutritionMatch = foodItems.find(item => normalizedText.includes(item.name.toLowerCase()));

        let botText = "";

        if (nutritionMatch) {
            botText = `💡 Nutrition Info for ${nutritionMatch.name}:\n- Calories: ${nutritionMatch.calories} kcal\n- Protein: ${nutritionMatch.protein} g\n- Carbs: ${nutritionMatch.carbs} g\n- Fat: ${nutritionMatch.fat} g\nEnjoy your meal! 😋`;
        } 
        // 2️⃣ Check small talk
        else if (Object.keys(smallTalk).some(key => normalizedText.includes(key))) {
            const key = Object.keys(smallTalk).find(k => normalizedText.includes(k));
            const responses = smallTalk[key];
            botText = responses[Math.floor(Math.random() * responses.length)];
        } 
        // 3️⃣ Food keyword-based suggestions
        else if (normalizedText.includes("weight loss")) {
            const meals = foodItems.filter(item => item.goal.includes("weight-loss"));
            botText = meals.length
                ? `🔥 Here are some tasty options for weight loss:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}\n${extraReplies[Math.floor(Math.random() * extraReplies.length)]}`
                : "Sorry, I don't have weight-loss meals right now 😅";
        } else if (normalizedText.includes("weight gain")) {
            const meals = foodItems.filter(item => item.goal.includes("weight-gain"));
            botText = meals.length
                ? `💪 Bulk up with these meals:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}\n${extraReplies[Math.floor(Math.random() * extraReplies.length)]}`
                : "Hmm, no weight-gain meals available at the moment 😔";
        } else if (normalizedText.includes("vegan")) {
            const meals = foodItems.filter(item => item.dietaryTags.includes("vegan"));
            botText = meals.length
                ? `🌱 Go green! Check these vegan options:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}\n${extraReplies[Math.floor(Math.random() * extraReplies.length)]}`
                : "Oops, no vegan meals found 😢";
        } else if (normalizedText.includes("keto")) {
            const meals = foodItems.filter(item => item.dietaryTags.includes("keto"));
            botText = meals.length
                ? `🥓 Keto lovers, try these:\n${meals.map(f => `• ${f.name} (${f.calories} cal)`).join("\n")}\n${extraReplies[Math.floor(Math.random() * extraReplies.length)]}`
                : "No keto meals right now 😅";
        } else if (normalizedText.includes("donate")) {
            botText = "🙏 You can donate your extra food to nearby NGOs or shelters. Every bit counts!";
        } 
        // 4️⃣ Fallback trendy reply
        else {
            const randomReply = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
            const extra = extraReplies[Math.floor(Math.random() * extraReplies.length)];
            botText = `${randomReply} ${extra}\n💡 Tip: You can ask me about weight loss foods, weight gain foods, vegan/keto meals, or nutrition info!`;
        }

        const bot = await Bot.create({ text: botText });

        return res.status(200).json({
            userMessage: text,
            botMessage: bot.text
        });

    } catch (error) {
        console.log("Error in Food Assistance Message Controller:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
