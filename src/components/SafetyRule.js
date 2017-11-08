import './../grid.css';
import './../Nanum.css';
import './../evaluation.css';
import React, { Component } from 'react';

var laboratory_safety = [
    "1. Wear approved eye protection (including splash gurards) at all times while in the laboratory.",
    "2. Wear shoes at all times ( No one will be admitted without them.)",
    "3. Eating, drinking, and smoking are strictly prohibited in the laboratory at all times.",
    "4. Know where to find and how to use all safety and first-aid equipment.",
    "5. Consider all chemicals to be hazardous unless you are instructed otherwise. Dispose of chemicals as directed by your TA.",
    "6.If chemicals come into contact with your skin or eyes, wash immediately with copious amounts of water and then consult your laboratory instructor.",
    "7. Never taste anything. Never directly smell the source of any vapor or gas.",
    "8. Perform in the fume exhaust hood any reactions involving skin-irritating or dangerous chemicals, or unpleasant odors.",
    "9. Never point a test tube that you are heating at yourself or your neighbor-it may erupt like a geyser.",
    "10. Do not perform any unauthorized experiments.",
    "11. Clean up all broken glassware immediately.",
    "12. Always pour acids into water, not water into acid, because the heat of solution will cause the water to boil and the acid to spatter.",
    "13. Avoid rubbing your eyes unless you know that your hands are clean.",
    "14. When inserting glass tubing or thermometers into stoppers, lubricate the tubing and the hole in the stopper with glycerol or water.",
    "15. NOITFY THE INSTRUCTOR IMMEDIATELY IN CASE OF AN ACCIDENT.",
    "16. Many common reagents-for example, alcohols, acetone, and especially ether-are highly flammable. Do not use them anywhere near open flames.",
    "17. Observe all special precautions mentioned in experiments.",
    "18. Learn the location and operation of fire-protection devices.",
    "19. Whenever possible, use hot plates in place of Bunsen burners."
];

var basic_instructions = [
    "1. Read the assignment before coming to the laboratory.",
    "2. Work independently unless instructed to do otherwise.",
    "3. Record your results directly onto your report sheet or notebook. DO NOT RECOPY FROM ANOTHER PIECE OF PAPER.",
    "4. Work conscientiously to avoid accidents",
    "5. Dispose of excess reagents as instructed by your instructor. NEVER RETURN REAGENTS TO THE REAGENT BOTTLE.",
    "6. Do not place reagent-bottle stoppers on the desk; hold them in your hand. Your laboratory instructor will show you know to do this. Replace the stopper on the same bottle, never on a different one.",
    "7. Leave reagent bottles on the shelf where you found them.",
    "8. Use only the amount of reagent called for; avoid excesses.",
    "9. Whenever instructed to use water in these experiments, use ditilled water unless instructed to do otherwise.",
    "10. Keep your area clean.",
    "11. Do not borrow apparatus from other desks. If you need extra equipment, obtain it from the stockroom.",
    "12. When weighing, do not place chemicals directly on the balance.",
    "13. Do not weigh hot or warm obejects. Objects should be at room temperature.",
    "14. Do not put hot objects on the desktop. Place them on a wire gauze or heat-resistant pad."
];

class SafetyRule extends Component {
    render() {
        return (
            <div class="section">
                <div class="safety_row">
                    <div class="col span-3-of-3">
                        <h1 class="subjectstyle">Laboratory Safety</h1>
                        <p class="fontstyle">
                            {laboratory_safety.map((str) => {
                                return (
                                    <p class="entrystyle">{str}</p>
                                )
                            })}
                        </p>
                        <br />

                        <h1 class="subjectstyle">Basic Instructions</h1>
                        <p class="fontstyle">
                            {basic_instructions.map((str) => {
                                return (
                                    <p class="entrystyle">{str}</p>
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SafetyRule;